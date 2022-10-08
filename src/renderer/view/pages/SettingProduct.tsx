import React, { useState } from 'react';
import styled from 'styled-components';
import { Alert } from '../components/common/Modal';
import CreateCartegoryModal from '../components/settingProduct/CreateCartegoryModal';

const SettingProductContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
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
  const [currentCartegory, setCurrentCartegory] = useState<any[]>([
    {
      name: '기본',
    },
  ]);

  const [tab, setTab] = useState(0);
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

  const onSubmit = (array: any[]) => {
    const currentCartegoryCopy = [...currentCartegory];

    setCurrentCartegory([...currentCartegoryCopy, ...array]);
    return Alert.fire('등록되었습니다.');
  };

  const createCartegory = () => {
    return Alert.fire({
      title: <CreateCartegoryModal onSubmit={onSubmit} />,
      showConfirmButton: false,
      showCancelButton: false,
      width: '50rem',
    });
  };

  return (
    <SettingProductContainer>
      <CategoryContainer>
        <ul>
          {currentCartegory.map((item, index) => (
            <li
              className={tab === index ? 'selected' : ''}
              onClick={() => setTab(index)}
            >
              {item.name}
            </li>
          ))}
          <li onClick={() => createCartegory()}>+카테고리</li>
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
