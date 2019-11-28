import React, { useState, useEffect } from 'react';
import Card from './card'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import { saveCards, computeRandomCard } from './actions/card'
import { connect } from 'react-redux'
import Fab from '@material-ui/core/Fab'

function App (props) {
  const [fields, setFields] = useState({
    email: 'zahra',
    password: ''
  })

  // console.log('fff', fields)

  // const [errors, setErrors] = useState({
  //   email: '',
  //   password: ''
  // })
// 
  // const [click, setClick] = useState(false)

  useEffect(() => {
    document.title = `Hello ${fields.email}`
    axios.get('http://static.pushe.co/challenge/json')
      .then(function (response) {
        props.dispatch(saveCards(response.data.cards))
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (
    <Container maxWidth='lg'>
      <Grid
        xs={12}
        md={12}
        lg={6}
      >
        <Card />
        <input onChange={(e) => setFields({email: e.target.value})} />
      </Grid>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Fab
          color="secondary"
          onClick={() => props.dispatch(computeRandomCard())}
          aria-label="edit">
          TRY
        </Fab>
      </div>
      
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(App);
