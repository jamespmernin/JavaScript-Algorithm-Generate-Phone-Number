// GENERATE PHONE NUMBER
// Source: https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript

const generatePhoneNumber = nums => {
  let formattedNums = ('' + nums).replace(/\D/g, ''); // This takes care of the array condition.
  let regex = formattedNums.match(/^(\d{3})(\d{3})(\d{4})$/); // This splits the phone number into three segments of three, three, and four digits respectively
  return regex ? regex[1] + '-' + regex[2] + '-' + regex[3] : null; // Returns the formatted number if the regex works and null if not
}

module.exports = generatePhoneNumber
