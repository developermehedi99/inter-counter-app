import { useState } from 'react';

function PriceDropdown() {
    // Initial items with name and price
    const [items, setItems] = useState([
      { name: 'Item 1', price: 30 },
      { name: 'Item 2', price: 10 },
      { name: 'Item 3', price: 20 },
      { name: 'Item 6', price: 15 },
      { name: 'Item 9', price: 110 },
      { name: 'Item 4', price: 50 },
    ]);
  
    // Function to sort items by price (low to high)
    const sortLowToHigh = () => {
      const sortedItems = [...items].sort((a, b) => a.price - b.price);
      setItems(sortedItems);
    };
  
    // Function to sort items by price (high to low)
    const sortHighToLow = () => {
      const sortedItems = [...items].sort((a, b) => b.price - a.price);
      setItems(sortedItems);
    };
  
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Left side: List of items */}
        <div style={{ flex: 1 }}>
          <h3>Items</h3>
          <ol>
            {items.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ol>
        </div>
  
        {/* Right side: Sort buttons */}
        <div style={{ marginLeft: '20px' }}>
          <h3>Sort by Price</h3>
          <button onClick={sortLowToHigh}>Low to High</button>
          <button onClick={sortHighToLow} style={{ marginLeft: '10px' }}>
            High to Low
          </button>
        </div>
      </div>
    );
  }

  

export default PriceDropdown;
