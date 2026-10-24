const chooseProduct = JSON.parse(localStorage.getItem("choosedProduct"))

const name = document.querySelector(".name")
name.innerText = "Tên phim: " + chooseProduct.name;

const description = document.querySelector(".description")
description.innerText = "Mô tả: " + chooseProduct.description

const image = document.querySelector(".image")
image.src = "./image" + chooseProduct.image

const actor = document.querySelector(".actor")
actor.innerText = "Diễn viên: " + chooseProduct.actor

const trailer = document.querySelector(".trailer")
trailer.src = "https://www.youtube.com/embed/" + chooseProduct.trailer

const type = document.querySelector(".type")
type.innerText = "Thể loại: " + chooseProduct.type