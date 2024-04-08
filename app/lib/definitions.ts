export type TodosTable = {
  id: string;
  user_id: string;
  title: string;
  description: string;
  status: "incomplete" | "complete";
  date: string;
};
