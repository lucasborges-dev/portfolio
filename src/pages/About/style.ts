import styled from 'styled-components';

export const AboutSection = styled.section``;
// @media (max-width: 1700px) {
//     padding-left: 240px;
//   }

export const Container = styled.section`
  max-width: 1350px;
  width: 100%;
  padding: 0 115px;

  &.dark {
    background-color: ${({ theme }) => theme.colors.second};
    margin-bottom: -30px;
  }

  @media (max-width: 1700px) {
    max-width: 1090px;
    padding: 0px 98px;
  }
`;

export const Call = styled.h6`
  color: ${({ theme }) => theme.colors.third};
  font-weight: 600;
  font-style: italic;
  font-size: 18px;
  margin-bottom: 15px;

  @media (max-width: 1700px) {
    font-size: 16px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.third};
  font-weight: bold;
  font-size: 48px;
  margin-bottom: 65px;

  @media (max-width: 1700px) {
    font-size: 41px;
    margin-bottom: 55px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;

  @media (max-width: 1700px) {
    margin-bottom: 50px;
  }
`;

export const UserBlock = styled.div`
  width: 430px;

  @media (max-width: 1700px) {
    width: 365px;
  }
`;

export const ImageBlock = styled.div`
  position: relative;
  z-index: 1;
  width: fit-content;

  &:before {
    content: '';
    position: absolute;
    right: -3px;
    bottom: -3px;
    width: 300px;
    height: 362px;
    opacity: 0.5;
    border: 3px solid ${({ theme }) => theme.colors.third};
  }

  &:after {
    content: '';
    position: absolute;
    right: -110px;
    bottom: -15px;
    width: 269px;
    height: 269px;
    border-radius: 50%;
    opacity: 0.5;
    border: 3px solid ${({ theme }) => theme.colors.third};
  }

  @media (max-width: 1700px) {
    &:before {
      width: 255px;
      height: 308px;
    }

    &:after {
      width: 228px;
      height: 228px;
      right: -80px;
      bottom: -13px;
    }
  }
`;

export const PhotoBlock = styled.div`
  position: relative;
  z-index: 2;

  @media (max-width: 1700px) {
    width: 290px;
  }
`;

export const ImageDots = styled.div`
  position: absolute;
  z-index: 1;
  right: -45px;
  top: 120px;

  @media (max-width: 1700px) {
    right: -51px;
    top: 106px;

    svg {
      width: 85%;
      height: auto;
      display: block;
    }
  }
`;

export const UserName = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
  font-size: 48px;
  margin-top: 35px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  line-height: 1;
  text-align: center;

  @media (max-width: 1700px) {
    font-size: 41px;
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;

export const UserPosition = styled.h4`
  color: ${({ theme }) => theme.colors.third};
  font-size: 24px;
  text-align: center;
  letter-spacing: -0.03em;
  font-weight: 500;

  @media (max-width: 1700px) {
    font-size: 20px;
  }
`;

export const UserInfos = styled.div`
  max-width: 550px;
  flex: 1;

  @media (max-width: 1700px) {
    max-width: 467px;
  }
`;

export const InfosList = styled.div``;

export const InfosItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 1700px) {
    margin-bottom: 30px;
  }
`;

export const InfosText = styled.p`
  color: ${({ theme }) => theme.colors.third};
  font-size: 18px;
  font-weight: bold;
  margin-left: 23px;

  @media (max-width: 1700px) {
    font-size: 16px;
    margin-left: 15px;
  }
`;

export const Exp = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ExpYear = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 48px;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1;

  @media (max-width: 1700px) {
    font-size: 41px;
  }
`;

export const ExpDesc = styled.p`
  color: ${({ theme }) => theme.colors.third};
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  margin-left: 12px;
  max-width: 130px;

  @media (max-width: 1700px) {
    font-size: 16px;
    max-width: 110px;
  }
`;

export const UserDesc = styled.p`
  color: ${({ theme }) => theme.colors.third};
  font-size: 18px;
  line-height: 24px;

  @media (max-width: 1700px) {
    font-size: 16px;
    line-height: 21px;
  }
`;

export const Skills = styled.section`
  width: 100%;
  max-width: 660px;
  background-color: ${({ theme }) => theme.colors.second};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  padding: 25px;
  margin: 0 auto -72px;
  position: relative;
  height: 144px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1700px) {
    max-width: 560px;
    height: 122px;
    margin-bottom: -61px;
    padding: 15px;
  }
`;

export const SkillsTitle = styled.h3`
  color: ${({ theme }) => theme.colors.third};
  font-weight: bold;
  font-size: 26px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 24px;
  line-height: 1;

  @media (max-width: 1700px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

export const SkillsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;

  @media (max-width: 1700px) {
    column-gap: 10px;
  }
`;

export const SkillsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.accent};

  @media (max-width: 1700px) {
    width: 34px;
    height: 34px;

    svg {
      width: 50%;
      height: auto;
      display: block;
    }
  }
`;

export const Experiences = styled.section`
  padding: 120px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1700px) {
    padding: 102px 0;
  }
`;

export const ExperiencesTitle = styled.h3`
  color: ${({ theme }) => theme.colors.third};
  font-weight: bold;
  font-size: 48px;
  text-transform: uppercase;
  max-width: 390px;

  @media (max-width: 1700px) {
    font-size: 41px;
    max-width: 330px;
  }
`;

export const ExperiencesList = styled.ul`
  width: 100%;
  max-width: 545px;
  flex: 1;

  @media (max-width: 1700px) {
    max-width: 463px;
  }
`;

export const ExperiencesItem = styled.li`
  padding: 40px 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};

  @media (max-width: 1700px) {
    padding: 30px 0px 15px;
  }
`;

export const ExperienceHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  @media (max-width: 1700px) {
    margin-bottom: 10px;
  }
`;

export const ExperienceYear = styled.p`
  color: ${({ theme }) => theme.colors.third};
  font-weight: bold;
  font-size: 18px;
  font-style: italic;

  @media (max-width: 1700px) {
    font-size: 16px;
  }
`;

export const ExperienceCompany = styled.p`
  color: ${({ theme }) => theme.colors.third};
  font-weight: 500;
  font-size: 16px;

  @media (max-width: 1700px) {
    font-size: 14px;
  }
`;

export const ExperiencePosition = styled.p`
  color: ${({ theme }) => theme.colors.third};
  font-weight: bold;
  font-size: 32px;

  @media (max-width: 1700px) {
    font-size: 27px;
  }
`;
