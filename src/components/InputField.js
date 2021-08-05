import React from 'react';

const InputField = props => {
    return (
        <label className="InputFieldLabel">
            <span className="InputFieldName">{props.inputField.name}</span>
            <input
                className="InputField"
                value={props.inputField.count}
                onChange={e => props.onChange(props.inputField.type, e.target.value)}
            />
            <span className="InputFieldUnit">{props.inputField.unit}</span>
        </label>
    );
};

export default InputField;
