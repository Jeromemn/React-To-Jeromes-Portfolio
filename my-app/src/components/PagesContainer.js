import { useState } from "react";
import NavTabs from "./Navigation";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import '../styles/Header.css';
// import projects from "./Projects";


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

  const styles = {
    headerStyle: {
        background: '#1F271B',
    },
    headingStyle: {
        fontSize: '80px',
        fontColor: '#FBFBF2',
    },
};

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <header style={styles.headerStyle} className='header'>
    <h1 style={styles.headingStyle}> Jerome </h1>
    
    
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    
    </header>
  );
}
