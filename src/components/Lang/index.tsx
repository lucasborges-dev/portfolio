import React from 'react';
import { useLang } from '../../context/lang';
import { Button, Container, Item } from './style';

export default function LangComp() {
  const { switchLang, lang } = useLang();

  return (
    <Container>
      <Item>
        <Button
          onClick={() => switchLang('pt-br')}
          className={lang === 'pt-br' ? 'active' : ''}
        >
          PT
        </Button>
      </Item>
      <Item>
        <Button
          onClick={() => switchLang('en')}
          className={lang === 'en' ? 'active' : ''}
        >
          EN
        </Button>
      </Item>
    </Container>
  );
}
