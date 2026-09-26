export default function CardComponent() {
  return (
    <div>
      <div className="w-75 rounded-[28px] border border-white/10 bg-[#23212c]/90 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.18)] card-bounce">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 overflow-hidden rounded-full border border-white/10 bg-white shrink-0">
              <img src="https://github.com/octocat.png" alt="The Octocat" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[18px] font-bold leading-tight tracking-wide text-white">The Octocat</h1>
              <div className="mt-1">
                <span className="rounded bg-[#2656d2] px-2 py-0.5 text-[12px] font-medium text-white">@octocat</span>
              </div>
            </div>
          </div>

          <span className="mt-1 rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-[#a3a3a8]">
            Example
          </span>
        </div>

        <div className="my-4 h-px w-full bg-white/10" />

        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col">
            <span className="text-[20px] font-bold tracking-wider text-white">142</span>
            <span className="mt-0.5 text-[12px] text-[#a3a3a8]">Repos</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] font-bold tracking-wider text-white">9,204</span>
            <span className="mt-0.5 text-[12px] text-[#a3a3a8]">Followers</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] font-bold tracking-wider text-white">3,381</span>
            <span className="mt-0.5 text-[12px] text-[#a3a3a8]">Stars</span>
          </div>
        </div>

        <div className="my-4 h-px w-full bg-white/10" />

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <span className="w-20 text-[13px] font-medium text-[#a3a3a8]">TypeScript</span>
            <div className="flex-1 overflow-hidden rounded-full bg-[#3b3a43]">
              <div className="h-2.5 w-[62%] rounded-full bg-[#827bdf]" />
            </div>
            <span className="w-8 text-right text-[13px] text-[#a3a3a8]">62%</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="w-20 text-[13px] font-medium text-[#a3a3a8]">Go</span>
            <div className="flex-1 overflow-hidden rounded-full bg-[#3b3a43]">
              <div className="h-2.5 w-[24%] rounded-full bg-[#827bdf]" />
            </div>
            <span className="w-8 text-right text-[13px] text-[#a3a3a8]">24%</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="w-20 text-[13px] font-medium text-[#a3a3a8]">Rust</span>
            <div className="flex-1 overflow-hidden rounded-full bg-[#3b3a43]">
              <div className="h-2.5 w-[14%] rounded-full bg-[#827bdf]" />
            </div>
            <span className="w-8 text-right text-[13px] text-[#a3a3a8]">14%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
