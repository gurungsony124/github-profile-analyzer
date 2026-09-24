import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="w-full h-20 bg-[#0D0F16] ">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center">
          <div className=" bg-gray-900/50 border border-gray-800 rounded-xl">
            <img src="/src/assets/logo.png" alt="Logo" className="w-12 h-12  " />
          </div>
          <h1 className="text-[1.3rem] font-bold text-white">
            GitHub <span className="font-normal text-gray-400">Profile Analyzer</span>
          </h1>
        </div>

        <div className="flex items-center gap-5">
          <Button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white rounded-lg flex items-center gap-2 px-8 py-5 font-medium text-[1rem]">
            Sign in with GitHub
          </Button>
        </div>
        
      </div>
    </header>
  );
}