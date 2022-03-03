// creating a header note message
let message = `<div class="header"><a id= "close" href="#">Close X</a></div>`;
message += `</div><h2>Attention</h2></div>`;
message += `This Apps can only give 1 to  16 days weather forecast for your trip`;
let divNote = document.createElement('div');
divNote.setAttribute('id', 'setNote'); // Add id of setNote to the div
divNote.innerHTML = message;
document.body.appendChild(divNote);
// Remove the close button
function dismissNote() {
  document.body.removeChild(divNote);
}
let closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', dismissNote, false); // click close button

export { dismissNote };
