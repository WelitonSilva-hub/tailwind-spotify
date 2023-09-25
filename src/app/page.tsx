import { SideBar } from "../components/pageComponents/Sidebar";
import { Footer } from "../components/pageComponents/Footer";
import { Main } from "@/components/pageComponents/Main";

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
