# Leonida Atlas

Atlas pessoal de GTA VI, em português, para navegador de iPhone e Mac. Projeto independente de fã, sem vínculo com a Rockstar.

## Usar

Abra o endereço HTTPS do GitHub Pages. Não use a pré-visualização de HTML do aplicativo Arquivos. No iPhone, é possível adicionar o endereço à tela inicial pelo menu Compartilhar do Safari.

- Mapa com zoom, agrupamento de pinos e temas diurno/noturno.
- Busca, categorias, favoritos, visitados, anotações e marcadores pessoais.
- **Sem spoilers ativado por padrão:** substitui nomes específicos por categorias e oculta as descrições comunitárias. Ao desativar, o catálogo pode revelar informações narrativas. Não existe filtro por capítulo: a fonte não fornece esse metadado. A cartografia em si revela a geografia.
- 14 temas de investigação preservados da versão anterior como **rumores não verificados**. Sem senhas, efeitos, localizações inventadas ou promessa de ocorrência no jogo.
- Os 4.687 pontos do catálogo são comunitários, não confirmados individualmente pelo Atlas. Nenhum selo de confirmação oficial é atribuído automaticamente.
- Backup JSON para transferência manual. Não existe sincronização entre dispositivos. Registros ficam neste navegador; não são enviados ao GitHub. O site e o catálogo são públicos.

## Executar localmente

Na pasta do projeto, execute `python3 -m http.server 8765` e abra `http://localhost:8765`. Não há compilação ou instalação necessária.

## Publicar no GitHub Pages

Utilize apenas o repositório independente `instrutormedeiros/leonida-atlas`. Em Settings → Pages, configure publicação da branch `main`, pasta raiz. O endereço só deve ser considerado publicado após verificar o resultado do deploy e abrir o site.

## Fontes, dependências e limitações

Catálogo salvo em `assets/locations.json`, consultado em 26/11/2026. Origem: https://fbritoferreira.github.io/gta6/data/locations.json . Trata-se de um retrato desta data; não há atualização automática. A normalização de categorias e a apresentação foram adaptadas.

Cartografia e dados: **Open GTA 6 Map**, `fbritoferreira` e colaboradores — https://github.com/fbritoferreira/gta6 — **CC BY 4.0**, https://creativecommons.org/licenses/by/4.0/ . A atribuição também aparece no mapa.

Leaflet 1.9.4 incluído em `assets/vendor/`, licença BSD-2-Clause em `assets/vendor/LEAFLET-LICENSE`. Sem bibliotecas ou fontes carregadas por CDN. Os mosaicos cartográficos continuam externos e requerem internet; o projeto de origem pode ficar indisponível ou mudar. A interface exibe falha e permite tentar novamente.

GTA VI e suas marcas pertencem aos respectivos titulares. O Atlas não redistribui capturas do jogo.

Validação em Chromium com telas de 1440×1000, 390×844, 320×568 e 844×390. Isso não substitui teste em aparelhos físicos nem validação no Safari real.
