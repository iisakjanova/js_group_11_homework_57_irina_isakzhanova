import React, {useState} from 'react';
import './BillingCalculator.css';

const BillingCalculator = () => {
    const [billingMethod, setBillingMethod] = useState('equal');

    const onRadioChange = e => {
        setBillingMethod(e.target.value);
    };

    return (
        <div className="BillingCalculator">
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
            <p>
                {billingMethod === "equal" ? (
                    'Equal Form'
                ) : (
                    'Individual Form'
                )}
            </p>
        </div>
    );
};

export default BillingCalculator;
