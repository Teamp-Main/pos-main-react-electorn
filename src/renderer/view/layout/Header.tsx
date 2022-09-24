import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShow } from 'renderer/store/eventReduser';
import burger from '../../assets/img/burger.svg';
import ArrowButtom from '../../assets/img/arrow_buttom.svg';

const HeaderConteiner = styled.div`
  width: 100%;
  background-color: ${props => props.theme.background.purple};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  img {
    cursor: pointer;
  }
  > button {
    background-color: unset;
    border: none;
  }
  .brand-mark-form {
    display: flex;
    align-items: center;
    margin: 0 1rem;
    gap: 10px;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

const Header = () => {
  const dispath = useDispatch();
  const isShow = useSelector(state => state.tagEvent.tagShowEvent.isSideBar);

  return (
    <HeaderConteiner>
      <button
        type="button"
        onClick={() => {
          dispath(setIsShow(!isShow));
        }}
      >
        <img src={burger} alt="burger" />
      </button>
      <div className="brand-mark-form">
        <h3>PosMain</h3>
        <img src={ArrowButtom} alt="" />
      </div>
    </HeaderConteiner>
  );
};

export default Header;
