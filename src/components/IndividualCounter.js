import React from 'react';

const IndividualCounter = props => {
    if (props.total === 0) {
        return null;
    }

    const getOneGuestTotal = (value) => {
        const amount = value === "" ? 0 : parseInt(value);
        const serviceRate = props.inputFields.serviceRate.count === ""
            ? 0
            : parseInt(props.inputFields.serviceRate.count);
        const delivery = props.inputFields.delivery.count === ""
            ? 0
            : parseInt(props.inputFields.delivery.count);
        const validGuests = Object.values(props.guests)
            .filter(({name, amount}) => Boolean(name) && Boolean(amount));

        const deliveryForOneGuest = delivery / validGuests.length;
        const service = amount * serviceRate / 100;
        return Math.ceil(amount + service + deliveryForOneGuest);
    };

    return (
        <div>
            <p>Общая сумма: <b>{props.total} сом</b></p>
            {Object.values(props.guests)
                .filter(({name, amount}) => Boolean(name) && Boolean(amount))
                .map(guest => (
                    <p key={guest.id}>
                        {guest.name}: <b>{getOneGuestTotal(guest.amount)}</b>
                    </p>
                ))}
        </div>
    );
};

export default IndividualCounter;
