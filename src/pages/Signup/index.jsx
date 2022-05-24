import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BackIcon } from "../../assets/icons";
import { Button, Input } from "../../components";
import hero from "../../assets/backgrounds/authBackground.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../features/auth/authSlice";

export function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authToken) {
      navigate("/home");
    }
  }, [authToken, navigate]);

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUp({ firstName, lastName, email, password }));
  };
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
          <Form onSubmit={handleSignUp}>
            <Input
              name="First name"
              type="text"
              placeholder="eg: John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              name="Last name"
              type="text"
              placeholder="eg: Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              name="Email address"
              type="email"
              placeholder="eg: johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              name="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="primary" width="full" type="submit">
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
  background-color: var(--COLOR-PRIMARY-HOVER);
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
  color: var(--COLOR-GRAY-600);
  cursor: pointer;
  background-color: var(--COLOR-GRAY-100);
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
  color: var(--COLOR-GRAY-500);
`;

const StyledLink = styled(Link)`
  font-size: 1.1em;
  font-weight: 600;
  color: var(--COLOR-PRIMARY);
  text-decoration: underline;
`;
