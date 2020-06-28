import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

import data from '../../lib/data.json';
import CharacterCard from '../CharacterCards/CharacterCard.js'

const Content = () => (
    <Container fluid>
        <Row>
            {data.results.map((character) => (
                <CharacterCard key={character.id} character={character}/>
            ))}
        </Row>
    </Container>
)

export default Content;