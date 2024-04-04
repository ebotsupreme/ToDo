import SideNav from "./ui/dashboard/sidenav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row ">
      <div className="h-screen flex text-xl">
        <SideNav />
      </div>
      <div className="h-screen flex items-center justify-center text-5xl w-full">
        {" "}
        Login
      </div>
    </main>
  );
}
