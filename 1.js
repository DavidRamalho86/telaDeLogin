function calcularImposto() {
    var valorCompra = parseFloat(document.getElementById("valorCompra").value);
    var desconto = 0;

    if (valorCompra >= 3000) {
        desconto = 0.1;
    } else if (valorCompra >= 2501 && valorCompra <= 2999) {
        desconto = 0.05;
    }

    var valorFinal = valorCompra - (valorCompra * desconto);

    document.getElementById("resultado").textContent = `O valor da compra é R$${valorCompra.toFixed(2)}. O desconto aplicado é de ${desconto * 100}%. O valor final a ser pago é R$${valorFinal.toFixed(2)}.`;
}

