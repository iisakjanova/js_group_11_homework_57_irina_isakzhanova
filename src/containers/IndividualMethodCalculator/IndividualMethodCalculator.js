import {useState} from 'react';
import {nanoid} from "nanoid";

import React from 'react';
import IndividualMethodForm from "../../components/IndividualMethodForm/IndividualMethodForm";

const IndividualMethodCalculator = () => {
    const [guests, setGuests] = useState({});

    const [inputFields, setInputFields] = useState({
        'serviceRate': {type: 'serviceRate', name: 'Процент чаевых', count: 15, unit: '%', id: nanoid(),},
        'delivery': {type: 'delivery', name: 'Доставка', count: 0, unit: 'сом', id: nanoid(),},
    });

    const addGuest = () => {
        setGuests(guests => {
            const id = nanoid();

            return {
                ...guests,
                [id]: {name: '', amount: '', id,}
            };
        });
    };

    return (
        <div>
            <IndividualMethodForm
                inputFields={inputFields}
                guests={guests}
                onAddGuest={addGuest}
            />
        </div>
    );
};

export default IndividualMethodCalculator;
