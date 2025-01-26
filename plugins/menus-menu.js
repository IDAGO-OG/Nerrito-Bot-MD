import fetch from 'node-fetch';
import moment from 'moment-timezone';

const handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  try {
    const datas = global;
    const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje;
    const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`));
    const tradutor = _translate.plugins.menu_menu;

    // Variables útiles
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const date = moment().format('DD/MM/YYYY');
    const uptime = clockString(process.uptime() * 1000);
    const { money, joincount, level, exp, limit, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter(user => user.registered).length;

    // Texto del menú con formato y emojis
    let str = `
╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
┃  *NERRITO BOT 🐈‍⬛*  
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━「 *INFORMACIÓN DEL USUARIO* 」━━━╮
┃ *👤 Nombre:* ${taguser}
┃ *📊 Nivel:* ${level}
┃ *🌟 Experiencia:* ${exp}
┃ *🎖️ Rango:* ${role}
┃ *💰 Dinero:* ${money}
┃ *🎟️ Tokens:* ${limit}
┃ *💎 Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌')}
┃ *📅 Registrados:* ${rtotalreg}
┃ *⏳ Uptime:* ${uptime}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━「 *MENÚ PRINCIPAL* 」━━━╮
┃ 🎵 _*${usedPrefix}menuaudios*_
┃ 🎬 _*${usedPrefix}menuanimes*_
┃ 📖 _*${usedPrefix}labiblia*_
┃ 🌐 _*${usedPrefix}lang*_
┃ 🌐 _*${usedPrefix}langgroup*_
┃ 🎮 _*${usedPrefix}glx*_
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━「 *INFORMACIÓN DEL BOT* 」━━━╮
┃ 📜 _*${usedPrefix}terminosycondiciones*_
┃ 👥 _*${usedPrefix}grupos*_
┃ 📊 _*${usedPrefix}estado*_
┃ 🤖 _*${usedPrefix}infobot*_
┃ 🚀 _*${usedPrefix}speedtest*_
┃ 💰 _*${usedPrefix}donar*_
┃ 👑 _*${usedPrefix}owner*_
┃ 📜 _*${usedPrefix}script*_
┃ 🐛 _*${usedPrefix}reporte _<txt>___
┃ 🔗 _*${usedPrefix}join _<wagp_url>___
┃ ⏳ _*${usedPrefix}fixmsgespera*_
┃ 🤖 _*bot_ (sin prefijo)*_
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━「 *MÁS COMANDOS* 」━━━╮
┃ 🧮 _*${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┃ 🤡 _*${usedPrefix}fake *<txt1> <@tag> <txt2>*_
┃ ✂️ _*${usedPrefix}ppt *<papel / tijera /piedra>*_
┃ 💼 _*${usedPrefix}prostituto *<nombre / @tag>*_
┃ 💼 _*${usedPrefix}prostituta *<nombre / @tag>*_
┃ 🌈 _*${usedPrefix}gay2 *<nombre / @tag>*_
┃ 🌈 _*${usedPrefix}lesbiana *<nombre / @tag>*_
┃ 🍆 _*${usedPrefix}pajero *<nombre / @tag>*_
┃ 🍆 _*${usedPrefix}pajera *<nombre / @tag>*_
┃ 🏳️‍🌈 _*${usedPrefix}puto *<nombre / @tag>*_
┃ 🏳️‍🌈 _*${usedPrefix}puta *<nombre / @tag>*_
┃ 🤕 _*${usedPrefix}manco *<nombre / @tag>*_
┃ 🤕 _*${usedPrefix}manca *<nombre / @tag>*_
┃ 🐀 _*${usedPrefix}rata *<nombre / @tag>*_
┃ ❤️ _*${usedPrefix}love *<nombre / @tag>*_
┃ 🕵️ _*${usedPrefix}doxear *<nombre / @tag>*_
┃ ❓ _*${usedPrefix}pregunta *<txt>*_
┃ ⚔️ _*${usedPrefix}suitpvp *<@tag>*_
┃ 🎰 _*${usedPrefix}slot *<apuesta>*_
┃ 🎲 _*${usedPrefix}ttt ${tradutor.texto1[32]}*_
┃ 🎲 _*${usedPrefix}delttt*_
┃ 🤔 _*${usedPrefix}acertijo*_
┃ 🤖 _*${usedPrefix}simi *<txt>*_
┃ 🏆 _*${usedPrefix}top *<txt>*_
┃ 🏳️‍🌈 _*${usedPrefix}topgays*_
┃ 🎌 _*${usedPrefix}topotakus*_
┃ 💑 _*${usedPrefix}formarpareja*_
┃ ❓ _*${usedPrefix}verdad*_
┃ 🎯 _*${usedPrefix}reto*_
┃ 🎶 _*${usedPrefix}cancion*_
┃ 🕵️ _*${usedPrefix}pista*_
┃ 🧠 _*${usedPrefix}akinator*_
┃ 🔍 _*${usedPrefix}wordfind*_
┃ 🎮 _*${usedPrefix}glx (RPG Mundo)*_
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━「 *OTROS COMANDOS* 」━━━╮
┃ ✅ _*${usedPrefix}enable *welcome*_
┃ ❌ _*${usedPrefix}disable *welcome*_
┃ ✅ _*${usedPrefix}enable *modohorny*_
┃ ❌ _*${usedPrefix}disable *modohorny*_
┃ ✅ _*${usedPrefix}enable *antilink*_
┃ ❌ _*${usedPrefix}disable *antilink*_
┃ ✅ _*${usedPrefix}enable *antilink2*_
┃ ❌ _*${usedPrefix}disable *antilink2*_
┃ ✅ _*${usedPrefix}enable *detect*_
┃ ❌ _*${usedPrefix}disable *detect*_
┃ ✅ _*${usedPrefix}enable *audios*_
┃ ❌ _*${usedPrefix}disable *audios*_
┃ ✅ _*${usedPrefix}enable *autosticker*_
┃ ❌ _*${usedPrefix}disable *autosticker*_
┃ ✅ _*${usedPrefix}enable *antiviewonce*_
┃ ❌ _*${usedPrefix}disable *antiviewonce*_
┃ ✅ _*${usedPrefix}enable *antitoxic*_
┃ ❌ _*${usedPrefix}disable *antitoxic*_
┃ ✅ _*${usedPrefix}enable *antitraba*_
┃ ❌ _*${usedPrefix}disable *antitraba*_
┃ ✅ _*${usedPrefix}enable *antiarabes*_
┃ ❌ _*${usedPrefix}disable *antiarabes*_
┃ ✅ _*${usedPrefix}enable *modoadmin*_
┃ ❌ _*${usedPrefix}disable *modoadmin*_
┃ ✅ _*${usedPrefix}enable *antidelete*_
┃ ❌ _*${usedPrefix}disable *antidelete*_
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯`.trim();

    // Selección de imagen según el idioma
    let pp;
    if (idioma == 'es') {
      pp = global.imagen1;
    } else if (idioma == 'pt-br') {
      pp = global.imagen2;
    } else if (idioma == 'fr') {
      pp = global.imagen3;
    } else if (idioma == 'en') {
      pp = global.imagen4;
    } else if (idioma == 'ru') {
      pp = global.imagen5;
    } else {
      pp = global.imagen1; // Imagen por defecto (Español/Spanish)
    }

    // Enviar mensaje con imagen
    if (m.isGroup) {
      await conn.sendMessage(m.chat, { image: pp, caption: str, mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') }, { quoted: m });
    } else {
      const fkontak = { key: { participants: "0@s.whatsapp.net", remoteJid: "status@broadcast", fromMe: false, id: "Halo" }, message: { contactMessage: { vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, participant: "0@s.whatsapp.net" };
      await conn.sendMessage(m.chat, { image: pp, caption: str, mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') }, { quoted: fkontak });
    }
  } catch (e) {
    console.error(e);
    conn.reply(m.chat, '❌ Ocurrió un error al generar el menú. Por favor, inténtalo de nuevo.', m);
  }
};

handler.command = /^(menu|help|comandos|commands|cmd|cmds)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}