document.addEventListener("DOMContentLoaded", function() {
    fetchGitHubReleases();
});

async function fetchGitHubReleases() {
    const repo = "PHOENIXSRD/quickfiles"; // Substitua Pelo Seu Nome De Usuário E Nome Do Repositório
    const apiUrl = `https://api.github.com/repos/${repo}/releases`;

    try {
        const response = await fetch(apiUrl);
        const releases = await response.json();

        // Limpa A Lista De Releases
        const releasesList = document.getElementById("releases-list");
        releasesList.innerHTML = "";

        // Adiciona Cada Release Á Lista
        releases.forEach(release => {
            const releaseDiv = document.createElement("div");
            releaseDiv.classList.add("release");

            releaseDiv.innerHTML = `
                <h3><a href="${release.html_url}" target="_blank">${release.name}</a></h3>
                <div class="Description">${release.body}</div>
            `;

            releasesList.appendChild(releaseDiv);
        });
    } catch (error) {
        console.error("Erro Ao Recuperar Os Releases:", error);
    }
}