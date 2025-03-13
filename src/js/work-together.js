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
    const userEmail = form.elements.email.value.trim();
    const userComment = form.elements.comments.value.trim();
    let response;
    if (isEmailValid() && isMessageValid()) {
        response = await postRequest(userEmail, userComment);
        if (response.status === 201) {
        openModal(response.data);
        form.reset();
        resetValidation();
    } else {
            showError();
        }
    } else {
        showError();
    }
})

async function postRequest(email, comment) {
    let response;
    try {
        response = await instance.post('/requests', {
            "email": email,
            "comment": comment
        });
    } catch (error) {
        console.log(error);
        response = error;
    }
    return response;
}

const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
email.addEventListener('input', function () {
    if (email.value) {
        if (isEmailValid()) {
            email.classList.remove('error');
            email.classList.add('success');
            message.textContent = 'Success!';
            message.className = 'message success-text';
        } else {
            email.classList.remove('success');
            email.classList.add('error');
            message.textContent = 'Invalid email, try again';
            message.className = 'message error-text';
        }
    } else {
        resetValidation('email');
    }
})

commentInput.addEventListener('input', function () {
    if (commentInput.value) {
         if (isMessageValid()) {
            commentInput.classList.remove('error');
            commentInput.classList.add('success');
            commentText.textContent = 'Success!';
            commentText.className = 'message success-text';
        } else {
            commentInput.classList.remove('success');
            commentInput.classList.add('error');
            commentText.textContent = 'Enter correct data';
            commentText.className = 'message error-text';
        }
    } else {
        resetValidation('comment');
    }
});

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

const isEmailValid = () => {
    return pattern.test(email.value);
}

const isMessageValid = () => {
    return commentInput.value.trim().length > 0;
}

const showError = () => {
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