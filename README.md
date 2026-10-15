# Manual dos Padrinhos

Convite digital animado em React + Vite: envelope que abre, calendário com contagem regressiva, telas de madrinhas e padrinhos, cronograma e dicas.

## Como rodar

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a pasta dist/ para publicar
npm run preview  # testa o build localmente
```

## Onde editar

- `src/data.js`: nomes, data, horário da cerimônia, hashtag, cronograma, dicas e amostras de cor.
- `src/App.jsx`: lista `TELAS`, que define a ordem das telas. Para remover uma tela, apague a linha dela.
- `src/slides/`: o conteúdo de cada tela.
- `src/assets/`: fotos das madrinhas e dos padrinhos. Para trocar, substitua os arquivos mantendo o nome.
- `src/styles.css`: cores no bloco `:root` no topo (`--navy`, `--blue`, `--mist`, `--sky`, `--sage`, `--gold`).

## Publicar

O build usa caminhos relativos (`base: './'`), então a pasta `dist/` funciona em Netlify, Vercel, GitHub Pages ou qualquer hospedagem estática.

## Estrutura

```
src/
  App.jsx            envelope, navegação, gesto de arrastar e teclado
  data.js            dados do casamento
  utils.js           datas e formatação
  components/        Intro, Nav, Calendar, Flowers, Petals, Swatches, Slide, Reveal
  slides/            Capa, Carta, ReserveData, Missao, Madrinhas, Padrinhos, Cronograma, Dicas
  hooks/useCountdown.js
```

Os horários do cronograma e o texto das dicas são exemplos. Ajuste em `src/data.js`.
