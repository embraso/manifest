import { actions } from './actions';

export const manifesto = {
  title: actions.manifestoLabel,
  back: '← Voltar ao início',
  articleLabel: 'Manifesto Embraso',
  introduction: [
    'Queremos dedicar o que sabemos a algo que faça diferença na vida das pessoas. A Embraso é uma iniciativa para reunir gente e construir software útil, livre e acessível às diferentes realidades do Brasil — para aprender, criar, organizar e encontrar outras pessoas, não apenas trabalhar ou consumir.',
    'Passar horas consumindo conteúdo não é o mesmo que trocar com alguém. Queremos ferramentas que ajudem a conversar, descobrir o inesperado e fazer coisas juntos, em vez de organizar tudo para prolongar o tempo diante da tela.',
    'Ferramentas de desenvolvimento podem encurtar o caminho entre uma ideia e algo que funciona. Há gente no Brasil e fora dele com conhecimento e vontade de contribuir para a vida por aqui. A oportunidade está em aproximar essas pessoas de quem conhece os problemas — não simplesmente em produzir mais código.',
    'Por isso, nosso caminho tem duas frentes inseparáveis: construir comunidade e ampliar nossa autonomia digital. Publicar software não basta: precisamos de relações, troca de conhecimento e condições para cuidar do que criamos. Os seis princípios a seguir orientam como queremos fazer essa construção.',
  ],
  principles: [
    { id: 'technology-common-good', title: 'Tecnologia para o bem comum', lead: 'Ferramentas úteis, construídas com quem vai usá-las.', body: 'Queremos criar ferramentas que ajudem pessoas a aprender, trabalhar, criar e se organizar. Isso começa por ouvir quem vive cada necessidade e construir junto, considerando acessibilidade, aparelhos, conexões e diferentes realidades do Brasil. Educação, cultura, ciência, lazer, comunidades e pequenos negócios têm lugar nessa construção. Benefício coletivo e trabalho justamente remunerado podem caminhar juntos.' },
    { id: 'autonomy-to-choose', title: 'Autonomia para escolher', lead: 'Poder escolher, mudar de ferramenta e continuar.', body: 'Queremos que pessoas e projetos possam decidir sobre seus dados, código e ferramentas, respeitando os direitos de cada pessoa. Colaborar e usar serviços externos faz parte desse caminho. O cuidado está em compreender as dependências e preservar meios de recuperar dados, mudar de serviço e dar continuidade ao que foi construído.' },
    { id: 'free-software', title: 'Software livre e conhecimento compartilhado', lead: 'Liberdade para usar, estudar, modificar e compartilhar.', body: 'Defendemos software livre, padrões abertos e conhecimento compartilhado para que outras pessoas possam compreender, adaptar e continuar o que construímos. Essas liberdades incluem o uso comercial e dependem de permissões reais, não apenas de acesso ao código. Software livre não significa necessariamente gratuito: manter ferramentas e compartilhar conhecimento também exige recursos e trabalho reconhecido.' },
    { id: 'clarity-and-choice', title: 'Clareza e escolha no que acompanhamos', lead: 'Entender as recomendações e decidir o que acompanhar.', body: 'Queremos poder escolher pessoas, fontes e assuntos, entender por que um conteúdo aparece e ajustar ou desligar recomendações sem perder o acesso ao que escolhemos seguir. Recomendações podem ajudar a descobrir algo novo quando seus critérios e interesses são compreensíveis e seu uso é uma escolha. Defendemos espaço para a conversa e a descoberta, com respeito ao tempo de cada pessoa. Decisões automatizadas também devem poder ser compreendidas e questionadas.' },
    { id: 'privacy-and-security', title: 'Privacidade e segurança desde o início', lead: 'Cuidar dos dados é cuidar das pessoas.', body: 'Queremos considerar privacidade e segurança em cada etapa: coletar apenas os dados necessários, explicar para que servem e protegê-los de acordo com os riscos. Esse cuidado inclui manter as ferramentas, corrigir problemas e comunicar limites com clareza. Código aberto pode ajudar na revisão, mas não garante segurança por si só.' },
    { id: 'simplicity-and-maintenance', title: 'Simplicidade para construir e manter', lead: 'Começar com o que temos e criar condições para continuar.', body: 'Buscamos soluções simples e úteis, adequadas às necessidades e aos recursos disponíveis. Nuvem, ferramentas proprietárias e inteligência artificial podem ajudar quando seus custos, limites e dependências são compreendidos. Queremos fazer escolhas que respeitem a privacidade, permitam mais autonomia ao longo do tempo e deem condições justas a quem desenvolve e mantém.' },
  ],
  invitation: {
    title: 'Um convite para construir',
    introduction: 'Um manifesto não substitui uma comunidade. Ele diz por que vale a pena reunir gente e começar.',
    body: 'Se você escreve código, desenha, ensina, pesquisa, organiza ou conhece de perto um problema que merece cuidado, sua experiência tem lugar nessa conversa. Queremos construir com quem usa, com quem mantém e com quem ainda está chegando.',
    closing: 'Vamos construir algo que faça diferença por aqui?',
    link: 'Conheça as formas de contribuir',
  },
} as const;
