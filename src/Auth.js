import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './Firebase';

function Auth() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersRef = collection(db, 'users');
        const snapshot = await getDocs(usersRef);
        const userList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(userList);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>User Authentication Info</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name}<br />
              <strong>Email:</strong> {user.email}<br />
              <strong>UID:</strong> {user.uid}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Auth;
