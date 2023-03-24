import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1255px;
  width: 100%;
  display: flex;
  flex: 1;
  margin: 0 auto;
  align-items: center;
  overflow: hidden;
  padding-left: 30px;

  @media (max-width: 1700px) {
    max-width: 1050px;
  }
`;

export const Content = styled.div`
  width: 545px;

  @media (max-width: 1700px) {
    width: 460px;
  }
`;

export const Call = styled.h3`
  font-size: 102px;
  line-height: 90px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.third};

  span {
    font-weight: bold;
  }

  @media (max-width: 1700px) {
    font-size: 87px;
    line-height: 76px;
  }
`;

export const Subtitle = styled.h5`
  font-weight: bold;
  font-style: italic;
  margin-top: 30px;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.third};

  @media (max-width: 1700px) {
    font-size: 27px;
  }
`;

export const ImageBlock = styled.div`
  padding-right: 120px;
  position: relative;
  z-index: 1;
  margin-left: auto;

  &:before {
    content: '';
    border: 5px solid ${({ theme }) => theme.colors.accent};
    width: 407px;
    height: 556px;
    position: absolute;
    bottom: -5px;
    left: -5px;
    z-index: -1;
  }

  @media (max-width: 1700px) {
    padding-right: 102px;

    &:before {
      width: 346px;
      height: 473px;
    }
  }
`;

export const PhotoBlock = styled.div`
  @media (max-width: 1700px) {
    img {
      max-width: 305px;
    }
  }
`;

export const Icons = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const IconItem = styled.div`
  position: absolute;

  @keyframes inOut {
    0% {
      opacity: 1;
    }

    25% {
      opacity: 0.75;
    }

    50% {
      opacity: 0.5;
    }

    75% {
      opacity: 0.75;
    }

    100% {
      opacity: 1;
    }
  }

  animation: inOut 2s linear;
  animation-iteration-count: infinite;
  opacity: 1;

  &.book {
    top: 158px;
    left: -80px;
  }

  &.controller {
    top: 40px;
    right: 115px;
  }

  &.explore {
    right: 0;
    top: 200px;
  }

  &.headphone {
    bottom: 125px;
    right: 40px;
  }

  &.hiking {
    bottom: 170px;
    left: -170px;
  }

  &.laptop {
    bottom: 30px;
    left: -50px;
  }

  &.dots {
    bottom: -30px;
    right: 40px;
  }

  @media (max-width: 1700px) {
    svg {
      max-width: 85%;
      height: auto;
    }

    &.book {
      top: 106px;
      left: -68px;
    }

    &.controller {
      top: 34px;
      right: 98px;
    }

    &.explore {
      top: 170px;
    }

    &.headphone {
      bottom: 106px;
      right: 32px;
    }

    &.hiking {
      bottom: 150px;
      left: -145px;
    }

    &.laptop {
      bottom: 25px;
      left: -42px;
    }

    &.dots {
      bottom: -26px;
      right: 27px;
    }
  }
`;
