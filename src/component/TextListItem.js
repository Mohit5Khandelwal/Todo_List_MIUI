import React from 'react'; 
import { List , ListItem , ListItemText , ListItemIcon, Paper, Box, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';

function TextListItem(props) {

    const deleteClickHandler = () => {

        props.onDeleteItem(  props.items.id );
    }

    return ( 

        
        <ListItem key={ props.items.id }>

            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>

            <ListItemText primary={ props.items.name } secondary={ `Phone No: ${ props.items.phone }`}>

            </ListItemText>

            <IconButton edge="end" aria-label="delete" onClick = { deleteClickHandler }>
                < DeleteIcon />
            </IconButton>

        </ListItem>

    )

}

export default TextListItem;