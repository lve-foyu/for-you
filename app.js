
function checkAnswer() {
    const answer = document.getElementById('answer').value.toLowerCase().trim();
    const correctAnswers = ['Génesis', 'génesis', 'genesis', 'Genesis'];
    const errorMessage = document.getElementById('error-message');

    if (correctAnswers.includes(answer)) {
        window.location.href = 'pages/principal.html';
    } else {
        errorMessage.style.display = 'block';
        document.getElementById('answer').value = '';
    }
}
