import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const ItemsInCheckout = ({ cart }) => {
  return (
    <div className="items-in-checkout">
      {cart.map((item, index) => (
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            minWidth: 500,
            margin: "1rem auto",
          }}
          key={index}
          style={{ marginBottom: "1rem" }}
        >
          <img
            src={item.imageSrc}
            alt={item.name}
            style={{ maxWidth: "100px", marginRight: "1rem" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <Typography variant="body2">Name: {item.name}</Typography>
              <Typography variant="body2">Qty: {item.quantity}</Typography>
              <Typography variant="body2">Size: {item.size}</Typography>
              <Typography variant="body2">Price: {item.price}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Remove</Button>
            </CardActions>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ItemsInCheckout;
