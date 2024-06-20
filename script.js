document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const releases = [
    {
        name: 'Baixar Kung Fu Panda',
        url: 'https://github.com/PHOENIXSRD/quickfiles/releases/download/v5.9-beta.3/Kung.Fu.Panda.mp4'
    },
    {
        name: 'Versão 0.9.0',
        url: 'https://github.com/usuario/repo/releases/download/v0.9.0/arquivo.zip'
    }
];

const downloadList = document.getElementById('download-list');
releases.forEach(release => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = release.url;
    a.textContent = release.name;
    li.appendChild(a);
    downloadList.appendChild(li);
});