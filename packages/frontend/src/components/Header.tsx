import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-start px-4">
        <h1 className="text-xl font-bold mr-6">My Website</h1>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;