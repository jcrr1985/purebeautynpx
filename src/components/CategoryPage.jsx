import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import ItemElement from "./ItemElement";
import itemsData from "./itemsData";
import { Grid, Paper } from "@mui/material";

const CategoryPage = ({ addToCart }) => {
  const { category } = useParams();

  const filteredEntities =
    category === "all-items"
      ? itemsData
      : itemsData.filter((item) => item.name.toLowerCase() === category);

  const entityItems = filteredEntities.map((entity) => entity.items);

  return (
    <Grid container spacing={3}>
      {entityItems.flat().map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <ItemElement
            key={item.id}
            imageSrc={item.imageSrc}
            name={item.name}
            price={item.price}
            materials={item.materials}
            addToCart={() => addToCart(item, "add")}
            id={item.id}
            item={item}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryPage;
