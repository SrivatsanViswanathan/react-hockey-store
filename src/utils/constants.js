import React from "react";
import { GiHockey } from "react-icons/gi";
import { BsRocketTakeoff } from "react-icons/bs";
import { GoTelescopeFill } from "react-icons/go";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <BsRocketTakeoff></BsRocketTakeoff>,
    title: "mission",
    text: "Empowering aspiring athletes through innovative hockey solutions, fostering growth and excellence on and off the ice.",
  },
  {
    id: 2,
    icon: <GoTelescopeFill></GoTelescopeFill>,
    title: "vision",
    text: "To lead the hockey industry with pioneering advancements, shaping a future where every player thrives.",
  },
  {
    id: 3,
    icon: <GiHockey></GiHockey>,
    title: "history",
    text: "Fuelled by a deep love for hockey, our journey spans years of dedication, cultivating champions and unforgettable moments.",
  },
];

export const products_url = "/.netlify/functions/products";

export const single_product_url = `/.netlify/functions/products?id=`;
