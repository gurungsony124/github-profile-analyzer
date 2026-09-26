export default function CardComponent() {
  return (
    <div>
     <div className="bg-[#23212c] border border-white/10 rounded-2xl p-5 w-full max-w-90 shadow-2xl card-bounce">
        <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white overflow-hidden border border-white/10 shrink-0">
                  <img src="https://github.com/octocat.png" alt="The Octocat" className="w-full h-full object-cover"/>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-white text-[22px] font-bold leading-tight tracking-wide">The Octocat</h1>
                    <div className="mt-1">
                        <span className="bg-[#2656d2] text-white text-sm px-1.5 py-0.5 rounded font-medium">@octocat</span>
                    </div>
                </div>
            </div>
            <span className="bg-white/5 border border-white/5 text-[#a3a3a8] text-xs font-medium px-3 py-1.5 rounded-full mt-1">
                Example
            </span>
        </div>

        <div className="h-px bg-white/10 w-full my-6"></div>

        <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col">
                <span className="text-white text-3xl font-bold tracking-wider">142</span>
                <span className="text-[#a3a3a8] text-base mt-0.5">Repos</span>
            </div>
            <div className="flex flex-col">
                <span className="text-white text-3xl font-bold tracking-wider">9,204</span>
                <span className="text-[#a3a3a8] text-base mt-0.5">Followers</span>
            </div>
            <div className="flex flex-col">
                <span className="text-white text-3xl font-bold tracking-wider">3,381</span>
                <span className="text-[#a3a3a8] text-base mt-0.5">Stars</span>
            </div>
        </div>

        <div className="h-px bg-white/10 w-full my-6"></div>

        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <span className="text-[#a3a3a8] text-[15px] font-medium w-24">TypeScript</span>
                <div className="flex-1 h-2 bg-[#3b3a43] rounded-full mx-4 overflow-hidden flex">
                    <div className="h-full bg-[#827bdf] rounded-full w-[62%]"></div>
                </div>
                <span className="text-[#a3a3a8] text-[15px] w-10 text-right">62%</span>
            </div>

            <div className="flex items-center justify-between">
                <span className="text-[#a3a3a8] text-[15px] font-medium w-24">Go</span>
                <div className="flex-1 h-2 bg-[#3b3a43] rounded-full mx-4 overflow-hidden flex">
                    <div className="h-full bg-[#827bdf] rounded-full w-[24%]"></div>
                </div>
                <span className="text-[#a3a3a8] text-[15px] w-10 text-right">24%</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-[#a3a3a8] text-[15px] font-medium w-24">Rust</span>
                <div className="flex-1 h-2 bg-[#3b3a43] rounded-full mx-4 overflow-hidden flex">
                    <div className="h-full bg-[#827bdf] rounded-full w-[14%]"></div>
                </div>
                <span className="text-[#a3a3a8] text-[15px] w-10 text-right">14%</span>
            </div>

        </div>

    </div>

    </div>
  )
}
