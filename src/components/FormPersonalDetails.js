import { Button, TextField } from '@mui/material'
import React, { Component } from 'react'

export default class FormPersonalDetails extends Component {

  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  prev = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {

    const {values, handleChange} = this.props

    return (
        <>
            Fill Personal Details<br /><br />
            <TextField onChange={handleChange('occupation')} defaultValue={values.occupation} label="occupation"/><br /><br />
            <TextField onChange={handleChange('city')} defaultValue={values.city} label='city'/><br /><br />
            <TextField onChange={handleChange('bio')} defaultValue={values.bio} label='bio'/><br /><br />

            <Button variant='contained' onClick={this.continue}>Confirm</Button><br /><br />
            <Button variant='contained' onClick={this.prev}>Go Back</Button>
        </>
    )
  }
}
