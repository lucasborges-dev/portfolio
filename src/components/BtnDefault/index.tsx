import React from 'react';
import { NavLink } from 'react-router-dom';
import Arrow from '../svg/Arrow';
import { Button } from './style';

type BtnProps = {
  txt: string;
};

export default function BtnDefault({ txt }: BtnProps) {
  return (
    <NavLink to="/jobs">
      <Button>
        <span>{txt}</span> <Arrow />
      </Button>
    </NavLink>
  );
}
