function resetData() {
  // functions that removes the entry result from api
  let entryHolder = document.getElementById('entryHolder');
  while (entryHolder.firstChild) {
    entryHolder.removeChild(entryHolder.firstChild);
  }
}

let deleteButton = document
  .getElementById('delete')
  .addEventListener('click', resetData); // calling eventlistener

export { resetData };
