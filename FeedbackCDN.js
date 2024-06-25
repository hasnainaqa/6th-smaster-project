function getQueryParams(url) {
    const params = {};
    const queryString = url.split('?')[1];
    if (queryString) {
        const pairs = queryString.split('&');
        pairs.forEach(pair => {
            const [key, value] = pair.split('=');
            params[key] = decodeURIComponent(value || '');
        });
    }
    return params;
}

const scriptUrl = document.currentScript.src;

const params = getQueryParams(scriptUrl);
const projectID = params.projectID ; 

// Existing code for feedback popup
function displayPopup() {
    var popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container'); 
    popupContainer.style.position = 'fixed';
    popupContainer.style.top = '50%';
    popupContainer.style.left = '50%';
    popupContainer.style.transform = 'translate(-50%, -50%)';
    popupContainer.style.background = '#fff';
    popupContainer.style.padding = '20px';
    popupContainer.style.border = '2px solid #000';
    popupContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    popupContainer.innerHTML = `
        <form id="feedback-form">
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email"><br><br>

            <label for="feedback">Feedback:</label><br>
            <input type="text" id="feedback" name="feedback"><br><br>

            <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48">

            <input type="submit" value="Submit">
            <button type="button" onclick="closePopup()">Close</button>
        </form>
    `;
    document.body.appendChild(popupContainer);

    // Add event listener to the form
    var form = document.getElementById('feedback-form');
    form.addEventListener('submit', handleSubmit);
}

// Function to handle form submission
async function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    // You can handle form submission here, for example, by sending data to a server
    var formData = new FormData(event.target);
    var email = formData.get('email');
    var feedback = formData.get('feedback');
    console.log('Email:', email);
    console.log('Feedback:', feedback);

    await sendFeedback(email, feedback);
    closePopup(); 
}

const sendFeedback = async (email, feedback) => {
    try {
        console.log("projectID: ", projectID)
        await fetch(`http://localhost:3000/api/Feedback`, {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ projectID, email, feedback }),
        });
        // if (res.ok){
        //     console.log("Feedback received");
            // return user
        // }
    } catch (error) {
        console.log(error);
        console.log("error received");
    }
}

// Function to close the popup
function closePopup() {
    var popupContainer = document.querySelector('.popup-container');
    if (popupContainer) {
        popupContainer.parentNode.removeChild(popupContainer);
    }
}

// Code to initialize the button
document.addEventListener('DOMContentLoaded', function() {
    // Create and style the button
    var button = document.createElement('button');
    button.textContent = 'Feedback';
    button.style.position = 'fixed';
    button.style.bottom = '10px';
    button.style.right = '10px';
    button.style.zIndex = '9999'; // Ensure the button appears above other content
    button.style.color = 'white';
    button.style.padding = '12px';
    button.style.borderRadius = '10px';
    button.style.borderColor = 'green';
    button.style.backgroundColor = 'green';

    // Add an event listener to open the popup when the button is clicked
    button.addEventListener('click', displayPopup);

    // Append the button to the document body
    document.body.appendChild(button);
});
