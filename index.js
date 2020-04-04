const box = document.getElementById('box')

const topleft = document.getElementById('top-left')
const topright = document.getElementById('top-right')
const bottomleft = document.getElementById('bottom-left')
const bottomright = document.getElementById('bottom-right')

const textArea = document.getElementById('code')

const botao = document.getElementById('botao');


function atualizarCodigo() {
    textArea.innerHTML= `border-top-left-radius: ${window.getComputedStyle(box).borderTopLeftRadius} ; \n`                                      

    textArea.innerHTML+= `border-top-right-radius: ${window.getComputedStyle(box).borderTopRightRadius} ; \n`                                        

    textArea.innerHTML+= `border-bottom-right-radius: ${window.getComputedStyle(box).borderBottomLeftRadius} ; \n`                                   

    textArea.innerHTML+= `border-bottom-left-radius: ${window.getComputedStyle(box).borderBottomRightRadius} ; \n`                           

    
}


topleft.addEventListener('keyup', event => {
    box.style.borderTopLeftRadius = `${topleft.value}px `;
    atualizarCodigo();
})
topright.addEventListener('keyup', event => {
    box.style.borderTopRightRadius = `${topright.value}px `;
    atualizarCodigo()
})
bottomleft.addEventListener('keyup', event => {
    box.style.borderBottomLeftRadius = `${bottomleft.value}px `;
    atualizarCodigo()
})
bottomright.addEventListener('keyup', event => {
    box.style.borderBottomRightRadius = `${bottomright.value}px `;
    atualizarCodigo()
})

botao.onclick = event =>{
   textArea.select();
   textArea.setSelectionRange(0 , 99999)
   
   document.execCommand('copy')

   alert('Texto copiado com sucesso!!! ')
}