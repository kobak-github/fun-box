import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './scss/app.scss';

function App() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios.get('https://63ca85274f53a0042024e104.mockapi.io/product').then((res) => {
      setItem(res.data);
    });
  }, []);
  return (
    <div className="product">
      <div className="container">
        <div className="product__inner">
          <h2 className="product__title">Ты сегодня покормил кота?</h2>
          <div className="product__cards">
            {item.map((obj) => (
              <Card key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
