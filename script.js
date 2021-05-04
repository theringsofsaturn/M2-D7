// EX11) Write a function to add a new link into the navbar
function addNewLink() {
    const nav = document.querySelector('nav:last-child');
    const newLink = document.createElement('a');
    newLink.innerHTML = 'New Link'
    newLink.style.backgroundColor = 'blue';
    nav.append(newLink);
}

// EX12) Write a function to change the color of the main title
function changeTitle() {
    const title = document.querySelector('h1');
    title.style.backgroundColor = 'red';
}

// EX13) Write a function to change the background of the jumbotron
function changeBackground() {
    const jumbotron = document.querySelector(".jumbotron");
    jumbotron.style = "background-color: green";
}

// EX14) Write a function to remove all the links under "Elsewhere"
function removeElsewhere(){
    const elsewhereLink = document.querySelectorAll('ol.list-unstyled')[1];
    elsewhereLink.style.display = 'none';
}