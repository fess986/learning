"use strict";
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
const membership = Membership.Standard;
const reverceMembership = Membership[2];
console.log(membership);
console.log(reverceMembership);
var Sosials;
(function (Sosials) {
    Sosials["vk"] = "VKONTAKTE";
    Sosials["fs"] = "FACEBOOK";
    Sosials["insta"] = "INSTAGRAM";
})(Sosials || (Sosials = {}));
const social = Sosials.insta;
console.log(social);
//# sourceMappingURL=3_enum.js.map