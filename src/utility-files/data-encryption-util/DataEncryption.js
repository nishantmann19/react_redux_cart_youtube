
export const encryptData = (data) => {
    return window.btoa(data);
};

export const decryptData = (data) => {
    return window.atob(data);
};