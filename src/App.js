import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [items, setItems] = useState([
    { itemName: 'item 1', quantiy: 1, isSelected: false },
    { itemName: 'item 2', quantiy: 1, isSelected: true },
    { itemName: 'item 3', quantiy: 1, isSelected: false },
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    const newItem = {
      itemName: inputValue,
      quantiy: 1,
      isSelected: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setInputValue('');
  };

  const handleIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantiy++;
    setItems(newItems);
  }

  const handleDecrease = (index) => {
    const newItems = [...items];

    newItems[index].quantiy--;
    setItems(newItems);
  }

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input 
            className="add-item-input"
            placeholder="Добавьте вещь..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
           />
           <FontAwesomeIcon 
            icon={faPlus}
            onClick={() => handleButtonClick()}
           />
        </div>
        <div className="item-list">
          {items.map((item, i) => (
                      <div className="item-container">
                      <div className="item-name">
                        { item.isSelected ? (
                          <>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <span>{item.itemName}</span>
                          </>
                        ) : (
                          <>
                            <FontAwesomeIcon icon={faCircle} />
                            <span>{item.itemName}</span>
                          </>
                        )}
                      </div>
                      <div className="quantity">
                        <button>
                          <FontAwesomeIcon
                            icon={faChevronLeft}
                            onClick={() => handleDecrease(i)}
                           />
                        </button>
                        <span>{item.quantiy}</span>
                        <button>
                          <FontAwesomeIcon 
                            icon={faChevronRight}
                            onClick={() => handleIncrease(i)}
                          />
                        </button>
                      </div>
                    </div>
          ))}

          <div className="total">Total: 6</div>
        </div>
      </div>
    </div>
  );
}

export default App;
