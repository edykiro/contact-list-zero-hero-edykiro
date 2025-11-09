import React from "react";
import { Link, useParams } from "react-router-dom";

export const Product = () => {
  let { id } = useParams();
  return (
    <>
      <div>
        <h1>Product {id}</h1>
        <Link to="/home">Back to home</Link>
      </div>
    </>
  );
};
