
const handler = async (m, {conn}) => {
  const datas = global
   const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
   const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
   const tradutor = _translate.plugins.info_tyc
   
   global.terminos = tradutor.texto1;

  m.reply(global.terminos);
};

handler.help = ['tyc'];
handler.tags = ['tyc', 'info'];
handler.command = /^(esto_no_coincide_con_nada)$/i;
export default handler;


