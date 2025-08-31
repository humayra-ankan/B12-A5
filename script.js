//  functionality for hearts 
const hearts =document.getElementsByClassName('fa-heart');
const heartCountNumber =document.getElementById('heart-count');
let count=0
for(const heart of hearts){
    heart.addEventListener('click',function(){
        count++;
        heartCountNumber.innerText=count;

    })
}

 const historySection= document.getElementById('call-history-parent')
// functionality for call button

const callButtons =document.getElementsByClassName('call-btn');
 for(const btn of callButtons){
    btn.addEventListener('click',function(){

                // coin-counts
        let coinCount= document.getElementById('coin-count');
        let coins=parseInt(coinCount.innerText);
        if (coins>=20){
            coins-=20;
            coinCount.innerText=coins;
        }
        else{
           alert('You have fewer coins to make this call');
           return;
        }


        // alert message
        const card = btn.parentElement.parentElement;
        const cardName= card.querySelector('.card-name').innerText;
        const cardNumber= card.querySelector('.card-number').innerText;

        
        alert(`📞 Calling ${cardName} at ${cardNumber}`);

        // call history section: history log adding

       
        const currentTime= new Date().toLocaleTimeString();
        const historyLog = document.createElement('div');
        historyLog.classList.add('pb-2', 'border-[1px]', 'border-gray-100', 'rounded-sm', 'p-2', 'flex', 'justify-between','items-center');
        historyLog.innerHTML= `
                 <div> <p class="font-medium">${cardName}</p>
                  <p>${cardNumber}</p> </div>
                  <p class="text-xs text-gray-400">${currentTime}</p>`
        historySection.appendChild(historyLog);
    });


    }

const clearButton= document.getElementById('clear-btn');
clearButton.addEventListener('click', function(){
    historySection.innerHTML='';
})

// functionality for copy button

const copyButtons = document.getElementsByClassName('copy-btn');
const copyCountNumber = document.getElementById('copy-count');

let copyCount = 0;

for (const copyButton of copyButtons){
   copyButton.addEventListener('click',function(){
    copyCount++;
    copyCountNumber.innerText= copyCount;


    const copyCard = copyButton.parentElement.parentElement;
    const copyCardNumber= copyCard.querySelector('.card-number').innerText;
    navigator.clipboard.writeText(copyCardNumber);
    
    
    alert(`The number has been copied: ${copyCardNumber}`);
   })
}