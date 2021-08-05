import React from 'react';
import './EqualMethodForm.css';
import InputField from "../InputField";

const EqualMethodForm = props => {
    return (
        <div className="EqualFormBlock">
            <form>
                {props.inputFields.map(inputField => (
                    <InputField
                        key={inputField.id}
                        inputField={inputField}
                        onChange={props.onChange}
                    />
                ))}
                <button type="button">Рассчитать</button>
            </form>
        </div>
    );
};

export default EqualMethodForm;
