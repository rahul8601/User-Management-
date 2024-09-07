

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UserDetails = () => {
  const { id } = useParams();  // Get id from URL parameters
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data 
    const fetchUser = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [id]);

  // Display user data
  return (
    <div className="p-6 max-w-md mx-auto bg-gray-300 rounded-xl shadow-md space-y-4">
      <button
        onClick={() => navigate('/')}
        className="text-blue-500 hover:underline mb-4"
      >
        &larr; Back to Home
      </button>
      {user ? (
        <div className="space-y-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-700">Email: {user.email}</p>
            <p className="text-gray-700">Phone: {user.phone}</p>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-xl font-semibold text-gray-800">Address</h2>
            <p className="text-gray-700">
              {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </p>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-xl font-semibold text-gray-800">Company</h2>
            <p className="text-gray-700">
              {user.company.name}
            </p>
            <p className="text-gray-700">{user.company.catchPhrase}</p>
            <p className="text-gray-700">{user.company.bs}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-900">Loading...</p>
      )}
    </div>
  );
};

export default UserDetails;

