import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BackIcon } from "../../assets/icons";
import { Button, Input } from "../../components";
import hero from "../../assets/backgrounds/authBackground.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useEffect, useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authToken) {
      navigate(state.from?.pathname || "/home");
    }
  }, [authToken, navigate, state]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  function setupTestLogin() {
    setEmail("testing@gimesto.com");
    setPassword("testing123");
  }
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
          <h1>Hi, Welcome Back!</h1>
          <p>Start changing your habits from today.</p>
          <Form onSubmit={handleLogin}>
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
            <ButtonContainer>
              <Button variant="primary" width="full" type="submit">
                Log in
              </Button>
              <Button variant="outline" width="full" onClick={setupTestLogin}>
                Log in with test credentials
              </Button>
            </ButtonContainer>
          </Form>
          <SubHeading>
            Not registered yet?&nbsp;
            <StyledLink to="/signup">Create an account</StyledLink>
          </SubHeading>
        </Wrapper>
      </RightSection>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.main`
  padding: unset;
  height: 100vh;
  overflow: hidden;
  display: grid;
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
