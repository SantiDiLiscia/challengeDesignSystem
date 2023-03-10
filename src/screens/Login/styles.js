import {ReactComponent as LogoOriginal} from "../../assets/logoBrick.svg"; 
import styled from "styled-components";
import ButtonOriginal from "../../components/Button";
import CardOriginal from "../../components/Card";
import InputOriginal from "../../components/Input";
import Text from "../../components/Text";

export const Button = styled(ButtonOriginal)`
    width: 100%;
`; 

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Card = styled(CardOriginal)`
    display: flex;
    grid-column: 1;
    grid-row: 4 / 9;
    justify-self: center;
    width: 345px;

    @media (max-width: ${({theme}) => theme.tablet}) {
        width: 225px;
        @media (max-width: ${({theme}) => theme.mobile}) {
            padding: 12px 16px;
            grid-row: 4 / 10;
            width: min(200px, 90vw);
        }
    }
`;

export const CardInput = styled(InputOriginal)`
    width: 100%;

    &:nth-child(3) {
        margin-bottom: auto;
    }
`;

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const CenteredContainer = styled(SectionContainer)`
    align-items: center;
    text-align: center;
`

export const FooterContainer = styled(CenteredContainer)`
    background: linear-gradient(${({theme}) => theme.primaryColor}, ${({theme}) => theme.primaryColor_dark});
    display: flex;
    grid-column: 1;
    grid-row: 8 / 12;
    height: 100%;
    z-index: -1;

    @media (max-width: ${({theme}) => theme.mobile}) {
        grid-row: 9 / 14;
    }
`;

export const FooterSection = styled(CenteredContainer)`
    padding: 30px 0;

    @media(max-width: ${({theme}) => theme.tablet}) {
        padding: 15px 0;
    }
`

export const FooterText = styled(Text)`
    color: ${({theme}) => theme.white100};

    @media(max-width: ${({theme}) => theme.tablet}) {
        font-size: ${({theme}) => theme.fs_small};

        @media (max-width: ${({theme}) => theme.mobile}) {
            font-size: ${({theme}) => theme.fs_verySmall};
        }
    }
`;

export const InputsContainer = styled(ButtonContainer)`
    margin-bottom: auto;
`;

export const LoginContainer = styled.div`
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: repeat(10, 80px) calc(100% - 800px);
    min-height: 100vh;

    @media (max-width: ${({theme}) => theme.mobile}) {
        grid-template-rows: repeat(12, 70px) calc(100% - 840px);
    }
`;

    // max-width: 250px;
    // min-width: 140px;
export const Logo = styled(LogoOriginal)`
    height: auto;
    width: 220px;

    @media (max-width: ${({theme}) => theme.tablet}) {
        width: 180px;

        @media (max-width: ${({theme}) => theme.mobile}) {
            width: 140px;
        }
    }
`

export const LogoContainer = styled(CenteredContainer)`
    grid-row: 1 / 4;
    height: 100%;
    justify-content: center;
`;

export const Subtitle = styled(Text)`
    color: ${({theme}) => theme.black60};

    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: ${({theme}) => theme.fs_small}
    }
`;

export const SubtitleContainer = styled.div`
    padding: 0 12px;

    @media(max-width: ${({theme}) => theme.tablet}) {
        padding: 0 6px;
    }
`

export const Title = styled(Text)`
    align-self: center;
    font-size: ${({theme}) => theme.fs_big};
    font-weight: ${({theme}) => theme.semiBold};
    margin-bottom: 12px;
    text-transform: uppercase;
`;

export const TopFooterSection = styled(FooterSection)`
    border-bottom: 1px solid white;
    flex: 1;
    justify-content: center;
    padding-top: 80px;
    text-align: center;

`;
