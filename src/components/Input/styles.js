import styled from "styled-components";
import Text from "../Text";

/* index.js */
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const SectionContainer = styled.div`
    margin-bottom: 4px;
`

export const BottomInfoContainer = styled(SectionContainer)`
    display: flex;
`;

export const InfoText = styled(Text)`
    font-size: ${({theme}) => theme.fs_small};
    color: ${({theme}) => theme.black60};
`;

export const HelperText = styled(InfoText)`
    flex: 1;
`;

export const ErrorText = styled(HelperText)`
    color: ${({theme}) => theme.error10};
`;

export const CharCount = styled(InfoText)`
    margin-left: 16px;
`