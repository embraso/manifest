# Embraso — mapa editorial

Esta série reúne duas visões da Embraso: por que dedicar conhecimento a software útil e relações que façam diferença na vida no Brasil; e como construir com liberdade, soberania, cuidado e viabilidade. A pergunta motivadora, a oportunidade e a comunidade desenvolvidas pelo Thiago organizam a abertura; os seis princípios do primeiro manifesto orientam as escolhas. A redação é uma síntese proposta para revisão e evolução, não aprovação formal dos autores ou prova de atividade institucional.

**A linguagem e a direção seguem em desenvolvimento. A primeira implementação do site foi autorizada, com leituras para o público geral e para devs; o acervo inteiro não vira conteúdo público por isso.**

## Technical product context

[PRODUCT.md](../PRODUCT.md) records the owner's website requirements and local commands in English. The first static Astro implementation includes Folheto at `/`, Terminal at `/devs/`, and the shared public manifesto at `/manifesto/`. [DESIGN.md](../DESIGN.md) records the implemented visual system. Cloudflare deployment, lead intake, and a verified project inventory remain unresolved; no form or project catalogue is simulated. Public copy and this editorial collection remain in Brazilian Portuguese.

The existing publication constraints still apply: ideas are not shipped projects, internal notes are not page copy, and contact actions need real destinations.

## Comece por aqui

- Para apresentar a proposta: [manifesto público](01-manifesto-publico.md) e [apresentação e convites](03-apresentacao-e-convites.md).
- Para entender as razões e encontrar uma narrativa mais longa: [manifesto estendido](02-manifesto-estendido.md).
- Para escrever algo novo: [voz e terminologia](06-voz-e-terminologia.md) e o documento do contexto em que o texto será usado.
- Para preservar ou amadurecer o que não cabe no manifesto: a camada interna abaixo. Não descartar uma ideia apenas porque ela não pertence à página pública.
- Para conferir autoria, escolhas de fusão e referências: [fontes e decisões editoriais](08-fontes-e-decisoes-editoriais.md).

## Série editorial

| Documento | Função | Condição de uso |
| --- | --- | --- |
| [01 — Manifesto público](01-manifesto-publico.md) | Apresentar por quê, por que agora e as duas frentes antes dos seis compromissos; abertura canônica compartilhada com a página do manifesto | Proposta pública; retirar a nota de uso e os links editoriais ao compor uma publicação |
| [02 — Manifesto estendido](02-manifesto-estendido.md) | Desenvolver motivação, troca e descoberta, oportunidade técnica e humana, comunidade, escolhas e práticas | Proposta pública de leitura longa; não confundir práticas defendidas com controles já implementados |
| [03 — Apresentação e convites](03-apresentacao-e-convites.md) | Aberturas, descrição, introdução técnica/CTO e chamadas à ação | Biblioteca mista: selecionar texto público; não publicar as notas internas nem atribuir falas sem confirmação |
| [04 — Comunidade e participação](04-comunidade-e-participacao.md) | Acolhimento, contribuição e construção de relações | Texto público proposto e orientação interna separados no documento |
| [05 — Contato e microtextos](05-contato-e-microtextos.md) | Expressões de contato e linguagem de interações reais | Convites e estados condicionados a operação existente; não implementar agora |
| [06 — Voz e terminologia](06-voz-e-terminologia.md) | Personalidade, precisão e exemplos de revisão | Guia interno |
| [07 — Banco de frases](07-banco-de-frases.md) | Extrações literais, adaptações e novas chamadas | Acervo interno; selecionar pelo contexto e respeitar a categoria de autoria |
| [08 — Fontes e decisões editoriais](08-fontes-e-decisoes-editoriais.md) | Rastrear fusão, referências e tensões | Memória interna, não conteúdo da página |

## História, direção e exploração — camada interna

