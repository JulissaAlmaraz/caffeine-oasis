import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <Navbar className={styles.navbar}>
        <Container>
          <Navbar.Brand href="/">
            <Link to="/">
              <img alt="" src="/caffeine.png" width="50" />
            </Link>
            Caffeine Oasis
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
