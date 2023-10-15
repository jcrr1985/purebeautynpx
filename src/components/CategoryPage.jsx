import React from "react";
  import { useParams } from "react-router-dom";
  import Navbar from "./Navbar";
  import Item from "./Item";
  import itemsData from "./itemsData";

  const CategoryPage = ({addToCart}) => {
    const { category } = useParams();
    console.log('category', category)

    const filteredItems =
      category === "all-items"
        ? itemsData
        : itemsData.filter((obj) => obj.name.toLowerCase() === category);

    const mergedItemsArray = filteredItems.map((obj) => obj.items);



    return (
      <div className="category-page">
        <Navbar selectedCategoria={category}/>
        <div className="item-list">
          {mergedItemsArray.flat().map((item) => (
            <Item
              key={item.id}
              imageSrc={item.imageSrc}
              name={item.name}
              price={item.price}
              materials={item.materials}
              addToCart={addToCart}
              id={item.id}
            />
          ))}
        </div>
      </div>
    );
  };

  export default CategoryPage;