| Documento | O que preserva ou desenvolve |
| --- | --- |
| [História e motivações](interno/01-historia-e-motivacoes.md) | Origem dos incômodos, perspectivas dos textos, dimensão política e perguntas para uma história verificável |
| [Missão e visão](interno/02-missao-e-visao.md) | Propósito e futuro desejado, duas frentes estratégicas e ambições que não são anúncio de produto |
| [Objetivos e sinais de progresso](interno/03-objetivos-e-sinais-de-progresso.md) | Formas de reconhecer utilidade, colaboração, autonomia e continuidade sem inventar metas ou datas |
| [Valores e tensões](interno/04-valores-e-tensoes.md) | Cuidado, reciprocidade, pluralidade e questões abertas sobre renda, abertura, gratuidade e posicionamento |
| [Incubadora de ideias](interno/05-incubadora-de-ideias.md) | Possibilidades de projetos, modelos de sustentação, notas de identidade e hipóteses que merecem investigação |

**Interno é uma classificação editorial, não um controle de acesso.** Arquivos de um repositório público também podem ser lidos publicamente. Não adicionar segredos, credenciais, dados pessoais ou relatos sem autorização. Se for necessário sigilo real, usar armazenamento e permissões apropriados; o nome da pasta não basta.

Não configurar futura publicação automática de todo `docs/`. O site deve receber apenas os trechos públicos selecionados e revisados; este acervo também contém notas, hipóteses e registros históricos.

## Hierarquia de referência

1. A abertura canônica e os seis nomes e compromissos públicos vêm de `01-manifesto-publico.md`. A ordem argumentativa é por quê → por que agora → comunidade e autonomia gradual → princípios como o como.
2. A interpretação desenvolvida está em `02-manifesto-estendido.md`: a comunidade é finalidade e construção de relações, não apenas recrutamento para produzir software.
3. As duas fontes têm papéis complementares, não uma hierarquia de autoria: Thiago organiza a motivação e o percurso inicial; o primeiro manifesto fornece os seis princípios e desenvolve critérios de liberdade, cuidado, continuidade e viabilidade. A [memória editorial](08-fontes-e-decisoes-editoriais.md) registra o reequilíbrio solicitado pelo usuário e os limites dessa síntese.
4. História, missão, visão, objetivos, valores e exploração ficam em `interno/`; não são políticas aprovadas por estarem escritas. Os guias de apresentação, comunidade, contato e voz desdobram o mesmo argumento e posicionamento, sem criar promessas novas.
5. Fontes originais e manifestos externos explicam a origem; não substituem a redação proposta nem comprovam fatos operacionais. A revisão não transforma relatos em diagnósticos universais, possibilidades em parcerias ou a decisão do usuário em consenso dos autores.

