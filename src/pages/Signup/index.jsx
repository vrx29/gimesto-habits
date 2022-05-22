import { Link } from "react-router-dom";
import styled from "styled-components";
import { BackIcon } from "../../assets/icons";
import { Button, Input } from "../../components";
import hero from "../../assets/backgrounds/authBackground.png";

export function Signup() {
  return (
    <LoginWrapper>
      <LeftSection>
        <Image src={hero} alt="app screens view" />
      </LeftSection>
      <RightSection>
        <BackButton as={Link} to="/">
          <BackIcon />
          back
        </BackButton>
        <Wrapper>
          <h1>Get Started by Signing up</h1>
          <p>Create your account and try using it for free.</p>
          <Form>
            <Input name="Full name" type="text" placeholder="eg: John Doe" />
            <Input
              name="Email address"
              type="email"
              placeholder="eg: johndoe@gmail.com"
            />
            <Input name="Password" type="password" />
            <Button variant="primary" width="full">
              Create account
            </Button>
          </Form>
          <SubHeading>
            Already have an account?&nbsp;
            <StyledLink to="/login">Login</StyledLink>
          </SubHeading>
        </Wrapper>
      </RightSection>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.main`
  padding: unset;
  min-height: 100vh;
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
`;

const LeftSection = styled.section`
  height: 100%;
  background-color: #2e4cca;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const RightSection = styled.section`
  height: 100%;
  padding: 2rem 1rem;
`;

const BackButton = styled.button`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #293241;
  cursor: pointer;
  background-color: #edf2fb;
  &:hover {
    font-weight: 500;
  }
`;

const Wrapper = styled.div`
  min-width: 360px;
  max-width: 400px;
  margin: 2rem auto;
`;

const Form = styled.form`
  margin: 2rem auto;
`;

const SubHeading = styled.p`
  font-size: 0.8rem;
  color: #6c757d;
`;

const StyledLink = styled(Link)`
  font-size: 1.1em;
  font-weight: 600;
  color: #3554d1;
  text-decoration: underline;
`;
