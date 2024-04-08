import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { TodosTable } from "./definitions";

export async function fetchTodos() {
  noStore();

  try {
    console.log("fetching todos...");
    // TODO: Placeholder lag 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data =
      await sql<TodosTable>`SELECT todos.id, todos.user_id, todos.title, todos.description, todos.status, todos.date
    From todos
    ORDER BY todos.date DESC
    `;

    console.log("Data fetch completed after 3 seconds.");

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch todos data.");
  }
}
