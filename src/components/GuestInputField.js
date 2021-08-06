import React from 'react';

const GuestInputField = () => {
    return (
        <div className="GuestInputField">
            <input
                type="text"
                placeholder="Имя"
            />
            <label>
                <input
                    type="number"
                    placeholder="Сумма"
                /> сом
            </label>
            <button type="button">Удалить</button>
        </div>
    );
};

export default GuestInputField;
