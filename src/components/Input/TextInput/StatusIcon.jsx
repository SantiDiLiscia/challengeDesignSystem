import {ReactComponent as CrossIcon} from "../../../assets/icons/cross.svg"; 
import {ReactComponent as WarnIcon} from "../../../assets/icons/warn.svg"; 
import {ReactComponent as CheckIcon} from "../../../assets/icons/check.svg"; 

function StatusIcon({inputStatus, handleDelete}) {
    switch(inputStatus){
        case "active":
            return <CrossIcon onMouseDown={handleDelete} />
        case "error":
            return <WarnIcon />;
        case "success":
            return <CheckIcon />;
        default: // resting
            return null; 
    }
}

export default StatusIcon;