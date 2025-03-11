require("dotenv").config();
const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");
const path = require("path");

const app = express();
app.use(cors());

// Ruta para convertir y descargar MP3
app.get("/download", async (req, res) => {
  const videoUrl = req.query.url;

  if (!ytdl.validateURL(videoUrl)) {
    return res.status(400).json({ error: "URL inválida" });
  }

  const videoID = ytdl.getURLVideoID(videoUrl);
  const outputFilePath = path.resolve(__dirname, `temp/${videoID}.mp3`);

  try {
    const stream = ytdl(videoUrl, { quality: "highestaudio" });

    ffmpeg(stream)
      .audioCodec("libmp3lame")
      .format("mp3")
      .on("end", () => {
        res.download(outputFilePath, `${videoID}.mp3`, () => {
          fs.unlinkSync(outputFilePath); // Eliminar archivo después de enviarlo
        });
      })
      .on("error", (err) => {
        console.error("Error en la conversión:", err);
        res.status(500).json({ error: "Error al convertir el video" });
      })
      .save(outputFilePath);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
