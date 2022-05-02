import React, { Component } from 'react'
import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material'

export default class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
 
    const { values, handleChange } = this.props

    return (
        <>
                <h2>User Details</h2>
               <TextField 
                    onChange={handleChange('firstName')} 
                    defaultValue={values.firstName}
                    id="filled-basic" 
                    label="first name" 
                    variant="filled" 
                />
                <br /><br />
                <TextField 
                    onChange={handleChange('lastName')} 
                    defaultValue={values.lastName}
                    id="filled-basic" 
                    label="first name" 
                    variant="filled" 
                />
                <br /><br />
                <TextField 
                    onChange={handleChange('email')} 
                    defaultValue={values.email}
                    id="filled-basic" 
                    label="first name" 
                    variant="filled" 
                />
                <br /><br />

               <Button variant="contained" onClick={this.continue}>Continue</Button><br /><br />
               <Button variant='outlined'>Go back</Button>
         
               </>
          
      
    )
  }
}
