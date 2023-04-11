import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/image')
      .then((response) => response.blob())
      .then((imageBlob) => {
        const imageUrl = URL.createObjectURL(imageBlob);
        console.log('Fetched image URL:', imageUrl); // Add this line to log the fetched image URL
        setImageData(imageUrl);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  return (
    <div className="App">
      {imageData ? (
        <img src={imageData} alt="Fetched Image" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}

export default App;
