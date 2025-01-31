import express from "express";
import cors from "cors";
import { scrapearGame } from "./game.js";
import { scrapearGp2 } from "./gp2.js";

const app = express();
const PORT = 3000;
app.use(cors());
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' http://localhost:3000;"
  );
  next();
});

/**
 * Ruta para realizar scraping de productos de Game.
 * Recibe una URL como parámetro de consulta y devuelve la información del producto.
 * Utiliza la función scrapearGame para obtener los datos del producto.
 * @param {string} url - La URL del producto en Game.
 * @returns {Promise<void>} Respuesta con los datos del producto o un error.
 * @throws {Error} Si ocurre un error durante el scraping.
 */
app.get("/api/productoGame", async (req, res) => {
  try {
    let { url } = req.query;
    const producto = await scrapearGame(url);
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al realizar el scraping." });
  }
});

/**
 * Ruta para realizar scraping de productos de PlayStation Store.
 * Recibe un nombre como parámetro de consulta y devuelve los productos encontrados en la PlayStation Store.
 * Utiliza la función scrapearGp2 para obtener los productos.
 * @param {string} name - El nombre del producto a buscar en PlayStation Store.
 * @returns {Promise<void>} Respuesta con los productos encontrados o un error.
 * @throws {Error} Si ocurre un error durante el scraping.
 */
app.get("/api/productoPlay", async (req, res) => {
  try {
    let { name } = req.query;
    const producto = await scrapearGp2(name);
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al realizar el scraping." });
  }
});

/**
 * Inicia el servidor en el puerto 3000.
 * El servidor escucha las rutas definidas para realizar scraping de productos de Game y PlayStation Store.
 * @returns {void}
 */
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
