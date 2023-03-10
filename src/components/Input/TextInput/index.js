import {useState} from "react";

import {
    ClearButton,
    EyeIcon,
    MainLabelText,
    PostLabel,
    PreLabel,
    StatusIconContainer,
    TextInputContainer
} from "./styles";

import StatusIcon from "./StatusIcon";

function TextInputComponent(props) {
    const {
        handleDelete,
        disabled,
        inputStatus,
        inputStyle,
        maxLength,
        name,
        onBlur,
        onChange,
        onFocus,
        placeholder,
        post,
        pre,
        type: startingType,
        ...restOfProps
    } = props;

    const [type, setType] = useState(startingType);

    function togglePassVis(e) {
        e.preventDefault();
        setType(prevVal => prevVal === "text" ? "password" : "text");
    };

    return (
        <TextInputContainer {...{inputStyle, inputStatus}}>
            {pre && <PreLabel>{pre}</PreLabel>}
            <MainLabelText 
                {...restOfProps}
                {...{
                    disabled,
                    maxLength,
                    name,
                    onBlur,
                    onChange,
                    onFocus,
                    placeholder,
                    type,
                }} 
            />
            {post && <PostLabel>{post}</PostLabel>}
            <StatusIconContainer >
                {startingType === "password" &&
                <ClearButton>
                    <EyeIcon onMouseDown={togglePassVis} />
                </ClearButton>}
                <ClearButton>
                    <StatusIcon {...{inputStatus, handleDelete}} />
                </ClearButton>
            </StatusIconContainer>
        </TextInputContainer>
    )
};

export default TextInputComponent;