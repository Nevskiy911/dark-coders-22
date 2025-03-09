const titleModal = document.querySelector('.title-modal');
const textModal = document.querySelector('.text-modal');

export function openModal(modalId) {
  const modal = document.getElementById(modalId);

  if (!modal) {
    iziToast.error({
      title: 'Modal not found:',
      message: modalId,
      position: 'center',
      timeout: 10000,
    });

    return;
  }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  document.addEventListener('keydown', handleKeydown);
  document.addEventListener('click', handleBackdropClik);
}

function closeModal() {
  const modal = document.getElementById('footer-modal');

  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';

    document.removeEventListener('keydown', handleKeydown);
    document.removeEventListener('click', handleBackdropClik);
  }
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function handleBackdropClik(event) {
  if (event.target.id === 'footer-modal') {
    closeModal();
  }
}

document.getElementById('close-btn').addEventListener('click', closeModal);
