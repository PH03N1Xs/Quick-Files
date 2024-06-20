const releases = [
    {
        name: 'Meu Programa Incrível v1.0',
        url: 'https://github.com/seu-usuario/seu-repositorio/releases/download/v1.0/meu-programa-incrivel-v1.0.zip'
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