
if (currentType=="Laptop") {
document.getElementById("name").innerText = currentProject.name;
document.getElementById("oldPrice").innerText = currentProject.oldPrice;
document.getElementById("price").innerText = currentProject.price;
document.getElementById("discount").innerText = currentProject.discount;
document.getElementById("processor").innerText = currentProject.description.Processor;
document.getElementById("graphicCard").innerText = currentProject.description.Graphics;
document.getElementById("memory").innerText = currentProject.description.Memory;
document.getElementById("ram").innerText = currentProject.description.Storage;

document.getElementById("image").src = currentProject.imageSrc;}

//pc
else{
document.getElementById("name").innerText = pcCurrentProject.name;
document.getElementById("oldPrice").innerText = pcCurrentProject.oldPrice;
document.getElementById("price").innerText = pcCurrentProject.price;
document.getElementById("discount").innerText = pcCurrentProject.discount;
document.getElementById("processor").innerText = pcCurrentProject.description.Processor;
document.getElementById("graphicCard").innerText = pcCurrentProject.description.Graphics;
document.getElementById("memory").innerText = pcCurrentProject.description.Memory;
document.getElementById("ram").innerText = pcCurrentProject.description.Storage;

document.getElementById("image").src = pcCurrentProject.imageSrc;
}