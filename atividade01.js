function calcularAreaTrapezio(B, b, h) {
    return ((B + b) * h) / 2;
}

// Exemplo de uso
const baseMaior = 10; // Exemplo de valor para B
const baseMenor = 5;  // Exemplo de valor para b
const altura = 4;     // Exemplo de valor para h

const area = calcularAreaTrapezio(baseMaior, baseMenor, altura);
console.log(`A área do trapézio é: ${area}`);