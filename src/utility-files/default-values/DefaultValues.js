export const IMAGE = "image/x-png,image/gif,image/jpeg,image/webp";
export const ATTACHMENTS = "application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";
export const CSV = ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
export const  ImagebaseUrl = "https://staging.shoobill.me:3006/media/users/";


export const PLACE_HOLDER_TEXT = {
    email: "Enter your email here",
    contactNumber: "Enter your contact number here",
    password: "Enter your password here",
    newPassword: 'Enter your new password',
    confirmPassword: 'Please confirm your new password',
    wallet_Name: "Enter your wallet name here",
    item_name: "Enter item name",
    serial_no: "Enter serial number",
    identifier: 'Enter a value',
    description: 'Enter description here',
    skuCode: 'Enter sku code here',
    upcCode: 'Enter upc code here',
    otp: 'Enter OTP here',
    CURRENT_PASSWORD: "Current Password",
    notes: 'Enter notes here',
};

export const IMAGE_TYPES = {
LOAD_GIF :require("../../images/Double.gif")
}

export const DEFAULT_HOLDER_VALUES = {
    loading: 'Please wait...',
};

export const DEFAULT_MESSAGE = {
    DELETE: 'Are you sure you want to delete this item?',
    ARCHIEVE: 'Are you sure you want to archive this message?'
};

export const FILTER_LIST = [
    {
        id: '2',
        name: 'All'
    },
    {
        id: '0',
        name: 'Recently added'
    },
    {
        id: '1',
        name: 'Last Month'
    },
];

export const LABEL_TYPES = [
    {
        id: '',
        name: 'Select Label'
    },
    {
        id: 'text',
        name: 'Text'
    },
    {
        id: 'number',
        name: 'Number'
    },
    {
        id: 'password',
        name: 'Password'
    },
    {
        id: 'email',
        name: 'Email'
    },
    {
        id: 'checkbox',
        name: 'Checkbox'
    },
    {
        id: 'radio',
        name: 'Radio'
    }
];


export const PATH_SLUG = {
    MESSAGE_DETAIL: "/:messageId",
    CONFIRM_PASSWORD : '/:email',
    ACCEPT_INVITE:'/:inviteCode/:email'
};

export const PATH = {
    MESSAGE_DETAIL: "/message-details",
    CONFIRM_PASSWORD: "/confirm_password",
    ACCEPT_INVITE:"/accept_invite"
}
