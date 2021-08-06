import {useState} from 'react';
import {nanoid} from "nanoid";

import React from 'react';
import IndividualMethodForm from "../../components/IndividualMethodForm/IndividualMethodForm";
import IndividualCounter from "../../components/IndividualCounter";

const IndividualMethodCalculator = () => {
    const [guests, setGuests] = useState({});
    const [resultGuests, setResultGuests] = useState({});

    const [inputFields, setInputFields] = useState({
        'serviceRate': {type: 'serviceRate', name: 'Процент чаевых', count: 15, unit: '%', id: nanoid(),},
        'delivery': {type: 'delivery', name: 'Доставка', count: 0, unit: 'сом', id: nanoid(),},
    });

    const [resultInputFields, setResultInputFields] = useState({});
    const [resultTotal, setResultTotal] = useState(0);

    const addGuest = () => {
        setGuests(guests => {
            const id = nanoid();
            return {
                ...guests,
                [id]: {name: '', amount: '', id,}
            };
        });
    };

    const onGuestInputChange = (id, type, value) => {
        setGuests(guests => (
            {
                ...guests,
                [id]: {...guests[id], [type]: value}
            }
        ));
    };

    const removeGuest = (id) => {
        setGuests(guests => {
            const {[id]: _, ...newGuests} = guests;
            return newGuests;
        });
    };

    const inputChange = (type, value) => {
        if (value >= 0) {
            setInputFields(inputFields => (
                {
                    ...inputFields,
                    [type]: {...inputFields[type], count: value}
                }
            ));
        }
    };

    const getTotal = () => {
        const deliveryTotal = inputFields.delivery.count === ""
            ? 0
            : parseInt(inputFields.delivery.count);
        const serviceRate = inputFields.serviceRate.count === ""
            ? 0
            : parseInt(inputFields.serviceRate.count);

        const amountTotal = Object.values(guests)
            .filter(({ name, amount }) => Boolean(name) && Boolean(amount))
            .reduce((acc, guest) => {
                const guestAmount = guest.amount === ""
                    ? 0
                    : parseInt(guest.amount);

                return acc + guestAmount;
            }, 0);

        const serviceTotal = amountTotal * serviceRate / 100;

        const total = Math.ceil(amountTotal + serviceTotal + deliveryTotal);

        setResultGuests({...guests});
        setResultTotal(total);
        setResultInputFields({...inputFields});
    };

    return (
        <div>
            <IndividualMethodForm
                inputFields={inputFields}
                guests={guests}
                onAddGuest={addGuest}
                onGuestChange={onGuestInputChange}
                onGuestRemove={removeGuest}
                onInputChange={inputChange}
                onButtonClick={getTotal}
            />
            <IndividualCounter
                guests={resultGuests}
                inputFields={resultInputFields}
                total={resultTotal}
            />
        </div>
    );
};

export default IndividualMethodCalculator;
