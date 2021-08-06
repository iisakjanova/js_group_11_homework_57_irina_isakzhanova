import React from 'react';
import GuestInputField from "../GuestInputField";
import './IndividualMethodForm.css';
import InputField from "../InputField";

const IndividualMethodForm = props => {
    return (
        <div className="IndividualFormBlock">
            <form>
                {Object.values(props.guests).map(guest => (
                    <GuestInputField
                        key={guest.id}
                        guest={guest}
                        onGuestChange={props.onGuestChange}
                    />
                ))}
                <button
                    className="AddGuestBtn"
                    type="button"
                    onClick={props.onAddGuest}
                >
                    Добавить посетителя
                </button>
                {Object.values(props.inputFields).map(inputField => (
                    <InputField
                        key={inputField.id}
                        inputField={inputField}
                    />
                ))}
                <button
                    type="button"
                >
                    Рассчитать
                </button>
            </form>
        </div>
    );
};

export default IndividualMethodForm;
