





window.addEventListener("load", function() {
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();
        const num1 = parseInt(document.getElementById("num1").value);
        const num2 = parseInt(document.getElementById("num2").value);
        const num3 = parseInt(document.getElementById("num3").value);

        if (num1+num2<=num3 || num2+num3<=num1 || num1+num3<=num2){
            document.getElementById("ans").removeAttribute("class");
            document.getElementById("ans").innerText = "NOT A TRIANGLE";
        } else if(num1 === num2 && num2 === num3) {
            document.getElementById("ans").removeAttribute("class");
            document.getElementById("ans").innerText = "EQUILATERAL";
        } else if(num1 === num2 || num2 === num3 || num1 === num3) {
            document.getElementById("ans").removeAttribute("class");
            document.getElementById("ans").innerText = "ISOSCELES";
        } else {
            document.getElementById("ans").removeAttribute("class");
            document.getElementById("ans").innerText = "SCALENE";
        }
    });
});