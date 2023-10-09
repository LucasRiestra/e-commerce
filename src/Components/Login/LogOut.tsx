import React from 'react';

interface LogOutProps {
  onLogout: () => void;
  loggedInUsername: string | null;
}

const LogOut: React.FC<LogOutProps> = ({ onLogout, loggedInUsername }) => {
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    onLogout();
    window.location.reload();
  };

  return (
    <div>
      <h2>You Are Logged In {loggedInUsername}</h2>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default LogOut;
