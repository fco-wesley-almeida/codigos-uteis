const cpfGenerator = () => {
    let digitos = `${Math.random()}`.substring(2,11).split('')
    const primeiroDigitoVerificador = digitos => {
        soma = 0;
        for(i=10,j=0; i>=2; i--) {
            soma += i * digitos[j++] || 0;   
        }
        resto = soma * 10 % 11;
        if (resto >= 10) resto = 0;
        return resto;
    }
    const segundoDigitoVerificador = digitos => {
        soma = 0;
        for(i=11,j=0; i >= 2; i--) {
            soma += i * digitos[j++];   
        }
        resto = (soma * 10) % 11;    
        if (resto >= 10) resto = 0;    
        return resto;
    }
    digitos.push(primeiroDigitoVerificador(digitos));
    digitos.push(segundoDigitoVerificador(digitos));
    const cpf = digitos.join('');
    return cpf.substring(0,3) + '.' + cpf.substring(3,6) + '.' + cpf.substring(6,9) + '-' + cpf.substring(9,11);
}
