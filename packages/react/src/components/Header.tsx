
function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <a href="/">Home</a>
      <a href="/rest" className="ml-4">Rest APIs</a>
      <a href="/socket" className="ml-4">Websockets</a>
    </header>
  )
}

export default Header