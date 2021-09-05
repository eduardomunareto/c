var qht, vht, inss, tdes, sb, sl, resposta;
resposta = true;

do {
    qht = parseInt(window.prompt('Informe a quantidade de horas trabalhadas/mês: (135 a 180)', '00'));
    vht = parseInt(window.prompt('Informe o valor da hora trabalhada: (25 a 50)', '00'));
    inss = parseInt(window.prompt('Informe o percentual do desconto INSS: (5 a 15)', '00'));
    
    sb = qht * vht;
    tdes = sb * (inss/100);
    sl = sb - tdes; 

    document.write('<p><b>DEMONSTRATIVO PARA CÁCULO DO SALÁRIO LÍQUIDO </b>');
    document.write('<p>Informe a quantidade de horas trabalhadas/mês: (135 a 180) =><b>' + qht + '</b>')
    if (qht > 180) {
        document.write(' ... (<b>Valor máximo excedido!</b>'); 
    } 
    if (qht < 135) {
        document.write(' ... (<b>Valor mínimo inválido!</b>');
    }
    document.write('<p>Valor da hora trabalhada: (25 a 50) => <b>' + vht + '</b>');
    if (vht > 50) {
        document.write(' ... (<b>Valor máximo excedido!</b>');
    }
    if (vht < 25) {
        document.write(' ... (<b>Valor mínimo inválido!</b>');
    }
    document.write('<p>Percentual de desconto do INSS (5 a 15) => <b>' + inss + '</b>');
    if (inss > 15) {
        document.write(' ... (<b>Valor máximo excedido!</b>');
    }
    if (inss < 5) {
        document.write(' ... (<b>Valor mínimo inválido!</b>');
    }
    document.write('<p><b>Salário BRUTO = </b>' + sb);
    document.write('<p><b>Total de desconto INSS = </b>' + tdes);
    document.write('<p><b>Salário LÍQUIDO= </b>' + sl);

    if (sl > 10500) {
        document.write(' ...(<b>Salário elevado!</b> maior que 10.500');
    } else {
        if(sl > 6000) {
            document.write(' ...(<b>Salário Satisfatório!</b> maior que 6.000');
        } else {
            if (sl > 3000) {
                document.write(' ...(<b>Salário moderado!</b> maior que 3.000');
            } else {
                document.write(' ...(<b>Salário instatisfatório!</b> menor ou igual a 3.000');
            }
        }
    }
    documento.write('<p>================================================================');
    resposta = window.confirm('Deseja continuar? ');
}
while (resposta == true);