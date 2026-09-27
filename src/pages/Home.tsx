import CardComponent from "@/components/CardComponent";
import Navbar from "@/components/Navbar";
import Username from "./Username/Username";
import Search from "@/components/usernameSearch";

export default function Home() {
  
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0D0F16] text-white">
      <Navbar />

      <main className="relative z-10 w-full pt-28">
        <div className="mx-auto flex max-w-6xl justify-between py-12 sm:py-20">
          <div className="flex flex-col gap-6">
            <div>
                 <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Your GitHub profile, <br />
                decoded.</h1>
                <p className="mt-5 max-w-lg text-sm text-muted-foreground sm:text-lg">
                Real commit history, language breakdowns, and side-by-side comparisons — turned into insights you can act on.</p>
            </div>
            <div>
               <Search/>
            </div>
           </div>
        <div>
           <CardComponent />
        </div>
          
        </div>
            <Username username=""/>
      </main>
    </div>
  );
}