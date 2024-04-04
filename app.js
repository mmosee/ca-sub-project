import './assets/css/style.css';
import 'vite/modulepreload-polyfill'
import jquery from "jquery";
import customActivity from "./assets/js/customactivity.js";

import Header from './template/header.js'
import Home from './pages/home.js'
import Footer from './template/footer.js'

document.addEventListener('DOMContentLoaded', function() {
    // Apply the styles to the app container
    const app = document.querySelector('#app');
    const header = document.createElement("header")
    const container = document.createElement("main")
    const footer = document.createElement("footer")

    header.classList.add("header")
    container.classList.add("container")
    footer.classList.add("footer")

    header.innerHTML = Header()
    container.innerHTML = Home()
    footer.innerHTML = Footer()

    app.appendChild(header)
    app.appendChild(container)
    app.appendChild(footer)

    customActivity();
    jquery();
});