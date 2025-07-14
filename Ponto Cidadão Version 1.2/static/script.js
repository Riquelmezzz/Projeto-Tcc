async function carregarNoticias() {
    try {
        const resposta = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://pox.globo.com/rss/g1/sp/vale-do-paraiba-regiao/");
        const dados = await resposta.json();

        if (!dados.items || dados.items.length < 5) {
            document.getElementById("destaque").innerHTML = "<h3>Notícias insuficientes para exibição.</h3>";
            return;
        }

        // Notícia principal (destaque)
        const destaque = dados.items[0];
        const destaqueEl = document.getElementById("destaque");
        destaqueEl.style.backgroundImage = `url('${destaque.enclosure?.link || ""}')`;
        destaqueEl.innerHTML = `<h3>${destaque.title}</h3>`;
        destaqueEl.onclick = () => window.open(destaque.link, "_blank");

        // Apenas 4 notícias secundárias
        const containerOutras = document.getElementById("outras-noticias");
        for (let i = 1; i <= 4; i++) {
            const item = dados.items[i];
            const div = document.createElement("div");
            div.className = "outras-noticias-1-single";
            div.style.backgroundImage = `url('${item.enclosure?.link || ""}')`;
            div.innerHTML = `<h3>${item.title}</h3>`;
            div.onclick = () => window.open(item.link, "_blank");
            containerOutras.appendChild(div);
        }

    } catch (erro) {
        console.error("Erro ao carregar notícias:", erro);
        document.getElementById("destaque").innerHTML = "<h3>Erro ao carregar notícias.</h3>";
    }
}

carregarNoticias();