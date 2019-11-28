import React, { useState, useEffect } from 'react';
import Card from './card'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

function App() {
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
    axios.get('http://static.pushe.co/challenge/json')
      .then(function (response) {
        console.log('rrrr', response.data);
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
    </Container>
  );
}

export default App;
