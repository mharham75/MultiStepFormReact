import { Button, List, ListItem } from '@mui/material'
import React, { Component } from 'react'

export default class Confirm extends Component {
  
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  prev = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
  
    const { values } = this.props

    return (
      <div>Confirmation


      <List>
        
         <ListItem>{values.firstName}</ListItem>
         <ListItem>{values.lastName}</ListItem>
         <ListItem>{values.email}</ListItem>
         <ListItem>{values.city}</ListItem>
         <ListItem>{values.occupation}</ListItem>
         <ListItem>{values.bio}</ListItem>
      </List>

       <Button onClick={this.continue}>Confirm</Button> 
       <Button onClick={this.prev}>Go Back</Button> 
      </div>
    )
  }
}
