function toggleModal() {
  const modal = document.getElementById('modal-window');
  modal.classList.toggle('hidden');
  document.body.classList.toggle('modal-open'); // add/remove class for darkening
}
const link = document.getElementById('popuplink'); // replace with your link ID
link.addEventListener('click', toggleModal);

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', toggleModal);
