const inputDificultad = document.getElementById("inputD");
const jugar = document.getElementById("jugar");
inputDificultad.addEventListener('input', () => {
    if (inputDificultad.value === 'Dificultad 2') {
        jugar.href = './jugar2.html';
    } else if (inputDificultad.value === 'Dificultad 3') {
        jugar.href = './jugar3.html';
    } else {
        jugar.href = './jugar.html';
    }
});

