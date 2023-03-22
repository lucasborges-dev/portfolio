import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1255px;
  width: 100%;
  display: flex;
  flex: 1;
  margin: 0 auto;
  align-items: center;
  overflow: hidden;
`;

export const Content = styled.div`
  width: 545px;
`;

export const Call = styled.h3`
  font-size: 102px;
  line-height: 90px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.third};

  span {
    font-weight: bold;
  }
`;

export const Subtitle = styled.h5`
  font-weight: bold;
  font-style: italic;
  margin-top: 30px;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.third};
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
`;

export const Icons = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const IconItem = styled.div`
  position: absolute;

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
`;
