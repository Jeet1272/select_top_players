function getPlayersName(elementId) {
    const playerNameElement = document.getElementById(elementId);
    const playerName = playerNameElement.innerText;
    return playerName
}
function setNameOnSelection(elementId, value) {
    const selectionParent = document.getElementById(elementId);
    const list = selectionParent.querySelectorAll('li');
    if (list.length >= 5) {
        alert('Players would not be more then 5')
        return
    }
    const li = document.createElement('li')
    li.innerText = value;
    selectionParent.appendChild(li)
}
function goButtonDisabled(elementId) {
    const button = document.getElementById(elementId);
    button.disabled = true;
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
}

document.getElementById('btn-harry').addEventListener('click', function () {
    const playerName = getPlayersName('harry-name');
    setNameOnSelection('order-list', playerName);
    goButtonDisabled('btn-harry');

})
document.getElementById('btn-messi').addEventListener('click', function () {
    const playerName = getPlayersName('messi-name');
    setNameOnSelection('order-list', playerName);
    goButtonDisabled('btn-messi');

})
document.getElementById('btn-neymar').addEventListener('click', function () {
    const playerName = getPlayersName('neymar-name');
    setNameOnSelection('order-list', playerName);
    goButtonDisabled('btn-neymar');

})
document.getElementById('btn-ronaldo').addEventListener('click', function () {
    const playerName = getPlayersName('ronaldo-name');
    setNameOnSelection('order-list', playerName);
    goButtonDisabled('btn-ronaldo');

})
document.getElementById('btn-di-maria').addEventListener('click', function () {
    const playerName = getPlayersName('di-maria-name');
    setNameOnSelection('order-list', playerName);
    goButtonDisabled('btn-di-maria');

})
document.getElementById('btn-sterling').addEventListener('click', function () {
    const playerName = getPlayersName('sterling-name');
    setNameOnSelection('order-list', playerName);
    goButtonDisabled('btn-sterling');

})
document.getElementById('btn-mbapee').addEventListener('click', function () {
    const playerName = getPlayersName('mbapee-name');
    setNameOnSelection('order-list', playerName);
    goButtonDisabled('btn-mbapee');

})
document.getElementById('btn-aguero').addEventListener('click', function () {
    const playerName = getPlayersName('aguero-name');
    setNameOnSelection('order-list', playerName);
    goButtonDisabled('btn-aguero');

})
document.getElementById('btn-salah').addEventListener('click', function () {
    const playerName = getPlayersName('salah-name');
    setNameOnSelection('order-list', playerName);
    goButtonDisabled('btn-salah');

})
