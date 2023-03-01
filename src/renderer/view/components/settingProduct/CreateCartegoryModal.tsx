import styled from 'styled-components';

const ModalContainer = styled.div<{ isShow: boolean }>`
  display: ${props => (props.isShow ? 'block' : 'none')};
  position: absolute;
  width: 70%;
  height: 60%;
  top: 20%;
  left: 15%;
  background-color: #fff;
`;
interface CreateCartegoryModalProps {
  isShow: boolean;
}
function CreateCartegoryModal({ isShow }: CreateCartegoryModalProps) {
  return <ModalContainer isShow={isShow}>createCartegoryModal</ModalContainer>;
}

export default CreateCartegoryModal;
