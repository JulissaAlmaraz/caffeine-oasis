import React from "react";
import styles from "./About.module.css";
import Card from "react-bootstrap/Card";
import { CardBody } from "react-bootstrap";

const About = () => {
  return (
    <Card className={styles.body}>
      <CardBody>
        <h1 className={styles.aboutHeading}>About Us</h1>
        <h2 className={styles.aboutHeading}>Welcome to Caffeine Oasis</h2>
        <p className={styles.aboutPara}>
          At Caffeine Oasis, we believe that coffee is more than just a beverage
          – it’s an experience. Nestled in the heart of the community, our shop
          is a place where coffee lovers and friends come together to savor the
          perfect brew and enjoy a relaxing atmosphere.
        </p>

        <p className={styles.aboutPara}>
          Our baristas are passionate about crafting the perfect cup of coffee,
          from rich espresso shots to smooth, velvety lattes. We carefully
          source our beans from the finest farms around the world, ensuring that
          every sip you take is filled with flavor, warmth, and care.
        </p>

        <p className={styles.aboutPara}>
          But we don’t stop at coffee. Our menu includes a selection of teas,
          specialty drinks, and freshly baked pastries, all made with
          high-quality ingredients. Whether you’re looking for a quiet corner to
          work or a spot to meet with friends, we’ve created a space that feels
          like home.
        </p>
      </CardBody>
    </Card>
  );
};

export default About;
