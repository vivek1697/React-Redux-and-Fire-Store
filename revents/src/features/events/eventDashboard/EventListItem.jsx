import React from 'react';
import { Button, Icon, Item, ItemContent, List, Segment, Image } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem(){
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png'/>
                        <ItemContent>
                            <Item.Header content='Event Title'/>
                            <Item.Description>
                                Hosted By Bob
                            </Item.Description>
                        </ItemContent>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'/> Date
                    <Icon name='marker'/> Venue
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    <EventListAttendee/>
                    <EventListAttendee/>
                    <EventListAttendee/>
                </List>

            </Segment>
            <Segment clearing>
                <div>
                    Description of Event
                </div>
                <Button color='teal' floated='right' content='View'/>
            </Segment>

        </Segment.Group>
    )
}