
(function () {
    "use strict";

    const partials = [
        { path: "partials/layout-shell.html",      target: "#layout-shell-placeholder" },
        { path: "partials/header.html",             target: "#header-placeholder" },
        { path: "partials/wordstage-controls.html", target: "#panels-placeholder" },
        { path: "partials/media-panel.html",        target: "#panels-placeholder", append: true },
        { path: "partials/footer.html",             target: "#footer-placeholder" },
        { path: "partials/mobile-dock.html",        target: "#mobile-dock-placeholder" },
        { path: "partials/settings-offcanvas.html", target: "#settings-placeholder" },
        { path: "partials/toast.html",              target: "#toast-placeholder" }
    ];

    function loadPartial(p) {
        return fetch(p.path)
            .then(r => {
                if (!r.ok) throw new Error("Fetch failed: " + p.path);
                return r.text();
            })
            .then(html => {
                const container = document.querySelector(p.target);
                if (!container) {
                    console.warn("Target not found for partial:", p.path, "→", p.target);
                    return;
                }
                if (p.append) {
                    container.insertAdjacentHTML("beforeend", html);
                } else {
                    container.innerHTML = html;
                }
            })
            .catch(err => console.error("Could not load partial:", p.path, err));
    }

    Promise.all(partials.map(loadPartial)).then(() => {
        const yearEl = document.getElementById("yearNow");
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        // ← This is the key fix: app-main.js waits for this event
        document.dispatchEvent(new CustomEvent("partialsReady"));
    });
})();