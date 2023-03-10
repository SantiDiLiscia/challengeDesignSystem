import styled, {css} from "styled-components";
import {SectionContainer, InfoText} from "../styles";
import {ReactComponent as EyeIconOriginal} from "../../../assets/icons/eye.svg";
import {ResetButtonStyle as ClearButton} from "../../Button/styles";
import inputStates from "../inputStates";

const {
    RESTING,
    ACTIVE,
    DISABLED,
    READ_ONLY,
    ERROR,
    SUCCESS,
} = inputStates;

const RestingIn = ({theme}) => css`
   background: ${theme.white100};
   border-color: ${theme.black20};

    &:hover{
        border-color: ${theme.black100};
    }
`;

const DisabledIn = ({theme}) => css`
   background: ${theme.black10};
`

const ErrorIn = ({theme}) => css`
  background: ${theme.error100};
  border-color: ${theme.error10};
`;

const ActiveIn = ({theme}) => css`
  border-color: ${theme.galiciaPrimary100};
`;
const SuccessIn = ({theme}) => css`
    border-color: ${theme.black100};
`
const ReadOnlyIn = ({theme}) => css`
    background: ${theme.grey20};
    border-color: ${theme.black10};
`

function handleInputContainerStatus(status, props) {
    switch (status) {
        case RESTING:
            return RestingIn(props); 
        case ACTIVE:
            return ActiveIn(props);
        case DISABLED:
            return DisabledIn(props);
        case READ_ONLY:
            return ReadOnlyIn(props);
        case ERROR:
            return ErrorIn(props);
        case SUCCESS:
            return SuccessIn(props);
        default:
            return RestingIn(props); 
    }
};

const BoxContainer = ({theme}) => css`
    display: flex;
    padding: 8px;
    border: 1px solid ${theme.black20};
    border-radius: 8px;
    outline: none;
    align-items: center;
    background: ${theme.white100};
`;

const LineContainer = ({isFocused, theme}) => css`
    display: flex;
    background-color: transparent;
    padding: 8px;
    border-bottom: 2px solid black;
    outline: none;
    align-items: center;
    border-color: ${isFocused ? "orange" : "gray"};

    &:hover{
        border-color: ${isFocused ? "orange" : theme.black}
    }
`;

function handleContainerType(type, props) {
    switch (type) {
        case "line":
            return LineContainer(props);
        case "box":
            return BoxContainer(props);
        default:
            return LineContainer;
    }
};

export const TextInputContainer = styled(SectionContainer)`
    position: relative;

    ${({inputStyle, ...props}) => handleContainerType(inputStyle, props)}
    ${({inputStatus, ...props}) => handleInputContainerStatus(inputStatus, props)}
`;

export const PreLabel = styled(InfoText)` margin-right: 8px; `
export const PostLabel = styled(InfoText)` margin-left: 8px; `

export const MainLabelText = styled.input`
    background: inherit;
    border: none;
    outline: none;
    flex: 1;
    width: 100%
`;

export const StatusIconContainer = styled.div`
    margin-left: 6px;
    display: flex;
    align-items: center;
`

export const EyeIcon = styled(EyeIconOriginal)`
    margin-right: 6px
`

export {ClearButton};
