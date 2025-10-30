import '../styles/globals.css'
import TopBar from '../components/TopBar'
import Sidebar from '../components/Sidebar'

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
          <TopBar />
        </header>
        <div className="flex">
          <aside className="hidden md:block w-64 border-r bg-white">
            <Sidebar />
          </aside>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}
