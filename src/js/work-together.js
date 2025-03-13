import axios from "axios";
import Swal from 'sweetalert2';
import { openModal } from "./modal-work-tog";

const refs = {
    form: document.querySelector('.contact-form'),
    email: document.querySelector('.email'),
    message: document.querySelector('.message'),
    commentInput: document.querySelector('.form-comment'),
    commentText: document.querySelector('.comment'),
}

const { form, email, message, commentInput, commentText } = refs;

const instance = axios.create({
    baseURL: 'https://portfolio-js.b.goit.study/api',
});

form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const userEmail = email.value.trim();
    const userComment = commentInput.value.trim();

    if (!userEmail || !userComment) {
        Swal.fire({
            title: "Fields are required!",
            text: "Please fill in all fields before submitting.",
            color: "#fafafa",
            background: "#1c1d20",
            width: "300px",
            timer: 4000,
            timerProgressBar: true,
            customClass: {
                confirmButton: "custom-ok-button",
                popup: "custom-swal"
            }
        });
        return;
    }

    const response = await postRequest(userEmail, userComment);

    if (response?.status === 201) {
        openModal(response.data);
        form.reset();
        resetValidation(); 
    } else {
        Swal.fire({
            title: "Sorry, an error occurred",
            text: "Please, correct the data and try again!",
            color: "#fafafa",
            background: "#1c1d20",
            width: "300px",
            timer: 4000,
            timerProgressBar: true,
            customClass: {
                confirmButton: "custom-ok-button",
                popup: "custom-swal"
            }
        });
    }
});

async function postRequest(email, comment) {
    try {
        return await instance.post('/requests', { email, comment });
    } catch (error) {
        console.log(error);
        return null;
    }
}

const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;

email.addEventListener('input', function () {
    validateInput(email, message, emailPattern);
});

commentInput.addEventListener('input', function () {
    validateInput(commentInput, commentText);
});

function validateInput(input, messageBox, pattern = /.*/) {
    if (input.value.trim()) {
        if (pattern.test(input.value.trim())) {
            input.classList.remove('error');
            input.classList.add('success');
            messageBox.textContent = 'Success!';
            messageBox.className = 'message success-text';
        } else {
            input.classList.remove('success');
            input.classList.add('error');
            messageBox.textContent = 'Invalid input, try again';
            messageBox.className = 'message error-text';
        }
    } else {
        resetValidation(input.name);
    }
}

function resetValidation(inputName = null) {
    if (!inputName || inputName === 'email') {
        email.classList.remove('success', 'error');
        message.textContent = "";
        message.className = "message";
    } 
    if (!inputName || inputName === 'comment') {
        commentInput.classList.remove('success', 'error');
        commentText.textContent = "";
        commentText.className = "message";
    }
}