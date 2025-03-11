document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeBtn");
  const form = document.querySelector(".contact-form");

  function openModal() {
    modal.style.display = "flex";
  }

  function closeModalFunc() {
    modal.style.display = "none";
  }

  closeModal.addEventListener("click", closeModalFunc);

  window.addEventListener("click", event => {
    if (event.target === modal) {
      closeModalFunc();
    }
  });

  form.addEventListener("submit", async evt => {
    evt.preventDefault();
    const userEmail = form.elements.email.value.trim();
    const userComment = form.elements.comments.value.trim();

    async function postRequest(email, comment) {
      return new Promise(resolve => {
        setTimeout(() => resolve({ status: 201 }), 1000);
      });
    }

    const response = await postRequest(userEmail, userComment);
    if (response.status === 201) {
      openModal();
      form.reset();
    } else {
      alert("Submission failed. Please try again.");
    }
  });
});
