import styled from "styled-components";
import {SectionContainer} from "../styles";
import Text from "../../Text";

/* TopInfo */
export const TopInfoContainer = styled(SectionContainer)`
    display: flex;
    align-items: center;
`;

export const InputLabel = styled(Text)`
    margin-right: 4px;
`; 

export const TooltipContainer = styled.div`
    position: relative;
    display: flex;
`;

export const TipContainer = styled.div`
    position: absolute;
    left: 15px;
    bottom: 13px;
    z-index: 1;
    background: gray;
    color: white;
    padding: 5px;
    border-radius: 6px 6px 6px 0px;
    visibility: ${({visible}) => visible ? "visible" : "hidden"}
`;

