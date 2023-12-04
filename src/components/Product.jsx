import React from 'react';
//import { useParams } from 'react-router-dom';

const Product = ({ value }) => {
  //const params = useParams(); // This line is commented out and not being used in the current code
  return (
    <div>
      <h1>{value}</h1> {/* Rendering the value received as a prop */}
    </div>
  );
};

export default Product;
