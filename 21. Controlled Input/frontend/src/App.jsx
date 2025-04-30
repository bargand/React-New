import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:5000/api/items');
      setItems(response.data);
    } catch (err) {
      setError('Failed to fetch items');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newItem.name.trim()) {
      setError('Name is required');
      return;
    }
    
    setLoading(true);
    setError('');
    try {
      await axios.post('http://localhost:5000/api/items', newItem);
      setNewItem({ name: '', description: '' });
      fetchItems();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add item');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Item Manager</h1>
        <p>Organize your items with ease</p>
      </header>

      <main className="app-content">
        <form onSubmit={handleSubmit} className="item-form">
          <div className="form-group">
            <label htmlFor="name">Item Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newItem.name}
              onChange={handleInputChange}
              placeholder="Enter item name"
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={newItem.description}
              onChange={handleInputChange}
              placeholder="Enter description (optional)"
              rows="3"
              disabled={loading}
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? 'Adding...' : 'Add Item'}
          </button>
        </form>

        <section className="items-section">
          <h2>Your Items</h2>
          
          {loading && items.length === 0 ? (
            <div className="loading">Loading items...</div>
          ) : items.length === 0 ? (
            <div className="empty-state">
              <p>No items yet. Add your first item above!</p>
            </div>
          ) : (
            <div className="items-grid">
              {items.map(item => (
                <div key={item._id} className="item-card">
                  <h3>{item.name}</h3>
                  {item.description && <p>{item.description}</p>}
                  <div className="item-meta">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;