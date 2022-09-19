function getElementByInputValue(inputElementID) {
    const input = document.getElementById(inputElementID);
    const inputElementString = input.value;
    const inputElement = parseFloat(inputElementString)
    input.value = '';
    return inputElement;
}

function getElementBytextValue(textElementID) {
    const text = document.getElementById(textElementID);
    const textElementString = text.innerText;
    const textElement = parseFloat(textElementString)
    text.value = '';
    return textElement;
}

function setElementById(elementId, newValue) {
    const textElementValue = document.getElementById(elementId);
    textElementValue.innerText = newValue;
}


document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getElementByInputValue('deposit-field');
    console.log(newDepositAmount);
    if (isNaN(newDepositAmount)) {
        alert('please input valid')
        return
    }
    const previousDepositAmount =getElementBytextValue('deposit-total')
    const newDepositTotal = newDepositAmount + previousDepositAmount;
    setElementById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getElementBytextValue('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositTotal;
    setElementById('balance-total',newBalanceTotal);
})
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getElementByInputValue('withdraw-field');
    const previousWithdrawAmount = getElementBytextValue('withdraw-total');
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
    setElementById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getElementBytextValue('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    setElementById('balance-total', newBalanceTotal);

})