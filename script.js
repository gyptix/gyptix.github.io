"use strict"

marked.use({ pedantic: false, gfm: true, breaks: false })

const get      = id  => document.getElementById(id)
const render   = txt => marked.parse(txt)

const init = () => {
    const head   = get("header")
    const page   = get("page")
    const langs  = get("locales").children
    const locale = langs[0].id
    const pages  = langs[0].querySelectorAll(".page")
    
    pages.forEach((p, i) => {
        const tab = document.createElement("button")
        tab.text = "[page " + i +"] "
        tab.onclick = () => {
            console.log(p.text)
            page.innerHTML = render(p.text)
        }
        head.appendChild(tab)
    })

    page.innerHTML = render(pages[0].textContent)
}

export { init }
