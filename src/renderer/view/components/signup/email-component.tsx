import styled from 'styled-components';
import InputButton from './input-button';

interface IProps {
  item: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
  email_state: string;
  email_form_state: boolean;
  setState: (ref: string) => void;
  inputType: 'text';
}

const EmailInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .email-text {
    font-size: 11px;
    color: red;
  }
`;

const EmailComponent = ({
  item,
  label,
  isActive,
  onClick,
  email_state,
  setState,
  inputType,
  email_form_state,
}: IProps) => {
  return (
    <EmailInputContainer>
      <InputButton
        item={item}
        label={label}
        isActive={isActive}
        onClick={onClick}
        state={email_state}
        setState={setState}
        inputType={inputType}
      />
      {!email_form_state && (
        <span className="email-text">이메일 형식이 맞지 않습니다.</span>
      )}
    </EmailInputContainer>
  );
};

export default EmailComponent;
