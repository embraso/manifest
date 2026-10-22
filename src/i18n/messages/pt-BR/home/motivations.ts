import type { RichMessageToken } from '../../../rich';

export const motivations = {
  title: [
    { type: 'text', text: 'Por que a' },
    { type: 'break' },
    { type: 'text', text: 'Embraso existe?' },
  ] satisfies readonly RichMessageToken[],
  intro: 'Há dificuldades que queremos enfrentar juntos. Conheça o que nos move e o que queremos mudar.',
  chooser: 'Escolha um tema para ler',
  problemLabel: 'O que queremos enfrentar',
  goalLabel: 'O que queremos construir',
  footnote: 'Essas são as mudanças que buscamos, não uma lista de ferramentas já disponíveis. Os seis princípios do manifesto orientam como queremos construir esse caminho.',
  noScript: 'As seis leituras estão abertas acima. Você pode ler todas, sem ativar JavaScript.',
  status: 'Lendo: {title}. Tema {current} de {total}.',
  options: [
    {
      id: 'vida-em-comum',
      title: 'Vida em comum',
      lead: 'Ferramentas que ajudem a viver, não só a consumir.',
      problem: 'Uma sala de aula, um coletivo cultural ou um pequeno negócio tem necessidades que nem sempre cabem nas ferramentas disponíveis. Produzir mais um aplicativo, sem ouvir essas pessoas, não resolve isso.',
      goal: 'Queremos aproximar quem conhece o problema de quem pode compartilhar conhecimento e construir junto. Aprender, criar e se organizar nas diferentes realidades do Brasil é o que dá sentido ao software.',
    },
    {
      id: 'autonomia',
      title: 'Autonomia',
      lead: 'Mudar de ferramenta sem perder o que foi construído.',
      problem: 'Um bloqueio, uma mudança de regra ou o fim de um serviço pode interromper um projeto. Quando os dados e o conhecimento ficam presos ali, continuar vira uma decisão de outra pessoa.',
      goal: 'Queremos caminhos para recuperar dados, adaptar ferramentas e mudar de serviço. Colaborar e usar recursos externos pode fazer parte da escolha, sem abrir mão de compreender as dependências e planejar a continuidade.',
    },
    {
      id: 'conhecimento',
      title: 'Conhecimento',
      lead: 'Mais gente capaz de compreender, adaptar e compartilhar.',
      problem: 'Quando só podemos usar uma ferramenta, sem entender ou alterar seu funcionamento, criar uma solução fica restrito a quem controla o programa. Conhecimento concentrado limita os caminhos de quem vem depois.',
      goal: 'Defendemos software livre e conhecimento compartilhado para que mais pessoas possam usar, estudar, modificar e redistribuir o que construímos, inclusive em atividades comerciais. Acesso ao código precisa vir acompanhado dessas permissões.',
    },
    {
      id: 'atencao',
      title: 'Atenção',
      lead: 'Mais troca e descoberta. Menos tempo preso à tela.',
      problem: 'Consumir conteúdo sem parar não é o mesmo que conversar. Quando não entendemos por que algo aparece nem podemos mudar as recomendações, fica mais difícil escolher o que acompanhar.',
      goal: 'Queremos ferramentas que favoreçam encontros, pensamento crítico e descoberta. Defendemos escolher fontes e pessoas, entender os critérios, ajustar ou desligar recomendações e questionar decisões automatizadas.',
    },
    {
      id: 'privacidade',
      title: 'Privacidade',
      lead: 'Participar da vida digital sem abrir mão do cuidado.',
      problem: 'Coletar dados além do necessário e usá-los sem clareza expõe pessoas a vigilância, fraudes e perda de privacidade. Esse risco não desaparece só porque o código está aberto.',
      goal: 'Queremos cuidar dos dados desde o início: coletar apenas o necessário, explicar o uso e proteger de acordo com os riscos. Manutenção, correções e limites claros fazem parte desse compromisso.',
    },
    {
      id: 'continuidade',
      title: 'Continuidade',
      lead: 'Boas ideias precisam de condições para durar.',
      problem: 'Custos que não cabem no orçamento, complexidade excessiva e conhecimento nas mãos de uma só pessoa podem inviabilizar uma ferramenta útil. Exigir a tecnologia ideal antes de começar também pode impedir o primeiro passo.',
      goal: 'Queremos começar com os recursos disponíveis e fazer escolhas que possam ser compreendidas e mantidas. Software livre não significa trabalho gratuito: documentação, cuidado e remuneração justa precisam entrar na conta.',
    },
  ],
} as const;
