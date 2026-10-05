# Sources — что здесь лежит

Исходники от заказчика и картинки для сравнения с колодой. Слайды везде нумеруются по порядку в колоде
(1 = обложка), а не по бейджу с номером страницы.

## Референсы (от заказчика, руками не меняем)

| Файл | Что это |
|---|---|
| `Alla-pres-v9.pptx` / `.pdf` | Английский референс, слайды 1–9 и 11 (в PDF 10 страниц, слайда 10 там нет) |
| `Alla-pres-v9-es.pptx` / `.pdf` | Испанский референс, та же раскладка. Тексты в `locales/es.ts` взяты отсюда, плюс правки ревьюера (Spanish Flyer & BP — Comments), применены буквально |
| `photo_2026-10-04_20-58-01.jpg` | Макет-фото слайда 10 (References), общий для обоих языков |
| `photo_2026-10-04_23-22-31.jpg` | Макет-фото слайда 11 (Contacts / Let's Connect) |
| `IMG_2318.PNG` | Фон слайда 11, скопирован в `public/img/connect.jpg` |
| `qr.png` | QR-код слайда 11, скопирован в `public/img/qr.png` |
| `icons/imageNN.png` | Иконки, вытащенные из pptx. Используемые скопированы в `public/img/icons/` под осмысленными именами (см. ниже) |

### Какие иконки где

| Слайд | `icons/` | `public/img/icons/` |
|---|---|---|
| 4 (OBC) | image19, 20, 17, 18 | fast-delivery, secure-handling, real-time-tracking, peace-of-mind |
| 5 (OBC Mission) | image21–25 | request-confirmed, courier-pick-up, departure, arrival, final-delivery |
| 8 (Services) | image26–28 | nfo, air-charter, express-road |
| 9 (Industries) | image30–35 | automotive … documents |

Остальные иконки (слайды 2, 3, 6, 7, 11) — tabler из iconify, прямо в `slides.md`.

## Сгенерированное (можно удалять и пересоздавать)

| Папка / файл | Чем делается | Что внутри |
|---|---|---|
| `compare/` | `npm run compare` (или `npm run compare -- 6-7` для диапазона) | Пары `NN-ref.png` (референс) и `NN-new.png` (текущая колода), английский, 2400px |
| `compare-es/` | `npm run compare:es` | То же для испанского (`VITE_LANG=es` против `Alla-pres-v9-es.pdf`) |
| `compare before return to reference/` | Разово, вручную (см. ниже) | `NN-before return to reference.png` — колода с коммита `2c12f7a` («change footer back»), то есть до начала подгонки под референс. Только английский |
| `slide-01.png` … `slide-10.png` | Разово, вручную, в самом начале | Страницы английского PDF. Нумерация по страницам PDF, а не по слайдам (`slide-10` = слайд 11). Устарело, заменено на `compare/NN-ref.png` |

### Как устроен `npm run compare`

Скрипт `scripts/compare.sh`:

1. Референс рендерится из PDF через pymupdf (`uv run --with pymupdf --with pillow`) при 150 dpi, это 2400px по ширине.
   Страницы PDF 1–9 → слайды 1–9, страница 10 → слайд 11. Слайд 10 — это `photo_2026-10-04_20-58-01.jpg`, растянутый до 2400px.
2. Колода экспортируется через `slidev export --format png --scale 2.449` (980px × 2.449 ≈ 2400px), язык выбирается через `DECK_LANG` → `VITE_LANG`.

### Как пересоздать `compare before return to reference/`

Рабочую папку не трогаем — старый коммит выкладываем во временный worktree:

```bash
cd /home/alex/alla/sse-presentations
git worktree add --detach /tmp/wt-before 2c12f7a
cd /tmp/wt-before/2025-02-alla-presentation
cp -al /home/alex/alla/sse-presentations/2025-02-alla-presentation/node_modules node_modules  # копия, не симлинк
VITE_LANG=en npx slidev export --format png --scale 2.449 --output /tmp/wt-png
# переименовать N.png → "NN-before return to reference.png" и положить в Sources/
git worktree remove --force /tmp/wt-before
```

`node_modules` нужна настоящая (можно хардлинками через `cp -al`), а не симлинк: через симлинк Vite не отдаёт файлы
шрифтов, и слайды рендерятся системным шрифтом.

## PDF для показа

Не здесь, а в корне проекта, рядом с `slides.md`. В git не попадают (`*-export.pdf` в `.gitignore`).

| Файл | Команда |
|---|---|
| `slides-en-export.pdf` | `npm run export:en` |
| `slides-es-export.pdf` | `npm run export:es` |
