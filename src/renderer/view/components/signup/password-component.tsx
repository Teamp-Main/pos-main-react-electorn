import styled from 'styled-components';
import Input from '../common/Input';

interface IProps {
  label: string;
  pw_state: string;
  form_check_state: boolean;
  setState: (ref: string) => void;
  inputType: 'password';
  text: string;
}

const PwInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .pwd-text {
    font-size: 11px;
    color: red;
  }
`;

const PwComponent = ({
  label,
  pw_state,
  setState,
  inputType,
  form_check_state,
  text,
}: IProps) => {
  return (
    <PwInputContainer>
      <Input
        label={label}
        state={pw_state}
        setState={setState}
        inputType={inputType}
      />
      {!form_check_state && <span className="pwd-text">{text}</span>}
    </PwInputContainer>
  );
};

export default PwComponent;
