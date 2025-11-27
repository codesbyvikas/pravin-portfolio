// src/data/projects.ts
import optimize from "@/components/optimize";

const projects = [
  {
    id: "gaming-arcade",
    title: "Gaming Arcade",
    description:
      "A fully immersive gaming arcade with neon lighting, dynamic 3D props, and futuristic interior concepts.",
    technologies: ["Sketchup", "AutoCAD", "V-Ray", "Enscape"],
    category: "Entertainment",
    year: "2024",

    thumbnail: optimize(
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078375/projects/gaming-arcade/zppd6bpun4mkstxr0qsm.jpg"
    ),

    longDescription:
      "A cutting-edge gaming space designed with an unmistakable cyberpunk pulse, bathed in vibrant neon palettes that shift dynamically across the room. Holographic lighting elements hover above the gaming zones, casting futuristic reflections onto sleek metallic surfaces. The floor incorporates illuminated pathways that guide users through the environment, creating a sense of movement and digital flow. Walls feature layered LED panels, subtle glitch effects, and interactive screens that react to player presence. The ambience is electric yet controlled, blending saturated colors with deep shadows to evoke the atmosphere of a high-tech futuristic city. Every corner feels alive, immersive, and engineered for peak gaming performance while offering an unforgettable visual experience.",

    model: null,

    images: [
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078375/projects/gaming-arcade/zppd6bpun4mkstxr0qsm.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078412/projects/gaming-arcade/sy1ak0ahpsiaz65ofoth.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078444/projects/gaming-arcade/i9mqittfbmnbkkh4ebbz.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078446/projects/gaming-arcade/p4juckkmdmrc7yxdtbsv.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078450/projects/gaming-arcade/eleabrq9ymh3mn8b38hh.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078455/projects/gaming-arcade/np22ie1dsrhwybqpgz0h.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078458/projects/gaming-arcade/k7mnafinc94yewpg93fj.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078464/projects/gaming-arcade/ccldfazs7g9sjcx5bydu.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078466/projects/gaming-arcade/zlpboquckt8xyq6wgmbv.jpg",
        "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078425/projects/gaming-arcade/kst4lixkxd0mcj02vovp.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078428/projects/gaming-arcade/agu57ar82mzczfvrlvjn.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078432/projects/gaming-arcade/bpco0wxnqpbbcdlhycgd.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078436/projects/gaming-arcade/bq7diukxny8tplbuhmj8.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078439/projects/gaming-arcade/hfvy9wonapt3mwctxgnh.jpg",
       "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078442/projects/gaming-arcade/nc7s5d7stjlzcwyhq01t.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078379/projects/gaming-arcade/hihllx5vitl1mc7ru1c2.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078383/projects/gaming-arcade/pj9aadlxqvr8nbzo7uo4.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078387/projects/gaming-arcade/n1u6eearfugmyxnigwhm.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078390/projects/gaming-arcade/j1ephzpeijikwjig7zlx.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078394/projects/gaming-arcade/qfv4aek5lmw9uz1dyiz9.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078398/projects/gaming-arcade/apgav9fxteajf3odzzsh.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078401/projects/gaming-arcade/is7gfkfuln5744jhtkso.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078403/projects/gaming-arcade/jaofxcvhna5rgqibnqnh.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078406/projects/gaming-arcade/dc3si9k5fljswwpbfwj0.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078408/projects/gaming-arcade/aooij1ytlwkm3rtyhy7t.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078415/projects/gaming-arcade/p4ml5ioqni36thzkbgqz.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078417/projects/gaming-arcade/frgzbmjfjhvcjpz1yxlb.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078419/projects/gaming-arcade/o7nleiqztzhqfwe7t4qj.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764078421/projects/gaming-arcade/g5c94am3viwk4l9tayxm.jpg",
    ].map(optimize),

    videos: [],
  },

  {
    id: "lawyer-office",
    title: "Lawyer Office Interior",
    description:
      "A premium corporate lawyer office designed with dark wood textures, warm lighting, and luxury detailing.",
    technologies: ["SketchUp", "V-Ray", "AutoCAD"],
    category: "Commercial",
    year: "2024",

    thumbnail: optimize(
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080695/projects/gaming-lawyer office/phpqsng1ls7bgwifaf9z.jpg"
    ),

    longDescription:
      "A high-end lawyer’s workplace designed with premium wood finishes, subtle metallic accents, and warm ambient lighting that creates a sophisticated and authoritative atmosphere. The layout features an expansive executive desk, comfortable client seating, and carefully planned storage solutions, all arranged to enhance workflow, privacy, and the overall sense of luxury within the space.",

    model: null,

    images: [
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080700/projects/gaming-lawyer office/n6lg32f6gpawyluigr9l.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080674/projects/gaming-lawyer office/diqqwtykfwkdnyg98mao.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080704/projects/gaming-lawyer office/f3ml7tillqtdoqswtjer.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080702/projects/gaming-lawyer office/j9beme4etujqxnpev8ok.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080706/projects/gaming-lawyer office/vltif0bcgviejgt8qcub.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080709/projects/gaming-lawyer office/o7fquhjctjtaz5tenjyx.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080711/projects/gaming-lawyer office/frv1mibntyu5wgs9iqzq.jpg",
       "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080713/projects/gaming-lawyer office/xph90gwkqrhrbqcdntso.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080688/projects/gaming-lawyer office/kmageikjjuj7wpvvwqer.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080715/projects/gaming-lawyer office/myo2i8xitsmaet3bvz89.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080676/projects/gaming-lawyer office/zzlnmoeq0ocbf7wcvpmf.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080678/projects/gaming-lawyer office/hrao19goyac4lghmxhfb.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080681/projects/gaming-lawyer office/drrfwua2jzfiews5qvir.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080683/projects/gaming-lawyer office/asaukxkv3lhna0ikv5f2.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080686/projects/gaming-lawyer office/jkwnnzc3qbfx1o3xfcdg.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080692/projects/gaming-lawyer office/exgaxpgjiwjmass96men.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080690/projects/gaming-lawyer office/irpnbrrcygnyug2jweaa.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080695/projects/gaming-lawyer office/phpqsng1ls7bgwifaf9z.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764080697/projects/gaming-lawyer office/caakfznojq055afu7xo6.jpg",
      
    ].map(optimize),

    videos: [],
  },

{
    id: "working-drawings",
    title: "Working Drawings",
    description:
      "These are working drawings I have made throughout the course.",
    technologies: ["AutoCAD"],
    category: "Resindetial",
    year: "2024",

    thumbnail: optimize(
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764166017/projects/working-drawings/ids8lsoxrme5eytb31ze.jpg"
    ),

    longDescription:
      "These are working drawings I have made throughout the course.",

    model: null,

    images: [
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764166014/projects/working-drawings/nerrimkpufjhcldjk7jc.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764166016/projects/working-drawings/ujkgbx1vdnk2hx9mrwf1.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764166017/projects/working-drawings/ids8lsoxrme5eytb31ze.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764166019/projects/working-drawings/dvtaowxd3l4jrqucv96d.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764166020/projects/working-drawings/ta2cbnqvtlvrjp9lho7d.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764166023/projects/working-drawings/orvgkm0ncuswsbwcfmcb.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764166025/projects/working-drawings/alg7gubg4lhxx3tg3cob.jpg",
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764166029/projects/working-drawings/hzdsg3laovgdi0kygeqw.jpg"
    ].map(optimize),

    videos: [],
  },

  {
    id: "3D-models",
    title: "3D Models",
    description:
      "These are 3D models, I have made throughout the course.",
    technologies: ["SketchUp,V-Ray, Enscape"],
    category: "All",
    year: "2024",

    thumbnail: optimize(
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243743/projects/working-drawings/bfnxmtelgadzxaqh9pea.png"
    ),

    longDescription:
      "These are working drawings I have made throughout the course.",

    model: null,

    images: [
      "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242328/projects/working-drawings/wx0gxxsxtxwl8en2royn.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242335/projects/working-drawings/uxjeve9f3tcuvrc8mp0l.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242338/projects/working-drawings/dipc66ya0hk7h5doucnd.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242343/projects/working-drawings/yv6v51r6gkn2u4vthp95.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242346/projects/working-drawings/mftd9g9fuznui8lcmu2x.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242350/projects/working-drawings/oqu5gta6tg2aelra0fqs.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242357/projects/working-drawings/vazknvela0wjjtlgyblz.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242362/projects/working-drawings/i7aeucwqmocyxm0yufzn.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242366/projects/working-drawings/ybxxfl8xbs1xwjb04ll6.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242370/projects/working-drawings/xjeug2aihbtidcp1iyep.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242374/projects/working-drawings/dbzl2s36hypmzypptafy.png",

  //2
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242516/projects/working-drawings/nin7kejmeg0khneozup4.jpg",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242518/projects/working-drawings/crroogr8z0wvene6ysiz.jpg",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242520/projects/working-drawings/uad8i1rrqoigas4ztx0n.jpg",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242523/projects/working-drawings/rfez4n2p1iwajrtfhuc3.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242524/projects/working-drawings/z0hdv5qjvnclkc5c7tdk.jpg",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242526/projects/working-drawings/dwcn9rdmuexlrj4hg4u5.jpg",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242527/projects/working-drawings/pgtn6bqgcexc48dgjn3o.jpg",

  //3
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242776/projects/working-drawings/kipwgkavua4xloxib3si.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242779/projects/working-drawings/hwm8ztaehsnmvkau5dnt.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242781/projects/working-drawings/brxeydlprkfqet00dboe.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242784/projects/working-drawings/ljeestnu1ccukdanpmwj.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242786/projects/working-drawings/tsw2wnxpqtefvjsygb7i.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242789/projects/working-drawings/rvs6quxxskxgntun2c56.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242791/projects/working-drawings/ciefjc1v82e3wix5ducl.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242793/projects/working-drawings/fcrssitivdvmzhxpxzua.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242796/projects/working-drawings/qpszthow0aiqtia3wpvz.png",

  //4
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242895/projects/working-drawings/kqmcnu0e6e3iim8j3gtz.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242899/projects/working-drawings/hergsms4fbllgq7ilmpf.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242903/projects/working-drawings/ilsaejgvvgd26kf7sl6h.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764242906/projects/working-drawings/r1swhdpmemyzece7e3so.png",

  //5
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243000/projects/working-drawings/bw5cpatbbacnhnpg0tz8.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243009/projects/working-drawings/vpxsgbkvd8u8lfndrhne.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243013/projects/working-drawings/z11et0wipuwno2da3qzz.png",

  //6
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243293/projects/working-drawings/zvngtqdcxlmxej5yewd3.png",

  //7
    "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243424/projects/working-drawings/wnzqd4piiqu1awoqayqf.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243428/projects/working-drawings/obq0pss5rwjnymvxazwg.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243430/projects/working-drawings/y4wvjoxpgoozswz08mso.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243433/projects/working-drawings/l6kghuy1caofphlmhumg.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243435/projects/working-drawings/ofqvt6gmlmh9wm13qodb.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243438/projects/working-drawings/u6jvhmu6mmlqprfbgrzl.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243440/projects/working-drawings/mnewdfykhdvefy3znkcb.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243443/projects/working-drawings/rjced6x8kaqmqk2hwnvw.png",

  //8
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243560/projects/working-drawings/ivgrmdbslro0ty68alcp.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243562/projects/working-drawings/j9qxzi1y13x7mqv2zu5a.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243564/projects/working-drawings/opg74tjjchscn2xxylmi.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243566/projects/working-drawings/xm9oskffvhkfcxwkdoti.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243568/projects/working-drawings/kpqqrywsw7hk5ckxxcqv.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243573/projects/working-drawings/eicigydyqvxrj0xrl1w5.png",
  "https://res.cloudinary.com/dkzrfhatc/image/upload/v1764243575/projects/working-drawings/eopnvonoaaluk5n5rv8i.png"
    ].map(optimize),

    videos: [],
  },
];

export default projects;
