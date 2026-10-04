// Living story source: extend chapters here as new worlds are built.
export const VIKA_STORY = [
  {id:'midgardBeginning',title:'Мидгард. Начало пути',text:`Вика возвращалась домой, когда увидела, что ворота Мидгарда опутаны чёрными нитями. За ними стояла тишина: мельничное колесо замерло, на площади погасли огни, а над священными камнями сгущался туман.

У ворот её встретил раненый дружинник.

— Тёмные печати появились ночью. Дороги закрыты, мост разрушен. Мы пытались добраться до колодца Мимира, но стражи никого не пропускают.

Вика помогла ему подняться и провела в деревню. У домов собрались жители. Одни искали пропавших близких, другие ждали травницу, отрезанную от запасов целебных растений.

Велунд вынес из кузницы щит.

— Мы восстановим то, что сможем, — сказал он. — Но до источника этих бед нам не добраться.

Вика взяла щит и посмотрела на дорогу, исчезавшую в тумане. Где-то там оставались люди, которым нужна была помощь.

— Тогда я пойду первой.

Она ещё не знала, кто принёс хаос в Мидгард. Но это был её дом, и оставаться в стороне она не могла.

Так начался её путь: помочь жителям, снять тёмные печати и вернуть своему миру жизнь.`},
  {id:'midgardEnding',title:'За вратами Мидгарда',text:`Мидгард вновь оживал. У мельницы вращалось колесо, на площади звенел молот Велунда, а по восстановленному мосту возвращались жители. Тёмные печати были сняты. Вика надеялась, что теперь сможет отдохнуть.

Но вечером Камень Шёпота позвал её снова.

По его очищенной поверхности прошла тонкая чёрная трещина. Из глубины донёсся тот самый глухой звук, который Вика слышала у запечатанных врат. Она коснулась камня — и увидела далёкий источник среди льдов. Над водой тянулись чёрные нити, исчезавшие в густом тумане.

Видение оборвалось. Камень снова стал светлым, но рука Вики ещё чувствовала холод.

У колодца Мимира она спросила:

— Я сняла печати. Почему тьма возвращается?

Над водой раздался голос:

— Ты освободила Мидгард. Но сила, питавшая печати, приходит из других миров. Пока её источник цел, она найдёт новый путь сюда.

— Где мне искать его?

— Начни с Нифльхейма. Там замерзают древние источники, а хранители забывают, что обязались защищать. Выслушай тех, кто ещё помнит. Они помогут тебе найти след.

Вика долго смотрела в воду. Позади неё горели окна домов, ради которых она сражалась. Теперь она понимала: даже после всех побед этот мир оставался под угрозой.

Утром она собрала припасы, проверила оружие и закрепила щит. У ворот остановилась и оглянулась на Мидгард. Из кузницы уже доносились первые удары молота.

— Я найду то, что посылает сюда тьму, — тихо сказала она. — И уничтожу её источник.

Вика шагнула за врата. Впереди лежала дорога к Нифльхейму — миру холода, тумана и забытых тайн.`}
];

export const HERO_PROFILE_CSS=`
.hero-profile{color:#202522;text-align:left;background:#fff;border:2px solid #bbc0c3;border-radius:18px;padding:16px;box-shadow:inset 0 1px 0 #fff,0 3px 12px #0003}
.hero-profile-header{display:flex;align-items:center;gap:14px;margin-bottom:14px}
.hero-profile-header .hface{width:76px;height:90px;flex-shrink:0;border-color:#adb4b8;background:#eef1ef;border-radius:12px}
.hero-profile-header h2{margin:0;font-size:23px}.hero-profile-header p{margin:4px 0;color:#57605a}
.hero-profile .stats{gap:6px;margin:10px 0}.hero-profile .stat{padding:8px 3px;background:#f0f2f1;border:1px solid #c9cecb;border-radius:10px;color:#202522}.hero-profile .stat b{font-size:18px}.hero-profile .stat span{font-size:11px;color:#57605a}
.hero-profile-tabs{display:flex;gap:8px;margin:14px 0}.hero-profile-tabs button{flex:1;padding:10px 6px;background:#eef0ef;color:#202522;border:1px solid #aeb6b3;border-radius:9px;font:inherit}.hero-profile-tabs button[aria-selected=true]{background:#dfece4;border-color:#51745f;font-weight:bold}
.hero-profile .hrow{font-size:14px;line-height:1.5;color:#202522;margin:12px 0 7px}.hero-profile .chips{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}.hero-profile .chip{margin:0;padding:9px 7px;min-height:44px;font-size:12px;line-height:1.4;text-align:left;white-space:normal;background:#f2f3f2;color:#202522;border:1px solid #bdc4c0;border-radius:9px}.hero-profile .chip.on{background:#e1eee5;border-color:#51745f;box-shadow:none}.hero-profile .dim{font-size:12px;color:#5a645e;line-height:1.5}
.hero-story details{margin:10px 0;border:1px solid #bfc6c2;border-radius:10px;padding:12px}.hero-story summary{cursor:pointer;font-weight:bold;font-size:15px;line-height:1.5}.hero-story p{font-size:14px;line-height:1.7;margin:14px 0;overflow-wrap:anywhere}.hero-story .story-locked{background:#f2f3f2;padding:12px;border-radius:10px;font-size:13px;color:#59645d}
`;
