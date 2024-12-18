import { Layout } from "../components/layout/Layout.tsx";
import { Outlet } from "react-router-dom";

export function Home() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
