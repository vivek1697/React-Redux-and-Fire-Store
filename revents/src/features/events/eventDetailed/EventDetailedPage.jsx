import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';

export default function EventDetailPage(){
    return(
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader/>
                <EventDetailedChat/>
                <EventDetailedInfo/>
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar/>
            </Grid.Column>
        </Grid>
    )
}