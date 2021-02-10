//  Functionalitate search
// Scopul este sa impartim task-ul in pasi mai mici
// 1. Un sigur input cu title si de button (html)
// 2. Afisam textul din input daca apasam butonul de search
// 3. Implementam filtrare cu call la BE

// Se ocupa de cautare pe backend ( doar face requestul)
// returneaza o lista de filme

// Ex: filters = { title: 'test'}
// Nu afiseaza nimic in UI ( nu folose document.createElement)
function searchMoviesApi(filters) {

  return [
    { title: 'test1' }
  ]; // sa returnezi date mock
}

function showUI() {
  // adaugam event de click pe buton
  // trebuie sa facem obiect filters
  // apelam searchMoviesApi cu parametru filters daca sa dat click
}