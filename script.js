

function toggleModal() {
  const modalchild = document.getElementById('modal-window');
  const modal = modalchild.parentNode;
  modal.classList.toggle('hidden');
  document.body.classList.toggle('modal-open'); // add/remove class for darkening
  console.log("modal triggered");
}
const link = document.getElementById('popuplink'); // replace with your link ID
link.addEventListener('click', toggleModal);

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', toggleModal);
