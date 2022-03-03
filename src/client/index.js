alert('I EXIST');
console.log('CHANGE!!');

import { handleSubmit } from './js/formHandler';
import { show } from './js/formHandler';
import { hide } from './js/formHandler';
import { dismissNote } from './js/dismissNote';
import { resetData } from './js/resetPage';
import './styles/main.scss';
import './assets/images/img-002.jpg';
import './assets/images/c02d.png';
import { square } from './js/square';
import { checkInput } from './js/checkInput';
import { generatePage } from './js/print_pdf';

export {
  handleSubmit,
  show,
  hide,
  dismissNote,
  resetData,
  square,
  checkInput,
  generatePage,
};
