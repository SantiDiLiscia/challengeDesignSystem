import {useState} from "react";
import { ReactComponent as TooltipIcon } from "../../../assets/icons/info.svg";
import {TooltipContainer, TipContainer} from "./styles";

function Tooltip({message = null}) {

  const [showTip, setShowTip] = useState(false);

  if(message === null) return null;

  function handleHover(){ setShowTip(true); };
  function handleLeaveHover(){ setShowTip(false); };

  return (
    <TooltipContainer>
        <TipContainer visible={showTip}>{message}</TipContainer>

        <TooltipIcon
            onMouseEnter={handleHover}
            onMouseLeave={handleLeaveHover}
        />
    </TooltipContainer>
  )
};

export default Tooltip;
