function myFunction() {
    document.getElementById("demo").innerHTML="Paragraph changed.";
}

function myFunction2() {
    const element = document.getElementsByTagName("p");

    document.getElementById("demo").innerHTML = '<br> The text in first paragraph in (index 0) is: <br>' + element[0].innerHTML;
}

function addButton() {
    // Create a button element
    const button = document.createElement('button');

    button.onclick = () => {
        window.location.href = 'https://frankie-socmeds.carrd.co/';
    };

    document.getElementById('demo').appendChild(button);
}