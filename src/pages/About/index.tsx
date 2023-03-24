import React from 'react';
import { useLang } from '../../context/lang';
import {
  AboutSection,
  Call,
  Container,
  Content,
  Exp,
  ExpDesc,
  ExperienceCompany,
  ExperienceHead,
  ExperiencePosition,
  Experiences,
  ExperiencesItem,
  ExperiencesList,
  ExperiencesTitle,
  ExperienceYear,
  ExpYear,
  ImageBlock,
  ImageDots,
  InfosItem,
  InfosList,
  InfosText,
  PhotoBlock,
  Skills,
  SkillsItem,
  SkillsList,
  SkillsTitle,
  Title,
  UserBlock,
  UserDesc,
  UserInfos,
  UserName,
  UserPosition,
} from './style';
import Photo from '../../assets/img/MeAbout.png';
import LessDots from '../../components/svg/LessDots';
import Email from '../../components/svg/Email';
import User from '../../components/svg/User';
import BtnDefault from '../../components/BtnDefault';
import HTML from '../../components/svg/skills/HTML';
import CSS from '../../components/svg/skills/CSS';
import JS from '../../components/svg/skills/JS';
import ReactNative from '../../components/svg/skills/ReactNative';
import Git from '../../components/svg/skills/Git';
import SASS from '../../components/svg/skills/SASS';
import Bootstrap from '../../components/svg/skills/Bootstrap';

export default function AboutPage() {
  const { dataContent } = useLang();

  return (
    <AboutSection>
      <Container>
        <Call>{dataContent?.about.subtitle}</Call>
        <Title>{dataContent?.about.title}</Title>
        <Content>
          <UserBlock>
            <ImageBlock>
              <ImageDots>
                <LessDots />
              </ImageDots>
              <PhotoBlock>
                <img src={Photo} />
              </PhotoBlock>
            </ImageBlock>
            <UserName>Lucas Borges</UserName>
            <UserPosition>{dataContent?.about.desc}</UserPosition>
          </UserBlock>
          <UserInfos>
            <InfosList>
              <InfosItem>
                <Email />
                <InfosText>lucasborgescx@gmail.com</InfosText>
              </InfosItem>
              <InfosItem>
                <User />
                <InfosText>{dataContent?.about.infos.age}</InfosText>
              </InfosItem>
            </InfosList>
            <Exp>
              <ExpYear>5+</ExpYear>
              <ExpDesc>{dataContent?.about.infos.experience}</ExpDesc>
            </Exp>
            <UserDesc
              dangerouslySetInnerHTML={{
                __html: dataContent?.about.infos.desc || '',
              }}
            />
            <BtnDefault txt="Download CV" />
          </UserInfos>
        </Content>
        <Skills>
          <SkillsTitle>{dataContent?.about.skills.title}</SkillsTitle>
          <SkillsList>
            <SkillsItem>
              <HTML />
            </SkillsItem>
            <SkillsItem>
              <CSS />
            </SkillsItem>
            <SkillsItem>
              <JS />
            </SkillsItem>
            <SkillsItem>
              <ReactNative />
            </SkillsItem>
            <SkillsItem>
              <Git />
            </SkillsItem>
            <SkillsItem>
              <SASS />
            </SkillsItem>
            <SkillsItem>
              <Bootstrap />
            </SkillsItem>
          </SkillsList>
        </Skills>
      </Container>
      <Container className="dark">
        <Experiences>
          <ExperiencesTitle>
            {dataContent?.about.experiences.title}
          </ExperiencesTitle>
          <ExperiencesList>
            {dataContent?.about.experiences.list.map((item) => (
              <ExperiencesItem key={item.company}>
                <ExperienceHead>
                  <ExperienceYear>
                    - {item.yearStart} - {item.yearEnd}
                  </ExperienceYear>
                  <ExperienceCompany>- {item.company}</ExperienceCompany>
                </ExperienceHead>
                <ExperiencePosition>{item.position}</ExperiencePosition>
              </ExperiencesItem>
            ))}
          </ExperiencesList>
        </Experiences>
      </Container>
    </AboutSection>
  );
}
