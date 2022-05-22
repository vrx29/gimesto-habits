import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../Button";

const Wrapper = styled.nav`
  padding: 0 2rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export function Navbar() {
  return (
    <Wrapper>
      Navbar
      <NavItemsWrapper>
        <Link to="/login">Log in</Link>
        <Button to="/signup" as={Link} variant="primary">
          Sign Up
        </Button>
      </NavItemsWrapper>
    </Wrapper>
  );
}
