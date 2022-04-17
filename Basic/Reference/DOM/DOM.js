function activeElementFunction() {
    const element = document.activeElement.tagName;
    document.getElementById("activeElement").innerHTML = element;
}


document.addEventListener("click", function() {
    document.getElementById("addEventListenerMethod").innerHTML = "addEventListener";
});

function adoptNodeFunction() {
    const frame = document.getElementById("adoptNodeView");
    const h1 = frame.contentWindow.document.getElementsByTagName("H1")[0];
    const node = document.adoptNode(h1);
    document.body.appendChild(node);
}

let baseURLproperty = document.baseURI;
document.getElementById("baseURLView").innerHTML = base;

//document body property

function bodyPropertyFunction() {
    const body = document.createElement("b");
    const node = document.createTextNode("This is a Body Property");
    body.appendChild(node);
    document.body.appendChild(body);
}

let encoding = document.characterSet;
document.getElementById("characterSetView").innerHTML = encoding;

// window close

function closeMethod() {
    document.open();
    document.write("<p>Close </p>")
    document.write("<p>open a document </p>")
    document.close();
}