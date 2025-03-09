import axios from "axios";
import Swal from 'sweetalert2';
import { openModal } from "./modal-work-tog";

const refs = {
    form: document.querySelector('.contact-form'),
    email: document.querySelector('.email'),
    message: document.querySelector('.message')
}

const { form, email, message } = refs;

const instance = axios.create({
    baseURL: 'https://portfolio-js.b.goit.study/api',
});

form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const userEmail = form.elements.email.value.trim();
    const userComment = form.elements.comments.value.trim();
    const response = await postRequest(userEmail, userComment);
    if (response.status === 201) {
        openModal(response.data);
        form.reset();
        resetValidation();
    } else {
        Swal.fire({
            title: "Sorry, an error occurred",
            text: "Please, correct the data and try again!",
            color: "#fafafa",
            background: "#c6e327",
            width: "300px",
            timer: 4000,
            timerProgressBar: true,
            customClass: {
                confirmButton: "custom-ok-button"
            }
        });
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

email.addEventListener('input', function () {
    if (email.value.length > 0) {
        if (email.validity.valid) {
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
        resetValidation();
    }
})

function resetValidation() {
    email.value = "";
    email.classList.remove('success', 'error');
    message.textContent = "";
    message.className = "message";
}