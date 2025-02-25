import puppeteer from "puppeteer";

/**
 * Scrapea la informacion de un producto desde una URL utilizando Puppeteer.
 *
 * @param {string} url - La URL del producto a scrapeo.
 * @returns {Promise<Array<{ texto: string, plataforma: string, precio: string }>>} 
 * Un array de objetos que contiene la información del producto: titulo, plataforma, imagen y precio.
 * @throws {Error} Si ocurre un error durante el proceso de scraping.
 */
export async function scrapearGame(url) {
  
  try {
    const browser = await puppeteer.launch({
      headless: "new",
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('.product-title span');
    const productos = await page.evaluate(() => {
      const elementos = document.querySelectorAll('.product-title span');
      return Array.from(elementos).map(elemento => {
        const plataforma = document.querySelector('.dd a span');
        const precio = document.querySelector('.int');
        const imagen = document.querySelector('#product-cover');
        return {
          texto: elemento.innerText, 
          plataforma: plataforma.innerText, 
          precio: precio.innerHTML.trim(),
          imagen: imagen.getAttribute('src')
        };
      });
    });


    await browser.close();
    
    return productos;

  } catch (error){

    console.error('Error:', error);
  }
}


