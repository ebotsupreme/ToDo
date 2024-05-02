"use client";

import { useFormState } from "react-dom";
import { createTodo } from "@/app/lib/actions";

export default function CreateTodoForm() {
  const initialState = { errors: {}, message: null };
  const [state, dispatch] = useFormState(createTodo, initialState);

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
          aria-describedby="title-error"
        />
      </div>
      <div id="title-error" aria-live="polite" aria-atomic="true">
        {state.errors?.title &&
          state.errors.title.map((error: string) => (
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
          aria-describedby="description-error"
        />
      </div>
      <div id="description-error" aria-live="polite" aria-atomic="true">
        {state.errors?.description &&
          state.errors.description.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <button type="submit">Create Todo</button>
    </form>
  );
}
