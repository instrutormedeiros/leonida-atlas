# Leonida Atlas

Atlas pessoal de GTA VI, em português, para navegador de iPhone e Mac. Projeto independente de fã, sem vínculo com a Rockstar.

## Usar

Abra o endereço HTTPS do GitHub Pages. Não use a pré-visualização de HTML do aplicativo Arquivos. No iPhone, é possível adicionar o endereço à tela inicial pelo menu Compartilhar do Safari.

- Mapa com zoom, agrupamento de pinos e temas diurno/noturno.
- Busca, categorias, favoritos, visitados, anotações e marcadores pessoais.
- **Sem spoilers ativado por padrão:** oculta nomes potencialmente narrativos e as descrições comunitárias. Os 14 temas de investigação mantêm títulos próprios sem desfechos. A busca também encontra o nome original dos pontos ocultados. Ao desativar, o catálogo pode revelar informações narrativas. Não existe filtro por capítulo: a fonte não fornece esse metadado. A cartografia em si revela a geografia.
- **14 fichas de mistérios com localização comunitária**, além dos demais Easter eggs e relatos do catálogo. Todos aparecem na categoria Mistérios. Sem promessa de que o evento ocorrerá no jogo. A classificação de confiabilidade é independente da disponibilidade de coordenadas.
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

Interface revisada no navegador integrado do Codex em telas de 1440×960, 390×844, 320×568 e 844×390. Isso não substitui teste em aparelhos físicos nem validação no Safari real.

## Localização dos mistérios e rumores

As 14 fichas de `assets/mysteries.json` têm pinos e links de origem. Suas coordenadas são do espaço cartográfico do jogo (X/Y), não latitude/longitude real. O Atlas mantém os IDs antigos para preservar o progresso e associa os registros equivalentes do catálogo sem duplicá-los. Estados antigos registrados nos IDs da base são migrados quando não há uma escolha explícita no ID da ficha.

- 12 fichas usam pinos publicados em Open GTA 6 Map.
- A casa de Belville utiliza o marco L3455 do GTADB. A indicação de que esse imóvel corresponde à casa misteriosa vem do guia da comunidade.
- Kraken utiliza a **área aproximada** publicada em Enzo’s Domain. O ponto normalizado da imagem do guia foi convertido para o espaço X/Y por calibração dos eixos com os marcos GTADB L264 (torre de rádio) e L3455 (Belville). A ficha guarda o método e as fontes; o círculo exibido é um auxílio visual de busca, não uma margem de erro medida.
- Carona fantasma utiliza o pino do relato relacionado “Ghost Woman”, identificado como tal. Não foi estabelecido que os dois nomes descrevam o mesmo evento.

Fonte adicional dos marcos: **gtadb.org e todos os colaboradores**, CC BY 4.0 — https://github.com/rolux/gtadb.org — conversão de coordenadas: X=(gx+16384)/32; Y=(16384-gy)/32. Referências L264 e L3455: https://map.gtadb.org/#VI,L264 e https://map.gtadb.org/#VI,L3455 .

Referências comunitárias adicionais: https://www.enzoalder.com/gta-vi/map?place=kraken-shipwreck-sculpture e https://www.enzoalder.com/gta-vi/easter-eggs#belville-mystery-house . Somente fatos de localização são adaptados; não são redistribuídos textos integrais, capturas ou cartografia desse guia.

## Navegação

Zoom fracionário em passos menores, animação de navegação aos pinos, inércia de movimento e agrupamento espacial estável. A lista e o mapa usam os mesmos resultados da busca. Somente o entorno da área visível é desenhado; os demais pontos reaparecem ao navegar. Pinos comuns são desenhados em canvas, e os grupos não são recriados durante cada quadro de movimento. No iPhone, “Ampliar mapa” abre mais espaço e a ficha selecionada ocupa a parte inferior da tela sem cobrir o pino.
