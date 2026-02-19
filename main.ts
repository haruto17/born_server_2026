type Product = {
  name: string;
  nameJa: string;
  taste: string;
  desc: string;
  info: string;
  image: string;
};

const products: Product[] = [
  {
    name: "Born: A Wakening Of The Angel",
    nameJa: "梵・天使のめざめ",
    taste: "濃醇甘口",
    desc: "フランス製樫樽\n長期氷温熟成酒",
    info:
      "「完全予約限定品」\n\nフランス製樫樽10年超熟酒。\nパイナップル・すももちゃん酵母で醸したお酒を、フランス製樫樽の中で10年以上超熟されたことで、甘酸っぱくて素晴らしい熟成香が特徴です。ブランデーグラスなどでほんの少量、手で温めながらご愛飲頂くと、鮮やかな印象が感動となって魅了します。",
    image: "https://code4fukui.github.io/born/images/17.jpg",
  },
  {
    name: "Born: Chogin",
    nameJa: "梵・超吟（ちょうぎん）",
    taste: "芳醇旨口",
    desc: "「梵」を代表する究極の\n純米大吟醸酒",
    info:
      "「完全予約限定品」\n\nマイナス8℃でじっくりと5年間熟成された最高の純米大吟醸酒。素晴らしい香りと深い味は感動を呼ぶ。日本の酒文化を代表する珠玉の名酒です。",
    image: "https://code4fukui.github.io/born/images/16.jpg",
  },
  {
    name: "Born: Dan",
    nameJa: "梵・団（だん）",
    taste: "芳醇旨口",
    desc: "精米歩合２０% \n究極の純米大吟醸酒",
    info:
      "「完全予約限定品」\n\nマイナス8℃で2年間熟成させた純米大吟醸酒。\nすばらし気品がありながら、冷やはもちろん、古来からの日本酒の飲み方の王道・燗をすると、今まで味わったことの無い、次元の違う、素晴らしい燗上がりがする”極旨”の純米大吟醸です。",
    image: "https://code4fukui.github.io/born/images/15.jpg",
  },
  {
    name: "Born: Dreams Come True",
    nameJa: "梵・夢は正夢（まさゆめ）",
    taste: "芳醇旨口",
    desc: "「夢が正夢となる」という\n祈願酒",
    info:
      "梵を象徴する「超吟」と同様、マイナス８℃で5年間熟成された完成度の高い純米大吟醸酒。\nどっしりとした落ちついた香りと、しっとりとなめらかで、あと味が名刀のように切れる名酒。\nこのお酒は精米歩合20％の純米大吟醸酒と精米歩合35％の純米大吟醸酒とがブレンドされたお酒です。",
    image: "https://code4fukui.github.io/born/images/19.jpg",
  },
  {
    name: "Born: Wing Of Japan",
    nameJa: "梵・日本の翼",
    taste: "芳醇旨口",
    desc: "日本政府専用機\n正式機内酒",
    info:
      "0℃で二年間熟成された純米大吟醸酒。\n素晴らしい吟香をもち、口当たりが柔らかく、あと味の切れが最高。国賓クラスの歓迎晩餐会などで乾杯に用いられている。",
    image: "https://code4fukui.github.io/born/images/18.jpg",
  },
  {
    name: "Born: Gokuhizo Daiginjo",
    nameJa: "梵・極秘造（ごくひぞう）大吟醸",
    taste: "芳醇旨口",
    desc: "日本で最初に市販された\n純米大吟醸酒",
    info:
      "0℃で3年間熟成された純米大吟醸酒。\n豊満で気高い香りと深い味わい。\n昭和43年、日本で最初に市販された大吟醸酒です。",
    image: "https://code4fukui.github.io/born/images/22.jpg",
  },
  {
    name: "Born: Kantsubaki",
    nameJa: "梵・寒椿（かんつばき）",
    taste: "芳醇旨口",
    desc: "雪の庭に咲く\n一輪の花のような日本酒",
    info:
      "山田錦35%精米歩合の純米大吟醸酒。\n0℃で2年間熟成。素晴らしい吟香と凛とした力強いあと味が自慢で、寒椿の名にふさわしい逸品。",
    image: "https://code4fukui.github.io/born/images/20.jpg",
  },
  {
    name: "Born: Tokusen Junmai Daiginjo",
    nameJa: "梵・特撰 純米大吟醸",
    taste: "芳醇旨口",
    desc: "「梵」の純米大吟醸酒の\n定番の名品",
    info:
      "山田錦38%精米歩合の純米大吟醸酒。\n0℃で2年間熟成。吟香高くコシのある味わいが楽しめる。\n梵の純米大吟醸酒の定番の名品です。",
    image: "https://code4fukui.github.io/born/images/25.jpg",
  },
];

Deno.serve((req) => {
  if (req.method === "GET" && new URL(req.url).pathname === "/products") {
    return new Response(JSON.stringify(products), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Not Found", { status: 404 });
});
