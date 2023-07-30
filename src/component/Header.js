import React from 'react';
import { AppBar, Toolbar, Typography, IconButton , Box } from '@mui/material';

function Header() {

    return (
        <Box sx={{ flexGrow: 2 , marginBottom: 5 , textAlign: 'center'}}>
            <AppBar position="static"  sx={{ backgroundColor: 'black'}}>
                <Toolbar>

                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} >
                    Contact App 
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );

}

export default Header;