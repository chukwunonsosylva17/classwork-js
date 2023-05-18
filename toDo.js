function generateCountryCodeAndNumber() {    
const countryCode = "+234";
countryCode.substring(1) 
const phoneNumber = "08060821773";
const formattedNumber = phoneNumber.substring(1);
return [countryCode, formattedNumber];
};
const [countryCode, phoneNumber] = generateCountryCodeAndNumber();
console.log(countryCode);
console.log(phoneNumber);
console.log(countryCode,phoneNumber);


const validatePhone = (code, phone) => {
    let newCode = code
    if (code.startsWith('+')) {
        newCode = code.slice(1)
    }
    let _phone = phone
    if (phone.startsWith(0)) {
        _phone = phone.slice(1)
    }

    if (newCode.length !== 3) {
        console.log('here')
        throw new Error('Invalid country code')
    }
    if (newCode !== '234') {
        throw new Error('Invalid country code')
    }

    if (_phone.length !== 10) {
        throw new Error('Invalid phone number')
    }

    return `${newCode}${_phone}`
}

const phone = validatePhone('234', '08033334444')
console.log(phone)