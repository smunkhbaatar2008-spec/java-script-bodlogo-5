// const card = [
//     {name : "Үзэг" , quantity : 1} ,
//     {nane : "Дэвтэр" , quantity : 2}
// ]
// if (card.length === 0){
//     console.log("Хасах бараа алга");
// }
// else if (card[0].quantity > 1) {
//     card[0].quantity -= 1;
// }
// else {
//     card.shift();
// }
// console.log(card);

// const settings = {
//     sound : true ,
//     notifications : false 
// }
// const selectedKey = "notifications"
// if (selectedKey in settings) {
//     settings[selectedKey] = !settings[selectedKey];
// }
// else {
//       console.log("Тохиргоо олдсонгүй");
// }
// console.log(settings);

// const profile = {username : "nomi"}
// const takenNames = ["admin", "guest", "bat"]
// const newUsername = "saraa"
// if (newUsername.length < 4) {
//     console.log("Нэр хэт богино");
// }
// else if (newUsername === profile.username) {
//     console.log("Нэр өөрчлөгдөөгүй");
// }
// else if (takenNames.includes(newUsername)) {
//     console.log("Энэ нэр ашиглагдаж байна");
// }
// else {
//     profile.username = newUsername;
// }
// console.log(profile);
