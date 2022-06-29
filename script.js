const items=document.querySelectorAll('.item');
items.forEach(item=>{                        /*чтобы получить доступ к каждому элементу (к каждой картинки)
     используем метод forEach и создаем функцию подслушку */
  
        /*подслушку ставим на item ( на элемент) что при наведении мыши , картинка расширяеться, а как она дорлжна расширяться , 
   для этого добавляем класс на item (selected)
   и туда прописываем flex :4  чтоб она расширялась.*/
   
    item.addEventListener('mouseover', () => { 
    removeFocus();
//     Зачастую прежде чем добавить класс мы его удаляем
    /*функцию removeFocus прописываем чтоб вернуть картинку на место то есть отключить, 
    ее ставим выше item.classList.add('selected') чтоб сначала отключалось а потом подслушку*/
    item.classList.add('selected');                                       
   

    })
    /*затем прописываем саму функцию отключить каждый элемент так же почти как и добавляли класс selected*/
           removeFocus=()=>{
            items.forEach(item=>{
            item.classList.remove('selected');
        })
            
        }
    
}) 