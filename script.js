function inflationCalculator(){
    let inflationRate = document.querySelector('#inflationRate') ;  
    let money = document.querySelector('#money') ;

    inflationRate = parseFloat(inflationRate.value); 
    money = parseFloat(money.value) ; 

    let years = document.querySelector('#years').value ; 
    years = parseFloat(years) ;

    // Formula for calculating inflation.
    let worth = money + (money * (inflationRate / 100)) ;

    console.log(worth) ;

    for (let i = 1; i < years; i++){
        worth += worth* (inflationRate / 100) ;
    } 

    console.log(worth);
    worth = worth.toFixed(2) ;

    let newElement = document.createElement('div') ;
    newElement.className = 'new-value' ;
    newElement.innerText = `Današnjih ${money}€ vredi isto kao ${worth}€ za ${years} godina.` ;
    document.querySelector('.container').appendChild(newElement) ; 

}






















































