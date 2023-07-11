"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeTurkishEntitiesInUrl = exports.decodeTurkishEntities = exports.capitalizeTurkish = void 0;
var capitalizeTurkish = function (input) {
    var words = input.split(" ");
    var capitalizedWords = words.map(function (word) {
        var firstLetter = word.charAt(0);
        var restOfWord = word.slice(1).toLocaleLowerCase("tr");
        return firstLetter.toLocaleUpperCase("tr") + restOfWord;
    });
    return capitalizedWords.join(" ");
};
exports.capitalizeTurkish = capitalizeTurkish;
var decodeTurkishEntities = function (input) {
    var entities = {
        "&Ccedil;": "Ç",
        "&ccedil;": "ç",
        "&Uuml;": "Ü",
        "&uuml;": "ü",
        "&Ouml;": "Ö",
        "&ouml;": "ö",
        "&Iuml;": "İ",
        "&iuml;": "i",
        "&Gbreve;": "Ğ",
        "&gbreve;": "ğ",
        "&Scedil;": "Ş",
        "&scedil;": "ş",
    };
    return input.replace(/&[A-Za-z]+;/g, function (entity) {
        return entities[entity] || entity;
    });
};
exports.decodeTurkishEntities = decodeTurkishEntities;
var decodeTurkishEntitiesInUrl = function (url) {
    var entities = {
        "%C3%87": "Ç",
        "%C3%A7": "ç",
        "%C3%9C": "Ü",
        "%C3%BC": "ü",
        "%C3%96": "Ö",
        "%C3%B6": "ö",
        "%C4%B0": "İ",
        "%C4%B1": "ı",
        "%C4%9E": "Ğ",
        "%C4%9F": "ğ",
        "%C5%9E": "Ş",
        "%C5%9F": "ş",
    };
    var decodedUrl = decodeURIComponent(url);
    return decodedUrl.replace(/%[A-Fa-f0-9]{2}/g, function (entity) {
        return entities[entity] || entity;
    });
};
exports.decodeTurkishEntitiesInUrl = decodeTurkishEntitiesInUrl;
