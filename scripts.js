const countrySelect = document.getElementById("countrySelect");
const newsletterForm = document.querySelector("#newsletterForm");
const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");

countrySelect.addEventListener("change", () => {
    if(countrySelect.value !== "default") {
        alert(`You selected ${countrySelect.options[countrySelect.selectedIndex].text}!`);
    }

})
newsletterForm.addEventListener("submit", evt => {
    evt.preventDefault();
    if(nameInput.value && emailInput.value) {
        alert("Thank you for subscribing!");
        newsletterForm.reset();
    }
})

countrySelect.addEventListener("change", () => {
    if(countrySelect.value !== "default") {
        window.location.href = `destinations.html#${countrySelect.value}`
    }
})