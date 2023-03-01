import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';

const InputButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  .sign-up-flex-1 {
    flex: 2 1 auto;
  }
  .sign-up-flex-2 {
    flex: 1 1 auto;
  }
`;

interface IProps {
  item: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
  state: string;
  inputType: 'text' | 'number' | 'password';
  setState: (ref: string) => void;
}

function InputButton({
  item,
  label,
  isActive,
  state,
  inputType,
  setState,
  onClick,
}: IProps) {
  return (
    <InputButtonWrapper>
      <div className="sign-up-flex-1">
        <Input
          label={label}
          state={state}
          inputType={inputType}
          setState={setState}
        />
      </div>
      <div className="sign-up-flex-2">
        <Button isActive={isActive} item={item} onClick={onClick} />
      </div>
    </InputButtonWrapper>
  );
}

export default InputButton;
