import React from 'react';
import styled from 'styled-components';

const SettingProductContainer = styled.div`
  display: flex;
`;

const SettingProduct = () => {
  return (
    <div>
      <div>
        <ul>
          <li>상품1</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <img src="" alt="" />
            <div>
              <span>참이슬</span>
              <span>5,000원</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingProduct;
