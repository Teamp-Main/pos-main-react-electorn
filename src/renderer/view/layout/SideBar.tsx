import React from 'react';
import { Link } from 'react-router-dom';
import theme from 'renderer/assets/global/theme';
import styled from 'styled-components';

const SideBarContainer = styled.div`
  display: flex;
  width: 340px;
  flex-direction: column;
  background-color: ${props => props.theme.background.navy};
`;

const MainListContiner = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 30px;
  gap: 10px;

  > li {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 100%;
    > span {
      margin: 0 1rem;
      padding: 1rem 0;
      width: 100%;
      color: white;
    }
    > a {
      margin: 0 1rem;
      padding: 1rem 0;
      width: 100%;
      color: white;
    }
  }
  > li:hover {
    background-color: ${props => props.theme.background.bule};
  }
`;

const SubListContiner = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.background.lightNavy};
  padding: 1rem;
  gap: 10px;

  > li {
    > a {
      font-size: 25px;
      color: ${props => props.theme.font.noSelect};
    }
    > a:hover {
      color: white;
    }
  }
`;

const SideBar = () => {
  return (
    <SideBarContainer>
      <MainListContiner>
        <li>
          <Link to="/home">홈</Link>
        </li>
        <li>
          <span>매장설정</span>
          <SubListContiner>
            <li>
              <Link to="/product/setting/table">테이블 설정</Link>
            </li>
            <li>
              <Link to="/product/setting/product">상품설정</Link>
            </li>
            <li>
              <Link to="/product/setting/product/side">
                상품 사이드 메뉴 설정
              </Link>
            </li>
          </SubListContiner>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/sign-up">회원가입</Link>
        </li>
      </MainListContiner>
    </SideBarContainer>
  );
};

export default SideBar;
