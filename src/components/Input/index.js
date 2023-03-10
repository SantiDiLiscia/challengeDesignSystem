import {useEffect, useState} from "react";
import {Label} from "./styles";
import TopInfo from "./TopInfo";
import TextInput from "./TextInput";
import BottomInfo from "./BottomInfo";
import inputStates from "./inputStates";

const {
    RESTING,
    ACTIVE,
    DISABLED,
    READ_ONLY,
} = inputStates;

function InputComponent(props) {
  const {
    maxLength,
    disabled,
    readOnly,
    errorMsg,
    helperText,
    inputStyle,
    type,
    labelName,
    name,
    onBlur,
    onChange,
    onDelete,
    placeholder,
    post,
    pre,
    startingStatus,
    tip,
    value = "",
    ...restOfProps
  } = props;
    const [inputVal, setInputVal] = useState("");
    const [inputStatus, setInputStatus] = useState(startingStatus);

    useEffect(() => {
      if (disabled) {
        setInputStatus(DISABLED)
      } else if (readOnly) {
        setInputStatus(READ_ONLY)
      };

    }, [disabled, readOnly]);

    useEffect(() => {
      setInputVal(value);
    }, [value])

    function handleFocus() {
      setInputStatus(ACTIVE);
    };

    function handleBlur(e) {
      setInputStatus(RESTING);
      if(typeof onBlur === 'function') onBlur(e);
    };

    function handleDelete(e) {
        e.preventDefault();
        setInputVal("");
        if(typeof onDelete === 'function') onDelete(name);
    };

    function handleChange(e) {
        const {target} = e || {};
        const {value = ""} = target;
        setInputVal(value)
        if(typeof onChange === 'function') onChange(e);
    };

  return (
    <Label>
        <TopInfo {...{
          labelName, 
          tip
          }} />

        <TextInput 
        {...restOfProps}
        {...{
            name,
            type,
            inputStatus,
            inputStyle,
            onBlur: handleBlur,
            onChange: handleChange,
            onFocus: handleFocus,
            placeholder,
            post,
            pre,
            maxLength,
            handleDelete,
            disabled: (disabled || readOnly),
            value: inputVal,
        }}
        />

        <BottomInfo {...{
          helperText,
          errorMsg,
          inputVal, 
          inputStatus,
          maxLength
        }}/>

    </Label>
  )
};

export default InputComponent;
