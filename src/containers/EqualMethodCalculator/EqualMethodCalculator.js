import {useState} from 'react';
import {nanoid} from "nanoid";

import React from 'react';
import EqualMethodForm from "../../components/EqualMethodForm/EqualMethodForm";
import EqualCounter from "../../components/EqualCounter";

const EqualMethodCalculator = () => {
    const [inputFields, setInputFields] = useState({
        'people': {type: 'people', name: 'Человек', count: 0, unit: 'чел.', id: nanoid(),},
        'orderAmount': {type: 'orderAmount', name: 'Сумма заказа', count: 0, unit: 'сом', id: nanoid(),},
        'serviceRate': {type: 'serviceRate', name: 'Процент чаевых', count: 15, unit: '%', id: nanoid(),},
        'delivery': {type: 'delivery', name: 'Доставка', count: 0, unit: 'сом', id: nanoid(),},
    });

    const [billing, setBilling] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const onInputChange = (type, value) => {
        setInputFields(inputFields => (
            {
                ...inputFields,
                [type]: {...inputFields[type], count: value}
            }
        ));
    };

    const getTotal = () => {
        const amount = parseInt(inputFields.orderAmount.count);
        const serviceRate = parseInt(inputFields.serviceRate.count);
        const service = Math.ceil(amount * (serviceRate / 100));
        const delivery = parseInt(inputFields.delivery.count);
        return amount + service + delivery;
    };

    const getQuantity = () => {
        return parseInt(inputFields.people.count);
    };

    const getBillingForOnePerson = (total, quantity) => {
        return Math.ceil(total / quantity);
    };

    const buttonCountHandler = () => {
        const total = getTotal();
        const quantity = getQuantity();
        const onePersonAmount = getBillingForOnePerson(total, quantity);

        if (total > 0 && quantity > 0 && onePersonAmount > 0) {
            setBilling({total, quantity, onePersonAmount,});
            setErrorMessage('');
        } else {
            setErrorMessage('Введены некорректные данные!');
            setBilling({});
        }
    };

    return (
        <>
            <EqualMethodForm
                onChange={onInputChange}
                inputFields={inputFields}
                onButtonClick={buttonCountHandler}
            />
            <p className="ErrorMessage">{errorMessage}</p>
            <EqualCounter
                billing={billing}
            />
        </>
    );
};

export default EqualMethodCalculator;
