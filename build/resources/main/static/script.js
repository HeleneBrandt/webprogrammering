let billettArray = [];

function kjopBillett() {
    // Validering
    const navn = document.getElementById('navn').value;
    const telefon = document.getElementById('telefon').value;
    const epost = document.getElementById('epost').value;
    const antall = document.getElementById('antall').value;
    const film = document.getElementById('film').value;

    // her bør vi endre
    if (!validerNavn(navn) || !validerTelefon(telefon) || !validerEpost(epost) || !validerAntall(antall) || !validerFilm(film)) {
        alert('Vennligst fyll ut alle feltene riktig.');
        return;
    }

    // Opprett billettobjekt
    const billett = {
        navn: navn,
        telefon: telefon,
        epost: epost,
        antall: antall,
        film: film
    };

    // Legg til billett i array
    billettArray.push(billett);

    // Oppdater billettliste
    oppdaterBillettListe();

    // Nullstill inputfeltene
    nullstillInputFelt();
}

function validerAntall(antall){
    return antall > 0 && Number, isInteger(Number(antall));
}

function validerFilm(film) {
    // Tilpasset validering for filmtittel (for eksempel, sjekk om det ikke er tom streng)
    return film.trim() !== '';
}
function validerNavn(navn) {
    // Tilpasset validering for navn
    return navn.trim() !== '';
}

function validerTelefon(telefon) {
    // Tilpasset validering for telefonnummer
    const telefonRegex = /^[0-9]{8}$/;
    return telefonRegex.test(telefon);
}

function validerEpost(epost) {
    // Tilpasset validering for e-postadresse
    const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return epostRegex.test(epost);
}

function oppdaterBillettListe() {
    const billettListeElement = document.getElementById('billettListe');
    billettListeElement.innerHTML = '';

    billettArray.forEach(billett => {
        const listItem = document.createElement('li');
        listItem.textContent = `Navn: ${billett.navn}, Telefon: ${billett.telefon}, E-post: ${billett.epost}`;
        billettListeElement.appendChild(listItem);
    });
}

function nullstillInputFelt() {
    document.getElementById('navn').value = '';
    document.getElementById('telefon').value = '';
    document.getElementById('epost').value = '';
}

function slettAlleBilletter() {
    billettArray = [];
    oppdaterBillettListe();
}
