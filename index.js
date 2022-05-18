const Nuke = {}

/**
 * Creates a DOM node.
 * @param {*} node
 */
Nuke.root = function(...params){
    console.log(params);
    if (params[0]!==undefined) {
        var nodo = document.createElement(params[0]);
        var contenido = document.createTextNode(params[1]);
        var root = document.getElementById("app");

        if (root === null) {
            console.error("Deve colocar un elemento con la palabra 'app' en el HTML")
        } else {
            if (contenido !== null) {
                nodo.appendChild(contenido)
                document.body.insertBefore(nodo, root)
            }
        }
    }
}

module.exports = Nuke;