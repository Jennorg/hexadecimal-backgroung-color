const body = document.body
const colorText = document.getElementById('Color');
const generator = document.getElementById('Generator')

generator.addEventListener('click', () => {
    let color = '#';
    let randomNumber;

    for(let i=0; i<6; i++){
        randomNumber = Math.floor(Math.random()*16);
        
        switch(randomNumber){
            case 10:
                color += 'A';
                break;
            case 11: 
                color += 'B';
                break
            case 12:
                color += 'C';
                break
            case 13:
                color += 'D';
                break;
            case 14:
                color += 'E';
                break
            case 15:
                color += 'F';
                break;

            default:
                color += randomNumber;
        }
    }
    
    colorText.innerText = color;
    body.style.backgroundColor = color;
})
