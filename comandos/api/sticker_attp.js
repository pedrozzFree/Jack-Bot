const { prefix, botName, donoName, DarkApikey, DarkUrl, emoji } = require("../../dono/config.json")

module.exports = {
  nome: "Sticker",
  descricao: "Envia uma sticker para o usuário",
  comandos: ["sticker5", "attp"],
  uso: `${prefix}sticker5`,

handle: async ({ lux, from, esperar, enviar, args, q, fetchJson, msg, reagir}) => {
if (!q) return enviar(msg.query)
try {
reagir(emoji)
enviar("*A noite sussurra... apenas aguarde, meu poder está se preparando.*")
lux.sendMessage(from, { sticker: { url: `${DarkUrl}/api/sticker/canva/attp?texto=${encodeURIComponent(q)}&apikey=${DarkApikey}`} })
} catch (e) {
console.log(e)
enviar("Deu erro ao tentando consultar a api...")
}

},
};