import React, { useState } from 'react';
import styled from 'styled-components';
import CreateCartegoryModal from '../components/settingProduct/CreateCartegoryModal';

const SettingProductContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CategoryContainer = styled.div`
  width: 100%;
  height: 53px;
  border-bottom: 1px solid ${props => props.theme.border.purple};
  > ul {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
    > li {
      cursor: pointer;
      padding: 0.5rem;
      font-size: 18px;
      color: #e0e0e0;
    }

    .selected {
      border-bottom: 1px solid ${props => props.theme.border.purple};
      color: #000;
    }
    > li:hover {
      border-bottom: 1px solid ${props => props.theme.border.purple};
      color: #000;
    }
  }
`;
const ItemContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 3rem;
  gap: 1rem;
  .product-item {
    height: 270px;
    > img {
      width: 100%;
      height: 80%;
      background-color: gray;
    }

    .product-item-text {
      width: 100%;
      height: 20%;
      background-color: #739ced;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 0;
      justify-content: center;
    }
  }
`;

const AddButton = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 1rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 5rem;
  background-color: ${props => props.theme.background.purple};
  > span {
    color: white;
    padding-top: 0.5rem;
    font-size: 3rem;
  }
`;

interface ProductDefint {
  name: string;
  price: number;
}

const SettingProduct = () => {
  const [currentCartegory, setCurrentCartegory] = useState<number>(0);
  const [itemState, setItmeState] = useState<ProductDefint[]>([
    {
      name: '참이슬',
      price: 5000,
    },
    {
      name: '참이슬',
      price: 5000,
    },
    {
      name: '참이슬',
      price: 5000,
    },
    {
      name: '참이슬',
      price: 5000,
    },
    {
      name: '참이슬',
      price: 5000,
    },
    {
      name: '참이슬',
      price: 5000,
    },
    {
      name: '참이슬',
      price: 5000,
    },
  ]);
  const [isCartegoryMdoal, setIsCartegoryModal] = useState<boolean>(false);
  return (
    <SettingProductContainer>
      <CreateCartegoryModal />

      <CategoryContainer>
        <ul>
          <li
            className={currentCartegory === 0 ? 'selected' : ''}
            onClick={() => setCurrentCartegory(0)}
          >
            상품1
          </li>
          <li
            className={currentCartegory === 1 ? 'selected' : ''}
            onClick={() => setCurrentCartegory(1)}
          >
            상품2
          </li>
          <li
            className={currentCartegory === 2 ? 'selected' : ''}
            onClick={() => setCurrentCartegory(2)}
          >
            상품3
          </li>
          <li
            className={currentCartegory === 3 ? 'selected' : ''}
            onClick={() => setCurrentCartegory(3)}
          >
            상품4
          </li>
          <li
            className={currentCartegory === 4 ? 'selected' : ''}
            onClick={() => setCurrentCartegory(4)}
          >
            상품5
          </li>
          <li>+카테고리</li>
        </ul>
      </CategoryContainer>
      <ItemContainer>
        <AddButton>
          <span>+</span>
        </AddButton>

        {itemState.map(item => (
          <div className="product-item">
            <img src="" alt="" />
            <div className="product-item-text">
              <span>{item.name}</span>
              <span>{item.price.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </ItemContainer>
    </SettingProductContainer>
  );
};

export default SettingProduct;
