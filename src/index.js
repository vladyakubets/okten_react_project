"use strict";
exports.__esModule = true;
var mission = {
    mission_name: 'falcon9',
    launch_date_local: "28.90",
    launch_site: { site_name_long: "hello" },
    links: { article_link: 'hello', video_link: "string" }
};
console.log(mission);
// 2) протипизировать функции:
var user = {
    name: "Max",
    age: 18,
    gender: 'male'
};
console.log(user);
function sum(a, b) {
    return a + b;
}
function showSum(a, b) {
    console.log(a + b);
}
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);
console.log(user);
