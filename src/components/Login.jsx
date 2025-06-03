import { useState } from 'react';
import { validTrackingNumbers } from '../data/trackingData';
import { Package, PlaneTakeoff } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Clean up tracking number by removing extra spaces and converting to uppercase
    const cleanTrackingNumber = trackingNumber.trim().toUpperCase();

    // Simulate API request
    setTimeout(() => {
      if (validTrackingNumbers.includes(cleanTrackingNumber)) {
        onLogin(cleanTrackingNumber);
      } else {
        setError('Tracking number not found. Please check and try again.');
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <div className="rounded-full bg-blue-600 p-3">
              <PlaneTakeoff className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold ml-3 text-gray-800">Global AirCargo</h1>
          </div>
          
          <h2 className="text-xl font-semibold text-center text-gray-700 mb-6">
            Track Your Package
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label 
                htmlFor="trackingNumber" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Tracking Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Package className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="trackingNumber"
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter your tracking number (e.g. AA/GOA1UO)"
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-3"
                  required
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
              <p className="mt-2 text-xs text-gray-500">
                Please enter your tracking number in the format AA/GOAXUO
              </p>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Checking...' : 'Track Package'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Need assistance? Contact our support at supportglobalair-cargo@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;