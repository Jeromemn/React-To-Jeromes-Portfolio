import styled from "styled-components";

const NavItem = styled.a`
  color: white;
  text-decoration: none;

  ${(props) =>
    props.isActive &&
    `
      color: black;
      transform: translateY(-25px);
      font-size: 1.6em;
      
      
   `}
`;
const ListItem = styled.li`
  list-style-type: none;
  display: inline-flex;
  padding: 1.5em 1.5em 0 1.5em;
  margin-bottom: 0;
  font-size: 1.7em;
  font-family: "Amatic SC", cursive;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;

const UnorderedList = styled.ul`
  padding-bottom: 0.4em;
  margin-bottom: 0;
  margin: 0 auto;
  display: flex;
`;

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <UnorderedList>
      <ListItem>
        <NavItem
          isActive={currentPage === "Home"}
          href="#home"
          onClick={() => handlePageChange("Home")}
        >
          About Me
        </NavItem>
      </ListItem>
      <ListItem>
        <NavItem
          isActive={currentPage === "Portfolio"}
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
        >
          Portfolio
        </NavItem>
      </ListItem>
      <ListItem>
        <NavItem
          isActive={currentPage === "Contact"}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
        >
          Contact Me
        </NavItem>
      </ListItem>
      <ListItem>
        <NavItem
          isActive={currentPage === "Resume"}
          href="#resume"
          onClick={() => handlePageChange("Resume")}
        >
          Resume
        </NavItem>
      </ListItem>
    </UnorderedList>
  );
}

export default NavTabs;
