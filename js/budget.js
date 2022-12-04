function getFieldValue(elementId) {
    const fieldValueElement = document.getElementById(elementId);
    const fieldValueString = fieldValueElement.value;
    const value = parseFloat(fieldValueString);
    fieldValueElement.value = ''
    return value;
}
function setElementValue(elementId, value) {
    const getElementValue = document.getElementById(elementId);
    getElementValue.innerText = value;
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const playerValue = getFieldValue('player-field');
    const orderListElement = document.getElementById('order-list');
    const list = orderListElement.querySelectorAll('li')
    const playerExpence = playerValue * list.length;
    setElementValue('player-expenses', playerExpence);
})

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const managerExpence = getFieldValue('manager-field');
    const coachExpence = getFieldValue('coach-field');

    const playerExpenceElement = document.getElementById('player-expenses');
    const playerExpenceString = playerExpenceElement.innerText;
    const playerExpence = parseFloat(playerExpenceString);

    const totalExpence = managerExpence + coachExpence + playerExpence;
    setElementValue('total-expences', totalExpence)
})