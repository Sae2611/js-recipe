const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

const quiz = {
    text: "この子の犬種は何でしょう？",
    image:"Dog.jpg"
    choices:[
        {
            text:"トイプードル",
            feedback:"残念！トイプードルではありません！",
        },
        {
            text:"ポメラニアン",
            feedback:"正解！ポメラニアンです！可愛いね！",
        },
        {
            text:"チワワ",
            feedback:"残念！チワワではありません！"
        }
    ]
}

const reloadQuiz = function() {
    quizText.textContent = "Q. " + quiz.text
    quizImage.src = "./images/" + quiz.image
    choice1.textContent = quiz.choices[0].text
    choice2.textContent = quiz.choices[1].text
    choice3.textContent = quiz.choices[2].text
}

const choose = function(choiceNumber) {
    // フィードバックを表示
    feedback.textContent = quiz.choices[choiceNumber].feedback
  }
  
  choice1.onclick = function() {
    // 0 番目の選択肢を選択
    choose(0)
  }
  choice2.onclick = function() {
    // 1 番目の選択肢を選択
    choose(1)
  }
  choice3.onclick = function() {
    // 2 番目の選択肢を選択
    choose(2)
  }
  
  // reloadQuiz関数 を実行して、クイズを画面に表示する
  reloadQuiz()
