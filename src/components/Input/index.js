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
    charLimit,
    disabled: isDisabled,
    errorMsg,
    helperText,
    inputStyle,
    inputType,
    labelName,
    name: inputName,
    onBlur,
    onChange,
    onDelete,
    placeholder,
    post,
    pre,
    readOnly: isReadOnly,
    startingStatus,
    tip,
    value: inputValProps,
  } = props;
    const [inputVal, setInputVal] = useState("");
    const [inputStatus, setInputStatus] = useState(startingStatus);

    useEffect(() => {
      if (isDisabled) {
        setInputStatus(DISABLED)
      } else if (isReadOnly) {
        setInputStatus(READ_ONLY)
      };

    }, [isDisabled, isReadOnly]);

    function handleFocus() {
      setInputStatus(ACTIVE);
    };

    function handleBlur(e) {
      setInputStatus(RESTING);

      if(typeof onBlur === 'function') onBlur(e);
    };

    function delInputVal() {
        setInputVal("");

        if(typeof onDelete === 'function') onDelete(inputName);
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
        {...props}
        {...{
            inputName,
            inputType,
            inputStatus,
            inputStyle,
            onBlur: handleBlur,
            onChange: handleChange,
            onFocus: handleFocus,
            placeholder,
            post,
            pre,
            charLimit,
            delInputVal,
            disabled: (isDisabled || isReadOnly),
            value: (inputValProps ? inputValProps : inputVal),
        }}
        />

        <BottomInfo {...{
          helperText,
          errorMsg,
          inputVal, 
          inputStatus,
          charLimit
        }}/>

    </Label>
  )
};

export default InputComponent;
