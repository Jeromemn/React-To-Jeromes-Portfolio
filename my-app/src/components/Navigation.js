import styled from 'styled-components';

const NavItem = styled.a`
   color: white;
   text-decoration: none;

   ${(props) => props.isActive && `
      color: black;
      
   `}
     /* &:hover {
    transition: all .2s ease-in-out;
    transform: scale(1.2); */
  /* } */
`;
const ListItem = styled.li`
   list-style-type: none;
   display: inline-flex;
   padding: 1.5em 1.5em 0 1.5em;
   margin-bottom: 0;
   font-size: 2em;
  font-family: 'Amatic SC', cursive;
  &:hover {
    transition: all .2s ease-in-out;
    transform: scale(1.2);
  }

   `;

   const UnorderedList = styled.ul`
   padding-bottom: .8em;
   margin-bottom: 0;
   
   `;

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <UnorderedList>
      <ListItem >
        <NavItem isActive={currentPage === 'Home'}
          href="#home"
          onClick={() => handlePageChange("Home")}
          // className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          About Me
        </NavItem>
      </ListItem>
      <ListItem >
        <NavItem isActive={currentPage === 'Portfolio'}
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          // className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </NavItem>
      </ListItem>
      <ListItem>
        <NavItem isActive={currentPage === 'Contact'}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact Me
        </NavItem>
      </ListItem>
      <ListItem>
        <NavItem isActive={currentPage === 'Resume'}
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </NavItem>
      </ListItem>
    </UnorderedList>
  );
}

export default NavTabs;