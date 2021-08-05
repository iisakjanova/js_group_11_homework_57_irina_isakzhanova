import React from 'react';

const InputField = props => {
    return (
        <label className="InputFieldLabel">
            <span className="InputFieldName">{props.inputField.name}</span>
            <input className="InputField" />
            <span className="InputFieldUnit">{props.inputField.unit}</span>
        </label>
    );
};

export default InputField;
