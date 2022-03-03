import { hide, show } from './formHandler';
//checking the user characters and special characters
function checkInput(location, departureDate) {
  let valid = /^[a-zA-ZäöüÄÖÜß\s]{0,255}$/;
  let regexPattern = new RegExp(valid);
  return location.match(regexPattern) && departureDate ? true : false;
}

export { checkInput };
