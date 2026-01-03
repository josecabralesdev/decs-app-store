const USER_REPO = "josecabralesdev/decs-app-store";

async function fetchApps() {
    const container = document.getElementById('app-container');

    try {
        const response = await fetch(`https://api.github.com/repos/${USER_REPO}/releases`);
        if (!response.ok) throw new Error('No se pudo conectar con el servidor de DECS');

        const releases = await response.json();
        container.innerHTML = ''; // Limpiar cargador

        releases.forEach(release => {
            // Buscamos el APK y el Icono entre los archivos de la release
            const apkFile = release.assets.find(asset => asset.name.endsWith('.apk'));
            const iconFile = release.assets.find(asset =>
                asset.name.toLowerCase().includes('icon') &&
                (asset.name.endsWith('.png') || asset.name.endsWith('.jpg'))
            );

            // Si no hay icono en la release, usamos uno por defecto
            const iconUrl = iconFile ? iconFile.browser_download_url : 'https://via.placeholder.com/80/1a1a1a/c0c0c0?text=DECS';

            if (apkFile) {
                const card = document.createElement('div');
                card.className = 'app-card';
                card.innerHTML = `
                    <img src="${iconUrl}" class="app-icon" alt="Icono">
                    <h2 class="app-title">${release.name}</h2>
                    <span class="app-version">${release.tag_name}</span>
                    <p class="app-desc">${release.body || 'Sin descripción disponible.'}</p>
                    <a href="${apkFile.browser_download_url}" class="btn-download">INSTALAR</a>
                `;
                container.appendChild(card);
            }
        });
    } catch (error) {
        container.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}

fetchApps();