import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto my-8 px-6">
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
