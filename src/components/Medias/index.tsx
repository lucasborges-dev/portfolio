import React from 'react';
import { Medias } from './style';
import Github from '../../components/svg/Github';
import Instagram from '../../components/svg/Instagram';
import Linkedin from '../../components/svg/Linkedin';

type MediasProp = {
  direction: 'row' | 'column';
};

export default function MediasComp({ direction }: MediasProp) {
  return (
    <Medias className={direction}>
      <li>
        <a
          href="https://www.linkedin.com/in/lucasborgesdev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/lucasborges-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/lucashbgd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
      </li>
    </Medias>
  );
}
