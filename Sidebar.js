export default function Sidebar(){
  return (
    <div className="p-4">
      <nav className="flex flex-col gap-3">
        <a className="py-2 px-3 rounded-xl hover:bg-slate-50" href="#">Home</a>
        <a className="py-2 px-3 rounded-xl hover:bg-slate-50" href="#">Chapters</a>
        <a className="py-2 px-3 rounded-xl hover:bg-slate-50" href="#">Game Zone</a>
        <a className="py-2 px-3 rounded-xl hover:bg-slate-50" href="#">Resources</a>
        <a className="py-2 px-3 rounded-xl hover:bg-slate-50" href="#">Q&A</a>
      </nav>
    </div>
  )
}
