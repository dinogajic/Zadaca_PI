let bodovi = prompt("Unesi broj bodova");
let ocjena;
let poruka;

if (bodovi >= 50 && bodovi <= 62.9) {
    ocjena = 2;
    poruka = "Čestitamo dobili ste dovoljan(" + ocjena + ")";
}
else if (bodovi >= 63 && bodovi <= 75.9) {
    ocjena = 3;
    poruka = "Čestitamo dobili ste dobar(" + ocjena + ")";
}
else if (bodovi >= 76 && bodovi <= 88.9) {
    ocjena = 4;
    poruka = "Čestitamo dobili ste vrlo dobar(" + ocjena + ")";
}
else if (bodovi >= 89 && bodovi <= 100) {
    ocjena = 5;
    poruka = "Čestitamo dobili ste odličan(" + ocjena + ")";
}
else if (bodovi < 50) {
    ocjena = 1;
    poruka = "Nažalost dobili ste nedovoljan(" + ocjena + ")";
}


console.log(poruka);