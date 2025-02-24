let btn = document.querySelectorAll("button");
console.log(btn);
let priceA = document.querySelector("#Aprice");
let priceG = document.querySelector("#Gprice");
let priceZ = document.querySelector("#Zprice");

function autoUpdate() {
interval =  setInterval(()=>{
    
        priceA.innerText = `${(Math.random()*10000).toFixed(2)} $`;
        priceG.innerText = `${(Math.random()*10000).toFixed(2)} $`;
        priceZ.innerText = `${(Math.random()*10000).toFixed(2)} $`;
}
,2000)
}

function stopAutoUpdate() {
    clearInterval(interval);
}
