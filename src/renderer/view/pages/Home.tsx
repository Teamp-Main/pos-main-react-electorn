import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin: 1rem;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Link to="/login">login</Link>
      <Link to="/sign-up">sign-up</Link>
    </HomeWrapper>
  );
};

export default Home;