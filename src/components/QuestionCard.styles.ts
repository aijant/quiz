import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #ebfeff;
  border-radius: 4px;
  border: 1px solid 4d6edb;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) => correct ? "#80e0a3" : !correct && userClicked ? "#C16868" : "#80cbe0"};
    border: 1px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    color: #000;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
