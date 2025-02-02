import puppeteer from "puppeteer";

/**
 * Scrapea la información de productos de PlayStation Store utilizando Puppeteer.
 * @param {string} nombre - El nombre del producto a buscar en PlayStation Store.
 * @returns {Promise<Array<{ nombre: string, precio: string }>>} 
 * Un array de objetos que contiene el nombre y precio de los productos encontrados.
 * @throws {Error} Si ocurre un error durante el proceso de scraping.
 */
export async function scrapearGp2(nombre) {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
    });

    const page = await browser.newPage();

    await page.goto("https://store.playstation.com/es-es/search/"+nombre);
    await page.waitForSelector("li .psw-t-body");

    const productos = await page.evaluate(() => {
      const elementos = document.querySelectorAll("li");

      return Array.from(elementos).map((elemento) => {
        let titulo = '';
        let precio = '';
        let imagen= '';

        const tituloElemento = elemento.querySelector(".psw-t-body");
        if (tituloElemento !== null) {
          titulo = tituloElemento.innerText.trim();
        }

        const precioElemento = elemento.querySelector(".psw-m-r-3");
        if (precioElemento !== null) {
          precio = precioElemento.innerText.trim();
        }
        const imagenJuego = elemento.querySelector('.psw-fade-in')
        if (imagenJuego !== null) {
          imagen = imagenJuego.getAttribute('src');
        }

        return { nombre: titulo, precio: precio, imagen: imagen };
      });
    });

    await browser.close();
    return productos;
  } catch (error) {
    console.error("Error:", error);
  }
}
