import React, { useState } from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography,} from "@mui/material";
import pizzaImage from '../images/pizza.jpg';
import burgerImage from '../images/burger.jpg';
import biryaniImage from '../images/biryani.jpg';
import sandwichImage from '../images/sandwich.jpg';
import cakeImage from '../images/cake.jpg';
import chickenImage from '../images/chicken.jpg';
import '../styles/Menu.css';

const inspirationItems = [
  { name: 'Pizza', image: pizzaImage },
  { name: 'Burger', image: burgerImage },
  { name: 'Biryani', image: biryaniImage },
  { name: 'Sandwich', image: sandwichImage },
  { name: 'Cake', image: cakeImage },
  { name: 'Chicken', image: chickenImage },
  { name: 'Pizza', image: pizzaImage },
  { name: 'Burger', image: burgerImage },
  { name: 'Biryani', image: biryaniImage },
];

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % inspirationItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? inspirationItems.length - 1 : prevIndex - 1
    );
  };

  const getDisplayItems = () => {
    const items = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % inspirationItems.length;
      items.push(inspirationItems[index]);
    }
    return items;
  };

  return (
    <Layout>
      <h1 className="Food-heading">Inspiration For Your First Order</h1>
      <div className="app">
        <div className="carousel-container">
          <button className="carousel-button carousel-button-left" onClick={handlePrev}>‹</button>
          <div className="carousel-content">
            {getDisplayItems().map((item, index) => (
              <div key={index} className="carousel-image-container">
                <img src={item.image} alt={item.name} className="carousel-image" />
                <p className="legend">{item.name}</p>
              </div>
            ))}
          </div>
          <button className="carousel-button carousel-button-right" onClick={handleNext}>›</button>
        </div>
        <h2 className="best-food-heading">Best Food in Restaurant</h2>
      </div>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }} key={menu.name}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
