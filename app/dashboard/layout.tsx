import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex h-full">
      <div className="flex-col w-2/12">
        <SideNav />
      </div>
      <div className="w-10/12">{children}</div>
    </section>
  );
}
