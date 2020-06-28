import React from 'react';
import Container from 'react-bootstrap/Container';

import Header from './components/Header/index.js';
import Filter from './components/Filter/Filter.js';
import Content from './components/Content/Content.js';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Container>
      <Header />
      <Filter />
      <Content />
    </Container>

  );
}

export default App;
