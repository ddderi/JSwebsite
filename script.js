//

const btc = document.getElementById('btc')
const eth = document.getElementById('eth')
const bnb = document.getElementById('bnb')
const ada = document.getElementById('ada')
const body = document.getElementById('body')
const newdiv = document.createElement('div')
const wallet = document.getElementById('wallet')
const divv = document.createElement('div')
//let valuebtc = document.getElementById('valuebtc')


//Event listener for the 4 choices of crypto that we can display on the website.

btc.addEventListener('click', function(e){
    seek = event.target.textContent
    fetchData(fct)
})

eth.addEventListener('click', function(e){
    seek = event.target.textContent
    fetchData(fct)
})

bnb.addEventListener('click', function(e){
    seek = event.target.textContent.replace(' ', '')
    fetchData(fct)
})

ada.addEventListener('click', function(e){
    seek = event.target.textContent
    fetchData(fct)
})

//function to fetch the cryptocurrency I am looking for.

function fetchData(fct){
fetch(`https://coingecko.p.rapidapi.com/simple/price?ids=${seek}&vs_currencies=usd`
, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coingecko.p.rapidapi.com",
		"x-rapidapi-key": 'd84f0708afmsh5ca0134fa6807b8p1c4acejsn553f05ea523d'
	}
}
 ) 
.then(resp => resp.json())
.then(json => fct(json))
.catch(err => {
	console.log(err);
});
}

// function which treats the response/function fetchData and put the data in the DOM

let fct = function pushData(bitbit){
    let constt = document.createElement('p')
            constt.innerHTML = seek
            newdiv.append(constt)
    let bitcoinmess = Object.entries(bitbit)
    bitcoinmess.forEach(Tbit => {
        newO = Tbit[1]
        for (let property in newO){
                const ulparent = document.createElement('ul')
                let li = document.createElement('li')
                li.innerHTML = `${property}: ${newO[property]}`;
                ulparent.append(li)
                newdiv.append(ulparent)
                body.append(newdiv)
            }
            newdiv.classList = 'newbox'
            newdiv.id = 'newdiv'
            button = document.createElement('button')
            newdiv.append(button)
            button.innerHTML = 'Back to the main menu'
            button.classList = 'button'
            button.addEventListener('click', function(e){
            newdiv.innerHTML = '';
            newdiv.remove()
            })
            
    })
    
}

// wallet getting bigger

wallet.addEventListener('click', function(e){
    if(e.target.classList=='smallwallet'){
        wallet.append(divv)
        divv.classList = 'sousdiv'
        divv.style.zIndex = '3'
        divv.id = 'sousdiv'
        sousdiv = document.getElementById('sousdiv')
        input = document.createElement('input')
        divv.append(input)
        input.classList = 'input'
        input.type = 'number'
        
        // form select creation
    const slt = document.createElement('SELECT')
    slt.id = 'slt'
    divv.appendChild(slt)
    let coin = ['bitcoin', 'ethereum', 'binance coin', 'cardano']
    for (let i = 0;i<coin.length;i++){
        let option = document.createElement('option')
        option.value = coin[i]
        option.text = coin[i]
        slt.appendChild(option)
        }


    //button submit creation

    let btn = document.createElement('button')
    divv.appendChild(btn)
    btn.textContent = 'add to your wallet'
    
    // button back to the main creation

    btn2 = document.createElement('button')
    divv.appendChild(btn2)
    btn2.textContent = 'Back'
    btn2.classList = 'btnback'

    btn2.addEventListener('click', function(e){
        sousdiv.innerHTML = ''
        wallet.removeChild(sousdiv)
    })  

    
    
    
    
    // value wallet 

    let val = document.createElement('p')
    divv.appendChild(val)

    // event listener for calculation 
    
    btn.addEventListener('click', function(e){
        seek = slt.value
        fetchData(findbtcvalue)
        setTimeout(calcul, 500)
    })

    }else{
        console.log(null)}
    })
    
    // function calcul to put a timer BCS valuebtc undefined

    function calcul(){
        let val = document.createElement('p')
        divv.appendChild(val)
        let valuebtc = document.getElementById('valuebtc')
        console.log(valuebtc.textContent)
        val.innerText = 'value of your wallet: '+input.value * valuebtc.innerText
    }

    
    
    

// to declare the function to find the BTC value for SELECT

function findbtcvalue(bitbit){
    let constt = document.createElement('p')
            constt.innerHTML = seek
            newdiv.append(constt)
    let bitcoinmess = Object.entries(bitbit)
    bitcoinmess.forEach(Tbit => {
        newO = Tbit[1]
        for (let property in newO){
                const valuebtc = document.createElement('p')
                divv.appendChild(valuebtc)
                valuebtc.innerHTML = `${newO[property]}`;
                valuebtc.id = 'valuebtc'
                valuebtc.classList = 'hidden'
            }
            
        })}



//https://api.nomics.com/v1