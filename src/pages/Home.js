import styled from "styled-components";
// import homeBackground from "../assets/homeBackground.jpg"
// import newBackground from "../assets/homeBackground.jpg"
import myphoto from "../assets/myphoto.webp";

const View = styled.div`
  display: grid;

  column-gap: 3rem;
  float: right;
  padding-right: 3rem;
  grid-template-columns: 0 0.6fr 0.3fr;
  grid-template-rows: 3.3rem 12.8rem 2.2rem;
  padding-left: 10em;

  justify-content: flex-end;
  align-content: space-around;
  text-align: center;

  box-sizing: border-box;
  margin: 0 0;
`;

const MyPhoto = styled.img`
  grid-column-start: 3;
  justify-self: center;
  --s: 10px;
  padding: var(--s);
  border: calc(2 * var(--s)) solid #0000;
  outline: 1px solid #000;
  outline-offset: calc(-1 * var(--s));
  background: conic-gradient(from 90deg at 1px 1px, #0000 25%, #000 0);
  height: 10rem;
  align-self: center;
  box-shadow: rgba(0, 0, 0, 0.4) -5px 5px, rgba(0, 0, 0, 0.3) -10px 10px,
    rgba(0, 0, 0, 0.2) -15px 15px, rgba(0, 0, 0, 0.1) -20px 20px,
    rgba(0, 0, 0, 0.05) -25px 25px, rgba(0, 0, 0, 0.4) 5px 5px,
    rgba(0, 0, 0, 0.3) 10px 10px, rgba(0, 0, 0, 0.2) 15px 15px,
    rgba(0, 0, 0, 0.1) 20px 20px, rgba(0, 0, 0, 0.05) 25px 25px;
`;

const Header2 = styled.h2`
  grid-column: 3;
  justify-self: center;
  text-align: center;
  grid: 2 1;
  font-family: "Amatic SC", cursive;
  font-size: 2.5rem;
  margin: 0 auto;
  padding-bottom: 1rem;
`;

const About = styled.p`
  grid-column: 2;
  grid-row: 4;
  text-align: center;
  font-family: "Amatic SC", cursive;
  font-size: 2rem;
  font-weight: 900;
  padding-top: 0.8rem;
`;

const Header1 = styled.h1`
  grid-row: 3;
  grid-column: 2;
  justify-self: center;
  font-family: "Amatic SC", cursive;
  font-size: 2.5rem;
  filter: contrast(92%);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 0 auto;
`;

export default function AboutMe() {
  return (
    <>
      <Container>
        <View>
          <Header1> Who am i? </Header1>
          <Header2> Jerome Nixon </Header2>
          <MyPhoto src={myphoto} alt="photo-of-dev"></MyPhoto>
          <About>
            Jerome is a Full Stack Web Developer from Arizona, who has always
            enjoyed finding creative solutions. Jerome attended the University
            of Arizona's Full Stack Bootcamp in fall of 2022 and continues to
            find new topics to learm. Along with his school projects Jerome has
            also started on personal projects.
          </About>
        </View>
      </Container>
    </>
  );
}
