import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  a {
    color: #000;
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
