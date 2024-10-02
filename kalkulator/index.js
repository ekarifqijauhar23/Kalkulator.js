const readline = require("readline-sync");

const angkapertama = parseFloat(readline.question("Masukkan angka pertama :"));
const operator = readline.question("masukkan Operator (+, -, *, /) :" );
const angkakedua = parseFloat(readline.question("Masukkan angka kedua :"));

//validasi inputan
if(isNaN(angkapertama) || isNaN(angkakedua)) {
    //maka tampilan error
    return console.log("inputan tidak sesuai !!!");

}else{
    const hasil = execute(angkapertama, angkakedua, operator);
    console.log(`Hasilnya adalah ${hasil}`);

}

function execute(angkapertama, angkakedua, operator){
    switch (operator) {
        case "+" :
            return angkapertama + angkakedua;
        case "-" :
            return angkapertama - angkakedua;
        case "*" :
            return angkapertama * angkakedua;
        case "/" :
            if (angkakedua === 0 ) {
                return console.log('Error: Tidak bisa dibagi dengan nol');

            }
            return angkapertama / angkakedua;
        case "%" :
            return angkapertama % angkakedua;
            default:
                return console.log("operator tidak valid");
    }
}