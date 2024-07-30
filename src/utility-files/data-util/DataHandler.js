import { strongRegularExp, vEmail } from "../../constant/constnat";

const max_text_length = 50;
const min_number_value = 1;
const max_number_length = 15;
const max_address_description_length = 100;
const max_employee_code_length = 7;
const max_experience_length = 2;
const max_amount_length = 12;

const isTextData = (event) => {
    if (event && event?.length <= 50) {
        return true;
    } else {
        return false;
    };
};

const isNumberData = (event) => {
    if (/^[0-9\b]+$/.test(isIntegerValue(event)) || event === '') {
        return true;
    } else {
        return false;
    };
};

const isContactValid = (event) => {
    return (event?.length >= 10 && event?.length <= 15)
};

const isEmailData = (event) => {
    if (vEmail?.test(event)) {
        return true;
    } else {
        return false;
    }
};

const isPasswordData = (event) => {
    if (strongRegularExp?.test(event)) {
        return true;
    } else {
        return false;
    }
};

const handleTextValue = (event) => {
    event = event.replace(/[^\w\s]/gi, "")
    event = event.replace("_", "");
    return isStringValue(event);
};

const isStringValue = (event) => {
    if (event) {
        return event?.toString();
    } else {
        return ''
    };
};

const isIntegerValue = (event) => {
    if ((event)) {
        return parseInt(event);
    } else {
        return 0;
    };
};

const isArrayValue = (value) => {
    if (value && value?.length !== 0) {
        return value;
    } else {
        return [];
    };
};

const isObjectValue = (value) => {
    if (value && Object.keys(value)?.length !== 0) {
        return value;
    } else {
        return {};
    };
};

const isBooleanValue = (value) => {
    if (value && value === true) {
        return true;
    } else {
        return false;
    };
};


export const minifyFileName = (filename) => {
    if (filename) {
        const extension = filename.split('.').pop();
        let result = filename.split('.').slice(0, -1).join('.');
        return (result.length > 10 ? result.substring(0, 10) : result) + "." + extension;
    };
};

const validationKey = (value) => {
    return 'is' + value.charAt(0).toUpperCase() + value.slice(1) + 'Valid';
};
const formatter = new Intl.NumberFormat('en-IN', {
    style: "currency", currency: "INR"
});

const formattAmount = (value) => {
    value = isNaN(parseInt(value)) ? '0' : value;
    return formatter.format(value)
};

function percentageFormatter(num) {
    return `${parseFloat(num).toFixed(2)}%`;
}

function taxCalculate(taxPercentage, amount) {
    return ((taxPercentage / 100) * amount).toFixed(2);
};

export {
    isTextData,
    handleTextValue,
    isStringValue,
    isNumberData,
    isIntegerValue,
    isPasswordData,
    isEmailData,
    isArrayValue,
    isObjectValue,
    isBooleanValue,
    validationKey,
    formattAmount,
    max_text_length,
    min_number_value,
    max_number_length,
    max_address_description_length,
    max_employee_code_length,
    max_experience_length,
    max_amount_length,
    isContactValid,
    percentageFormatter,
    taxCalculate
}