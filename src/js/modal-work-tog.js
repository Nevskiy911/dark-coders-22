const refs = {
  overlay: document.querySelector('.modal-overlay'),
  modal: document.querySelector('.modal'),
  title: document.querySelector('.title-modal'),
  text: document.querySelector('.text-modal'),
  closeBtn: document.querySelector('.close-btn'),
};

const { overlay, modal, title, text, closeBtn } = refs;

export function openModal(modalData) {
  overlay.style.display = 'flex';
  title.textContent = modalData.title;
  text.textContent = modalData.message;
  document.body.classList.add('no-scroll');
}

function closeModal() {
  overlay.style.display = 'none';
  document.body.classList.remove('no-scroll');
}

closeBtn.addEventListener('click', closeModal);

document.addEventListener('click', evt => {
  if (evt.target === overlay && !modal.contains(evt.target)) {
    closeModal();
  }
});

document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    closeModal();
  }
});
