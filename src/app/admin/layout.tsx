export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-100">
      <nav className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-neutral-900">Admin</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="/" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition">
                &larr; Back to Studio
              </a>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
}
