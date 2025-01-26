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
┣ *- ${_translate.plugins.menu_audios.texto1}*
┣ ඬ⃟🔊 >_*Mensaje 1*: Quien es tu sempai botsito 7w7_
┣ ඬ⃟🔊 >_*Mensaje 2*: Te diagnostico con gay_
┣ ඬ⃟🔊 >_*Mensaje 3*: No digas eso papu_
┣ ඬ⃟🔊 >_*Mensaje 4*: A nadie le importa_
┣ ඬ⃟🔊 >_*Mensaje 5*: Fiesta del admin_
┣ ඬ⃟🔊 >_*Mensaje 6*: Fiesta del administrador_
┣ ඬ⃟🔊 >_*Mensaje 7*: Vivan los novios_
┣ ඬ⃟🔊 >_*Mensaje 8*: Feliz cumpleaños_
┣ ඬ⃟🔊 >_*Mensaje 9*: Noche de paz_
┣ ඬ⃟🔊 >_*Mensaje 10*: Buenos dias_
┣ ඬ⃟🔊 >_*Mensaje 11*: Buenos tardes_
┣ ඬ⃟🔊 >_*Mensaje 12*: Buenos noches_
┣ ඬ⃟🔊 >_*Mensaje 13*: Audio hentai_
┣ ඬ⃟🔊 >_*Mensaje 14*: Chica lgante_
┣ ඬ⃟🔊 >_*Mensaje 15*: Feliz navidad_
┣ ඬ⃟🔊 >_*Mensaje 16*: Vete a la vrg_
┣ ඬ⃟🔊 >_*Mensaje 17*: Pasa pack Bot_
┣ ඬ⃟🔊 >_*Mensaje 18*: Atencion grupo_
┣ ඬ⃟🔊 >_*Mensaje 19*: Marica quien_
┣ ඬ⃟🔊 >_*Mensaje 20*: Murio el grupo_
┣ ඬ⃟🔊 >_*Mensaje 21*: Oh me vengo_
┣ ඬ⃟🔊 >_*Mensaje 22*: tio que rico_
┣ ඬ⃟🔊 >_*Mensaje 23*: Viernes_
┣ ඬ⃟🔊 >_*Mensaje 24*: Baneado_
┣ ඬ⃟🔊 >_*Mensaje 25*: Sexo_
┣ ඬ⃟🔊 >_*Mensaje 26*: Hola_
┣ ඬ⃟🔊 >_*Mensaje 27*: Un pato_
┣ ඬ⃟🔊 >_*Mensaje 28*: Nyanpasu_
┣ ඬ⃟🔊 >_*Mensaje 29*: Te amo_
┣ ඬ⃟🔊 >_*Mensaje 30*: Yamete_
┣ ඬ⃟🔊 >_*Mensaje 31*: Bañate_
┣ ඬ⃟🔊 >_*Mensaje 32*: Es puto_
┣ ඬ⃟🔊 >_*Mensaje 33*: La biblia_
┣ ඬ⃟🔊 >_*Mensaje 34*: Onichan_
┣ ඬ⃟🔊 >_*Mensaje 35*: Mierda de Bot_
┣ ඬ⃟🔊 >_*Mensaje 36*: Siuuu_
┣ ඬ⃟🔊 >_*Mensaje 37*: Epico_
┣ ඬ⃟🔊 >_*Mensaje 38*: Shitpost_
┣ ඬ⃟🔊 >_*Mensaje 39*: Rawr_
┣ ඬ⃟🔊 >_*Mensaje 40*: UwU_
┣ ඬ⃟🔊 >_*Mensaje 41*: :c_
┣ ඬ⃟🔊 >_*Mensaje 42*: a_
┗━━━━━━━━━━━━━━━━┛

> No hacer spam al Bot con audios, por favor.`.trim();

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