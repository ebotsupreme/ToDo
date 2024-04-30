import { fetchTodos } from "@/app/lib/datas";
import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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
                <Link href={`/dashboard/${todo.id}/edit`}>
                  <PencilIcon className="w-5" />
                </Link>
              </div>
              <p>{todo.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
