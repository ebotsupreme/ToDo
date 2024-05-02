export type TodosTable = {
  id: string;
  user_id: string;
  title: string;
  description: string;
  status: "incomplete" | "complete";
  date: string;
};

export type TodoForm = {
  id: string;
  user_id: string;
  title: string;
  description: string;
  status: "incomplete" | "complete";
};

export type TodoField = {
  title: string;
  description: string;
};
