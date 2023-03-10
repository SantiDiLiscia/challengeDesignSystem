import { TopInfoContainer, InputLabel } from "./styles";
import Tooltip from "./Tooltip";

function TopInfo({labelName, tip}) {
    return (
        <TopInfoContainer>
            <InputLabel>{labelName}</InputLabel>
            <Tooltip message={tip}/>
        </TopInfoContainer>
    )
};

export default TopInfo;