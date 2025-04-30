import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });

  // Fetch items on component mount
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get('http://localhost:5000/api/items');
    setItems(response.data);
  };

  const handleInputChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/items', newItem);
    setNewItem({ name: '', description: '' });
    fetchItems();
  };

  return (
    <div className="app">
      <h1>Simple Item Manager</h1>
      
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleInputChange}
          placeholder="Item name"
          required
        />
        <input
          type="text"
          name="description"
          value={newItem.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <button type="submit">Add Item</button>
      </form>

      <div className="items-list">
        {items.map(item => (
          <div key={item._id} className="item-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;