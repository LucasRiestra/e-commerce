import React, { useEffect } from 'react';
import usersData from '../../assets/users.json';

const Users: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        localStorage.setItem('usersData', JSON.stringify(usersData));
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default Users;