Duas frentes atravessam a série: **comunidade e autonomia digital gradual**. A assinatura editorial escolhida pelo responsável pela iniciativa em 22 de outubro de 2026 é **“Liberdade se constrói junto.”** O descritor proposto é **“Software útil, feito em comunidade, para as diferentes realidades do Brasil.”** Ambos são criações editoriais, não citações de origem. A escolha da assinatura e a revisão do sexto princípio estão registradas na [memória editorial](08-fontes-e-decisoes-editoriais.md#revisão-editorial-de-22-de-outubro-de-2026); não constituem aprovação de todos os textos nem comprovação de atividade institucional.

## O que está registrado e o que segue em aberto

| Tema | Registro atual | Consequência editorial |
| --- | --- | --- |
| Marca de trabalho | Embraso | Não expandir automaticamente para uma denominação jurídica ou vínculo estatal |
| Princípios e linguagem | Seis princípios e redação proposta nesta série | Mudanças precisam de revisão coerente, não aprovação presumida |
| Reequilíbrio narrativo | Usuário pediu incorporação mais forte do argumento do Thiago; a estrutura anterior privilegiava os seis pontos do primeiro texto | Apresentar motivação, oportunidade e comunidade antes dos princípios; preservar os seis compromissos e não alegar consenso autoral |
| Natureza jurídica | Não confirmada; há motivação sem fins lucrativos em uma das fontes | Não apresentar empresa, associação, ONG ou órgão público como fato |
| Licença e publicação do código | Software livre como direção; licença e eventual reserva de desenvolvimento em discussão | Não declarar licença adotada nem restrição comercial como software livre |
| Gratuidade e financiamento | Desejo de reduzir barreiras e necessidade de sustentar trabalho | Não prometer todos os serviços gratuitos, orçamento, vagas ou remuneração disponível |
| Comunidade e governança | Relações que queremos construir | Não inventar membros, conselho, processo deliberativo ou moderação existente |
| Projetos | Possibilidades preservadas na incubadora | Não transformar exemplos em portfólio, backlog aprovado ou calendário |
| Contato e participação | Não foram fornecidos destinos operacionais | Não publicar formulário, e-mail, grupo, newsletter, doação ou CTA de envio fictício |
| Pessoas e CTO | Não há identidade ou cargo confirmado nos materiais | A introdução técnica não é depoimento de alguém nem biografia |
| Referência visual | URL fornecida; sem inspeção renderizada concluída | Não derivar layout ou conteúdo imaginados; limite documentado na memória editorial |

## Como alimentar os documentos daqui em diante

**Classificar antes de escrever:** princípio, intenção, fato confirmado, relato pessoal, hipótese, ideia ou decisão em aberto. Isso determina onde a informação entra e como pode ser expressa.

- Um compromisso duradouro vai para a discussão do manifesto; uma opção de ferramenta ou de modelo financeiro tende a pertencer à camada interna.
- Uma lembrança e uma razão para começar vão para a história, com autoria e condição de divulgação.
- Uma ambição vai para a visão; uma direção observável vai para objetivos; uma possibilidade ainda não escolhida vai para a incubadora.
- Uma divergência relevante vai para valores e tensões, com o contexto preservado. Não apagar a versão minoritária para produzir uma falsa unidade.
- Um fato sobre uma atividade, pessoa ou serviço deve ter origem identificável, confirmação e autorização quando necessária. Só então pode sustentar uma afirmação pública.
- Uma frase nova entra no banco como criação; uma reelaboração, como adaptação; uma transcrição, como literal com fonte. Não misturar essas categorias.

Quando houver decisão real, registrar o que mudou, por quê, quem participou e o que ainda pode ser revisto no documento correspondente. Atualizar todos os desdobramentos afetados. Não preencher lacunas com números, prazos, equipes ou histórias plausíveis.

## Fontes preservadas

- [Manifesto original integral](fontes/manifesto-original.md).
- [Manifesto do Thiago integral](fontes/manifesto-thiago-original.md).
- [Notas originais integrais](fontes/notas-originais.txt).

Cópias históricas de consulta, sem mudança de redação. A origem e as referências GNU, Debian, Ágil, Mozilla e Cluetrain estão na [memória editorial](08-fontes-e-decisoes-editoriais.md).

## Uso com OMP

A skill local fica em [`.agents/skills/embraso-language/SKILL.md`](../.agents/skills/embraso-language/SKILL.md). Usa o formato `skills/<nome>/SKILL.md`, com nome e descrição, reconhecido pelo provedor `agents` do OMP em configuração padrão. A descoberta ocorre na abertura da sessão; iniciar uma nova sessão após criar a skill. Se comandos de skill estiverem habilitados, usar `/skill:embraso-language` com o pedido de escrita ou revisão.

A skill orienta quais documentos ler conforme a tarefa, sem incorporar todo o acervo no contexto. Os links relativos dela partem do diretório da própria skill; os documentos continuam aqui como fonte única de referência.

**Convenção de idioma:** `AGENTS.md`, instruções de skills e documentação de implementação (especificações técnicas, arquitetura e guias de desenvolvimento) ficam em inglês. O acervo editorial, inclusive história, estratégia e demais materiais internos, permanece em português brasileiro, assim como o conteúdo do site. Citações, exemplos de texto, nomes canônicos e caminhos existentes não devem ser traduzidos ao aparecerem nas instruções em inglês.

As instruções permanentes do projeto estão em [`AGENTS.md`](../AGENTS.md). A autorização para a primeira página não permite inventar canais, ofertas ou operações nem publicar automaticamente os materiais internos e as fontes históricas.
