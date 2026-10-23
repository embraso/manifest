import type { RichMessageToken } from '../../../rich';

export const motivations = {
  title: [
    { type: 'text', text: 'Por que a' },
    { type: 'break' },
    { type: 'emphasis', text: 'Embraso' },
    { type: 'text', text: ' existe?' },
  ] satisfies readonly RichMessageToken[],
  intro: 'Código útil para problemas do Brasil. Conheça o que nos move e o que queremos mudar.',
  chooser: 'Escolha um tema para ler',
  problemLabel: 'O problema',
  approachLabel: 'Como pretendemos mudar',
  footnote: 'Essas são as mudanças que buscamos, não uma lista de ferramentas já disponíveis. Os seis princípios do manifesto orientam como queremos construir esse caminho.',
  status: 'Lendo: {title}. Tema {current} de {total}.',
  noScript: 'As seis leituras estão abertas acima. Você pode ler todas, sem ativar JavaScript.',
  source: {
    href: 'https://cetic.br/pt/tics/domicilios/2024/individuos/C16A/',
    label: 'Fonte: NIC.br/Cetic.br, TIC Domicílios 2024, tabela C16A',
  },
  options: [
    {
      id: 'vida-em-comum',
      question: 'Essa solução resolve uma necessidade real?',
      title: 'Vida em comum',
      problem: 'Em 2024, 60% dos usuários de internet no Brasil acessaram a internet somente pelo celular. Uma sala de aula, um coletivo cultural ou um pequeno negócio precisa de soluções que funcionem bem nesse aparelho. Criar mais um aplicativo sem ouvir essas pessoas não resolve isso.',
      approach: 'Queremos aproximar quem vive o problema de quem pode compartilhar conhecimento. Testar com as pessoas afetadas e construir junto, no ritmo e nas condições de cada realidade.',
    },
    {
      id: 'autonomia',
      question: 'E se o serviço mudar as regras?',
      title: 'Autonomia',
      problem: 'Um aumento de preço, uma conta bloqueada ou uma API removida podem interromper um projeto inteiro. Quando dados e conhecimento ficam presos a um serviço, continuar vira decisão de outra pessoa.',
      approach: 'Queremos dados exportáveis, formatos abertos e migração documentada. Usar serviços externos pode fazer parte da escolha, com dependências compreendidas e continuidade planejada.',
    },
    {
      id: 'conhecimento',
      question: 'Quem pode compreender e adaptar a ferramenta?',
      title: 'Conhecimento',
      problem: 'Poder usar uma ferramenta sem conseguir compreender ou adaptar seu funcionamento deixa as pessoas dependentes de quem controla o programa. O conhecimento concentrado limita as soluções que podem ser feitas e continuadas.',
      approach: 'Queremos defender permissões reais para usar, estudar, modificar e compartilhar software, inclusive comercialmente, e documentar essas liberdades para que outras pessoas possam compreender e continuar o trabalho. Ter acesso ao código, por si só, não basta.',
    },
    {
      id: 'atencao',
      question: 'Quem escolhe o que aparece para você?',
      title: 'Atenção',
      problem: 'Recomendações que não explicam seus critérios decidem o que aparece para nós. Sem poder ajustá-las, fica difícil escolher o que acompanhar e com quem conversar.',
      approach: 'Queremos criar espaço para escolher fontes e pessoas, entender os critérios de recomendação, ajustá-las ou desligá-las. Também queremos que decisões automatizadas possam ser questionadas e que a descoberta não dependa de recomendações opacas.',
    },
    {
      id: 'privacidade',
      question: 'Quais dados são realmente necessários?',
      title: 'Privacidade',
      problem: 'Coletar mais dados do que o necessário e usá-los sem clareza pode expor pessoas a vigilância, fraudes e perda de privacidade. Deixar o código visível não elimina esses riscos.',
      approach: 'Queremos perguntar se cada dado é necessário, explicar seu uso e protegê-lo de acordo com os riscos. Manter as ferramentas, corrigir problemas e comunicar limites também fazem parte desse cuidado.',
    },
    {
      id: 'continuidade',
      question: 'Quem consegue manter isso depois?',
      title: 'Continuidade',
      problem: 'Custos que não cabem no orçamento, complexidade excessiva e conhecimento nas mãos de uma só pessoa podem inviabilizar uma solução útil. Exigir a tecnologia ideal antes de começar também pode impedir o primeiro passo.',
      approach: 'Queremos escolher soluções simples, adequadas aos recursos disponíveis, e planejar como compreendê-las, documentá-las e mantê-las. Custos, dependências e condições justas de trabalho também precisam fazer parte dessa escolha. Software livre não torna gratuito o trabalho de desenvolver e cuidar.',
    },
  ],
} as const;
