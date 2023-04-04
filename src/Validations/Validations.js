const isValidateEmail = function (email) {
  if (!email) {
    return false; // return false if password is empty
  }
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  };
  const passwordVal = function (password) {
    if (!password) {
      return false; // return false if password is empty
    }
    var strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}$"
    );
    /*at least 1 lowercase, at least 1 uppercase,contain at least 1 numeric character,
      at least one special character, range between 8-12*/
    return strongRegex.test(password);
  };
  const isValidName = function (name) {
    if (!name) {
      return false; // return false if password is empty
    }
    const nameRegex = /^[a-zA-Z_ ]+$/;
    return nameRegex.test(name);
  };
  
  const isValidNo = function (number) {
    if (!number) {
      return false; // return false if password is empty
    }
    const validnumber = /^[6-9]\d{9}$/;
    return validnumber.test(number);
  };
  

  
  
  module.exports = {
    isValidateEmail,
    passwordVal,
    isValidName,
    isValidNo
   };