export const storageType = 'localStorage';

export const storageKey = {
    TOKEN: 'token-LedProAdmin',
    USERDATA:"user-data",
    USERPHONE:"user-phone",
    USERID:"user_id",
    firstDate:"firstDate",
    lastDate:"lastDate"
};

export const clearData = () => {
    localStorage.clear();
}

export const setStorageData = (storage, key, data) => {
    if (storage === storageType) {
        localStorage.setItem(key, data);
    } else {
        sessionStorage.setItem(key, data);
    }
};

export const getStorageData = (storage, key) => {
    if (storage === storageType) {
        return localStorage.getItem(key);
    } else {
        return sessionStorage.getItem(key);
    }
};