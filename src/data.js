// Dados do casamento. Edite aqui: o resto do projeto lê tudo deste arquivo.
export const config = {
  noiva: 'Maria',
  noivo: 'João',
  data: '2026-12-19', // AAAA-MM-DD
  hora: '17:00', // horário da cerimônia
  hashtag: '#MariaeJoao',

  // [horário, descrição, destaque (1 = linha em destaque)]
  roteiro: [
    ['17:30', 'Chegada dos padrinhos e madrinhas', 0],
    ['18:00', 'Chegada dos convidados', 0],
    ['18:30', 'Cerimônia', 1],
    ['19:30', 'Início da festa', 0],
  ],

  dicas: [
    ['Chegue com 30 minutos de antecedência', 'Assim sobra tempo para ajustes e fotos sem correria.'],
    ['Siga a paleta', 'Cada detalhe foi pensado com carinho, então vale seguir as cores indicadas.'],
    ['Sapato confortável', 'A festa é longa e a pista vai encher. Vale levar um par extra para dançar.'],
    ['Registre e compartilhe', 'Tire muitas fotos e use a hashtag dos noivos para a gente reunir tudo.'],
  ],

  // amostras de cor mostradas nas telas de madrinhas e padrinhos
  coresMadrinhas: [
    ['#420612', 'Marsala escuro'],
    ['#5A1020', 'Marsala'],
    ['#7A2334', 'Marsala claro'],
  ],
  coresPadrinhos: [
    ['#16110F', 'Terno e camisa'],
    ['#5C1424', 'Colete e gravata'],
  ],
}
