import { SideBar } from "../components/page/Sidebar";
import { Footer } from "../components/page/Footer";
import { Main } from "@/components/page/Main";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
