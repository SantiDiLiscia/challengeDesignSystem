import styled, {css} from "styled-components";

export const ResetButtonStyle = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
`;

const PrimaryButton = ({theme}) => css`
    background: ${theme.primaryColor};

    &:hover {
        background: ${theme.primaryColor_dark};
    }
`;

const SecondaryButton = ({theme}) => css`
    background: transparent;
    border: 1px solid ${theme.primaryColor};
    color: ${theme.primaryColor};

    &:hover {
      background: ${theme.gray};
    }
`;


const TerciaryButton = ({theme}) => css`
    background: transparent;
    color: ${theme.primaryColor};

    &:hover {
      background: ${theme.gray};
    }
`;

function handleButtonType(type, props) {
    switch(type){
          case "primary":
            return PrimaryButton(props);
          case "secondary":
            return SecondaryButton(props);
          case "terciary":
            return TerciaryButton(props);
          default:
            return TerciaryButton(props);
    }
};

const DisabledButtonStyle = ({theme}) => css`
  background: ${theme.black10};
  color: ${theme.white100};

  &:hover {
    background: ${theme.black10};
    color: ${theme.white100};
  }
`;

const Button = styled(ResetButtonStyle)`
    align-items: center;
    border-radius: ${({theme}) => theme.borderRadius};
    color: white;
    cursor: pointer;
    display: flex;
    font-weight: bold;
    justify-content: center;
    padding: 12px 32px;

    ${({size}) => size === "small" && css` 
      padding: 12px 12px; 
      width: auto;
    `}
    ${({heirarchy, ...props}) => handleButtonType(heirarchy, props)}
    ${({disabled, ...props}) => (disabled && DisabledButtonStyle(props))}
`;

export default Button;