var select = document.querySelector('select');
//aqui estou definindo que a variavel select vai ser o meu select do HTML
var para = document.querySelector('p');
//aqui estou definindo que a variavel para vai ser meu paragrafo vazio
select.addEventListener('change', setWeather);
//aqui eu acabo de adicionar um envento no meu select e tambem dei a funcao que o evento vai realizar



function setWeather(){
    //criando a funcao do meu select

    var choice = select.value;
    //criando uma variavel que vai armazenar o value definido no HTML

    if(choice === 'sunny'){
        para.textContent = 'it is nice and sunny outside today. Wear shorts! Go to beach, or the park, and get an ice cream';
        //textContent é o que faz eu mudar o conteúdo do meu texto
    } else if(choice ==='rainy'){
        //é sempre necessário adicionar uma condição no else if, ou ocorrerá um erro
        para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don t stay out for too long';
    }else if(choice === 'snowing') {
        para.textContent = 'The snow is coming down - it is freezing! Best to stay in whit a cup of hot chocolate, or go build a snowman';
    }else if(choice ==='overcast'){
        para.textContent = 'It isnt raining, but the sky is grey and gloomy; it coulf turn any minute, so take a rain coat just in case';
    }else{
        para.textContent = '';
    }
}