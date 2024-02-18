const filmSelect = document.getElementById('film');
const antallInput = document.getElementById('antall');
const fornavnInput = document.getElementById('fornavn');
const etternavnInput = document.getElementById('etternavn');
const telefonInput = document.getElementById('telefon');
const epostInput = document.getElementById('epost');

const billetter = [];

function validerInput() {
    resetFeilmeldinger();

    let isValid = true;
    if (filmSelect.value === '') {
        markInputAsInvalid(filmSelect, ' Må velge en film');
        isValid = false;
    }

    if (antallInput.value === '' || !isValidAntall(antallInput.value)) {
        markInputAsInvalid(antallInput, ' Antall må være et positivt tall');
        isValid = false;
    }

    if (fornavnInput.value === '') {
        markInputAsInvalid(fornavnInput, ' Må skrive inn fornavn');
        isValid = false;
    }

    if (etternavnInput.value === '') {
        markInputAsInvalid(etternavnInput, ' Må skrive inn etternavn');
        isValid = false;
    }

    if (telefonInput.value === '' || !validatePhoneNumber(telefonInput.value)) {
        markInputAsInvalid(telefonInput, ' Ugyldig telefonnummer');
        isValid = false;
    }

    if (epostInput.value === '' || !validateEmail(epostInput.value)) {
        markInputAsInvalid(epostInput, ' Ugyldig e-postadresse');
        isValid = false;
    }

    return isValid;
}

function markInputAsInvalid(inputElement, errorMessage) {
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('feil-container');

    const errorText = document.createElement('span');
    errorText.textContent = errorMessage;
    errorText.style.color = 'red';
    errorText.classList.add('feilmelding');

    inputElement.parentNode.appendChild(errorText);
}

function isValidAntall(inputValue) {
    const antall = parseInt(inputValue);
    return !isNaN(antall) && antall > 0;
}

function validatePhoneNumber(phoneNumber) {
    const regex = /^\d{8}$/;
    return regex.test(phoneNumber);
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function resetFeilmeldinger() {
    document.querySelectorAll('.feilmelding').forEach(span => span.remove());
}

function oppdaterBilletter() {
    const billetterListe = document.getElementById('billetter');
    billetterListe.innerHTML = '';
    billetter.forEach(billett => {
        const li = document.createElement('li');
        li.textContent = `${billett.fornavn} ${billett.etternavn} - ${billett.antall} billetter til ${billett.film}`;
        billetterListe.appendChild(li);
    });
}

function nullstillInputFelter(){
    filmSelect.value = ""
    antallInput.value = ""
    fornavnInput.value = ""
    etternavnInput.value = ""
    telefonInput.value = ""
    epostInput.value = ""
}
function leggTilBillett() {
    if (validerInput()) {
        const billett = {
            film: filmSelect.value,
            antall: antallInput.value,
            fornavn: fornavnInput.value,
            etternavn: etternavnInput.value,
            telefon: telefonInput.value,
            epost: epostInput.value
        };

        billetter.push(billett);
        oppdaterBilletter();
        nullstillInputFelter();
    }
}

function slettAlleBilletter() {
    billetter.length = 0;
    oppdaterBilletter();
    resetFeilmeldinger();
    nullstillInputFelter();
}
