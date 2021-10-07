import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu, Image } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';


export default function NavBar({setFormOpen}){

    const [authenticated, setAuthenticated ] = useState(false);
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <p>Re-vents</p>
            {/* <img src="/assets/logo.png" alt='logo' style={{marginRight: 15}}>
                        Re-vents
                    </img> */}
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          {authenticated && (
            <Menu.Item as={NavLink} to="/createEvent">
              <Button positive inverted content="Create Event"></Button>
            </Menu.Item>
          )}
          {authenticated ? (
            <SignedInMenu setAuthenticated={setAuthenticated} />
          ) : (
            <SignedOutMenu setAuthenticated={setAuthenticated} />
          )}
        </Container>
      </Menu>
    );
}