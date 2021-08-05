import React from 'react';

const EqualCounter = ({billing}) => {
    if (Object.keys(billing).length === 0) {
        return null;
    }

    return (
        <div>
            <p>Общая сумма: <b>{billing.total} сом</b></p>
            <p>Количество человек: <b>{billing.quantity}</b></p>
            <p>Каждый платит по: <b>{billing.onePersonAmount} сом</b></p>
        </div>
    );
};

export default EqualCounter;