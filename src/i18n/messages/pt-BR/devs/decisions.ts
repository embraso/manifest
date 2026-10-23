export const decisions = {
  heading: [
    { type: 'text', text: 'Escolhas de ' },
    { type: 'emphasis', text: 'engenharia.' },
  ],
  intro: 'Como queremos levar esses princípios para o código.',
  items: [
    { question: 'O software resolve o problema de quem?', body: 'Testar com quem vai usar, nos aparelhos, conexões e condições disponíveis.' },
    { question: 'E se o serviço mudar as regras?', body: 'Planejar exportação de dados, formatos abertos e migração antes de integrar um serviço.' },
    { question: 'Quem pode entender e adaptar?', body: 'Adotar permissões para usar, estudar, modificar e compartilhar, inclusive comercialmente, e documentar o necessário para continuar.' },
    { question: 'A recomendação serve a quem?', body: 'Explicar critérios, permitir ajustar ou desligar recomendações e contestar decisões automatizadas.' },
    { question: 'Precisamos coletar isso?', body: 'Coletar só o necessário, proteger conforme o risco e prever revisão e correções.' },
    { question: 'Quem consegue manter depois?', body: 'Avaliar custos, dependências e manutenção. Nuvem, ferramentas proprietárias e IA são escolhas, não requisitos.' },
  ],
} as const;
