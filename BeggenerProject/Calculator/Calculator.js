function Display(val) {
    document.getElementById("TextVal").value += val
}

function evaluate() {
    let x = document.getElementById("TextVal").value
    let y = eval(x)
    document.getElementById("TextVal").value = y
}

function Clear() {
    document.getElementById("TextVal").value = ""
}