"use client";

import { updateTodo } from "@/app/lib/actions";
import { TodoForm } from "@/app/lib/definitions";
import { error } from "console";
import { useFormState } from "react-dom";

export default function EditTodoForm({
  todo,
  id,
}: {
  todo: TodoForm;
  id: string;
}) {
  const initialState = { error: {}, message: null };
  const updateTodoWithId = updateTodo.bind(null, id);
  const [state, dispatch] = useFormState(updateTodoWithId, initialState);

  return (
    <form action={dispatch}>
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
          aria-describedby="title-error"
        />
      </div>
      <div id="title-error" aria-live="polite" aria-atomic="true">
        {state.errors?.title &&
          state.errors.title.map((error) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
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
          aria-describedby="description-error"
        />
      </div>
      <div id="description-error" aria-live="polite" aria-atomic="true">
        {state.errors?.description &&
          state.errors.description.map((error) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <button type="submit">Edit Todo</button>
    </form>
  );
}
