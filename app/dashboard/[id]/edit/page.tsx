import { Metadata } from "next";
// import { updateTodo } from "@/app/lib/actions";
import EditTodoForm from "@/app/ui/dashboard/edit-form";
import { TodosTable } from "@/app/lib/definitions";
import { fetchTodoById } from "@/app/lib/datas";

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
    return <div>Todo not found.</div>;
  }

  return (
    <main>
      <EditTodoForm todo={todo} id={id} />
    </main>
  );
}
