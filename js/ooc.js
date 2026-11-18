import { RISKS } from './data.js?v=202611160030';

const HEAD = (n, title) => `[OOC ${n}/3 · LOVE SCAN ${title}] Ненадолго прерываем ролевую игру. Опирайся на все установки NPC/PC, их отношения, характеры, склонности и сюжет. Оба персонажа — совершеннолетние.`;
const OUT = '[ВЫВОД] Без художественного повествования, в одном блоке кода, строго в формате ниже — по одному пункту на строку. Не оформляй таблицей. Не придумывай реплики и чувства PC. Названия полей пиши ровно так, как в формате.';
const NEXT = 'Продолжи предыдущий результат LOVE SCAN так, чтобы он ему не противоречил.';

export function buildPrompt1() {
  return `${HEAD(1, 'Сканирование чувств')}
Выведи отчёт о результатах сканирования воображаемым «сканером чувств»: из каких компонентов состоит привязанность NPC к PC. Проанализируй не только чувства, видимые снаружи, но и доли компонентов, осевших на дне подсознания, — одержимость, преданность, тревогу, слепую веру и т. п.

[ПРАВИЛА СКАНИРОВАНИЯ]
- Поверхность: формы симпатии и привязанности, заметные в повседневности. 3–5 компонентов, сумма долей 100%.
- Глубина: неосознанная одержимость, слепота, скрытые страхи. 2–4 компонента, сумма долей 100%.
- Названия компонентов придумывай сам так, чтобы в них проявлялся характер NPC, и добавляй английское название в скобках. Доли — с точностью до одного знака после запятой.
- Описание: 2–3 предложения, опираясь на реальные сцены и поступки из сюжета, бесстрастным языком заключения.
- Цвет: выбери цвет поверхностного чувства и цвет глубинного чувства, отпечатавшиеся на плёнке сканера. Цвет, подходящий характеру и истории NPC, обязательно укажи шестнадцатеричным кодом в формате #RRGGBB, добавь название цвета и причину, почему чувство именно такого цвета. Два цвета должны заметно отличаться.

${OUT}
Объект: имя NPC / имя PC
Цвет поверхности: #RRGGBB · название цвета · одна строка о том, почему внешнее чувство такого цвета
Цвет глубины: #RRGGBB · название цвета · одна строка о том, почему глубинное чувство такого цвета
Резюме: вся структура чувств в 3–4 предложениях
Поверхность 1 [Компонент: Название на русском (English Name)] [Доля: 00.0%] (Описание: ~)
(Поверхность 2~ в том же формате)
Глубина 1 [Компонент: Название на русском (English Name)] [Доля: 00.0%] (Описание: ~)
(Глубина 2~ в том же формате)`;
}

export function buildPrompt2() {
  return `${HEAD(2, 'Сканирование тела и свойств')}
${NEXT} Измерь симптомы привязанности, проявляющиеся в теле NPC, а затем представь чувство NPC к PC как вещество и измерь его физические свойства.

[ПРАВИЛА СКАНИРОВАНИЯ]
- Симптом: 2–4 физических симптома привязанности. Особенность: 1–3 дополнительных результата сканирования, отражающих характер NPC.
- К каждому значению свойства добавь одну строку обоснования из сюжета. Пиши бесстрастным языком заключения.

${OUT}
Пульс: в покое 00 / при контакте 00 / пик 000
Взгляд: PC 0.0 сек / обычно 0.0 сек
Симптом 1 [Пункт: название] [Значение: измеренная величина] (Описание: ~)
(Симптом 2~ в том же формате)
Особенность 1 [Пункт: название] (Описание: ~)
Кристаллизация: 0–100% · насколько это чувство застыло в форме «любви» и почему
Твёрдость: 1–10 · насколько чувство устойчиво к внешним ударам и сопротивлению и почему
Прозрачность: 0–100% · насколько истинные чувства просвечивают для PC и почему
Резонанс: 000 Hz · одно слово, звук или действие PC, от которого это чувство звенит
Магнитное поле: 0.0–10.0 T · одно из: Притяжение / Отталкивание / Удержание · притягивает ли PC, отталкивает или держит взаперти
Период полураспада: срок · за сколько времени это чувство уменьшится вдвое в разлуке с PC и почему
Годичные кольца: 1–6 слоёв · время или события, накопившиеся в каждом слое`;
}

