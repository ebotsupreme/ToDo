import CreateTodoForm from "@/app/ui/dashboard/create-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Invoice",
};

export default async function Page() {
  return (
    <main>
      <CreateTodoForm />
    </main>
  );
}
