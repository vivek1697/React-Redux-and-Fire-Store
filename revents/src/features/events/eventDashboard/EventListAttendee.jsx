import React from 'react';
import { List, Image } from 'semantic-ui-react';

export default function EventListAttendee(){
    return(
        <List.Item>
            <Image size='mini' circular src='/public/assets/user.png'/>
        </List.Item>
    )
}