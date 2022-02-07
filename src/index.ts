import {IMission} from "../interfaces/mission.interface";
import {IUser} from "../interfaces/user.interface";

const mission: IMission = {
    mission_name: 'falcon9',
    launch_date_local: "28.90",
    launch_site: {site_name_long: "hello"},
    links: {article_link: 'hello',video_link: "string"}
}
console.log(mission);


// 2) протипизировать функции:

    const user: IUser = {
        name:"Max",
        age:18,
        gender:'male'
    }
console.log(user);

function sum(a:number,b:number): number{
    return a+b
}
function showSum(a:number,b:number): void{
    console.log(a + b);
}

function incAge(someUser: IUser, inc:number):IUser{
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)
console.log(user)