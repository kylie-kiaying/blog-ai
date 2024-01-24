import Trending from "../components/Trending";
import Tech from "../components/Tech";
import Travel from "../components/Travel";
import Other from "../components/Other";
import Subscribe from "../components/Subscribe";
import Sidebar from "../components/Sidebar";

export default async function Home() {

  return (
    <main className="px-10 leading-7">
      <Trending />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech />
          <Travel />
          <Other />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}