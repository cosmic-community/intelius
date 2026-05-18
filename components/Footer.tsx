export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔍</span>
            <span className="text-xl font-bold text-white">Intelius</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Intelius. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}