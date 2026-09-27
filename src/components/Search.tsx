import { LuGithub } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Search() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-1 items-center gap-3 rounded-[22px] border border-white/15 bg-[#111827]/20 px-4 py-3 text-white/90 transition-all duration-300 focus-within:border-[#7c7af8] focus-within:shadow-[0_0_0_2px_rgba(124,122,248,0.3),0_0_18px_rgba(124,122,248,0.18)]">
        <LuGithub className="h-5 w-5 text-white/90" />
        <Input
          placeholder="Enter GitHub username"
          className="h-6 flex-1 border-0 bg-transparent px-0 text-lg text-white placeholder:text-white/50 focus-visible:ring-0 focus-visible:outline-none"
        />
      </div>

      <Button className="h-12 min-w-42.5 rounded-[22px] bg-[#6366F1] px-6 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(99,102,241,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5b5fe6] hover:shadow-[0_12px_28px_rgba(99,102,241,0.45)] active:translate-y-0">
        <IoMdSearch className="h-5 w-5" />
        Analyze
      </Button>
    </div>
  );
}
