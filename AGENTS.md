# Embraso — contexto e forma de trabalhar

## O que estamos construindo

Uma base de linguagem e direção para a futura apresentação pública da Embraso: uma iniciativa para reunir pessoas e construir software útil e livre, fortalecer comunidades e ampliar a autonomia digital nas diferentes realidades do Brasil.

A identidade une posição sobre liberdade, privacidade, bem comum e poder de escolha a uma voz brasileira próxima, concreta e acolhedora. Duas frentes caminham juntas: comunidade e autonomia digital gradual. A assinatura editorial proposta é “Tecnologia livre. Gente por perto.”; não é uma campanha formalmente aprovada.

**Etapa atual: documentação, síntese e evolução editorial. Não construir o site.** Não criar componentes, instalar frameworks, escolher stack, publicar páginas ou implementar formulário sem um novo pedido explícito.

## Onde ler

O [mapa editorial](docs/README.md) é a entrada do acervo e registra as condições ainda em aberto.

- [Manifesto público](docs/01-manifesto-publico.md): seis princípios canônicos, versão curta.
- [Manifesto estendido](docs/02-manifesto-estendido.md): razões, narrativa e desenvolvimento dos princípios.
- [Apresentação e convites](docs/03-apresentacao-e-convites.md), [comunidade](docs/04-comunidade-e-participacao.md) e [contato](docs/05-contato-e-microtextos.md): desdobramentos por contexto, com notas internas separadas.
- [Voz e terminologia](docs/06-voz-e-terminologia.md) e [banco de frases](docs/07-banco-de-frases.md): como escrever e como distinguir citação, adaptação e criação.
- [Fontes e decisões editoriais](docs/08-fontes-e-decisoes-editoriais.md): origem dos textos, precedentes e escolhas de fusão.
- Camada interna: [história](docs/interno/01-historia-e-motivacoes.md), [missão e visão](docs/interno/02-missao-e-visao.md), [objetivos](docs/interno/03-objetivos-e-sinais-de-progresso.md), [valores e tensões](docs/interno/04-valores-e-tensoes.md) e [incubadora de ideias](docs/interno/05-incubadora-de-ideias.md).

Para escrever ou revisar, carregar a skill local [embraso-language](.agents/skills/embraso-language/SKILL.md). Ela é curta e direciona a leitura; não duplicar o acervo dentro da skill. O OMP reconhece `.agents/skills/<nome>/SKILL.md` na configuração padrão e descobre skills ao iniciar a sessão. O nome deste arquivo é `AGENTS.md`, em maiúsculas, para descoberta convencional no Linux.

## Compromissos editoriais

1. Manter os seis nomes e a ordem: **Liberdade por padrão; Soberania por escolha; Segurança por princípio; Pragmatismo com propósito; Tecnologia para o bem comum; Transparência e liberdade algorítmica.** As duas frentes estratégicas não são princípios adicionais.
2. Escrever em português brasileiro, com clareza, calor e consequências concretas. Evitar pitch corporativo, gíria fabricada, nacionalismo excludente e culpa por não contribuir. Incluir quem não programa; manutenção e trabalho remunerado fazem parte da visão.
3. Distinguir princípio, intenção, fato confirmado, relato, hipótese e decisão em aberto. Natureza jurídica, licenças, financiamento, equipe/CTO, canais, produtos e métricas não estão confirmados só porque aparecem em uma fonte.
4. Software livre permite uso comercial e não significa custo zero. Acesso ao código não basta para definir liberdade. Não resolver tensões sobre licença ou desenvolvimento reservado por meio de linguagem ambígua.
5. Não apagar material que não cabe no manifesto. Preservar história, crítica política, valores, hipóteses e ideias no documento interno adequado, com contexto e autoria. Uma tese sem evidência continua discutível, mas não vira fato público por repetição.
6. Não promover ideias a portfólio ou roadmap. Não fabricar contatos, grupos, formulários, doações, depoimentos ou promessas de resposta. Mensagens de interface descrevem apenas ações efetivas e confirmadas.
7. Materiais internos e notas editoriais não são texto de página. Não publicar automaticamente todo `docs/`. A classificação “interno” não fornece sigilo: não armazenar aqui segredos, credenciais ou relatos pessoais sem autorização.

## Fontes e referência visual

Os dois manifestos foram fornecidos em `C:/dev/embraso/`, acessível neste ambiente em `/mnt/c/dev/embraso/`. As cópias integrais portáveis estão em [fontes](docs/fontes/manifesto-original.md), [texto do Thiago](docs/fontes/manifesto-thiago-original.md) e [notas](docs/fontes/notas-originais.txt). Preservar esses registros e os originais externos; novas decisões vão nos documentos de síntese, não em reescrita silenciosa da fonte.

Referência indicada para um site futuro: [artefato Claude](https://claude.ai/artifact/BWKYPiNDodsXjPPY1c81dp#page-dcb81aee8d83). A inspeção renderizada não foi possível nesta entrega; o limite está na memória editorial. O HTML de logo disponível externamente é um export separado, não código de produção nem prova do layout dessa página. Não inferir interface ou conteúdo não observados.

GNU, Debian, Ágil, Mozilla e Cluetrain são referências de estrutura e valores, com fontes primárias vinculadas na memória editorial. Não importar seus produtos, escala, políticas e história como se fossem da Embraso.

## Evolução e verificação

Ler o trecho relevante antes de alterar. Reutilizar os documentos existentes, manter o manifesto curto e sua interpretação longa coerentes, atualizar referências afetadas e preservar divergências identificáveis. Novas informações devem entrar com origem e condição de divulgação.

Para mudanças documentais, verificar caminhos, links relativos, nomes dos princípios, fidelidade de citações e separação entre notas e texto público. Para a skill, conferir frontmatter, localização e leitura pelo OMP quando disponível. Não criar infraestrutura de teste ou aplicação apenas para validar Markdown.

Se houver pedido posterior para construir o site, verificar primeiro referência visual, conteúdo público selecionado, estágio real das ofertas e destinos de interação. O novo pedido altera o escopo de implementação, não elimina estas condições de veracidade.
