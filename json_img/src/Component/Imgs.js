import React, { useState, useEffect } from 'react';
import "./imgStyle.css";

function Images() {
  const [img, setImg] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setImg(data));
  }, []);

  return (
    <div className="container">
      {img.map((item) => (
        <div className="card" key={item.id}>
          <div className="img-section">
            <img src={item.url} alt={item.title} calssName="img-card" />
          </div>
          <div className="detail-section">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Images;
