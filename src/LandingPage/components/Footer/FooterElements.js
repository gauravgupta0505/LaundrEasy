import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  ${'' /* background-color: #222824; */}
  background-color:#071E3D;
`;

export const FooterWrap = styled.div`
  padding: 14px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  margin-bottom: 0;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  };
`

export const FooterLinkTitle = styled.h1`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
  font-size: 1.5rem;
  margin-top: 10;
  margin-bottom: 0px;
  color: #f2f2f2;
`

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: auto;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  margin-top: 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom:16px;
  font-size: 1.1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 240px;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;