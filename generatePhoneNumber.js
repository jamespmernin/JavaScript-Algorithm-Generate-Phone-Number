// GENERATE PHONE NUMBER
// Source: https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript

const generatePhoneNumber = nums => {
  let formattedNums = ('' + nums).replace(/\D/g, ''); // This takes care of the array condition.
  let regex = formattedNums.match(/^(\d{3})(\d{3})(\d{4})$/); // This splits the phone number into three segments of three, three, and four digits respectively
  if (regex) {
    return regex[1] + '-' + regex[2] + '-' + regex[3]; // This returns the corrected phone number with dashes where they are needed
  }
  return null; // In case for some reason the if statement fails
}

module.exports = generatePhoneNumber
