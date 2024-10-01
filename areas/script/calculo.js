// Cálculo del Rectángulo
function calcularRectangulo() {
    let ancho = parseFloat(document.getElementById('rectWidth').value);
    let altura = parseFloat(document.getElementById('rectHeight').value);
    
    if (isNaN(ancho) || isNaN(altura)) {
        document.getElementById('rectResultado').innerText = 'Por favor, ingresa valores válidos.';
    } else {
        let perimetro = 2 * (ancho + altura);
        let area = ancho * altura;
        document.getElementById('rectResultado').innerText = `Perímetro: ${perimetro}, Área: ${area}`;
    }
}

// Cálculo del Triángulo
function calcularTriangulo() {
    let base = parseFloat(document.getElementById('triBase').value);
    let altura = parseFloat(document.getElementById('triAltura').value);
    let lado1 = parseFloat(document.getElementById('triLado1').value);
    let lado2 = parseFloat(document.getElementById('triLado2').value);
    
    if (isNaN(base) || isNaN(altura) || isNaN(lado1) || isNaN(lado2)) {
        document.getElementById('triResultado').innerText = 'Por favor, ingresa valores válidos.';
    } else {
        let perimetro = base + lado1 + lado2;
        let area = (base * altura) / 2;
        document.getElementById('triResultado').innerText = `Perímetro: ${perimetro}, Área: ${area}`;
    }
}

// Cálculo del Círculo
function calcularCirculo() {
    let radio = parseFloat(document.getElementById('radio').value);
    
    if (isNaN(radio)) {
        document.getElementById('circResultado').innerText = 'Por favor, ingresa un valor válido.';
    } else {
        let perimetro = 2 * Math.PI * radio;
        let area = Math.PI * Math.pow(radio, 2);
        document.getElementById('circResultado').innerText = `Perímetro: ${perimetro.toFixed(2)}, Área: ${area.toFixed(2)}`;
    }
}
