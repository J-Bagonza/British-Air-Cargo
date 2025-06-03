const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">British Airways World cargo</h3>
              <p className="text-gray-300 text-sm">
                Trusted worldwide for secure, reliable air cargo shipping solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Links</h3>
              <ul className="text-gray-300 text-sm">
                <li className="mb-2">
                  <a href="#" className="hover:text-blue-300 transition-colors">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-blue-300 transition-colors">Services</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-blue-300 transition-colors">Track Package</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition-colors">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>&copy; {year} British Airways World cargo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;