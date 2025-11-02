const inputBox = document.createElement('div');
    inputBox.className = 'input';

    const questionInput = document.createElement('input');
    questionInput.placeholder = 'Введіть своє запитання...';

    const askButton = document.createElement('button');
    askButton.textContent = 'Запитати';

    const ball = document.createElement('div');
    ball.className = 'ball';

    const answer = document.createElement('div');
    answer.className = 'answer';
    answer.textContent = '';

    const answers = [
      "Так", "Ні", "Можливо", "Без сумніву", "Спробуй пізніше",
      "Сумніваюся", "Напевно так", "Не зараз", "Все в твоїх руках",
      "Ймовірно ні", "Звісно!", "Май терпіння", "Так, але не одразу"
    ];
    document.body.appendChild(inputBox);
    inputBox.appendChild(questionInput);
    inputBox.appendChild(askButton);
    ball.appendChild(answer);
    document.body.appendChild(ball);

    askButton.addEventListener('click', () => {
    const question = questionInput.value.trim();
	if (question === "") {
alert("Введіть запитання!");
	} else {
answer.textContent = answers[Math.floor(Math.random() * answers.length)];
	}
	});
