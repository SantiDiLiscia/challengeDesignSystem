import {useState} from "react";

import {
    TextInputContainer, 
    PreLabel, 
    MainLabelText,
    PostLabel,
    StatusIconContainer,
    EyeIcon,
    ClearButton
} from "./styles";

import StatusIcon from "./StatusIcon";

function TextInputComponent(props) {
    const {
        inputName,
        inputType = "text",
        inputStyle,
        onBlur,
        onChange,
        onFocus,
        placeholder,
        post,
        pre,
        delInputVal,
        disabled,
        charLimit: maxLength,
        inputStatus,
    } = props;
    const [pasVis, setPasVis] = useState(inputType);

    function togglePasVis(e) {
        e.preventDefault();
        setPasVis(prevVal => prevVal === "text" ? "password" : "text");
    };

    function handleDel(e) {
        e.preventDefault();
        delInputVal();
    }

    return (
        <TextInputContainer {...{inputStyle, inputStatus}}>
            {pre && <PreLabel>{pre}</PreLabel>}
            <MainLabelText 
                {...props}
                type={pasVis}
                autocomplete="false"
                list="autocompleteOff" 
                name={inputName}
                {...{
                    disabled,
                    maxLength,
                    onBlur,
                    onChange,
                    onFocus,
                    placeholder
                }} 
            />
            {post && <PostLabel>{post}</PostLabel>}
            <StatusIconContainer >
                {inputType === "password" && 
                <ClearButton>
                    <EyeIcon 
                    onMouseDown={togglePasVis}
                    />
                </ClearButton>
                }
                <ClearButton>
                    <StatusIcon {...{inputStatus, handleDel}} />
                </ClearButton>
            </StatusIconContainer>
        </TextInputContainer>
    )
};

export default TextInputComponent;