import { dismissNote } from './dismissNote.js';
import { resetData } from './resetPage.js';
import { checkInput } from './checkInput.js';
import { generatePage } from './print_pdf.js';

//binding the submitbtn with the event listener
const submitBtn = document
  .getElementById('generate')
  .addEventListener('click', handleSubmit);

// Global variables
let today = new Date();

const form = document.getElementById('myForm');

function handleSubmit(event) {
  event.preventDefault();
  const holder_form = document.querySelector('.holder_form');
  const location = document.getElementById('location__trip').value;
  const departureDate = document.getElementById('departure_Date').value;
  const displayResult = document.querySelector('.holder__cardContent');
  const warning = document.getElementById('warning');

  const countdownTrip = function (departureDate) {
    // countdown funtion
    let future_date = new Date(departureDate);
    let dateDiff = Math.abs(future_date - today); // taking today dates from the user choosen dates
    let dateDiff_away = Math.ceil(dateDiff / (1000 * 60 * 60 * 24));
    return dateDiff_away;
  };

  const tripRemain = countdownTrip(
    document.getElementById('departure_Date').value,
  );

  console.log(location);
  console.log(tripRemain);

  const checkMultipleInput = Client.checkInput(location, departureDate);

  if (checkMultipleInput) {
  

    
    const postData = async (url = '', data = {}) => {
      // post the request to the server
      
      const response = await fetch(url, {
        // awaiting the respond from the server
        mode:'cors',
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      try {
        const data = await response.json(); // receiving the data json format
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    };

    postData('http://localhost:8081/getTrip', {
      location
    }).then((data) => {
      updateUI(data); // funtion that display respond on the page
      console.log(data);
    });

    const updateUI = (data) => {
      document.getElementById('image__api').setAttribute('src', data.pix);
      document.getElementById(
        'days__remain',
      ).innerHTML = `You have ${tripRemain} days remaining for your trip`;
      document.getElementById(
        'city',
      ).innerHTML = `Your search city name is ${data.location}`;
      document.getElementById('temp').innerHTML = `It's ${Math.round(
        data.weather[0].temp,
      )}°C on this day`;
      document
        .getElementById('icon__api')
        .setAttribute(
          'src',
          `https://www.weatherbit.io/static/img/icons/${data.weather[0].weather.icon}.png`,
        );
      for (const item of data.weather) {
        const weatherCard = document.querySelector('#weather__card');
        const newEl = `<li class= weather__ListCard>
        <h2>${item.valid_date}</h2>
        <img src='https://www.weatherbit.io/static/img/icons/${
          item.weather.icon
        }.png?raw=true alt=${item.weather.description}'>
        <p>Max:${item.max_temp}°C</p>
        <p>Min:${item.min_temp}°C</p>
        <p>On this day is going to be ${item.weather.description.toLowerCase()}</p>
        <p>Rain:${item.pop}% </p>`;

        weatherCard.insertAdjacentHTML('beforeend', newEl);
        console.log(item);
      }
    };
  } else {
    show('warning');
    setTimeout(() => {
      hide('warning');
    }, 7000);
  }

  displayResult.scrollIntoView({ behavior: 'smooth' }); // take the user to the appropiate view
  console.log(displayResult);
  form.reset();
}

//hide an element
function hide(id) {
  document.getElementById(id).style.visibility = 'hidden';
}
//show an element
function show(id) {
  document.getElementById(id).style.visibility = 'visible';
}

export { handleSubmit, show, hide, dismissNote, checkInput };
