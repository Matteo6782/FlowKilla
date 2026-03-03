// Minimal client-side partial loader and tiny init script.
(function(){
    const partials = [
        {path: 'partials/layout-shell.html', target: '#layout-shell-placeholder'},
        {path: 'partials/header.html', target: '#header-placeholder'},
        {path: 'partials/wordstage-controls.html', target: '#panels-placeholder'},
        {path: 'partials/media-panel.html', target: '#panels-placeholder', append: true},
        {path: 'partials/footer.html', target: '#footer-placeholder'},
        {path: 'partials/mobile-dock.html', target: '#mobile-dock-placeholder'},
        {path: 'partials/settings-offcanvas.html', target: '#settings-placeholder'},
        {path: 'partials/toast.html', target: '#toast-placeholder'}
    ];

    function loadPartial(p){
        return fetch(p.path).then(r=>{
            if(!r.ok) throw new Error('Fetch failed '+p.path);
            return r.text();
        }).then(html=>{
            const container = document.querySelector(p.target);
            if(!container) return;
            if(p.append){
                container.insertAdjacentHTML('beforeend', html);
            } else {
                container.innerHTML = html;
            }
        }).catch(err=>{
            console.error('Could not load partial', p.path, err);
        });
    }

    Promise.all(partials.map(loadPartial)).then(async ()=>{
        // simple init
        const yearEl = document.getElementById('yearNow');
        if(yearEl) yearEl.textContent = new Date().getFullYear();
        // example: seed display default
        const seed = Math.floor(Math.random()*900000)+100000;
        const seedEl = document.getElementById('seedDisplay');
        if(seedEl) seedEl.textContent = seed;

        const module = await import('./app-main.js');
    });
})();