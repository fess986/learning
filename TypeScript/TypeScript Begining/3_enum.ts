// минин не объясняет зачем нужен enum 
// по сути это константа с уже типизированными полями
//  enum с индексами 
enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard;  // получаем порядковый номер с нуля
const reverceMembership = Membership[2]  // получаем значение по индексу - как в массиве
console.log(membership);
console.log(reverceMembership);

// enum с ключами 
enum Sosials {
    'vk' = "VKONTAKTE",
    "fs" = "FACEBOOK",
    'insta' = "INSTAGRAM",
}

const social = Sosials.insta;  // получаем значение по ключу как в обычном объекте
console.log(social)