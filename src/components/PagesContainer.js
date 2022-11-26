import { useState } from "react";
import styled from "styled-components";
import NavTabs from "./Navigation";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Header from "./Header";
import FooterContainer from "./Footer";
import newBackground from "../assets/newBackground.webp";

const PageWrapper = styled.div`
  padding: 1rem;
  min-height: calc(100vh - 75.2px - 133px - 2rem);
  background: #c2c2c2;

  ${({ $isHomePage }) =>
    $isHomePage &&
    `
     background-image: url(${newBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(90%);
    
    
  `}
`;

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Header>
      <PageWrapper $isHomePage={currentPage === "Home"}>
        {renderPage()}
      </PageWrapper>

      <FooterContainer></FooterContainer>
    </>
  );
}
