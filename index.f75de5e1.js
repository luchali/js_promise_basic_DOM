"use strict";
// write your code here
const logo = document.querySelector(".logo");
const promise1 = new Promise((resolve)=>{
    logo.addEventListener("click", ()=>{
        resolve("Promise was resolved!");
    });
});
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(reject, 3000);
});
function onSuccess() {
    const successMessage = document.createElement("div");
    successMessage.className = "message";
    successMessage.textContent = "Promise was resolved!";
    document.body.append(successMessage);
}
function onError() {
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("message", "error-message");
    errorMessage.textContent = "Promise was rejected!";
    document.body.append(errorMessage);
}
promise1.then(onSuccess).catch(onError);
promise2.then(onSuccess).catch(onError);

//# sourceMappingURL=index.f75de5e1.js.map
