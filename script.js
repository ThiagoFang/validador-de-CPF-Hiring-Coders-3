const validateButton = document.querySelector('.btn-info');
const inputCPF = document.getElementById('cpf_input');

const successArea =  document.getElementById('success');
const errorArea = document.getElementById('error');

const validateCPF = (cpf) => {
    if( cpf.length != 11 ) {
        return false
    } else {
        let numbers = cpf.substring(0, 9);
        let digit = cpf.substring(9);

        let sum = 0;
        for(let i = 10; i > 1; i--) {
            sum +=  numbers.charAt(10 - i) * i;
        };
        let result = (sum % 11) < 2 ? 0 : 11 - (sum % 11);

        //Validation First Digit
        if(result != digit.charAt(0)) {
            return false
        };
        //Validating Second Digit
        sum = 0;
        numbers = cpf.substring(0, 10);
        for(let k = 11; k > 1; k--) {
            sum += numbers.charAt(11 - k) * k;
        };
        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        
        if(result != digit.charAt(1)) {
            return false;
        };

        return true;
    }
}

const changeStatusMenssage = (status) => {
    successArea.style.display = 'none';
    errorArea.style.display = 'none';
    status ? successArea.style.display = 'block' : errorArea.style.display = 'block';
}

const validate = () => {
    const cpf = inputCPF.value;
    const CpfStatus = validateCPF(cpf);
    changeStatusMenssage(CpfStatus)
};

validateButton.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
});