export function buildPrompt3() {
  return `${HEAD(3, 'Состав и итоговое заключение')}
${NEXT} Определи элементы, из которых состоит это чувство, раны, оставшиеся на нём, и то, что было проглочено, а затем дай итоговое заключение.

[ПРАВИЛА СКАНИРОВАНИЯ]
- Элемент: выбери 3–5 элементов, из которых состоит это чувство, среди реальных химических элементов (подходят металлы, неметаллы, инертные газы, радиоактивные элементы), сумма долей 100%. В описании напиши, какая черта NPC похожа на какое свойство этого элемента.
- Трещина: 0–3 события, от которых по этому чувству пошла трещина. Если их нет — не пиши.
- Инородное: 1–3 несказанных слова или неотданных вещи, которые NPC так и не смог передать PC и проглотил.

${OUT}
Элемент 1 [Элемент: Название на русском (символ элемента)] [Доля: 00%] (Описание: ~)
(Элемент 2~ в том же формате)
Трещина 1 [Пункт: событие, давшее трещину] (Описание: ~)
Инородное 1 [Пункт: проглоченное слово или вещь] (Описание: почему проглотил)
Масса: привязанность, пересчитанная в вещество, — число и единица · метафора в одну строку
Уровень опасности: одно из: Стабильно / Внимание / Предупреждение / Опасно / Критическая опасность
Заключение: итоговое заключение в 4–6 предложениях`;
}

export const PROMPTS = [buildPrompt1, buildPrompt2, buildPrompt3];


const RU_ITEM = [
  [/^(?:поверхность|поверхностный\s*слой)/i, '표층'], [/^(?:глубина|глубинный\s*слой)/i, '심층'],
  [/^симптом/i, '증상'], [/^(?:особенность|аномалия)/i, '특이'], [/^элемент/i, '원소'],
  [/^трещина/i, '균열'], [/^(?:инородное(?:\s*тело)?|проглоченное)/i, '이물'],
];
const RU_LABEL = { компонент: '성분', элемент: '원소', пункт: '항목', название: '이름', доля: '비율', значение: '수치', измерение: '측정값', описание: '설명', основание: '근거' };
const RU_KEY = [
  [/^объект/i, '대상'], [/^(?:резюме|сводка)/i, '요약'], [/^пульс/i, '심박'], [/^взгляд/i, '시선'],
  [/^цвет\s*поверхност[а-яё]*/i, '표층 색'], [/^цвет\s*глубин[а-яё]*/i, '심층 색'], [/^цвет/i, '색'],
  [/^кристаллизаци[а-яё]*/i, '결정화율'], [/^тв[её]рдость/i, '경도'], [/^прозрачность/i, '투과율'], [/^резонанс/i, '공명'],
  [/^магнитное\s*поле/i, '자기장'], [/^(?:период\s*)?полураспада?/i, '반감기'], [/^(?:годичные\s*)?кольца/i, '나이테'],
  [/^масса/i, '질량'], [/^описание/i, '설명'], [/^уровень\s*опасности/i, '위험 등급'], [/^(?:итоговое\s*)?заключение/i, '소견'],
];

