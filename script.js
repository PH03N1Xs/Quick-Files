const releasesUrl = 'https://api.github.com/repos/PHOENIXSRD/quickfiles/releases';

async function fetchReleases() {
    try {
        const response = await fetch(releasesUrl);
        const releases = await response.json();
        displayReleases(releases);
    } catch (error) {
        console.error('Erro Ao Buscar Releases:', error);
    }
}

function displayReleases(releases) {
    const downloadsList = document.getElementById('downloads-list');
    releases.forEach(release => {
        const releaseName = release.name;
        const releaseAssets = release.assets;
        const releaseEntry = document.createElement('div');
        releaseEntry.classList.add('release-entry');
        releaseEntry.innerHTML = `
            <h2>${releaseName}</h2>
            <ul>
                ${releaseAssets.map(asset => `<li><a href="${asset.browser_download_url}">${asset.name}</a></li>`).join('')}
            </ul>
        `;
        downloadsList.appendChild(releaseEntry);
    });
}

fetchReleases();