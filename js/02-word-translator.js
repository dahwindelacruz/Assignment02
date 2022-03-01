let languageCode = prompt('Please enter a language code from the following: "es", "de", "en", or "fr".');
if (languageCode == 'es') {
    console.log('Hello World translated in Spanish is: Hola Mundo.');
} else if (languageCode == 'de') {
    console.log('Hello World translated in German is: Hallo Welt.');
} else if (languageCode == 'en') {
    console.log('Hello World is in English.');
} else if (languageCode == 'fr') {
    console.log('Hello World translated in French is: Bonjour le monde.');
} else {
    console.log('Hello World!')
}