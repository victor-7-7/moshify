
// JS-движок составляет список всех элементов класса collapsible на веб-странице
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) =>
  // На каждый элемент класса collapsible (item) движок вешает клик-коллбэк
  item.addEventListener("click", function () {
    // У текущего элемента движок смотрит список класс-атрибутов. 
    // Если в списке нет атрибута collapsible--expanded, то движок 
    // добавляет его, а если есть, то - удаляет.  
    this.classList.toggle("collapsible--expanded");
  })
);




