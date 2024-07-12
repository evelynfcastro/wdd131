const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avgRating: 5.0
    }
];



function displayProducts(array) {
    for (const item of array) {

        let id = item.id;
        let name = item.name;
        let avgRating = item.avgRating;

        document.querySelector("#product").innerHTML +=
            ` <option value="${id}" > ${name}</option>`;
    }
}

displayProducts(products);





// Last modification
const today = new Date();
const yearElement = document.querySelector("#year");


yearElement.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
const lastModified = new Date(document.lastModified);


const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = lastModified.toLocaleDateString('en-US', options);


document.getElementById('lastmod').textContent = formattedDate;



document.addEventListener('DOMContentLoaded', function () {
    // Get the form and the counter display element
    const reviewForm = document.querySelector('.wf1');
    const reviewCounter = document.getElementById('reviewCounter');

    // Function to update the counter display
    function updateCounterDisplay() {
        const count = localStorage.getItem('reviewCount') || 0;
        reviewCounter.textContent = `Reviews Submitted: ${count}`;
    }

    // Update the counter display when the page loads
    updateCounterDisplay();

    // Add event listener for form submission
    reviewForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Increment the review count in localStorage
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem('reviewCount', reviewCount);

        // Update the counter display
        updateCounterDisplay();

        // Optionally, reset the form or do something else
        reviewForm.reset();
    });
});