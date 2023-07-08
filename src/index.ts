async function loadCode(url: string) {
    const response = await fetch(url)

    if (response.ok) {
        const content = await response.text()
        const codeNode = document.getElementById("code-block")
            
        if (codeNode) {
            codeNode.textContent = content
        }
    } else {
        throw new Error(response.status.toString())
    }
}

window.addEventListener("load", function () {
    const links = document.getElementsByClassName("code-link")

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (ev: Event) {
            const node = ev.target as HTMLAnchorElement
            const url = node.getAttribute("data-src") || ""

            loadCode(url).catch(reason => {
                console.error("Failed to load the code file. Reason " + reason)
            })
        })
    }
})