export default function Header() {

  const currentYear = new Date();
  return (
    <nav className="flex items-center bg-white shadow-md px-1">
      <a href="/">
        <img src="/srm-ist-trc-logo.png" alt="SRM LOGO" className="h-16 md:h-20" />
      </a>
      <div className="font-medium text-center w-max mx-auto">
        <h1 className="hidden md:inline-block text-xl">SRM Institute of Science & Technology, Tiruchirappalli</h1>
        <h2 className="md:text-lg md:mt-2">Application Form for Student Data ({currentYear.getFullYear()} - {currentYear.getFullYear() + 1})</h2>
      </div>
    </nav>
  )
}
