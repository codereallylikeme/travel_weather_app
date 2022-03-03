function generatePage() {
  window.print(document.getElementById('printSection'));
}
document.getElementById('save').addEventListener('click', generatePage);

export { generatePage };
