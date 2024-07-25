import moment from 'moment';
import { isStringValue } from '../data-util/DataHandler';

 const GET_DISPLAY_DATE_FORMAT = 'DD-MMM-YYYY';
 const GET_DISPLAY_DATE = 'YYYY-MMM-DD';
  const GET_DISPLAY_TIME_FORMAT = 'LT';

 const getDateFormat = (data) => {
    if (isStringValue(data)) {
        return moment(new Date(data)).format(GET_DISPLAY_DATE_FORMAT);
    } else {
        return '';
    }
};
 const getDateCalender = (data) => {
    if (isStringValue(data)) {
        return moment(new Date(data)).format(GET_DISPLAY_DATE);
    } else {
        return '';
    }
};

 const notificationTime = (data) => {
    if (isStringValue(data)) {
        return moment(new Date(data)).fromNow();
    } else {
        return ''
    }
}

 const getTimeFormat = (data) => {
    if (isStringValue(data)) {
        return moment(new Date(data)).format(GET_DISPLAY_TIME_FORMAT);
    } else {
        return '';
    }
};

 const getDateWithTimeFormat = (data) => {
    if (isStringValue(data)) {
        return `${moment(new Date(data)).format(GET_DISPLAY_DATE_FORMAT)} ${moment(new Date(data)).format(GET_DISPLAY_TIME_FORMAT)}`;
    } else {
        return '';
    }
};


const getCurrentDate = (data) => {
    return moment().format(GET_DISPLAY_DATE_FORMAT);
};

 const addDaysToDate = (date, numOfDays, dateFormat) => {
    if (dateFormat) {
        let newdate = moment(new Date(date)).add(numOfDays, 'd').toDate();
        return moment(newdate).format(dateFormat);
    } else {
        return moment(new Date(date)).add(numOfDays, 'd').toDate();
    }
};





export {
    GET_DISPLAY_DATE_FORMAT,
    GET_DISPLAY_TIME_FORMAT,
    getDateFormat,
    notificationTime,
    getTimeFormat,
    getDateWithTimeFormat,
    getCurrentDate,
    addDaysToDate,
    getDateCalender
}