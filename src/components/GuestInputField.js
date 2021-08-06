import React from 'react';

const GuestInputField = props => {
    return (
        <div className="GuestInputField">
            <input
                type="text"
                placeholder="Имя"
                value={props.guest.name}
                onChange={e => props.onGuestChange(props.guest.id, 'name', e.target.value)}
            />
            <label>
                <input
                    type="number"
                    placeholder="Сумма"
                    value={props.guest.amount}
                    onChange={e => props.onGuestChange(props.guest.id, 'amount', e.target.value)}
                /> сом
            </label>
            <button type="button">Удалить</button>
        </div>
    );
};

export default GuestInputField;
