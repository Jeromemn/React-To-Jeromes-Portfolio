import gitHub from "../assets/GitHub-logo.png";
import linkedin from "../assets/LinkedIn_Logo.svg.png";
import styled from "styled-components";
import { flexAlignHorizontalContent } from "../styles/mixins";

const Logo = styled.img`
  height: 50px;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;

const Container = styled.div`
  background: #1f271b;
  bottom: 0;
  width: 100%;
  height: 8rem;
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
