function validaCpf(cpf){
    if(cpf.length == 11 && cpf != '11111111111'
    && cpf != '22222222222'
    && cpf != '33333333333'
    && cpf != '44444444444'
    && cpf != '55555555555'
    && cpf != '66666666666'
    && cpf != '77777777777'
    && cpf != '88888888888'
    && cpf != '99999999999'){ //verifica se o cpf inserido pelo usuário tem 11 digitos e não são números iguais

        let digitos = cpf.substring(9); //digitos verificadores inseridos pelo usuario
        let soma = 0; //variavel aux
        let digitoverificador; //digitos verificadores descobertos pelo algoritmo
        
        //Descobrindo primeiro digito verificador
        for(let i = 10; i >= 2; i--){
            soma+= cpf.charAt(10-i) * i;
        }
        if ((11 - (soma % 11)) >= 10) digitoverificador = ""+0;
        else digitoverificador = ""+(11 - (soma % 11));
        
        //verificando se está correto o primeiro digito
        if(!(digitoverificador === digitos.charAt(0))) return false;

        soma = 0; //zerando variavel aux

        //Descobrindo segundo digito verificador
        for(let i = 11; i >= 2; i--){
            soma+= cpf.charAt(11-i) * i;
        }
        if ((11 - (soma % 11)) >= 10) digitoverificador += ""+0;
        else digitoverificador += ""+(11 - (soma % 11));

        //Validando segundo digito
        if(digitoverificador === digitos) return true;
    }
    return false;
}

function validacao(){
    document.getElementById('success').style.display = 'none';
    document.getElementById('fail').style.display = 'none';

    let cpf = document.getElementById('input').value;

    if(validaCpf(cpf)){
        document.getElementById('success').style.display = 'flex';
    }else{
        document.getElementById('fail').style.display = 'flex';
    }
}