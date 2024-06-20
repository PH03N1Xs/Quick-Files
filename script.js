const releases = [
    {
        name: 'Baixar Kung Fu Panda',
        url: 'https://github.com/PHOENIXSRD/quickfiles/releases/download/v5.9-beta.3/Kung.Fu.Panda.mp4'
    },
    {
        name: 'Ferramenta Útil v2.1',
        url: 'https://github.com/seu-usuario/seu-repositorio/releases/download/v2.1/ferramenta-util-v2.1.zip'
    },
    {
        name: 'Plugin Poderoso v3.5',
        url: 'https://github.com/seu-usuario/seu-repositorio/releases/download/v3.5/plugin-poderoso-v3.5.zip'
    }
    // Adicione quantos itens de download desejar, seguindo a mesma estrutura
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