import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [items, setItems] = useState([

  ]);

  const [inputValue, setInputValue] = useState('');
  
  const [totalValue, setTotalValue] = useState(0);

  const handleButtonClick = () => {
    const newItem = {
      itemName: inputValue,
      quantiy: 1,
      isSelected: false,
    };

    if (newItem.itemName.length > 0) {
      const newItems = [...items, newItem];
      setItems(newItems);
      setInputValue('');
    } else alert('Нужно ввести хотя бы один символ :с')

   /* const newItems = [...items, newItem];
    setItems(newItems);
    setInputValue('');*/
  };

  const handleIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantiy++;
    setItems(newItems);
    calculateTotal();
  };

  const handleDecrease = (index) => {
    const newItems = [...items];

    newItems[index].quantiy--;
    setItems(newItems);
    calculateTotal();
  };

  const handleClickCompleted = (index) => {
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };

  const calculateTotal = () => {
    const totalCount = items.reduce((acc, el) => acc + el.quantiy, 0);
    setTotalValue(totalCount);
  };

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
                      <div key={i} className="item-container">
                      <div className="item-name" onClick={() => handleClickCompleted(i)}>
                        { item.isSelected ? (
                          <>
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              className="circle-icon" 
                            />
                            <span className="completed">{item.itemName}</span>
                          </>
                        ) : (
                          <>
                            <FontAwesomeIcon className="circle-icon"  icon={faCircle} />
                            <span>{item.itemName}</span>
                          </>
                        )}
                      </div>
                      <div className="quantity">
                        <button>
                          <FontAwesomeIcon
                            icon={faChevronLeft}
                            className="left-and-right"
                            onClick={() => handleDecrease(i)}
                           />
                        </button>
                        <span>{item.quantiy}</span>
                        <button>
                          <FontAwesomeIcon 
                            icon={faChevronRight}
                            className="left-and-right"
                            onClick={() => handleIncrease(i)}
                          />
                        </button>
                      </div>
                    </div>
          ))}

          <div className="total">Всего: {totalValue}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
