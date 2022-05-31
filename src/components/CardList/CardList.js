import React, { useState, useEffect }from "react";
import ItemList from "../ItemList/ItemList";
// import Item from "../Item/Item";
// import ItemListContainer from "../ItemListContainer/ItemListContainer";

export const CardList = () => {

  const [products, setProducts] = useState([]);

  const productsItems = [
    {
      title: "Manga Shingeki no Kiojin",
      image: "manga1.webp",
      price: 9360,
      stock: 3,
      id: 1
    },
    {
      title: "Manga Naruto Shipuden",
      image: "manga2.webp",
      price: 9360,
      stock: 5,
      id: 2
    },
    {
      title: "Manga Akame ga Kill",
      image: "manga3.webp",
      price: 6600,
      stock: 7,
      id: 3
    },
    {
      title: "Manga Evangelion",
      image: "manga4.webp",
      price: 6600,
      stock: 12,
      id: 4
    },
    {
      title: "Manga Naruto",
      image: "manga5.webp",
      price: 9360,
      stock: 20,
      id: 5
    },
    {
      title: "Manga Sailor Moon",
      image: "manga6.webp",
      price: 6600,
      stock: 8,
      id: 6
    },
  ];

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsItems);
      }, 2000);
    });
  };

  // getProducts(productsItems)
  //   .then((res) => {
  //     return console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  //   .finally(() => console.log("promesa finalizada"));

    useEffect( () => {
        getProducts()
        .then( (response) => {
            // console.log("Then : Respuesta Promesa: ", response)
            setProducts(response)
        })
        .catch( (err) => {
            console.log("Catch: Fallo la llamada.", err)
        })
        .finally( () => {
            console.log("Finally: termino la promesa")
        })
    }, [])

  return (
    <>
          <ItemList products={products}/>
    </>
  );
};
