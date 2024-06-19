/*
Получение посылки в почтамате происходит по коду, приходящему в смс. 
При получении посылки, пользователь вводит код и 
затем происходит списание средств с баланса пользователя, 
выдается посылка и пользователь видит 
сообщение вида “Заберите посылку {id посылки} из ячейки №{номер ячейки}. Ваш счет составляет: {баланс}ед.”
*/

let postamate = [null, null, null, "1432HGF" , null];
let parcel = "1432HGF";
let accBalance = 500;
let cost = 100;
let codeBase = "A001DFX0";
let smsCode = "A001DFX0";

function giveShipment(smsCode,codeBase,accBalance,cost, postamate, parcel){
       if(smsCode === codeBase && accBalance >= cost) {
        let balance = accBalance - cost;
        let parcelId = postamate.find((element) => element === parcel);
        console.log(`Заберите посылку ${parcelId} из ячейки №4. Ваш счет составляет: ${balance}ед`);
    }
    else {
        console.log('Неверный код');
    }
}

giveShipment(smsCode,codeBase,accBalance,cost, postamate, parcel);