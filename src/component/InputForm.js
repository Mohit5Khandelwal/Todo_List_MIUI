import React , { useState } from 'react';
import { TextField, Button , Paper, Box } from '@mui/material';

function InputForm(props) {

    const [ enterName , setName ] = useState( '' );
    const[ enterNumber, setNumber ] = useState( '' );

    const nameInputHandler = (event) => {

        setName( event.target.value );

    }

    const numberInputHandler = (event) => {

        const numericValue = event.target.value.replace(/[^0-9]/g, '');

        setNumber( numericValue );
    }

    const submitHandler = (event) => {

        event.preventDefault();

        const temp = {
            key: Math.random().toString(),
            id: Math.random().toString(),
            name: enterName,
            phone: enterNumber
        }

        props.onSaveData( temp );

        setName( '' );
        setNumber( '' );
    }

    return (

        <Box mt={4} mb={3} >

            <Paper elevation={ 4} sx = {{ padding: 3 }}>  

            <h2> Input Form </h2>

                    <form onSubmit={ submitHandler } >

                        <TextField fullWidth  id="outlined-basic" label="Name" variant="outlined" margin='normal' onChange={ nameInputHandler} required  value={ enterName } />
                        <TextField fullWidth label="Phone Number (Numeric Only)" margin="normal" variant="outlined" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}}  onChange = { numberInputHandler } required  value = { enterNumber } />
                        <Button type = "submit" variant="contained" size = "large" margin="normal" > Submit </Button>

                    </form>


            </Paper>
        
        </Box>
    )

}

export default InputForm;