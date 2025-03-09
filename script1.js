const quiz = [
    { question: "What is animal cruelty?", options: [
        "Hurting or neglecting animals",
        "Training animals",
        "Feeding stray animals",
        "Keeping pets at home"
    ], answer: 0 },
    { question: "Which of the following is NOT a cause of animal cruelty?", options: [
        "Lack of education",
        "Strict animal protection laws",
        "Using animals for money",
        "Neglecting animals"
    ], answer: 1 },
    { question: "How can we help stop animal cruelty?", options: [
        "Ignore stray animals",
        "Report cases of abuse",
        "Support animal testing",
        "Avoid adopting pets"
    ], answer: 1 },
    { question: "Which of these is an example of animal neglect?", options: [
        "Not feeding pets properly",
        "Taking pets for walks",
        "Adopting pets",
        "Playing with animals"
    ], answer: 0 },
    { question: "How can strong laws protect animals?", options: [
        "Protect them from harm",
        "Make cruelty legal",
        "Encourage mistreatment",
        "Have no effect"
    ], answer: 0 }
];

let currentQ = 0;
let score = 0;

function LoadQ() {
    document.getElementById("result").innerText = "";
    document.getElementById("question").innerText = quiz[currentQ].question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    for (let index = 0; index < quiz[currentQ].options.length; index++) {
        const button = document.createElement("button");
        button.innerText = quiz[currentQ].options[index];
        button.onclick = function() { checking(index, button); };
        optionsContainer.appendChild(button);
        optionsContainer.appendChild(document.createElement("br")); 
    }
}

function checking(selected, buttonClicked) {
    let resultText = document.getElementById("result");

    if (selected === quiz[currentQ].answer) {
        score++;
        resultText.innerText = "That's right!";
        resultText.style.color = "green";
        buttonClicked.style.backgroundColor = "green";
        buttonClicked.style.color = "white";
    } else {
        resultText.innerText = "Oh no, better luck next time";
        resultText.style.color = "red";
        buttonClicked.style.backgroundColor = "red";
        buttonClicked.style.color = "white";
    }

    let optionButtons = document.getElementById("options").getElementsByTagName("button");
    for (let btn of optionButtons) {
        btn.disabled = true;
    }
}

function nextQ() {
    if (currentQ < quiz.length - 1) {
        currentQ++;
        LoadQ();
    } else {
        document.querySelector(".quiz-container").innerHTML = `<h2>Your Score: ${score}/${quiz.length}</h2><p>Thank you for answering!</p>`;
    }
}

LoadQ();
