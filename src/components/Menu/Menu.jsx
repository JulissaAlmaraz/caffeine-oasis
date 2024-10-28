import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Latte",
      description: "Smooth milk with espresso",
      price: "3.50",
    },
    { id: 2, name: "Cappuccino", description: "Frothy milk", price: "3.50" },
    {
      id: 3,
      name: "Americano",
      description: "Espresso in water",
      price: "2.75",
    },
  ];

  return (
    <div className={styles.menuItems}>
      {menuItems.map((item) => (
        <div key={item.id} className={styles.menuItems}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
