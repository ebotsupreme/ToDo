import { createTodo } from "@/app/lib/actions";

export default function CreateTodoForm() {
  return (
    <form action={createTodo}>
      <div>
        <label>Title</label>
      </div>
      <div>
        <input id="title" name="title" type="text" placeholder="Enter Title" />
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
        />
      </div>
      <button type="submit">Create Todo</button>
    </form>
  );
}
