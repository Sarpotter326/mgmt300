export default function TopBar(){
  return (
    <div className="flex items-center gap-3 px-4 h-14">
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-xl bg-brand/10 grid place-items-center">🎓</div>
        <span className="font-semibold">MGMT 300</span>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <input
          placeholder="Search chapters, terms…"
          className="hidden md:block w-64 rounded-full border border-slate-200 px-3 py-2 text-sm focus:outline-2 outline-brand"
        />
        <button className="rounded-full border px-3 py-2 text-sm hover:shadow-sm">Help</button>
        <div className="size-8 rounded-full bg-slate-200" aria-label="Profile" />
      </div>
    </div>
  )
}
