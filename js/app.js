function generatePin(){
    const pin = Math.round(Math.random()*10000);
    return pin;
}

function getPin(){
    const pin = generatePin();
    const pinStr = pin + '';
    if(pinStr.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

/* add event listener with generate pin button */
document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();

    /*show/display pin*/
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;

    /*additional feature: when click on generate pin btn, typedCharacterField is cleared*/
    const typedCharacterField = document.getElementById('typed-character-field');
    typedCharacterField.value = '';

    const matchedNotification = document.getElementById('matched');
    matchedNotification.style.display = 'none';
    const notMatchNotification = document.getElementById('not-match');
    notMatchNotification.style.display = 'none';
})

/* add event listener with full calculator button */
document.getElementById('full-calculator').addEventListener('click',function(event){
    const character = event.target.innerText;
    const typedCharacterField = document.getElementById('typed-character-field');
    const previousTypedCharacter = typedCharacterField.value;
    const newTypedCharacter = previousTypedCharacter + character;

    if(isNaN(character)){
        if(character === 'C'){
            typedCharacterField.value ='';
        }
        else if(character === '<'){
            const digits = previousTypedCharacter.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedCharacterField.value = remainingDigits;
        }
    }

    else{
        typedCharacterField.value = newTypedCharacter;
    }
 
})

document.getElementById('btn-submit').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const typedCharacterField = document.getElementById('typed-character-field');
    
    const matchedNotification = document.getElementById('matched');
    const notMatchNotification = document.getElementById('not-match');

    if(displayPinField.value === typedCharacterField.value){
        matchedNotification.style.display = 'block';
        notMatchNotification.style.display = 'none';
    }
    else{
        matchedNotification.style.display = 'none';
        notMatchNotification.style.display = 'block';    
    }
})

