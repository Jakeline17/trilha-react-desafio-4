import styled from 'styled-components';

interface ButtonProps {
    disabled?: boolean;
  }
  

export const ButtonContainer = styled.button<ButtonProps>`
    width: 100%;
    height: 42px;
    color: #FFF;
    background-color: ${(props) => (props.disabled ? "rgb(222, 168, 237)" : "#81259d")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
  `;
