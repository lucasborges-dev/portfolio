import React from 'react';
import Arrow from '../svg/Arrow';
import { Button, Link } from './style';

type BtnProps = {
  txt: string;
};

export default function BtnDefault({ txt }: BtnProps) {
  return (
    <Link to="/jobs">
      <Button>
        <span>{txt}</span> <Arrow />
      </Button>
    </Link>
  );
}
