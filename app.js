const colorText = document.getElementById('Color');
const generator = document.getElementById('Generator')

generator.addEventListener('click', () => {
    let numbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','F'];
    let color = '#';
    let randomNumber;

    for(let i=0; i<6; i++){
        randomNumber = Math.floor(Math.random()*15);
        color += numbers[randomNumber]        
    }
    
    colorText.innerText = color;
    document.body.style.backgroundColor = color;
})
