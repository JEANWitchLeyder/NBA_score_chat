const questionButtons = document.querySelectorAll('.question-title');

questionButtons.forEach(function(questionButton) {
    const answerId = questionButton.getAttribute('aria-controls');
    const answer = document.getElementById(answerId);
    const questionIcon = questionButton.querySelector('.question-icon');

    questionButton.addEventListener('click', function() {
        const isOpen = questionButton.getAttribute('aria-expanded') === 'true';

        const nextIsOpen = !isOpen;

        questionButton.setAttribute('aria-expanded', String(nextIsOpen));
        answer.hidden = !nextIsOpen;

        questionIcon.textContent = nextIsOpen ? '−' : '+';
    });
});