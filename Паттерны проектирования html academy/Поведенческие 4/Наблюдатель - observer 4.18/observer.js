const config = { attributes: true, childList : true, subtree : true } // определяем за какими изменениями следим
const targetNode = document.body; // за чем следим


const callback = function(nodesArray) {
  nodesArray.forEach(element => {
    element.target.querySelector(".ass").remove();  // удаляем элементы с определенным классом, если что то произошло
  });
}

const observer = new MutationObserver(callback); // позволяет запускать функцию - callback если с объектом  observer - что то произойдет 
observer.observe(targetNode, config) // запускаем отслеживание