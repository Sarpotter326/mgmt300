import Card from '../components/Card'

export default function Home(){
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-serif font-bold">MGMT 300 — Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <h3 className="font-semibold">This Week</h3>
          <p className="text-sm text-slate-600">Chapter 2: Decision-making · 2 tasks</p>
        </Card>
        <Card>
          <h3 className="font-semibold">Your Progress</h3>
          <p className="text-sm text-slate-600">42% complete</p>
        </Card>
        <Card>
          <h3 className="font-semibold">Quick Actions</h3>
          <div className="flex flex-col gap-2">
            <button className="rounded-xl bg-brand text-white px-4 py-2">Start flashcards</button>
            <button className="rounded-xl border border-slate-200 px-4 py-2">Take 5-Q quiz</button>
          </div>
        </Card>
      </div>
    </div>
  )
}
