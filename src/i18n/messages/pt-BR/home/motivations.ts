import type { RichMessageToken } from '../../../rich';

export const motivations = {
  title: [
    { type: 'text', text: 'Por que a' },
    { type: 'break' },
    { type: 'text', text: 'Embraso existe?' },
  ] satisfies readonly RichMessageToken[],
  intro: 'Não basta escrever mais código quando fica difícil mudar de serviço, adaptar uma ferramenta ou mantê-la. Queremos enfrentar esses problemas com quem os conhece de perto.',
  problemLabel: 'O problema',
  approachLabel: 'Como pretendemos mudar',
  footnote: 'Essas são as mudanças que buscamos, não uma lista de ferramentas já disponíveis. Os seis princípios do manifesto orientam como queremos construir esse caminho.',
  options: [
    {
      id: 'vida-em-comum',
      question: 'Essa ferramenta resolve uma necessidade real?',
      title: 'Vida em comum',
      problem: 'Uma ferramenta pensada sem conhecer a rotina de quem vai usá-la pode não funcionar no aparelho disponível, exigir uma conexão que a pessoa não tem ou atrapalhar a forma como se organiza. Criar mais um aplicativo sem ouvir essas pessoas pode acrescentar uma barreira, não resolver a necessidade.',
      approach: 'Queremos ouvir quem vive a necessidade, reunir essa experiência com conhecimentos diversos e só então avaliar, com as pessoas envolvidas, se uma ferramenta pode ajudar.',
    },
    {
      id: 'autonomia',
      question: 'E se o serviço mudar as regras?',
      title: 'Autonomia',
      problem: 'Se um serviço muda as regras, bloqueia o acesso ou deixa de funcionar, um projeto pode perder dados e trabalho. Quando tudo depende de uma única ferramenta, continuar ou sair deixa de ser uma escolha simples.',
      approach: 'Queremos considerar, desde a escolha, como recuperar dados, adaptar ferramentas e mudar de serviço. Ao usar recursos externos, precisamos compreender as dependências e os caminhos para continuar.',
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
      problem: 'Quando não sabemos por que um conteúdo aparece nem conseguimos mudar as recomendações, fica mais difícil escolher o que acompanhar. Passar horas consumindo conteúdo, por si só, não cria conversa nem troca.',
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
      problem: 'Custos que não cabem nos recursos disponíveis, ferramentas difíceis de manter e conhecimento concentrado em uma só pessoa podem interromper uma solução útil. Exigir a tecnologia ideal antes de começar também pode impedir o primeiro passo.',
      approach: 'Queremos escolher soluções simples, adequadas aos recursos disponíveis, e planejar como compreendê-las, documentá-las e mantê-las. Custos, dependências e condições justas de trabalho também precisam fazer parte dessa escolha. Software livre não torna gratuito o trabalho de desenvolver e cuidar.',
    },
  ],
} as const;
