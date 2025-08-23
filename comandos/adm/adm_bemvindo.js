const { prefix, botName, donoName, DarkApikey, DarkUrl, emoji } = require("../../dono/config.json")

module.exports = {
  nome: "adm",
  descricao: "Ativar ou desativar o bemvindo do bot",
  comandos: ["bv", "bemvindo"],
  uso: `${prefix}bv 1/0`,

handle: async ({ enviar, q, ModificaGrupo, ArquivosDosGrupos}) => {
if(!q) return enviar(`Para ativar ou desativar use assim: ${prefix}bemvindo 1\n>1 para ativar\n> 0 para desativar`)
try {
if (q == 1) {
if (ArquivosDosGrupos[0].bemvindo) return enviar("- *O bemvindo já está ativado nesse grupo*")
ArquivosDosGrupos[0].bemvindo = true
ModificaGrupo(ArquivosDosGrupos)
enviar('*_O bemvindo foi ativado nesse grupo_*')
} else if (q == 0) {
if (!ArquivosDosGrupos[0].bemvindo) return enviar("- *O bemvindo já está ativado nesse grupo*")
ArquivosDosGrupos[0].bemvindo = false
ModificaGrupo(ArquivosDosGrupos)
enviar('*_O bemvindo foi desativado nesse grupo_*')
}
} catch (e) {
console.log(e)
enviar("Deu erro....")
}
  },
};