import { actions } from './actions';

export const manifesto = {
  title: actions.manifestoLabel,
  back: '← Voltar ao início',
  articleLabel: 'Manifesto Embraso',
  edition: 'Manifesto da Embraso',
  place: 'Feito para o Brasil',
  share: {
    label: 'Compartilhar ou imprimir',
    print: 'Imprimir',
    copyLink: 'Copiar link',
    copyText: 'Copiar texto',
    linkCopied: 'Link copiado.',
    textCopied: 'Texto copiado.',
    copyFailed: 'Não foi possível copiar. Selecione o texto ou o endereço e copie manualmente.',
    footer: 'Copie, imprima ou compartilhe este manifesto. Ele é um ponto de partida para construir junto.',
  },
  introduction: [
    'A Embraso reúne gente para construir software útil e livre, pensado para o Brasil. Queremos dedicar o que sabemos a problemas que importam na vida das pessoas.',
    'Nosso caminho tem duas frentes inseparáveis: construir comunidade e ampliar a autonomia digital. Publicar software não basta: precisamos de relações, troca de conhecimento e condições para cuidar do que criamos.',
  ],
  principles: [
    { id: 'technology-common-good', title: 'Tecnologia para o bem comum', lead: 'Soluções úteis, construídas com quem vai usá-las.', body: 'Queremos ajudar pessoas no Brasil a aprender, trabalhar, criar e se organizar. Isso começa por ouvir quem vive cada necessidade, considerando acessibilidade, aparelhos e conexões. Educação, cultura, ciência, comunidades e pequenos negócios têm lugar nessa construção.' },
    { id: 'autonomy-to-choose', title: 'Autonomia para escolher', lead: 'Poder escolher, mudar de serviço e continuar.', body: 'Queremos dados exportáveis, formatos abertos e migração documentada, para que um serviço que suba preços, bloqueie contas ou remova uma API não deixe nosso trabalho refém. Serviços externos podem fazer parte da escolha, com dependências compreendidas.' },
    { id: 'free-software', title: 'Software livre e conhecimento compartilhado', lead: 'Liberdade para usar, estudar, modificar e compartilhar.', body: 'Defendemos software livre e padrões abertos para que outras pessoas possam continuar o que construímos. Essas liberdades incluem o uso comercial e exigem permissões reais, não só acesso ao código. Livre não quer dizer gratuito.' },
    { id: 'clarity-and-choice', title: 'Transparência no consumo digital', lead: 'Entender as recomendações e decidir o que acompanhar.', body: 'Queremos entender por que um conteúdo aparece e poder ajustar ou desligar recomendações. Recomendações podem ajudar a descobrir algo novo, mas usá-las deve ser uma escolha. Decisões automatizadas também devem poder ser explicadas e contestadas.' },
    { id: 'privacy-and-security', title: 'Privacidade e segurança desde o início', lead: 'Cuidar dos dados é cuidar das pessoas.', body: 'Queremos considerar privacidade e segurança em cada etapa: coletar apenas os dados necessários, explicar para que servem e protegê-los conforme os riscos. Manter e corrigir também faz parte. Código aberto ajuda na revisão, mas não garante segurança.' },
    { id: 'simplicity-and-maintenance', title: 'Simplicidade para construir e manter', lead: 'Começar com o que temos e criar condições para continuar.', body: 'Buscamos soluções simples, adequadas às necessidades e aos recursos disponíveis. Nuvem, ferramentas proprietárias e inteligência artificial podem ajudar quando custos, limites e dependências estão claros. Queremos condições justas para quem desenvolve e mantém.' },
  ],
  invitation: {
    title: 'Um convite para construir',
    introduction: 'Um manifesto não substitui uma comunidade.',
    body: 'Se você programa, desenha, ensina ou conhece de perto um problema, sua experiência tem lugar aqui. Queremos construir com quem usa, mantém e está chegando.',
    closing: 'Vamos construir algo que faça diferença por aqui?',
    link: 'Conheça as formas de contribuir',
  },
} as const;
