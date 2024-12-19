function myFunction() {
    document.getElementById("demo").innerHTML="Paragraph changed.";
}

function myFunction2() {
    const element = document.getElementsByTagName("h2");

    document.getElementById("demo").innerHTML = 'h2 The text in first paragraph in (index 0) is: h2' + element[0].innerHTML;
}