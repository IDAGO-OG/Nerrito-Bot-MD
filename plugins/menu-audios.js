import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje;
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`));
  const tradutor = _translate.plugins.menu_audios;

  try {
    const pp = imagen4;
    const img = './src/assets/images/menu/languages/es/menu.png';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

    const str = `
╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *NERRITO BOT* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ola, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃ *<𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ - ${_translate.plugins.menu_audios.texto1}
┣ ඬ⃟🔊 _* Audio #1*: `Quien es tu sempai botsito 7w7`_
┣ ඬ⃟🔊 _* Audio #2*: `Te diagnostico con gay`_
┣ ඬ⃟🔊 _* Audio #3*: `No digas eso papu`_
┣ ඬ⃟🔊 _* Audio #4*: `A nadie le importa`_
┣ ඬ⃟🔊 _* Audio #5*: `Fiesta del admin`_
┣ ඬ⃟🔊 _* Audio #6*: `Fiesta del administrador`_
┣ ඬ⃟🔊 _* Audio #7*: `Vivan los novios`_
┣ ඬ⃟🔊 _* Audio #8*: `Feliz cumpleaños`_
┣ ඬ⃟🔊 _* Audio #9*: `Noche de paz`_
┣ ඬ⃟🔊 _* Audio #10*: `Buenos dias`_
┣ ඬ⃟🔊 _* Audio #11*: `Buenos tardes`_
┣ ඬ⃟🔊 _* Audio #12*: `Buenos noches`_
┣ ඬ⃟🔊 _* Audio #13*: `Audio hentai`_
┣ ඬ⃟🔊 _* Audio #14*: `Chica lgante`_
┣ ඬ⃟🔊 _* Audio #15*: `Feliz navidad`_
┣ ඬ⃟🔊 _* Audio #16*: `Vete a la vrg`_
┣ ඬ⃟🔊 _* Audio #17*: `Pasa pack Bot`_
┣ ඬ⃟🔊 _* Audio #18*: `Atencion grupo`_
┣ ඬ⃟🔊 _* Audio #19*: `Marica quien`_
┣ ඬ⃟🔊 _* Audio #20*: `Murio el grupo`_
┣ ඬ⃟🔊 _* Audio #21*: `Oh me vengo`_
┣ ඬ⃟🔊 _* Audio #22*: `tio que rico`_
┣ ඬ⃟🔊 _* Audio #23*: `Viernes`_
┣ ඬ⃟🔊 _* Audio #24*: `Baneado`_
┣ ඬ⃟🔊 _* Audio #25*: `Sexo`_
┣ ඬ⃟🔊 _* Audio #26*: `Hola`_
┣ ඬ⃟🔊 _* Audio #27*: `Un pato`_
┣ ඬ⃟🔊 _* Audio #28*: `Nyanpasu`_
┣ ඬ⃟🔊 _* Audio #29*: `Te amo`_
┣ ඬ⃟🔊 _* Audio #30*: `Yamete`_
┣ ඬ⃟🔊 _* Audio #31*: `Bañate`_
┣ ඬ⃟🔊 _* Audio #32*: `Es puto`_
┣ ඬ⃟🔊 _* Audio #33*: `La biblia`_
┣ ඬ⃟🔊 _* Audio #34*: `Onichan`_
┣ ඬ⃟🔊 _* Audio #35*: `Mierda de Bot`_
┣ ඬ⃟🔊 _* Audio #36*: `Siuuu`_
┣ ඬ⃟🔊 _* Audio #37*: `Epico`_
┣ ඬ⃟🔊 _* Audio #38*: `Shitpost`_
┣ ඬ⃟🔊 _* Audio #39*: `Rawr`_
┣ ඬ⃟🔊 _* Audio #40*: `UwU`_
┣ ඬ⃟🔊 _* Audio #41*: `:c`_
┣ ඬ⃟🔊 _* Audio #42*: `a`_
┗━━━━━━━━━━━━━━━━┛

>`No hacer spam al Bot con audios, por favor`.`.trim();

    if (m.isGroup) {
      const fkontak2 = {
        'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo' },
        'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } },
        'participant': '0@s.whatsapp.net'
      };
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak2 });
    } else {
      const fkontak2 = {
        'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo' },
        'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } },
        'participant': '0@s.whatsapp.net'
      };
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak2 });
    }
  } catch {
    conn.reply(m.chat, tradutor.texto2, m);
  }
};

handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|keyaudio|keyaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}