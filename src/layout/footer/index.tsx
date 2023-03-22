import React from 'react';
import MediasComp from '../../components/Medias';
import { Container, Line } from './style';

export default function Footer() {
  return (
    <Container>
      <Line />
      <MediasComp direction="row" />
    </Container>
  );
}
