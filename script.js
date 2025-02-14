"use strict"

import * as marked from "app://./marked.js"

const get      = id  => document.getElementById(id)
const render   = txt => marked.parse(txt)

const init = () => {
    const head   = get("header")
    const body   = get("page")
    const langs  = get("locales").children
    const locale = langs[0].id
    const pages  = langs[0].querySelectorAll(".page")

    pages.forEach((page, idx) => {
        const tab = document.createElement("button")
        tab.textContent = "page " + idx
        tab.onclick = () => {
            body.innerHTML = render(page.textContent)
        }
        head.appendChild(tab)
    })

    body.innerHTML = render(pages[0].textContent)
}

export { init }
