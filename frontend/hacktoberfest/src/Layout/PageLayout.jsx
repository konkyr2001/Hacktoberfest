import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function PageLayout() {
  return (
    <div className="w-full min-h-screen bg-background-black font-spaceGrotesk font-light">
      <Header />
      <div className="mt-5 w-full text-light-text pb-10">
        <Outlet />
      </div>
    </div>
  );
}
