const loginArea = document.querySelector('#login-area');
const loginButton = document.querySelector('.submit-btn');
const transactionArea = document.querySelector('#transaction-area');
const depositButton = document.querySelector('#deposit-btn');
const withdrawButton = document.querySelector('#withdraw-btn');
const currentDeposit = document.querySelector('#current-deposit');
const currentBalance = document.querySelector('#current-balance');
const currentWithdraw = document.querySelector('#current-withdraw');





loginButton.addEventListener('click', ()=> {
    loginArea.style.display="none";
    transactionArea.classList.remove('d-none');
})


depositButton.addEventListener('click', ()=> {

    let depositAmount = document.querySelector('#deposit-amount').value;
    depositAmount = parseFloat(depositAmount);

    currentDepositAmount = currentDeposit.innerText;
    currentDepositAmount = parseFloat(currentDepositAmount);
    const totalDeposit = currentDepositAmount+depositAmount;
    currentDeposit.innerText=totalDeposit;
    document.querySelector('#deposit-amount').value="";


    currentBalanceAmount = currentBalance.innerText;
    currentBalanceAmount = parseFloat(currentBalanceAmount);
    const totalBalance = totalDeposit+currentBalanceAmount;
    currentBalance.innerText=totalBalance;
})

withdrawButton.addEventListener('click', ()=> {
    let withdrawAmount = document.querySelector('#withdraw-amount').value;
    withdrawAmount = parseFloat(withdrawAmount);

    currentWithdrawAmount = currentWithdraw.innerText;
    currentWithdrawAmount = parseFloat(currentWithdrawAmount);
    const totalWithdraw = currentWithdrawAmount+withdrawAmount;
    currentWithdraw.innerText=totalWithdraw;
    document.querySelector('#withdraw-amount').value="";

    currentBalanceAmount = currentBalance.innerText;
    currentBalanceAmount = parseFloat(currentBalanceAmount);
    const totalBalance = currentBalanceAmount-totalWithdraw;
    currentBalance.innerText=totalBalance;
})
