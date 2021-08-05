import React from 'react';
import './EqualMethodForm.css';
import InputField from "../InputField";

const EqualMethodForm = props => {
    return (
        <div className="EqualFormBlock">
            <form>
                {Object.values(props.inputFields).map(inputField => (
                    <InputField
                        key={inputField.id}
                        inputField={inputField}
                        onChange={props.onChange}
                    />
                ))}
                <button
                    type="button"
                    onClick={() => props.onButtonClick()}
                >
                    Рассчитать
                </button>
            </form>
        </div>
    );
};

export default EqualMethodForm;
