import gitHub from "../assets/GitHub-logo.png";
import linkedin from "../assets/LinkedIn_Logo.svg.png";
import styled from "styled-components";
import {
  flexAlignHorizontalContent,
} from "../styles/mixins";

const Logo = styled.img`
  height: 50px;
`;

const Container = styled.div`
  background: #1f271b;
  bottom: 0;
  width: 100%;
  /* position: fixed; */
  left: 0;
  align-content: center;
  justify-content: center;
  
`;

const Row = styled.div`
  ${flexAlignHorizontalContent("space-around", "center")}
  padding: 2rem 0;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: red;
    transition: 200ms ease-in;
  }
`;

export default function FooterContainer() {
  return (
    <>
      <Container>
        <Row>
          <Link
            href="https://github.com/Jeromemn"
            target="_blank"
            rel="noreferrer"
          >
            <Logo src={linkedin} alt="linkedin-logo"></Logo>
          </Link>

          <Link
            href="https://github.com/Jeromemn"
            target="_blank"
            rel="noreferrer"
          >
            <Logo src={gitHub} alt="gitHub-logo"></Logo>
          </Link>
        </Row>
      </Container>
    </>
  );
}
