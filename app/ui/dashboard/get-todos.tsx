import { fetchTodos } from "@/app/lib/datas";

export default async function GetTodos() {
  const getTodos = await fetchTodos();

  return (
    <div className="flex flex-col items-center w-full">
      <h2>Latest TODOs</h2>
      <div className="flex w-full">
        {getTodos.map((todo) => {
          return (
            <div key={todo.id} className="m-1 p-2 border-2 border-black">
              <p>{todo.title}</p>
              <p>{todo.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
