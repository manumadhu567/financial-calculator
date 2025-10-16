// Tab switching
function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  document.querySelector(`button[onclick="showTab('${tabId}')"]`).classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// Basic Calculator Logic
let display = document.getElementById('display');

function append(value) {
  if (display.innerText === '0') display.innerText = '';
  display.innerText += value;
}

function clearDisplay() {
  display.innerText = '0';
}

function backspace() {
  display.innerText = display.innerText.slice(0, -1) || '0';
}

function calculate() {
  try {
    display.innerText = eval(display.innerText) || 0;
  } catch {
    display.innerText = 'Error';
  }
}

// Loan Calculator
function calculateLoan() {
  const amount = parseFloat(document.getElementById('loanAmount').value);
  const annualRate = parseFloat(document.getElementById('loanRate').value);
  const years = parseFloat(document.getElementById('loanTerm').value);
  const monthlyRate = annualRate / 100 / 12;
  const payments = years * 12;

  const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments));
  
  if (isFinite(monthlyPayment)) {
    document.getElementById('loanResult').innerHTML = 
      `<strong>Monthly Payment:</strong> ₹${monthlyPayment.toFixed(2)}`;
  } else {
    document.getElementById('loanResult').innerHTML = 'Please enter valid inputs.';
  }
}

// Interest Calculator
function calculateInterest() {
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const time = parseFloat(document.getElementById('time').value);

  const simpleInterest = (principal * rate * time) / 100;
  const totalAmount = principal + simpleInterest;

  document.getElementById('interestResult').innerHTML = `
    <strong>Simple Interest:</strong> ₹${simpleInterest.toFixed(2)}<br>
    <strong>Total Amount:</strong> ₹${totalAmount.toFixed(2)}
  `;
}
