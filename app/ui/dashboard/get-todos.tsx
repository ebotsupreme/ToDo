import { fetchTodos } from "@/app/lib/datas";
import { DeleteTodo, UpdateTodo } from "./buttons";

export default async function GetTodos() {
  const getTodos = await fetchTodos();

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-xl font-bold p-2">Latest TODOs</h2>
      <div className="flex w-full">
        {getTodos.map((todo) => {
          return (
            <div key={todo.id} className="flex-1 m-1 p-2 border-2 border-black">
              <div>
                <p className="flex justify-center text-lg font-medium">
                  {todo.title}
                </p>
                <UpdateTodo id={todo.id} />
                <DeleteTodo id={todo.id} />
              </div>
              <p>{todo.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
