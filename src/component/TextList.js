import React from 'react';
import { List , ListItem , ListItemText , ListItemIcon, Paper, Box, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import TextListItem from './TextListItem';

function TextList( props ) {

    let   con =  props.content.map( ( item, index ) => (

        <TextListItem items = { item } onDeleteItem = { props.onDelete } />

    ));

    if( props.content.length === 0 )
    {
        con = <h3 style= {{ color: 'red'}} > No Content is  available to show here. </h3>
    }

    return ( 

        <Box mt={4} mb={4}>

            <Paper elevation={4} sx = {{ padding: 3 }}>

                <h2> Contact - List </h2>

                <List>

                    {/* Dynamically taking list and print it's call content  */}

                    { con }

                </List>

            </Paper>

        </Box>
    )

}

export default TextList;
