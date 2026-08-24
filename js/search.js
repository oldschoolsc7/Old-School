function searchLaw() {

const searchValue =
document.getElementById("lawSearch")
.value
.trim();

if (!searchValue) return;

const contents =
document.querySelectorAll(".accordion-content p");

let found = false;

contents.forEach(content => {

const originalText = content.textContent;

content.innerHTML = originalText;

if (
originalText
.toLowerCase()
.includes(searchValue.toLowerCase())
) {

const button =
content.parentElement.previousElementSibling;

button.classList.add("active");

content.parentElement.style.maxHeight =
content.parentElement.scrollHeight + "px";

const regex =
new RegExp(`(${searchValue})`, "gi");

content.innerHTML =
originalText.replace(
regex,
'<span class="highlight">$1</span>'
);

button.scrollIntoView({
behavior: "smooth",
block: "center"
});

found = true;

}

});

if(!found){

alert("لم يتم العثور على نتيجة");

}

}

document
.getElementById("lawSearch")
.addEventListener("keypress", function(e){

if(e.key === "Enter"){

searchLaw();

}

});