// count_life = document.querySelector(".count_score")
// count_record = document.querySelector(".count_record")
// computer = 11
// life = 20
 
// function game_over(){
//     if (life <= 0) {
//         alert("Конец")
//     }
// }
 
// function check_record(){
//     console.log()
//     if (count_record.innerHTML == "-"){
//         count_life.innerHTML = 20 - life
//     }
// }
 
// function ch() {
//     inp = document.querySelector(".in1").value
//     console.log("inp = ", inp)
//     console.log("comp=", computer)
//     if (inp > computer) {
//         life--
//         count_life.innerHTML = life
//         game_over()
 
//     }
//     else if (inp < computer){
//         life--
//         count_life.innerHTML = life
//         game_over()
//     }
//     else{
//         console.log("Угадал")
//         check_record()
//     }
// }

let max_life = 20;
let life = 20;  // счёт
let computer = Math.trunc(Math.random() * 100) + 1;   // число компьютера
console.log(computer);
 
let q = document.querySelector(".question")  // сохранили вопрос
let bt = document.querySelector(".prov");  // сохранили кнопку "проверить"
let in1_el = document.querySelector(".in1");  // сохранили input
let count_score_el = document.querySelector(".count_score");  // сохранили счёт
let count_record_el = document.querySelector(".count_record");  // сохранили рекорд
count_score_el.innerHTML = life;  // запись счёта в html
 
// increase - увеличивать -> инкимент(++)
// decrease - уменьшать -> декримент(--)
 
// function again(){
//     life = 20;
//     score_el.innerHTML = life
// }
 
function game_over(){
    if (life <= 0) {
        bt.disabled = true;
        count_score_el.innerHTML = "Game Over";
        count_score_el.style.color = "red";
    }
}
 
function check_value() {
    let user = in1_el.value;  // фиксируем value input'а
 
    if (user == computer) {
        q.innerHTML = user;  // вопрос меняем на ответ
        in1_el.value = "Угадал"
        alert("Чемпион");
        if (count_record_el.innerHTML == "-") {  // если рекорда прежде не было
            count_record_el.innerHTML = max_life - life + 1;
        }
        else {
            if (count_record_el.innerHTML < max_life - life){
                count_record_el.innerHTML = max_life - life + 1;
            }
        }
 
 
    }
    else if (user < computer) {
        life--;  // отняли жизнь в js
        count_score_el.innerHTML = life;  // запись счёта в html
        game_over();  // не проиграли ли
    }
    else {
        life--;
        count_score_el.innerHTML = life;  // запись счёта в html
        game_over();  // не проиграли ли
    }
}