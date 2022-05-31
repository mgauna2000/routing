import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import producto from "../../utils/producto";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(producto);
      }, 2000);
    });
  };

  useEffect(() => {
    getItem().then((res) => {
      console.log("Repuesta get item: ", res);
      setProduct(res);
    });
  }, []);

  return (
    <>
      <div className="container">
        <ItemDetail data={product} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
