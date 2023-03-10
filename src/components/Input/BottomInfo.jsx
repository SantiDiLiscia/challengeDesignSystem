import {useEffect, useState} from "react";
import {
    BottomInfoContainer,
    HelperText,
    ErrorText,
    CharCount,
} from "./styles";

function BottomInfo({helperText, inputStatus, inputVal = "", charLimit, errorMsg}) {
    const [chars, setChars] = useState(inputVal.length);

    useEffect(() => {setChars(inputVal.length)}, [inputVal])

    return (
        <BottomInfoContainer>
            {errorMsg && inputStatus === "error" 
                ? <ErrorText>{errorMsg}</ErrorText>
                :  <HelperText>{helperText}</HelperText>
            }
            {charLimit
                ? <CharCount>{`${chars}/${charLimit}`}</CharCount>
                : null
            }
        </BottomInfoContainer>
    )
};

export default BottomInfo;