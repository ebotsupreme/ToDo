import { Metadata } from "next";
import EditTodoForm from "@/app/ui/dashboard/edit-form";
import { fetchTodoById } from "@/app/lib/datas";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit todo",
};

export default async function Page({ params }: { params: { id: string } }) {
  console.log("params ", params);
  const id = params.id;
  const todo = await fetchTodoById(id);
  console.log("todo ", todo);
  //   const todo = await updateTodo(id);

  if (!todo) {
    // not found
    notFound();
  }

  return (
    <main>
      <EditTodoForm todo={todo} id={id} />
    </main>
  );
}
