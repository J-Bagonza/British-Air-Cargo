import { PlaneTakeoff, LogOut } from 'lucide-react';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <PlaneTakeoff className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Global AirCargo</span>
          </div>
          {onLogout && (
            <button
              onClick={onLogout}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <LogOut className="h-5 w-5 mr-2" />
              <span>Logout</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;