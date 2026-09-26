import { Button } from "./ui/button";
import { LuGithub } from "react-icons/lu";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-white/10 bg-[#0D0F16]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <div className="flex items-center">
          <div className="rounded-xl border border-gray-800 bg-gray-900/50">
            <img src="/src/assets/logo.png" alt="Logo" className="h-12 w-12" />
          </div>
          <h1 className="ml-3 text-[1.3rem] font-bold text-white">
            GitHub <span className="font-normal text-gray-400">Profile Analyzer</span>
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <Button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white rounded-lg flex items-center gap-2 px-6 py-5 font-medium text-[1rem]">
            <LuGithub/>
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </header>
  );
}