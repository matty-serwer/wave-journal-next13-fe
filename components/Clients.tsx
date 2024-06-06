import React from 'react';
import styles from './Clients.module.css';

interface ClientsProps {
  clients: any[];
}

const Clients: React.FC<ClientsProps> = ({ clients }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.clients}>Clients</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id} className={styles.client}>
            <p>Name: {client.name}</p>
            <p>Artist Name: {client.artist_name}</p>
            <p>Email: {client.email}</p>
            <p>Website: {client.website}</p>
            <p>Phone: {client.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;