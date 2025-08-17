import React, { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from './Firebase';

function ContactMessage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messagesRef = collection(db, 'contactMessages'); // Collection name
        const q = query(messagesRef, orderBy('createdAt', 'desc')); // Sort by recent
        const snapshot = await getDocs(q);
        const messageList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMessages(messageList);
      } catch (error) {
        console.error('Error fetching contact messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Contact Messages</h2>
      {messages.length === 0 ? (
        <p>No messages received yet.</p>
      ) : (
        <ul>
          {messages.map(msg => (
            <li key={msg.id} style={{ marginBottom: '1.5rem' }}>
              <strong>Name:</strong> {msg.name} <br />
              <strong>Email:</strong> {msg.email} <br />
              <strong>Subject:</strong> {msg.subject} <br />
              <strong>Message:</strong> {msg.message} <br />
              <strong>Received At:</strong>{' '}
              {msg.createdAt?.toDate?.().toLocaleString() || 'N/A'}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactMessage;