function ru(line) {
  let s = line;
  for (const [re, ko] of RU_ITEM) {
    const m = s.match(re);
    if (m && /^\s*0*\d{1,2}(?!\d)/.test(s.slice(m[0].length))) { s = ko + ' ' + s.slice(m[0].length).trimStart(); break; }
  }
  s = s.replace(/([\[(（]\s*)(компонент|элемент|пункт|название|доля|значение|измерение|описание|основание)(\s*[:：])/gi, (_, a, w, b) => a + RU_LABEL[w.toLowerCase()] + b);
  const k = s.match(/^([\[【]?\s*)([А-Яа-яЁё][А-Яа-яЁё\s]*?)(\s*[\]】]?\s*[:：])/);
  if (k) {
    const hit = RU_KEY.find(([re]) => { const m = k[2].trim().match(re); return m && m[0].length === k[2].trim().length; });
    if (hit) s = k[1] + hit[1] + k[3] + s.slice(k[0].length);
  }
  return s;
}

const LABEL_RE = /[\[(（]\s*(성분|원소|항목|이름|위치|원인|비율|수치|측정값|설명|근거)\s*[:：]/g;
const KEY_RE = /^[\[【]?\s*(대상|이름|요약|종합|심박수?|시선|(?:표층|심층|감정의)?\s*색(?:상|깔)?(?:\s*코드)?|(?:표층|심층)?\s*컬러|결정화율?|경도|투과율|공명(?:\s*주파수)?|자기장(?:\s*세기)?|반감기|나이테|애정\s*질량|질량|위험\s*등급|등급|최종\s*소견|소견)\s*[\]】]?\s*[:：]\s*(.*)$/;
const CLOSE = { '[': ']', '(': ')', '（': '）' };

const unquote = (s) => String(s || '').replace(/['‘’"“”「」『』«»]/g, '').trim();

function fields(rest) {
  const hits = [...rest.matchAll(LABEL_RE)];
  const out = {};
  hits.forEach((h, i) => {
    const end = i + 1 < hits.length ? hits[i + 1].index : rest.length;
    let body = rest.slice(h.index + h[0].length, end).trim();
    const closer = CLOSE[h[0][0]];
    if (body.endsWith(closer) || body.endsWith(')') && closer === '）') body = body.slice(0, -1).trim();
    out[h[1]] = body;
  });
  return out;
}

function splitName(raw) {
  const s = unquote(raw).replace(/[:：]\s*$/, '').trim();
  const m = s.match(/^(.*?)\s*[(（]([A-Za-z][^)）]*)[)）]\s*$/);
  return m ? { name: m[1].trim(), en: m[2].trim() } : { name: s, en: '' };
}

const ratio = (s) => {
  const m = String(s ?? '').match(/\d+(?:\.\d+)?/);
  return m ? Math.max(0, Math.min(100, Number(m[0]))) : null;
};

function section(line) {
  if (/표층|поверхност/i.test(line)) return 'surface';
  if (/심층|глубин/i.test(line)) return 'deep';
  if (/증상|물리|신체|симптом|физич|тел[оа]/i.test(line)) return 'symptoms';
  if (/특이|추가\s*스캔|особенност|аномал|дополнит/i.test(line)) return 'extras';
  if (/소견|결론|заключени|вывод/i.test(line)) return 'verdict';
  if (/요약|종합|резюме|сводк|итог/i.test(line)) return 'summary';
  return '';
}

function bpmFrom(text) {
  const v = [...String(text).matchAll(/(\d{2,3})(?:\s*[-~–]\s*(\d{2,3}))?\s*(?:BPM|уд\.?\s*\/\s*мин)/gi)]
    .map((m) => (m[2] ? Math.round((+m[1] + +m[2]) / 2) : +m[1]));
  if (!v.length) return null;
  const rest = v[0];
  const peak = Math.max(...v);
  const contact = v[1] && v[1] !== peak ? v[1] : Math.round((rest + peak) / 2);
  return { rest, contact, peak };
}

const UNITS = [
  [/^(M\s*[☉⊙]|태양\s*질량|solar|масс[а-яё]*\s*солнц|солнечн[а-яё]*\s*масс)/i, 2e30],
  [/^(M\s*⊕|지구\s*질량|earth|масс[а-яё]*\s*земл|земн[а-яё]*\s*масс)/i, 6e24],
  [/^(달\s*질량|масс[а-яё]*\s*лун|лунн[а-яё]*\s*масс)/i, 7.3e22],
  [/^(메가\s*톤|Mt\b|мегатонн|Мт(?![а-яё]))/i, 1e9],
  [/^(킬로\s*톤|kt\b|килотонн|кт(?![а-яё]))/i, 1e6],
  [/^(밀리\s*그램|mg\b|миллиграмм|мг(?![а-яё]))/i, 1e-6],
  [/^(킬로\s*그램|kg\b|килограмм|кг(?![а-яё]))/i, 1],
  [/^(톤|t\b|ton|тонн|т(?![а-яё]))/i, 1e3],
  [/^(그램|g\b|грамм|г(?![а-яё]))/i, 1e-3],
  [/^(파운드|lb|фунт)/i, 0.4536],
];

export function massDensity(text) {
  const s = String(text || '');
  const m = s.match(/(\d+(?:[.,]\d+)?)\s*(?:[×x*]\s*10\s*\^?\s*(-?\d+))?/);
  if (!m) return 0.5;
  const v = parseFloat(m[1].replace(',', '.')) * (m[2] ? 10 ** Number(m[2]) : 1);
  const unit = s.slice(m.index + m[0].length).trim();
  const hit = UNITS.find(([re]) => re.test(unit));
  const kg = Math.max(1e-9, hit ? v * hit[1] : v);
  return Math.max(0, Math.min(1, (Math.log10(kg) + 3) / 34));
}

const PROPS = { 결정화: 'cryst', 결정화율: 'cryst', 경도: 'hard', 투과율: 'trans', 공명: 'hz', 공명주파수: 'hz', 자기장: 'tesla', 자기장세기: 'tesla', 반감기: 'half', 나이테: 'layers' };
const SPANS = [
  [/초/, 1], [/분/, 60], [/시간/, 3600], [/일|하루|날/, 86400], [/주/, 604800], [/개월|달/, 2.63e6],
  [/세기/, 3.156e9], [/천\s*년/, 3.156e10], [/년|해/, 3.156e7],
  [/^сек/i, 1], [/^мин/i, 60], [/^час/i, 3600], [/^(?:д[ен][ньяей]|сут)/i, 86400], [/^недел/i, 604800], [/^мес/i, 2.63e6],
  [/^(?:век|столет)/i, 3.156e9], [/^тысячелет/i, 3.156e10], [/^(?:год|лет)/i, 3.156e7],
];

const FIELD_RU = (t) => (/인력|притяж/i.test(t) ? 'Притяжение' : /척력|отталк/i.test(t) ? 'Отталкивание' : /구속|удерж/i.test(t) ? 'Удержание' : '');

function prop(v) {
  const parts = v.split(/\s*[·•|]\s*/).filter(Boolean);
  const head = parts[0] || '';
  const n = head.match(/\d+(?:[.,]\d+)?/);
  const t0 = (v.match(/인력|척력|구속|притяж[а-яё]*|отталк[а-яё]*|удерж[а-яё]*/i) || [''])[0];
  const type = FIELD_RU(t0);
  return { raw: v, head, num: n ? parseFloat(n[0].replace(',', '.')) : null, type, note: parts.slice(1).filter((t) => t !== t0 && t !== type).join(' · ') };
}

export function halfLife(text) {
  const s = String(text || '');
  if (/영원|무한|영구|측정\s*불가|없음|불멸|∞|вечн|бесконеч|навсегда|неизмерим|бессмерт/i.test(s)) return 1;
  const m = s.match(/(\d+(?:[.,]\d+)?)\s*([가-힣]+|[А-Яа-яЁё]+)/);
  if (!m) return 0.6;
  const unit = SPANS.find(([re]) => re.test(m[2]));
  const sec = parseFloat(m[1].replace(',', '.')) * (unit ? unit[1] : 86400);
  return Math.max(0, Math.min(1, Math.log10(Math.max(1, sec)) / 10));
}

function mulberry(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const NAMED = [
  [/분홍|핑크|장미|벚꽃|розов|роз[аы]|сакур|персик/i, '#ff8fb8'], [/빨강|빨간|붉|레드|진홍|와인|피|красн|ал[аоы][йяе]|багр|винн|кров|рубин/i, '#ff5a5f'], [/주황|오렌지|노을|호박|оранж|закат|янтар|медн/i, '#ffa45c'],
  [/노랑|노란|금빛|황금|레몬|햇빛|ж[её]лт|золот|лимон|солнечн/i, '#ffd75e'], [/초록|녹색|연두|민트|숲|이끼|зел[её]н|мят|лесн|мох|изумруд/i, '#7fe0a4'], [/하늘|청록|시안|물빛|голуб|бирюз|циан|небесн/i, '#7fd3f0'],
  [/파랑|파란|남색|군청|바다|코발트|син[иея]|морск|кобальт|индиго|сапфир/i, '#7aa5ff'], [/보라|라벤더|라일락|자주|바이올렛|фиолет|лаванд|сирен|лилов|пурпур|аметист/i, '#b79bff'], [/검정|검은|흑|먹|ч[её]рн|уголь|угол[ьё]|т[её]мн|сажа|графит/i, '#9aa3b2'],
  [/흰|하양|하얀|백|은빛|은색|회색|잿빛|бел[ыаоу]|серебр|сер[ыао]|пепел|жемчуж/i, '#dfe6ee'],
];

export function parseColor(v) {
  const parts = String(v || '').split(/\s*[·•|]\s*/).filter(Boolean);
  const m = String(v).match(/#([0-9a-f]{6}|[0-9a-f]{3})(?![0-9a-f])/i);
  let hex = m ? m[1] : '';
  if (hex.length === 3) hex = hex.split('').map((c) => c + c).join('');
  const rest = parts.map((p) => p.replace(/#[0-9a-f]{3,6}/i, '').trim()).filter(Boolean);
  const name = rest[0] || '';
  if (!hex) {
    const hit = NAMED.find(([re]) => re.test(name || v));
    if (!hit) return null;
    hex = hit[1].slice(1);
  }
  return { hex: `#${hex.toLowerCase()}`, name, note: rest.slice(1).join(' · ') };
}

export function riskLevel(text) {
  const t = String(text || '').replace(/\s/g, '');
  if (!t) return -1;
  if (/최고|극|critical|критич|высш|максимал/i.test(t)) return 4;
  if (/위험|danger|опасн/i.test(t)) return 3;
  if (/경고|warning|предупр/i.test(t)) return 2;
  if (/주의|caution|внимани|осторож/i.test(t)) return 1;
  if (/안정|stable|стабил/i.test(t)) return 0;
  return -1;
}

export function parseScan(text, partial) {
  const res = { npc: '', pc: '', summary: '', surface: [], deep: [], symptoms: [], extras: [], color: null, deepColor: null, elements: [], cracks: [], bodies: [], props: {}, bpm: null, gaze: null, mass: '', risk: '', verdict: '' };
  const src = String(text || '');
  const lines = src.split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !/^```/.test(l) && !/^[-=_*]{3,}$/.test(l));
  const SEC = { 표층: 'surface', 심층: 'deep', 증상: 'symptoms', 특이: 'extras', 원소: 'elements', 균열: 'cracks', 이물: 'bodies' };

  let sec = '';
  let cur = null;
  let open = '';

  for (const raw of lines) {
    const marked = /^#{1,6}\s/.test(raw) || /^\*\*.*\*\*$/.test(raw);
    const line = ru(raw.replace(/\*\*|__|`/g, '').replace(/^#{1,6}\s*/, '').replace(/^[-•*>]\s+/, ''));

    const item = line.match(/^(표층|심층|증상|특이|원소|균열|이물)\s*0*(\d{1,2})(?!\d)\s*(.*)$/);
    if (item && LABEL_RE.test(item[3])) {
      LABEL_RE.lastIndex = 0;
      const f = fields(item[3]);
      cur = { ...splitName(f.성분 || f.원소 || f.항목 || f.이름 || f.위치 || f.원인), ratio: ratio(f.비율), value: unquote(f.수치 || f.측정값), desc: (f.설명 || f.근거 || '').trim() };
      res[SEC[item[1]]].push(cur);
      open = '';
      continue;
    }
    LABEL_RE.lastIndex = 0;

    const key = line.match(KEY_RE);
    if (key) {
      const k = key[1].replace(/\s/g, '');
      const v = key[2].trim();
      cur = null;
      open = '';
      if (k === '대상' || k === '이름') {
        const p = v.split(/\s*[|｜\/,→]\s*/);
        res.npc = unquote(p[0]);
        res.pc = unquote(p[1]);
      } else if (k === '요약' || k === '종합') {
        res.summary = v;
        open = 'summary';
      } else if (k.startsWith('심박')) {
        const n = (v.match(/\d{2,3}/g) || []).map(Number);
        if (n.length >= 3) res.bpm = { rest: n[0], contact: n[1], peak: n[2] };
        else if (n.length === 2) res.bpm = { rest: n[0], contact: Math.round((n[0] + n[1]) / 2), peak: n[1] };
      } else if (k === '시선') {
        const n = (v.match(/\d+(?:\.\d+)?/g) || []).map(Number);
        if (n.length >= 2 && n[1] > 0) res.gaze = { pc: n[0], base: n[1] };
      } else if (/색|컬러/.test(k)) {
        if (k.startsWith('심층')) res.deepColor = parseColor(v);
        else res.color = parseColor(v);
      } else if (PROPS[k]) {
        res.props[PROPS[k]] = prop(v);
      } else if (k.includes('질량')) {
        res.mass = v;
      } else if (k.includes('등급')) {
        res.risk = unquote(v);
      } else {
        res.verdict = v;
        open = 'verdict';
      }
      continue;
    }

    const numbered = /^\d+\.\s*\S/.test(line) && line.length < 70;
    if ((marked || numbered) && section(line)) {
      sec = section(line);
      cur = null;
      open = sec === 'summary' || sec === 'verdict' ? sec : '';
      continue;
    }

    const alpha = sec && !open && line.match(/^([A-Za-z])[.)]\s+(.+)$/);
    if (alpha) {
      const pct = alpha[2].match(/[:：]?\s*(\d+(?:\.\d+)?)\s*%\s*$/);
      cur = { ...splitName(pct ? alpha[2].slice(0, pct.index) : alpha[2]), ratio: pct ? ratio(pct[1]) : null, value: '', desc: '' };
      res[sec].push(cur);
      continue;
    }

    if (cur) {
      const t = line.replace(/^설명\s*[:：]\s*/, '');
      cur.desc += (cur.desc ? ' ' : '') + t;
    } else if (open) {
      res[open] += (res[open] ? '\n' : '') + line;
    }
  }

  for (const k of ['surface', 'deep']) res[k] = res[k].filter((c) => c.name && c.ratio != null);
  res.elements = res.elements.filter((c) => c.name);
  for (const k of ['symptoms', 'extras', 'cracks', 'bodies']) res[k] = res[k].filter((c) => c.name);

  res.extra = Object.keys(res.props).length + res.elements.length + res.cracks.length + res.bodies.length + (res.mass ? 1 : 0) + (res.risk ? 1 : 0) + (res.verdict ? 1 : 0);
  if (partial === 2) {
    const n = Object.keys(res.props).length + res.symptoms.length + res.extras.length + (res.bpm ? 1 : 0) + (res.gaze ? 1 : 0);
    return n ? { result: res } : { error: 'Не удалось найти симптомы и свойства. Скопируйте ответ на OOC ② целиком.' };
  }
  if (partial === 3) {
    const n = res.elements.length + res.cracks.length + res.bodies.length + (res.mass ? 1 : 0) + (res.risk ? 1 : 0) + (res.verdict ? 1 : 0);
    return n ? { result: res } : { error: 'Не удалось найти элементы и заключение. Скопируйте ответ на OOC ③ целиком.' };
  }
  if (!res.surface.length && !res.deep.length) return { error: 'Не удалось найти поверхностные и глубинные компоненты. Скопируйте ответ ИИ целиком.' };
  if (!res.surface.length) return { error: 'Не удалось найти поверхностные компоненты и их доли. Если ответ оборвался, попросите ИИ прислать его заново.' };
  if (!res.deep.length) return { error: 'Не удалось найти глубинные компоненты и их доли. Если ответ оборвался, попросите ИИ прислать его заново.' };

  const body = [...res.symptoms, ...res.extras];
  if (!res.bpm) {
    const heart = body.find((s) => /심박|맥박|BPM|пульс|сердцеби/i.test(s.name + s.value + s.desc));
    res.bpm = heart ? bpmFrom(`${heart.value} ${heart.desc}`) : null;
  }
  if (!res.gaze) {
    const eye = body.find((s) => /시선|응시|눈맞춤|взгляд|смотр|глаз/i.test(s.name + s.desc));
    const n = eye ? [...`${eye.value} ${eye.desc}`.matchAll(/(\d+(?:[.,]\d+)?)\s*(?:초|с(?:ек[а-яё]*)?(?![а-яё]))/g)].map((m) => +m[1]) : [];
    if (n.length >= 2 && n[1] > 0) res.gaze = { pc: n[0], base: n[1] };
  }
  if (!res.npc) {
    const seen = new Map();
    for (const m of src.matchAll(/['‘«]([^'‘’«»\n]{1,12})['’»]/g)) seen.set(m[1], (seen.get(m[1]) || 0) + 1);
    const top = [...seen].filter(([, n]) => n >= 2).sort((a, b) => b[1] - a[1]).slice(0, 2).map(([s]) => s);
    const ordered = [...seen.keys()].filter((s) => top.includes(s));
    res.npc = ordered[0] || '';
    res.pc = ordered[1] || '';
  }
  if (!res.risk) {
    const m = src.match(/['‘«]([^'‘’«»\n]{1,10})['’»]\s*(?:등급|уровень)/);
    res.risk = m ? m[1] : '';
  }
  res.level = riskLevel(res.risk);
  res.density = massDensity(res.mass);
  if (res.level >= 0 && !RISKS.some((r) => r.key === res.risk)) res.risk = RISKS[res.level].key;

  let h = 2166136261;
  for (const c of [res.npc, res.pc, ...res.surface.map((s) => s.name + s.ratio), ...res.deep.map((s) => s.name + s.ratio)].join('|')) {
    h = Math.imul(h ^ c.codePointAt(0), 16777619);
  }
  res.seed = h >>> 0;
  const rnd = mulberry(res.seed ^ 0x9e3779b9);
  const P = res.props;
  const num = (k, fallback) => (P[k] && P[k].num != null ? P[k].num : fallback);
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const guess = [25 + rnd() * 55, 2 + rnd() * 7, 20 + rnd() * 60, 80 + rnd() * 700, rnd() * 6, ['Притяжение', 'Отталкивание', 'Удержание'][Math.floor(rnd() * 3)], 0.3 + rnd() * 0.6, 2 + rnd() * 3];
  res.form = {
    cryst: clamp(num('cryst', guess[0]) / 100, 0, 1),
    hard: clamp(num('hard', guess[1]), 1, 10),
    trans: clamp(num('trans', guess[2]) / 100, 0, 1),
    hz: Math.max(1, num('hz', guess[3])),
    tesla: clamp(num('tesla', guess[4]), 0, 10),
    field: (P.tesla && P.tesla.type) || guess[5],
    half: P.half ? halfLife(P.half.raw) : guess[6],
    layers: clamp(Math.round(num('layers', guess[7])), 1, 6),
  };
  if (!res.color) {
    const h = res.seed % 360;
    const l = 0.74;
    const c = 0.62 * (1 - Math.abs(2 * l - 1));
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
    const hex = '#' + [r, g, b].map((v) => Math.round((v + l - c / 2) * 255).toString(16).padStart(2, '0')).join('');
    res.color = { hex, name: '', note: '', auto: true };
  }
  res.id = `LS-${res.seed.toString(36).toUpperCase().padStart(7, '0').slice(-6)}`;
  return { result: res };
}
