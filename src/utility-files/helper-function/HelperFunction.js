import { isStringValue } from "../data-util/DataHandler";
const MIN_FILE_SIZE = 1024; // 1MB
const MAX_FILE_SIZE = 5120; // 5MB

const path = {
    LOGIN: '/login',
    HOME: '/',
    SIGNUP: '/signup'
};

const alertTypes = {
    INFO: 'info',
    SUCCESS: 'success',
    ERROR: 'error'
};

const alertMessages = {
    LOGGEDIN: 'User logged in successfully.',
    SIGNUP: 'User signed up successfully.',
    RESETPASSWORD: "Reset password link sent on your email.",
};

const errorMessages = {

    ENTER_VALID_EMAIL: "Please enter a valid email",
    ENTER_NAME: "Please enter your name",
    ENTER_CREDENTIALS: "Please enter a valid credentials",
    PASSWORD: 'Password length must be eight or more characters and must contain special characters.',
    SELECT_ITEM: "Please select the item",
    ENTER_EMAIL: " Please enter your Email",
    ENTER_PASSWORD: "Please enter your passsword",
    CONTACT_NUMBER : "Contact number must be  more than ten digit."
};

const copyText = (text) => {
    navigator.clipboard.writeText(text).then(function () {
    }, function (err) {
        console.error(err);
    });
};

const getBuffer = (buffer) => {
    let bufferNew = buffer?.split(",");
    if (bufferNew.length >= 1) {
        bufferNew = bufferNew[1];
    }
    return bufferNew;
};

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            let baseURL = fileReader.result
            resolve(baseURL);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

const handleLogOut = (reset) => {
    localStorage.clear();
    sessionStorage.clear();
    if (!reset) {
        window.location.href = path.HOME;
    }
};

const downloadXMLfile = (data, filename) => {
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(data);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const saveFile = (url, filename) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "file-name";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

const getUuid = () => {
    let firstHalf = Date.now().toString(36);
    let secondHalf = Math.random().toString(36).substring(2, 9);
    return firstHalf + secondHalf
};

const getHostUrl = () => {
    return window.location.origin
};

function openWindow(url) {
    window.open(isStringValue(url), "", "width=700,height=500");
};

function getFirstLetter(str) {
    var matches = str?.match(/\b(\w)/g); // ['J','S','O','N']
    var acronym = matches?.join(''); // JSON
    return acronym?.toUpperCase();
};

function capitalizeFirstLetter(str) {
    return str.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
};

function debounce(callback, delay) {
    let timer
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback();
        }, delay)
    }
}

// Utility function to strip HTML tags
  const stripHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

export {
  MIN_FILE_SIZE,
  MAX_FILE_SIZE,
  path,
  alertTypes,
  alertMessages,
  errorMessages,
  copyText,
  getBuffer,
  convertBase64,
  handleLogOut,
  downloadXMLfile,
  saveFile,
  getUuid,
  getHostUrl,
  openWindow,
  getFirstLetter,
  capitalizeFirstLetter,
  debounce,
  stripHtmlTags,
};