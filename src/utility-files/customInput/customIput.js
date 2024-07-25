import React from 'react'
import * as Constants from '../../constant/constant';
import * as DataHandler from "../data-util/DataHandler";

function CustomInput(props) {
    const {
        fieldType,
        setFieldData,
        dataList,
        maxCharacterLength,
        valueKey,
        optionsKey,
        multipleOptions,
        allowSpecialCharacters,
        minNumberValue,
        ...rest
    } = props;

    const handleInputValues = (inputField, key, data) => {
        let maxLength, dataHandler;
        if (maxCharacterLength) {
            maxLength = (data?.length <= DataHandler.isIntegerValue(maxCharacterLength));
        } else {
            maxLength = data?.length <= DataHandler.max_text_length;
        };

        dataHandler = allowSpecialCharacters ? data : data.replace(/[^\w\s]/gi, "").replace("_", "");

        switch (inputField) {
            case 'percentage':
                if (maxLength && parseInt(minNumberValue) !== 0 && parseInt(data[0]) !== 0) {
                    setFieldData(state => ({ ...state, [key]: dataHandler.replace(/(\.\d{2})\d+/g, '$1') }));
                } else if (maxLength && parseInt(minNumberValue) === 0) {
                    setFieldData(state => ({ ...state, [key]: dataHandler.replace(/(\.\d{2})\d+/g, '$1') }));
                };
                break;
            case 'color':
                setFieldData(state => ({ ...state, [key]: data }));
                break;
            case 'url':
                var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.))?(\\?(.))?");
                if (maxLength) {
                    setFieldData(state => ({ ...state, [key]: data, [DataHandler.validationKey(key)]: regex.test(data.toLowerCase()) }));
                }
                break;
            case 'text':
                if (key === 'password' && maxLength) {
                    setFieldData(state => ({ ...state, [key]: data, [DataHandler.validationKey(key)]: Constants.strongRegularExp?.test(data) }));
                } else if (maxLength) {
                    setFieldData(state => ({ ...state, [key]: dataHandler }));
                }
                break;
            case 'number':
                if (/^[0-9\b]+$/.test(DataHandler.isIntegerValue(parseInt(data))) || data === '') {
                    if (maxLength && parseInt(minNumberValue) !== 0 && parseInt(data[0]) !== 0) {
                        setFieldData(state => ({ ...state, [key]: data, [DataHandler.validationKey(key)]: (data.length >= 10 && data.length <= 15) }));
                    } else if (maxLength && parseInt(minNumberValue) === 0) {
                        setFieldData(state => ({ ...state, [key]: data, [DataHandler.validationKey(key)]: (data.length >= 10 && data.length <= 15) }));
                    };
                };
                break;
            case 'password':
                if (maxLength) {
                    setFieldData(state => ({ ...state, [key]: data, [DataHandler.validationKey(key)]: Constants.strongRegularExp?.test(data) }));
                }
                break;
            case 'email':
                if (maxLength) {
                    setFieldData(state => ({ ...state, [key]: data, [DataHandler.validationKey(key)]: Constants.vEmail?.test(data) }));
                }
                break;
            case 'checkbox':
                setFieldData(state => ({ ...state, [key]: !data }));
                break;
            default:
                if (key && maxLength) {
                    setFieldData(state => ({ ...state, [key]: data }));
                }
                break;
        };
    };

    const handleOnChange = (fieldType, event) => {
        const { id, value } = event.target;
        handleInputValues(fieldType, id, value)
    };

    const inputValues = () => {
        if (fieldType === "email") {
            return <input
                type="email"
                onChange={(event) => handleOnChange(fieldType, event)}
                {...rest}
            />
        };

        if (fieldType === "color") {
            return <input
                type="color"
                onChange={(event) => handleOnChange(fieldType, event)}
                {...rest}
            />
        };

        if (fieldType === "checkbox") {
            return <input
                type="checkbox"
                onChange={(event) => handleOnChange(fieldType, event)}
                {...rest}
            />
        };

        if (fieldType === "password") {
            return <input
                type="password"
                onChange={(event) => handleOnChange(fieldType, event)}
                {...rest}
            />
        };

        if (fieldType === "text") {
            return <input
                type="text"
                onChange={(event) => handleOnChange(fieldType, event)}
                {...rest}
            />
        };

        if (fieldType === "percentage") {
            var invalidChars = [
                "-",
                "+",
                "e",
                "E"
            ];
            return <input
                type="number"
                min={DataHandler.isStringValue(minNumberValue)}
                step="any"
                onChange={(event) => handleOnChange(fieldType, event)}
                onKeyDown={(e) => {
                    if (invalidChars.includes(e.key)) {
                        e.preventDefault();
                    }
                }}
                {...rest}
            />
        };

        if (fieldType === "url") {
            return <input
                type="url"
                onChange={(event) => handleOnChange(fieldType, event)}
                {...rest}
            />
        };

        if (fieldType === "number") {
            var invalidChars = [
                ".",
                "-",
                "+",
                "e",
                "E"
            ];
            return <input
                type="number"
                min={DataHandler.isStringValue(minNumberValue)}
                onChange={(event) => handleOnChange(fieldType, event)}
                onKeyDown={(e) => {
                    if (invalidChars.includes(e.key)) {
                        e.preventDefault();
                    }
                }}
                {...rest}
            />
        };

        if (fieldType === "date") {
            return <input
                type="date"
                onChange={(event) => handleOnChange(fieldType, event)}
                {...rest}
            />
        };

        if (fieldType === "search") {
            return <input
                type="search"
                onChange={(event) => handleOnChange(fieldType, event)}
                {...rest}
            />
        };
    };

    return (<> {inputValues()} </>)
}

export default CustomInput