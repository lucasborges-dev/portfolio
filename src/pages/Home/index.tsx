import React from 'react';
import BtnDefault from '../../components/BtnDefault';
import Book from '../../components/svg/Book';
import Controller from '../../components/svg/Controller';
import Explore from '../../components/svg/Explore';
import Headphone from '../../components/svg/Headphone';
import Hiking from '../../components/svg/Hiking';
import Laptop from '../../components/svg/Laptop';
import { useLang } from '../../context/lang';
import {
  Call,
  Container,
  Content,
  IconItem,
  Icons,
  ImageBlock,
  Subtitle,
} from './style';
import Photo from '../../assets/img/MeHome.png';
import Dots from '../../components/svg/Dots';
import Footer from '../../layout/footer';

export default function HomePage() {
  const { dataContent } = useLang();

  return (
    <>
      <Container>
        <Content>
          <Call>
            {dataContent?.home.title} <span>Lucas Borges...</span>
          </Call>
          <Subtitle>{dataContent?.home.desc}</Subtitle>
          <BtnDefault txt={dataContent?.home.btn || ''} />
        </Content>
        <ImageBlock>
          <Icons>
            <IconItem className="book">
              <Book />
            </IconItem>
            <IconItem className="controller">
              <Controller />
            </IconItem>
            <IconItem className="explore">
              <Explore />
            </IconItem>
            <IconItem className="headphone">
              <Headphone />
            </IconItem>
            <IconItem className="hiking">
              <Hiking />
            </IconItem>
            <IconItem className="laptop">
              <Laptop />
            </IconItem>
            <IconItem className="dots">
              <Dots />
            </IconItem>
          </Icons>
          <img src={Photo} />
        </ImageBlock>
      </Container>
      <Footer />
    </>
  );
}
