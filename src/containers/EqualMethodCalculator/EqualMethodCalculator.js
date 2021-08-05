import {useState} from 'react';
import {nanoid} from "nanoid";

import React from 'react';
import EqualMethodForm from "../../components/EqualMethodForm/EqualMethodForm";

const EqualMethodCalculator = () => {
    const [inputFields, setInputFields] = useState([
        {name: 'Человек', count: 0, unit: 'чел.', id: nanoid(),},
        {name: 'Сумма заказа', count: 0, unit: 'сом', id: nanoid(),},
        {name: 'Процент чаевых', count: 0, unit: '%', id: nanoid(),},
        {name: 'Доставка', count: 0, unit: 'сом', id: nanoid(),},
    ]);

    const onInputChange = (id, count, value) => {
        setInputFields(inputFields => {
            return inputFields.map(inputField => {
                if (inputField.id === id) {
                    return {...inputField, count: value}
                }

                return inputField;
            });
        });
    };

    return (
        <>
            <EqualMethodForm
                onChange={onInputChange}
                inputFields={inputFields}
            />
        </>
    );
};

export default EqualMethodCalculator;
