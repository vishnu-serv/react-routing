import React, { useEffect, useState } from "react";
import { getStorageItem } from "../utils/localStorageHelper";

const Home = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userData = getStorageItem({ key: "loggedUser" });
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <div>
      <h2>Home</h2>
      {user ? (
        <div>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default Home;
