const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")
//追加ボタンを押したときの処理
addButton.onclick = function () {
  const card = creatCard(inputElement.value)
  container.append(card)
  inputElement.value = ""
}
//共通の処理：テキストからカード作成
const creatCard = ffunction(text){
    const card = document.creatElementById("div")
    card.className = "card"

    
}

    

 //カードの枠
 //テキスト表示をする部分
 //削除ボタン作成
 //
   //カードを削除