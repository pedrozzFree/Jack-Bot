//======== INFO / CRÉDITOS ========\\
/*
CRÉDITOS: PEDROZZ MODS

Essa base foi criada por Pedrozz Mods, então se você for divulgar, repostar ou compartilhar em qualquer lugar, dá aquela moral e mantém os créditos, fechou? 😅

Ela é totalmente **gratuita**, ou seja, se algum espertinho aí tiver vendendo, já sabe que tá feio hein... 👀

Ah, e só pra avisar: essa base foi feita usando minha API principal (Dark Stars). Se você quiser usar de forma mais profissional, recomendo assinar um plano lá (mas é opcional, claro 😎).

No mais, use com moderação (ou não kkk), e bom proveito!
*/
//MODULOS
const fs = require('fs');
const axios = require('axios');
const fetch = require("node-fetch");
//CONSTS
const { prefix, botName, donoName, DarkApikey, DarkUrl } = require("../../dono/config.json")
const BaseApi = "http://speedhosting.cloud:5000";
const BaseApiDark = DarkUrl;
const DARK_APIKEY = DarkApikey;
const ApiKey = "SUAKEYSPEED";
const criador = "Pedrozz Mods 🦉";


//JSONS
const travaZap = [
"https://telegra.ph/file/3b09692a068645db85eee.jpg",
"https://telegra.ph/file/a25416c3a374a611a262a.jpg",
"https://telegra.ph/file/8817c756bbc7b00da8306.jpg",
"https://telegra.ph/file/5ef15404fda0da1da38f4.jpg",
"https://telegra.ph/file/b8c1e3a78ebabdae65d6b.jpg",
"https://telegra.ph/file/5c404563d55fb24538397.jpg",
"https://telegra.ph/file/274bb655eba11f622528b.jpg",
"https://telegra.ph/file/0e940806aa951532b8723.jpg",
"https://telegra.ph/file/e14a3b38bfa09c80bd440.jpg",
"https://telegra.ph/file/78093cd787a5d4ff98249.jpg",
"https://telegra.ph/file/1bd44c76d06c51f8d0ceb.jpg",
"https://telegra.ph/file/579755d9290f5d010d06f.jpg",
"https://telegra.ph/file/83fd9354134f7296596e2.jpg",
"https://telegra.ph/file/74b48b1a051c5d6af88f2.jpg",
"https://telegra.ph/file/247f2c018bd3ae36c2ad4.jpg",
"https://telegra.ph/file/e24552f8ee87820762393.jpg",
"https://telegra.ph/file/d657c3b7de0d8398bfa30.jpg",
"https://telegra.ph/file/15f10bd0eb4a85dc5ee73.jpg",
"https://telegra.ph/file/37f6cc4a895311862d83c.jpg",
"https://telegra.ph/file/b256f4a29a129c9699dba.jpg",
"https://telegra.ph/file/a80c51f7f7165ccf81531.jpg",
"https://telegra.ph/file/aa453025c91a9d2e10ca9.jpg",
"https://telegra.ph/file/f90b49508cd960801f702.jpg",
"https://telegra.ph/file/0eb73c0e316ce61246ff2.jpg",
"https://telegra.ph/file/d39c71d4598cdb00c43c9.jpg",
"https://telegra.ph/file/e6206b95c60b680a0a15a.jpg",
"https://telegra.ph/file/df452ebd65f64a328a799.jpg",
"https://telegra.ph/file/3abdcc88bea814864c314.jpg",
"https://telegra.ph/file/ce5782f25d1bf28092b35.jpg",
"https://telegra.ph/file/beb9294aaf5c8cc7a7581.jpg",
"https://telegra.ph/file/40cecfe4e9ae516b94957.jpg",
"https://telegra.ph/file/cb8537dbdd07a54961187.jpg",
"https://telegra.ph/file/26186a05c3d2a36d7a970.jpg",
"https://telegra.ph/file/cf9d14dee36b8cc174570.jpg",
"https://telegra.ph/file/90f25449a411b5a00078d.jpg",
"https://telegra.ph/file/9fd29b5a18ad823cf4d84.jpg",
"https://telegra.ph/file/3c6ef051f451eda0d78e9.jpg",
"https://telegra.ph/file/14db0655a65b41c65057b.jpg",
"https://telegra.ph/file/39db08109991978a0f4ce.jpg",
"https://telegra.ph/file/08777867fce85a4342073.jpg",
"https://telegra.ph/file/3a43fb1cc3758ce6739a8.jpg",
"https://telegra.ph/file/bc6e74cc9e1e767bc8616.jpg",
"https://telegra.ph/file/d13bdd82e9afe613b8de1.jpg",
"https://telegra.ph/file/11ac34d768710e76770d7.jpg",
"https://telegra.ph/file/745137a73ce5242f97965.jpg",
"https://telegra.ph/file/b6fa9a7b948e5e3532a0e.jpg",
"https://telegra.ph/file/1302b45895102af9e5983.jpg",
"https://telegra.ph/file/233adfb17a821ed3a3c9b.jpg",
"https://telegra.ph/file/926957579037f5363a638.jpg",
"https://telegra.ph/file/24e96ed63348a6d5e7baf.jpg",
"https://telegra.ph/file/6a73faeae30734d872870.jpg",
"https://telegra.ph/file/2f2ed1e091b59b67ebeeb.jpg",
"https://telegra.ph/file/5c953ce5b774328cb46bc.jpg",
"https://telegra.ph/file/89e1093681703bbe524db.jpg",
"https://telegra.ph/file/228c0d47a3f09fc43f48c.jpg",
"https://telegra.ph/file/957887be4dfb78f8891b2.jpg",
"https://telegra.ph/file/3a242e8f5dade9a92d548.jpg",
"https://telegra.ph/file/da34713c037352e2c6ea1.jpg",
"https://telegra.ph/file/5f1e3f4c82e4494fbe906.jpg",
"https://telegra.ph/file/8f5f4c3fe32715aad763e.jpg",
"https://telegra.ph/file/e6efb7e404ebb052814f1.jpg",
"https://telegra.ph/file/4985afe26b833a07609e3.jpg",
"https://telegra.ph/file/fbc3e140e2ee132c64de8.jpg",
"https://telegra.ph/file/865504cc62c64c90f87ea.jpg",
"https://telegra.ph/file/216ef131b57d33d0d428d.jpg",
"https://telegra.ph/file/c3ae182b506f8160b204b.jpg",
"https://telegra.ph/file/5a5ee1a96cd64a2168363.jpg",
"https://telegra.ph/file/98ad8b61818000de4c84f.jpg",
"https://telegra.ph/file/3d88aa6348ee49f1297f8.jpg",
"https://telegra.ph/file/c8dfb5657a1a66aeb1c64.jpg",
"https://telegra.ph/file/4fc7ea60e79c242f604b0.jpg",
"https://telegra.ph/file/765ca3e34ee2ca989ec91.jpg",
"https://telegra.ph/file/5e051d5b8c34a9cc92c02.jpg",
"https://telegra.ph/file/a7d2a6e6b62fc03c0d997.jpg",
"https://telegra.ph/file/e7374b2022bf036d3b98f.jpg",
"https://telegra.ph/file/66ae4d6fb37798929b4a1.jpg",
"https://telegra.ph/file/cd4cdeece706fd37ce7f2.jpg",
"https://telegra.ph/file/82a606f1456f1fb64aa30.jpg",
"https://telegra.ph/file/e39076a9f152446baeac2.jpg",
"https://telegra.ph/file/b678f556ca3d05dfa40d1.jpg",
"https://telegra.ph/file/05d5311ebdcd2a1b6232d.jpg",
"https://telegra.ph/file/529e809318d46287d5720.jpg",
"https://telegra.ph/file/3ee421310d61d40cd77a3.jpg",
"https://telegra.ph/file/95de1b099e1f4005b7849.jpg",
"https://telegra.ph/file/9735160e61cce57949a70.jpg",
"https://telegra.ph/file/c93c316527fe70a1c4a2e.jpg",
"https://telegra.ph/file/7102c595261ad409cafdf.jpg",
"https://telegra.ph/file/278fa92e55f7ea505de69.jpg",
"https://telegra.ph/file/831005ad3e189b0b4034e.jpg",
"https://telegra.ph/file/c4e91ecfa0e9af9d449ad.jpg",
"https://telegra.ph/file/d7ef624685099b355a1be.jpg",
"https://telegra.ph/file/9136ae4308bfed996067f.jpg",
"https://telegra.ph/file/c812eccfaffc9a11b669e.jpg",
"https://telegra.ph/file/311f9d3ce4ae2d4eee4fb.jpg",
"https://telegra.ph/file/e9d56cb37c61a03df6f1a.jpg",
"https://telegra.ph/file/373e1b17beedded4ae7ff.jpg",
"https://telegra.ph/file/8c1b6ccfe793439bc1de8.jpg",
"https://telegra.ph/file/d1b4717bd6cb4dac32aea.jpg",
"https://telegra.ph/file/985436fb63e8a0939ab9a.jpg",
"https://telegra.ph/file/2c5d382e74517bef03656.jpg",
"https://telegra.ph/file/467e0056a38d366489ab8.jpg",
"https://telegra.ph/file/f688f5ac6a780cb59228c.jpg",
"https://telegra.ph/file/4990d6f8fc2174c7cd743.jpg",
"https://telegra.ph/file/3bb9ed0a4f6375c7d9100.jpg",
"https://telegra.ph/file/fdab5e1e13f137d6e80f2.jpg",
"https://telegra.ph/file/7abfda334c2db6cf10e3d.jpg",
"https://telegra.ph/file/b4ed7a0b4de00bad4eaec.jpg",
"https://telegra.ph/file/09e5dfe6627cb37c2acce.jpg",
"https://telegra.ph/file/7b25de94f87bd197a7fa8.jpg",
"https://telegra.ph/file/517fc6f993aca4d5029e9.jpg",
"https://telegra.ph/file/a494ad4d8a515fcebd340.jpg",
"https://telegra.ph/file/0e03d47bbd95f622756ef.jpg",
"https://telegra.ph/file/d8bb5a9f3cea436e03422.jpg",
"https://telegra.ph/file/2f46f8c177c893dd587f7.jpg",
"https://telegra.ph/file/3f44c6ef78dadb5daccc2.jpg",
"https://telegra.ph/file/90e4570d4858ab8e492c4.jpg",
"https://telegra.ph/file/95669b3272d791da1a9f7.jpg",
"https://telegra.ph/file/40e379f7238db0102ae3c.jpg",
"https://telegra.ph/file/c2a5362ad9c078836922f.jpg",
"https://telegra.ph/file/55ee76402c3c91bb51403.jpg",
"https://telegra.ph/file/2b88ace5111fe52d142b2.jpg",
"https://telegra.ph/file/c5cadb151d2034270c78c.jpg",
"https://telegra.ph/file/60234a1f44a54b2ca8f09.jpg",
"https://telegra.ph/file/1d40f92804c93ceaec710.jpg",
"https://telegra.ph/file/faf58ff217181f301fdfc.jpg",
"https://telegra.ph/file/7e44ac069800557f8f6d1.jpg",
"https://telegra.ph/file/1793af9d58065c3ea028c.jpg",
"https://telegra.ph/file/42572e99a349640dfe2ef.jpg",
"https://telegra.ph/file/141364167d6d6e3fcbd3e.jpg",
"https://telegra.ph/file/2338a4904af37485a6aa1.jpg",
"https://telegra.ph/file/555221250407c5dac60b7.jpg",
"https://telegra.ph/file/eec0ae7ff17fbbc6eb0af.jpg",
"https://telegra.ph/file/7665591351a2ec13b5c58.jpg",
"https://telegra.ph/file/22a2d642641375c3ba174.jpg",
"https://telegra.ph/file/874489c3282f627349ccb.jpg",
"https://telegra.ph/file/0e83f07ebc71c11fdcfe9.jpg",
"https://telegra.ph/file/b607aff20a3d3060d5df1.jpg",
"https://telegra.ph/file/0e7a1bc3fe626752245d8.jpg",
"https://telegra.ph/file/a582db03441e8cd70b096.jpg",
"https://telegra.ph/file/23f1ecbc9178eda2b67dd.jpg",
"https://telegra.ph/file/0bbe6be37602012704b7e.jpg",
"https://telegra.ph/file/cc7dca10e82639314cdf1.jpg",
"https://telegra.ph/file/9cf2c8581a0bfd1a50791.jpg",
"https://telegra.ph/file/7141c5ebc54b406d4f492.jpg",
"https://telegra.ph/file/8cfa8f382bd796272ba52.jpg",
"https://telegra.ph/file/322895b712f9f9391e57a.jpg",
"https://telegra.ph/file/ab33444594c4028f993b9.jpg",
"https://telegra.ph/file/20f6193c4b241c62ba7cd.jpg",
"https://telegra.ph/file/453910eeba9c695ccdfac.jpg",
"https://telegra.ph/file/f197faff9948a6cdf893b.jpg",
"https://telegra.ph/file/cd53628b46cd0e2d6c961.jpg",
"https://telegra.ph/file/ca59dadaf473338492272.jpg",
"https://telegra.ph/file/f48494dafb16632bff874.jpg",
"https://telegra.ph/file/6e7b3ea2a25183d49e03d.jpg",
"https://telegra.ph/file/e07309634abc348ecd727.jpg",
"https://telegra.ph/file/c28079c4a027297ff67d3.jpg",
"https://telegra.ph/file/b94dbafe69524313f1bac.jpg",
"https://telegra.ph/file/d6a2a76c509355d6e109f.jpg",
"https://telegra.ph/file/526f947f7c96bb0d8d276.jpg",
"https://telegra.ph/file/4e763e7f9b8cea93fc95a.jpg",
"https://telegra.ph/file/f8241033e7fa5cde86a41.jpg",
"https://telegra.ph/file/5b28e27002bc1107ec400.jpg",
"https://telegra.ph/file/d647ce7a7f0ee34d783a7.jpg",
"https://telegra.ph/file/27664da83cc3e4f4fa5e0.jpg"
]
const travaZapF = [
"https://telegra.ph/file/5c12bb5367dc5c20a7fb1.jpg",
"https://telegra.ph/file/5db7a7d911dc131862860.jpg",
"https://telegra.ph/file/d422a4b1bce3892b781a5.jpg",
"https://telegra.ph/file/289e1f42ca2320ac923c5.jpg",
"https://telegra.ph/file/c75f3044a55dc909a6b55.jpg",
"https://telegra.ph/file/aae98975d96b548895519.jpg",
"https://telegra.ph/file/835bb7efc37eefdd02ba6.jpg",
"https://telegra.ph/file/dc2ca484d87b5d42a7268.jpg",
"https://telegra.ph/file/a5f24eb9ab4fc6d092328.jpg",
"https://telegra.ph/file/2986b454e35aba2ef2ea7.jpg",
"https://telegra.ph/file/4c2d82f137e90e660d764.jpg",
"https://telegra.ph/file/835bb7efc37eefdd02ba6.jpg",
"https://telegra.ph/file/a5f24eb9ab4fc6d092328.jpg",
"https://telegra.ph/file/dc2ca484d87b5d42a7268.jpg",
"https://telegra.ph/file/efdfc783a74fc0f7a7664.jpg",
"https://telegra.ph/file/92594ff6f820e0844cf42.jpg",
"https://telegra.ph/file/b832fc98e4e4412b66769.jpg",
"https://telegra.ph/file/efdfc783a74fc0f7a7664.jpg",
"https://telegra.ph/file/a8596d208265d19f262d9.jpg",
"https://telegra.ph/file/289e1f42ca2320ac923c5.jpg",
"https://telegra.ph/file/c75f3044a55dc909a6b55.jpg",
"https://telegra.ph/file/aae98975d96b548895519.jpg",
"https://telegra.ph/file/835bb7efc37eefdd02ba6.jpg",
"https://telegra.ph/file/bf28108ea354661124ca7.jpg",
"https://telegra.ph/file/cea29a386d4f7fd9b1e7f.jpg",
"https://telegra.ph/file/600c5c3f9ac35fe8e7ec7.jpg",
"https://telegra.ph/file/b40d37ac0a1ad6bdbfec5.jpg",
"https://telegra.ph/file/885172a2da3a1fff7f681.jpg",
"https://telegra.ph/file/2249161f6e5a58809c441.jpg",
"https://telegra.ph/file/bdd8f87f900e8a8fef878.jpg",
"https://telegra.ph/file/4411ea0417bee248f15bc.jpg",
"https://telegra.ph/file/a9d1a5ba9b60491bf3d9e.jpg",
"https://telegra.ph/file/59ea3c269254fe4c16cfc.jpg",
"https://telegra.ph/file/780b5c242964798171000.jpg",
"https://telegra.ph/file/e1c126058c1f437b5c0f5.jpg",
"https://telegra.ph/file/39f2fb177c2705dd3e2ae.jpg",
"https://telegra.ph/file/ee217f7bce77b3baaf6a2.jpg",
"https://telegra.ph/file/b5f163e2661cbb1908130.jpg",
"https://telegra.ph/file/a2ec40d5a20fd815e9f8c.jpg",
"https://telegra.ph/file/8decd62986afbfe10652e.jpg",
"https://telegra.ph/file/2009bc2ef61a06fd8d94a.jpg",
"https://telegra.ph/file/33d0b7edfe9aa6a8ca2af.jpg",
"https://telegra.ph/file/1b56319feef18169a4739.jpg",
"https://telegra.ph/file/c6350bf1fd85f3bc32f40.jpg",
"https://telegra.ph/file/df8bc5cccce8333375af5.jpg",
"https://telegra.ph/file/b8545aa712497e9f3d3a1.jpg",
"https://telegra.ph/file/6959786fedbfe57f3d9e3.jpg",
"https://telegra.ph/file/f91c09644f467547dff1f.jpg",
"https://telegra.ph/file/068dc7afaa800af46e170.jpg",
"https://telegra.ph/file/433e4ff2f3cfc0113b596.jpg"
]
//========[ DOWNLOAD ]========//
async function ytMp3(url) {
try {
api = `${BaseApi}/api/download/playv3?url=${url}&apikey=${ApiKey}`
return api;
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function ytMp4(url) {
try {
api = `${BaseApi}/api/download/playvdv4?url=${url}&apikey=${ApiKey}`
return api;
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function ytMp3Query(query) {
try {
api2 = await fetch(`${BaseApiDark}/api/download/youtube-audiov3?nome=${encodeURIComponent(query)}&apikey=${DARK_APIKEY}`)
data = await api2.json()
return {
status: "online",
criador,
query,
type: 'audio/mpeg',
resultado: data.Resultado
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function ytMp4Query(query) {
try {
api2 = await fetch(`${BaseApiDark}/api/download/youtube-audiov3?nome=${encodeURIComponent(query)}&apikey=${DARK_APIKEY}`)
data = await api2.json()
return {
status: "online",
criador,
query,
type: 'video/mp4',
resultado: data.Resultado
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function tiktokDl(url) {
try {
api = await fetch(`${BaseApiDark}/api/download/tiktokV2?url=${url}&apikey=${DARK_APIKEY}`)
data = await api.json()
return {
status: "online",
criador,
resultado: data.resultado
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function tiktokQuery(query) {
try {
api = await fetch(`${BaseApiDark}/api/download/tiktokQuery?query=${encodeURIComponent(query)}&apikey=${DARK_APIKEY}`)
data = await api.json()
return {
status: "online",
criador,
total: data.resultado.length,
resultado: data.resultado
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function audiomeme(query) {
try {
api = await fetch(`${BaseApi}/api/download/audiomeme?nome=${encodeURIComponent(query)}&apikey=${ApiKey}`)
data = await api.json()
return {
status: "online",
criador,
result: data.resultado
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function apkpureDl(url) {
try {
api = await fetch(`${BaseApi}/api/download/apkpure?url=${url}&apikey=${ApiKey}`)
data = await api.json()
return {
status: "online",
criador,
resultado: data.resultado
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function PinterestMultiMidia(url) {
try {
api = await fetch(`${BaseApi}/api/download/PinterestMultiMidia?url=${url}&apikey=${ApiKey}`)
data = await api.json()
return {
status: "online",
criador,
resultado: data.data.resultado
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function xvideosDl(url) {
try {
api = await fetch(`${BaseApiDark}/api/download/xvideos?link=${url}&apikey=${DARK_APIKEY}`)
data = await api.json()
return {
status: "online",
criador,
resultado: data.resultado
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function instagramDl(url) {
try {
api = await fetch(`${BaseApiDark}/api/download/instagram?url=${url}&apikey=${DARK_APIKEY}`)
data = await api.json()
return {
status: "online",
criador,
resultado: data.resultado
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}
//========[ PESQUISA ]========//
const yts = require("yt-search")
async function ytVideosSearch(query) {
    return new Promise((resolve, reject) => {
        try {
            const cari = yts(query)
            .then((data) => {
                res = data.videos
               
                return {
status: "online",
criador,
resultado: res
};
            })
            resolve(cari)
        } catch (error) {
            reject(error)
        }
        console.log(error)
    })
}

async function wikipedia(query) {
try {
api = await fetch(`${BaseApiDark}/api/pesquisa/wikipedia?query=${encodeURIComponent(query)}&apikey=${DARK_APIKEY}`)
data = await api.json()
return data.resultado;
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function xvideosQuery(query) {
try {
api = await fetch(`${BaseApiDark}/api/pesquisa/xvideos?query=${encodeURIComponent(query)}&apikey=${DARK_APIKEY}`)
data = await api.json()
return {
status: "online",
criador,
total: data.resultado.length,
resultado: data.resultado
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function aptoide(query) {
try {
api = await fetch(`${BaseApiDark}/api/download/aplicativos?id=${encodeURIComponent(query)}&apikey=${DARK_APIKEY}`)
data = await api.json()
return {
status: "online",
criador,
resultado: data.resultado
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function apkpureQuery(query) {
try {
api = await fetch(`${BaseApi}/api/pesquisas/apkpure?query=${encodeURIComponent(query)}&apikey=${ApiKey}`)
data = await api.json()
return {
status: "online",
criador,
resultado: data.resultado
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function Pinterest(query) {
try {
api = await fetch(`${BaseApi}/api/pesquisa/pinterest?query=${encodeURIComponent(query)}&apikey=${ApiKey}`)
data = await api.json()
return {
status: "online",
criador,
resultado: data.resultado
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function amazon(query) {
try {
api = await fetch(`${BaseApiDark}/api/pesquisa/amazon?nome=${encodeURIComponent(query)}&apikey=${DARK_APIKEY}`)
data = await api.json()
return {
status: "online",
criador,
resultado: data.resultado
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function wallpaper(query) {
try {
api = await fetch(`${BaseApi}/api/pesquisa/wallpaper?query=${encodeURIComponent(query)}&apikey=${ApiKey}`)
data = await api.json()
return {
status: "online",
criador,
resultado: data.resultado
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function Playstore(query) {
try {
api = await fetch(`${BaseApi}/api/pesquisa/playstore?query=${encodeURIComponent(query)}&apikey=${ApiKey}`)
data = await api.json()
return {
status: "online",
criador,
pesquisa: query,
resultado: data.resultado.resultado
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

//========[ CANVAS ]========//
async function CanvabemVindo(titulo, avatar, fundo, desc, nome) {
try {
api = `${BaseApiDark}/api/canva/bem-vindo2?titulo=${encodeURIComponent(nome)}&avatar=${avatar}&fundo=${fundo}&nome=${encodeURIComponent(titulo)}&desc=${encodeURIComponent(desc)}&apikey=${DARK_APIKEY}`
return api;
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function canvaLevel(avatar, fundo, nome, level1, level2){
try {
api = `${BaseApiDark}/api/canvas/levelup?foto=${avatar}&fundo=${fundo}&nome=${encodeURIComponent(nome)}&lvb=${encodeURIComponent(level1)}&lva=${encodeURIComponent(level2)}&apikey=${DARK_APIKEY}`
return api;
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function canvaMusicCard(avatar, name, artistName, time){
try {
api = `${BaseApiDark}/api/canvas/musicard/v2?thumbnail=${avatar}&music_name=${encodeURIComponent(name)}&artist_name=${encodeURIComponent(time)}&time_end=${encodeURIComponent(artistName)}&apikey=${DARK_APIKEY}`
return api;
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function canvaMusicCard2(avatar, name, artistName){
try {
api = `${BaseApiDark}/api/canvas/musicard/v3?thumbnail=${avatar}&music_name=${encodeURIComponent(name)}&artist_name=${encodeURIComponent(artistName)}&apikey=${DARK_APIKEY}`
return api;
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function canvaMontagem(nome, url){
try {
api = `${BaseApiDark}/api/canvas/${nome}?link=${url}&apikey=${DARK_APIKEY}`
return api;
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

//========[ +18  ]========//
async function Hentaizinho(nomeHentai) {
try {
api2 = await fetch(`https://nekobot.xyz/api/image?type=${nomeHentai}`)
api3 = await api2.json()
return {
status: "online",
criador,
type: nomeHentai,
imagemUrl: api3.message
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}


async function Hentaizinho2(nomeHentai) {
try {
api2 = await fetch(`https://api.waifu.pics/nsfw/${nomeHentai}`)
api3 = await api2.json()
return {
status: "online",
criador,
type: nomeHentai,
imagemUrl: api3.url
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

//========[ IMAGEM ]========//

async function travaZapImg() {
try {
api = travaZap[Math.floor(Math.random() * travaZap.length)]
return api;
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function travaZapImg2() {
try {
api = travaZapF[Math.floor(Math.random() * travaZapF.length)]
return api;
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function metadinha() {
try {
api2 = await fetch(`${BaseApi}/api/imagem/metadinha?apikey=${ApiKey}`)
api = await api2.json()
return {
status: "online",
criador,
numero: api.número,
masculina: api.masculina,
feminina: api.feminina
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function metadinha2() {
try {
api2 = await fetch(`${BaseApi}/api/imagem/metadinha2?apikey=${ApiKey}`)
api = await api2.json()
return {
status: "online",
criador,
numero: api.número,
masculina: api.macho,
feminina: api.fema
};
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function logo(name, query) {
try {
if (name === "logo") {
api = `https://junimk.sirv.com/Api/1aa3ad239228f7cfe1cfb0b077cccfc4.jpg?text.0.text=${encodeURIComponent(query)}&text.0.position.gravity=center&text.0.position.y=20%25&text.0.size=90&text.0.color=ffffff&text.0.font.family=Courgette&text.0.background.color=ff2424&text.0.outline.color=5b4bde&text.0.outline.width=4&text.0.outline.blur=21`
return api;
} else if (name === "logo2") {
api = `https://junimk.sirv.com/Api/b5dc33dbe3e6baa7f7a64121c6f5a6c2.jpg?text.0.text=${encodeURIComponent(query)}&text.0.position.gravity=center&text.0.position.y=20%25&text.0.size=100&text.0.color=ffffff&text.0.font.family=Damion&text.0.background.color=ff2424&text.0.outline.color=de4b4b&text.0.outline.width=4&text.0.outline.blur=21`
return api;
} else if (name === "logo3") {
api = `https://junimk.sirv.com/Api/be4f071e8a558cf09eec6b4b9d63fe29.jpg?text.0.text=${encodeURIComponent(query)}&text.0.position.gravity=center&text.0.position.y=30%25&text.0.size=100&text.0.color=000000&text.0.font.family=Damion&text.0.background.color=ff2424&text.0.outline.color=ffffff&text.0.outline.width=4&text.0.outline.blur=21`
return api;
} else if (name === "logo4") {
api = `https://junimk.sirv.com/Api/9a8987ff1eb624256f8e86271f443545.jpg?text.0.text=${encodeURIComponent(query)}&text.0.position.gravity=center&text.0.position.y=30%25&text.0.size=100&text.0.color=ffffff&text.0.font.family=Damion&text.0.background.color=ff2424&text.0.outline.color=0026ff&text.0.outline.width=4&text.0.outline.blur=27`
return api;
} else if (name === "logo5") {
api = `https://junimk.sirv.com/Api/fe4b9803e07ab839efd4ef500b9456b9.jpg?text.0.text=${encodeURIComponent(query)}&text.0.position.gravity=center&text.0.position.y=30%25&text.0.size=100&text.0.color=ffffff&text.0.font.family=Damion&text.0.background.color=ff2424&text.0.outline.color=0026ff&text.0.outline.width=4&text.0.outline.blur=27`
return api;
}
} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

//FIGURINHAS
async function figurinhas(nome) {
try {
return `${BaseApiDark}/sticker/${nome}?apikey=${DARK_APIKEY}`;
} catch (e) {
console.log(e)
}
}
//========[ INTELIGÊNCIA ARTIFICIAL ]========//

async function gemini(query) {
try {
api2 = await fetch(`${BaseApiDark}/api/gemini?texto=${encodeURIComponent(query)}&apikey=${DARK_APIKEY}`)
api = await api2.json()
return api.resposta

} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function multiAi(modelo, prompt, prompt2 = null) {
try {
if (modelo === "gpt") {
api2 = await fetch(`${BaseApiDark}/api/gpt?texto=${prompt}&apikey=${DARK_APIKEY}`)
api = await api2.json();
return api.resultado;

} else if (modelo === "gptPrompt") {
api2 = await fetch(`${BaseApiDark}/api/gptPrompt?texto=${prompt}&prompt=${prompt2}&apikey=${DARK_APIKEY}`)
api = await api2.json();
return api.resposta;

} else {
api2 = await fetch(`http://speedhosting.cloud:2025/api/ai/texto/${modelo}?query=${prompt}&apikey=${DARK_APIKEY}`)
api = await api2.json()
console.log(api2)
return "log";
}

} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}
}

async function imagineAi(prompt) {
try {
api2 = await fetch(`${BaseApiDark}/api/ai/imagem/imagine?prompt=${prompt}&apikey=${DARK_APIKEY}`)
api = await api2.json();
return api.resultado.imagemUrl;

} catch (e) {
console.log(e)
}
}

async function dalle(prompt, modelo) {
try {
return `${BaseApiDark}/api/ai/imagem/${modelo}?prompt=${prompt}&apikey=${DARK_APIKEY}`
} catch (e) {
console.log(e)
}

}
async function consultas(pux, dado) {
try {
api2 = await fetch(`${BaseApiDark}/api/consulta/${pux}?query=${dado}&apikey=${DARK_APIKEY}`)
api = await api2.json()
return api.resultado;

} catch (e) {
console.log("Deu erro na solicitação, modulo: Scraper.js")
console.log(e)
}

}
//EXPORTANDO AS FUNÇÕES 
module.exports = { ytVideosSearch, ytMp3Query, ytMp4Query, ytMp3, ytMp4, instagramDl, tiktokDl, xvideosDl, apkpureDl, audiomeme, wikipedia, amazon, tiktokQuery, apkpureQuery, xvideosQuery, aptoide, Pinterest, figurinhas, PinterestMultiMidia, wallpaper, Playstore, CanvabemVindo, canvaLevel, canvaMusicCard, canvaMusicCard2, canvaMontagem, Hentaizinho, Hentaizinho2, travaZapImg, travaZapImg2, metadinha, metadinha2, logo, gemini, dalle, imagineAi, multiAi, consultas }