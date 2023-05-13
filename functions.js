function submitFunction() {
    let r = parseFloat(document.getElementById("radius").value);
    document.getElementById("output").innerHTML = r * r *Math.PI;
}
