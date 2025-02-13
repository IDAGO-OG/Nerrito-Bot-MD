


const handler = async (m, { conn, usedPrefix }) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje;
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`));
  const tradutor = _translate.plugins.info_instalarbot;

  // Tipos de documentos soportados
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];

  // Texto del mensaje
  const text = `${tradutor.texto1}`.trim();

  // Configuración del mensaje con botones
  const buttonMessage = {
    document: { url: `https://github.com/IDAGO-OG/Nerrito-Bot-MD` }, // Enlace al repositorio correcto
    mimetype: `application/${document}`,
    fileName: `「 𝑵𝒆𝒓𝒓𝒊𝒕𝒐 𝑩𝒐𝒕 𝑴𝑫 」`, // Nombre del archivo
    fileLength: 99999999999999, // Longitud del archivo (simulado)
    pageCount: 200, // Número de páginas (simulado)
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: 'https://github.com/IDAGO-OG/Nerrito-Bot-MD', // Enlace al repositorio
        mediaType: 2,
        previewType: 'pdf',
        title: tradutor.texto2, // Título del mensaje
        body: wm, // Texto de la marca de agua
        thumbnail: imagen1, // Miniatura del mensaje
        sourceUrl: 'https://github.com/IDAGO-OG/Nerrito-Bot-MD' // Enlace de origen
      }
    },
    caption: text, // Texto del mensaje
    footer: wm, // Pie de página
    // Botones (opcional, descomenta si los necesitas)
    // buttons: [
    //   { buttonId: `${usedPrefix}menu`, buttonText: { displayText: '𝙼𝙴𝙽𝚄' }, type: 1 },
    //   { buttonId: `${usedPrefix}donar`, buttonText: { displayText: '𝙳𝙾𝙽𝙰𝚁' }, type: 1 }
    // ],
    headerType: 6
  };

  // Enviar el mensaje
  conn.sendMessage(m.chat, buttonMessage, { quoted: m });
};

// Comandos que activan este plugin
handler.command = ['instalarbot', 'instalar'];
export default handler;