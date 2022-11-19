import { useState } from "react";
import NavTabs from "./Navigation";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
// import projects from "./Projects";
import Header from "./Header";


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

      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    
      </Header>
      
      {renderPage()}
    </>
    
  );
}
