require('dotenv').config();
const telegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const options = {
  polling: true,
};

const zenseBot = new telegramBot(token, options);

const prefix = '/';
const gempa = new RegExp(`^${prefix}gempa$`);

zenseBot.onText(gempa, async (callback) => {
  const id = callback.from.id;
  const BMKG_ENDPOINT = 'https://data.bmkg.go.id/DataMKG/TEWS/';

  const response = await fetch(BMKG_ENDPOINT + 'autogempa.json');
  if (!response.ok) {
    zenseBot.sendMessage(id, 'Maaf, server sedang bermasalah!');
  }

  const {
    Infogempa: {
      gempa: { Jam, Magnitude, Tanggal, Kedalaman, Wilayah, Potensi, Shakemap },
    },
  } = await response.json();

  const BMKGImage = BMKG_ENDPOINT + Shakemap;

  const resultText = `
Waktu: ${Tanggal} | ${Jam}
Besaran: ${Magnitude} SR
Wilayah: ${Wilayah}
Potensi: ${Potensi}
Kedalaman: ${Kedalaman}
  `;

  zenseBot.sendPhoto(id, BMKGImage, {
    caption: resultText,
  });
});
