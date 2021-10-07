import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu, Image } from 'semantic-ui-react';


export default function NavBar({setFormOpen}){
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <p>Re-vents</p>
                    {/* <img src="/assets/logo.png" alt='logo' style={{marginRight: 15}}>
                        Re-vents
                    </img> */}
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='Events'/>
                <Menu.Item as={NavLink} to='/createEvent'>
                    <Button  positive inverted content='Create Event'></Button>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Login'></Button>
                    <Button basic inverted content='Register' style={{ marginLeft: '0.5em'}}></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}