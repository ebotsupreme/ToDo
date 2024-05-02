"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string().trim().min(1, { message: "Please enter a title." }),
  description: z
    .string()
    .trim()
    .min(1, { message: "Please enter a description." })
    .min(3, { message: "Description is too short." }),
  status: z.string(),
  date: z.string(),
});

const CreateTodo = FormSchema.omit({
  id: true,
  date: true,
  status: true,
  userId: true,
});

export async function createTodo(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = CreateTodo.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  // If form validation fails, return the errors early, otherwise continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Todo.",
    };
  }

  // Prepare data for insertion into database
  const { title, description } = validatedFields.data;
  const date = new Date().toISOString().slice(0, 19).replace("T", " ");

  // TODO: Update userId once auth is complete
  const userId = "test123";
  const status = "incomplete";
  console.log("sending... ", title);

  // Insert data into the database
  try {
    await sql`
    INSERT INTO todos (user_id, title, description, status, date)
    VALUES (${userId}, ${title}, ${description}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error
    return {
      message: "Database Error: Failed to Create Todo.",
    };
  }

  // Revalidate the cache for the dashboard page and redirect the user
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

const UpdateTodo = FormSchema.omit({
  id: true,
  date: true,
  status: true,
  userId: true,
});

export async function updateTodo(
  id: string,
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = UpdateTodo.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Todo.",
    };
  }

  const { title, description } = validatedFields.data;

  const date = new Date().toISOString().slice(0, 19).replace("T", " ");
  // TODO: Update userId once auth is complete
  const userId = "test123";
  const status = "incomplete";
  try {
    await sql`
    UPDATE todos
    SET user_id = ${userId}, title = ${title}, description = ${description}, status = ${status}, date = ${date}
    WHERE id = ${id}
    `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Update Todo.",
    };
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function deleteTodo(id: string) {
  //   throw new Error("Failed to Delete Todo");
  try {
    await sql`DELETE FROM todos WHERE id=${id}`;
    revalidatePath("/dashboard");
  } catch (error) {
    return { message: "Database Error: Failed to Delete Todo." };
  }
}
