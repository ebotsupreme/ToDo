import { deleteTodo } from "@/app/lib/actions";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function UpdateTodo({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/${id}/edit`}>
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteTodo({ id }: { id: string }) {
  const deleteTodoWithId = deleteTodo.bind(null, id);
  return (
    <form action={deleteTodoWithId}>
      <button>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
