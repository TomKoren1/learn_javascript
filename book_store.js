


const numbers=[1,2,3]
const sum = numbers.reduce((sum,n) => (sum+n),0)
let mili=5000
const wait = (mili) => new Promise((resolve) => setTimeout(resolve,mili));

const getUser = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
        id === 1 ? resolve({ id: 1, username: "john_doe" }) : reject("User not found");
    }, 1000);
});

const getPosts = (username) => new Promise((resolve) => {
    setTimeout(() => resolve([`Post 1 by ${username}`, `Post 2 by ${username}`]), 1000);
});










const getUser2 = (userID) => new Promise((resolve,reject) => {
    setTimeout( () =>{
    userID === 1 ? resolve({user:"tom",id:1}) : reject("no user id with that number")
    },1000);
});
const getPosts2 = (userName) => new Promise((resolve) => {
    setTimeout( () => {
        resolve([`post 1 from ${userName}`,`post 2 from ${userName}`]);
    },1000);

})

//easy:

const say_hello = (name) => {console.log(`hello ${name}`)}

const promise_sucsess = new Promise((resolve) => {resolve("sucsess")});

const promise10 = new Promise((resolve,reject) => {resolve(10)});

// Don't change this function
const getData = () => Promise.resolve("Data received");

// Write your async function here
const start = async () => {
    const r=await getData();
    console.log(r);
};
start();