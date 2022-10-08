import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Alert } from '../common/Modal';

const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const From = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const InputContainer = styled.fieldset`
  width: 60%;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 3px 3px 4px 4px rgba(128, 128, 128, 0.6);
  background-color: #fff;

  padding: 0.5rem 0;
  > label {
    text-align: left;
    color: #111;
    font-size: 13px;
    padding: 0 1rem;
  }

  .input-form {
    width: 100%;
    display: flex;
    align-items: center;

    > input {
      width: 100%;

      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
    }
  }
`;

const AddButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 5rem;
  border: none;
  background-color: #706fd3;
  color: #fff;
`;

const ButtonFomr = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: center;
  > button {
    cursor: pointer;
    width: 10rem;
    height: 3rem;
    color: #fff;
    border-radius: 5px;
    border: none;
  }
  > .btn-apply {
    background-color: #706fd3;
  }

  > .btn-cancel {
    color: #706fd3;
    background-color: #fff;
    border: 1px solid #706fd3;
  }
  > .btn-apply:hover {
    background-color: #606fd3;
  }

  > .btn-cancel:hover {
    background-color: #eee;
  }
`;

interface IProps {
  onSubmit: (array: any[]) => void;
}

const CreateCartegoryModal = ({ onSubmit }: IProps) => {
  const [cartegory, setCartegory] = useState<any[]>([{ name: '' }]);

  const addCartegory = () => {
    const cartegoryCopy = [...cartegory];
    cartegoryCopy.push({
      name: '',
    });
    return setCartegory(cartegoryCopy);
  };
  const removeCartegory = (id: number) => {
    const { length } = cartegory;
    if (length <= 1) return;
    const cartegoryCopy = [...cartegory];
    const filter = cartegoryCopy.filter((_, index) => index !== id);
    console.log(filter);

    setCartegory(filter);
  };

  const onChangeCartegory = (
    id: number,
    evnet: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = evnet.target;
    const cartegoryCopy = [...cartegory];
    cartegoryCopy[id].name = value;
    setCartegory(cartegoryCopy);
  };

  const cancelModal = () => {
    return Alert.close();
  };

  return (
    <ModalContainer>
      {cartegory.map((item, index) => {
        return (
          <From>
            <InputContainer>
              <label>카테고리</label>
              <div className="input-form">
                <input
                  type="text"
                  value={item.name}
                  onChange={e => onChangeCartegory(index, e)}
                />
              </div>
            </InputContainer>
            <AddButton type="button" onClick={() => removeCartegory(index)}>
              삭제
            </AddButton>
          </From>
        );
      })}
      <AddButton type="button" onClick={() => addCartegory()}>
        추가
      </AddButton>
      <ButtonFomr>
        <button
          className="btn-cancel"
          type="button"
          onClick={() => cancelModal()}
        >
          취소
        </button>
        <button
          className="btn-apply"
          type="button"
          onClick={() => onSubmit(cartegory)}
        >
          완료
        </button>
      </ButtonFomr>
    </ModalContainer>
  );
};

export default CreateCartegoryModal;
