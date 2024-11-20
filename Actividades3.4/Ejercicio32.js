const visitedPages = new WeakSet();

function visitPage(page) {
  if (visitedPages.has(page)) {
    console.log(page.url + " esta pagina ya ha sido visitada antes");
  } else {
    visitedPages.add(page); // se añade esta pagina como usada
    console.log(page.url + " es la primera vez que visitas esta pagina ");
  }
}
const pagina = { url: "https://google.com" };
visitPage(pagina);
visitPage(pagina);