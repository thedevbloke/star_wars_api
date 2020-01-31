import React from "react";
import { Image, Container } from 'semantic-ui-react';



const Home = () => (
  <Container text style={{ marginTop: '6em' }}>

      <Image src={require('./images/Star_Wars.jpg')} size='massive' floated='center'/>

  </Container>
)

export default Home;