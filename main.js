"use strict";
(function(){
    let selected = [];
    const items = document.querySelectorAll('.js-item');
    const container1 = document.querySelector('.js-container1');
    const container2 = document.querySelector('.js-container2');

    function handleClick(event) {
        if (event.target.classList.contains("js-item")) {
            event.target.classList.toggle("active");
            const found = selected.find((item) => Number(item.dataset.id) === Number(event.target.dataset.id));
            if (found) {
                selected = selected.filter((item) => Number(item.dataset.id) !== Number(event.target.dataset.id));
            } else {
                selected.push(event.target);
            }            
        }
    }

    container1.addEventListener("click", handleClick);
    container2.addEventListener("click", handleClick);

    const left = document.querySelector('.js-left');
    const right = document.querySelector('.js-right'); 
    const leftAll = document.querySelector('.js-left-all');
    const rightAll = document.querySelector('.js-right-all');

    function handleMove(event) {
        const target = event.target;
        if (target.classList.contains("js-right")) {
            selected.forEach((item) => {
                if (item.parentElement === container1) {
                container2.appendChild(container1.removeChild(item));
                item.classList.remove("active");
                }
            });
            selected = [];
            
        } else if (target.classList.contains("js-left-all")) {
            Array.from(container2.querySelectorAll(".js-item")).forEach((item) => {
                container1.appendChild(container2.removeChild(item));
                item.classList.remove("active");
            });
            selected = [];
        } else if (target.classList.contains("js-right-all")) {
            Array.from(container1.querySelectorAll(".js-item")).forEach((item) => {
                container2.appendChild(container1.removeChild(item));
                item.classList.remove("active");
            });
            selected = [];
        } else if (target.classList.contains("js-left")) {
            selected.forEach((item) => {
                if (item.parentElement === container2) {
                    container1.appendChild(container2.removeChild(item));
                    item.classList.remove("active");
                }                
            });
            selected = [];
        }
    }
    
    left.addEventListener("click", handleMove);
    right.addEventListener("click", handleMove);
    leftAll.addEventListener("click", handleMove);
    rightAll.addEventListener("click", handleMove);   
})()