import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
    <NavBar/>
    <div className="flex flex-col items-center justify-center md:flex-row flex-wrap">
      <div className="bg-red-500 h-[160px] lg:h-80 lg:flex-1 md:w-full ">Contrary to popular belief</div>
      <div className="bg-blue-500 h-40 lg:h-80 lg:flex-1 md:w-1/2">Contrary to popular belief</div>
      <div className="bg-green-500 h-40 lg:h-80 lg:flex-1 md:w-1/2">Contrary to popular belief</div>
    </div>
    </>
  );
}