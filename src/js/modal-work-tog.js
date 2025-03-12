const refs = {
  overlay: document.querySelector(".modal-overlay"),
  modal: document.querySelector(".modal"),
  title: document.querySelector(".title-modal"),
  text: document.querySelector(".text-modal"),
  closeBtn: document.querySelector(".close-btn"),
};

const { overlay, modal, title, text, closeBtn } = refs;

export function openModal(modalData) {
  overlay.style.display = "flex";
  title.textContent = modalData.title;
  text.textContent = modalData.message;
  document.body.classList.add("no-scroll");
}

function closeModal() {
  overlay.style.display = "none";
  document.body.classList.remove("no-scroll");
}

closeBtn.addEventListener("click", closeModal);

document.addEventListener("click", evt => {
  if (evt.target === overlay && !modal.contains(evt.target)) {
    closeModal();
  }
});

document.addEventListener("keydown", evt => {
  if (evt.key === "Escape") {
    closeModal();
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   const modal = document.getElementById("modal");
//   const closeModal = document.getElementById("closeBtn");
//   const form = document.querySelector(".contact-form");

//   function openModal() {
//     modal.style.display = "flex";
//   }

//   function closeModalFunc() {
//     modal.style.display = "none";
//   }

// closeModal.addEventListener("click", closeModalFunc);

//   window.addEventListener("click", event => {
//     if (event.target === modal) {
//       closeModalFunc();
//     }
//   });

//   form.addEventListener("submit", async evt => {
//     evt.preventDefault();
//     const userEmail = form.elements.email.value.trim();
//     const userComment = form.elements.comments.value.trim();

//     async function postRequest(email, comment) {
//       return new Promise(resolve => {
//         setTimeout(() => resolve({ status: 201 }), 1000);
//       });
//     }

//     const response = await postRequest(userEmail, userComment);
//     if (response.status === 201) {
//       openModal();
//       form.reset();
//     } else {
//       alert("Submission failed. Please try again.");
//     }
//   });
// });
