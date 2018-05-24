import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom';
import { Container, Menu, Button } from "semantic-ui-react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header as={Link} to="/">
            <img src="assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} name="Events" to="/events" />
          <Menu.Item as={NavLink} name="People" to="/people" />
          <Menu.Item>
            <Button floated="right" positive inverted content="Create Event" as={Link} to="/createEvent" />
          </Menu.Item>
          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button
              basic
              inverted
              content="Sign Out"
              style={{ marginLeft: "0.5em" }}
            />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
