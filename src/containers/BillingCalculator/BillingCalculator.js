import {useState} from 'react';

import React from 'react';
import './BillingCalculator.css';
import EqualMethodCalculator from "../EqualMethodCalculator/EqualMethodCalculator";
import IndividualMethodCalculator from "../IndividualMethodCalculator/IndividualMethodCalculator";

const BillingCalculator = () => {
    const [billingMethod, setBillingMethod] = useState('equal');

    const onRadioChange = e => {
        setBillingMethod(e.target.value);
    };

    return (
        <div className="BillingCalculator">
            <p>Сумма заказа считается:</p>
            <label className="MethodOptionLabel">
                <input
                    className="MethodOptionInput"
                    type="radio"
                    checked={billingMethod === 'equal'}
                    name="billingMethod"
                    value="equal"
                    onChange={onRadioChange}
                />
                Поровну между всеми участниками
            </label>
            <label className="MethodOptionLabel">
                <input
                    className="MethodOptionInput"
                    type="radio"
                    checked={billingMethod === 'individual'}
                    name="billingMethod"
                    value="individual"
                    onChange={onRadioChange}
                />
                Каждому индивидуально
            </label>
            <div>
                {billingMethod === "equal" ? (
                    <EqualMethodCalculator />
                ) : (
                    <IndividualMethodCalculator />
                )}
            </div>
        </div>
    );
};

export default BillingCalculator;
