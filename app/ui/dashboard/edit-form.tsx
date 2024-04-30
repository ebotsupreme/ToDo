"use client";

import { updateTodo } from "@/app/lib/actions";
import { TodoForm } from "@/app/lib/definitions";

export default function EditTodoForm({
  todo,
  id,
}: {
  todo: TodoForm;
  id: string;
}) {
  const updateTodoWithId = updateTodo.bind(null, id);

  return (
    <form action={updateTodoWithId}>
      <div>
        <label>Title</label>
      </div>
      <div>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter Title"
          defaultValue={todo.title}
        />
      </div>
      <div>
        <label>Description</label>
      </div>
      <div>
        <input
          id="description"
          name="description"
          type="text"
          placeholder="Enter Description"
          defaultValue={todo.description}
        />
      </div>
      <button type="submit">Edit Todo</button>
    </form>
  );
}
