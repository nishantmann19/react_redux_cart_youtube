export const isNotUndefinedOrNull = (value) => {
    if (value !== null && value !== undefined) {
        return value
    }
};

export const isBooleanValue = (value) => {
    if (isNotUndefinedOrNull(value)) {
        return true;
    } else {
        return false;
    };
};

export const isStringValue = (value) => {
    if (isNotUndefinedOrNull(value)) {
        return value.toString();
    } else {
        return '';
    };
};

export const stringValueLowerCase = (value) => {
    return isStringValue(value).toLocaleLowerCase();
};

export const isIntegerValue = (value) => {
    if (isNotUndefinedOrNull(value)) {
        return parseInt(value);
    } else {
        return 0;
    };
};

export const isArrayValue = (value) => {
    if (isNotUndefinedOrNull(value) && value?.length !== 0) {
        return value;
    } else {
        return [];
    };
};

export const isObjectValue = (value) => {
    if (isNotUndefinedOrNull(value) && Object.keys(value)?.length !== 0) {
        return value;
    } else {
        return {};
    };
};

export const minifyFileName = (filename) => {
    if (filename) {
        const extension = filename.split('.').pop();
        let result = filename.split('.').slice(0, -1).join('.');
        return (result.length > 10 ? result.substring(0, 10) : result) + "." + extension;
    };
};

export const formatNumber = (value) => {
    if (typeof value !== 'number') {
      return 'N/A'; 
    }
    
    if (value >= 1000) {
      return (value / 1000).toFixed(2) + 'k';
    } else {
      return value.toFixed(2);
    }
  };