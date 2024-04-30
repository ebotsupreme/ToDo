import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { TodoForm, TodosTable } from "./definitions";

export async function fetchTodos() {
  noStore();

  try {
    console.log("fetching todos...");
    // TODO: Placeholder lag 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data =
      await sql<TodosTable>`SELECT todos.id, todos.user_id, todos.title, todos.description, todos.status, todos.date
    FROM todos
    ORDER BY todos.date DESC
    `;

    console.log("Data fetch completed after 3 seconds.");

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch todos data.");
  }
}

export async function fetchTodoById(id: string) {
  noStore();

  try {
    console.log("fetching todo by id...");
    const data = await sql<TodoForm>`
            SELECT
                todos.id,
                todos.user_id,
                todos.title,
                todos.description,
                todos.status
            FROM todos
            WHERE todos.id = ${id}
        `;

    console.log("Data fetch by id completed.");

    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch todo by id.");
  }
}
