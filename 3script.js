let fuck = ["fuck", "shit", "bitch", "stupid", "хуй", "пизда", "ебать", "долбоеб",]



document.getElementById("knopka_alert").addEventListener("click", alerts)   // кнопка alert ов
function alerts() {
    alert(fuck)
}



document.getElementById("dobavitMat").addEventListener("click", dobavit)     //кнопка добавить мат
function dobavit() {
    let x = prompt("Напишите новый мат")
    fuck.push(x)
}


document.getElementById("DelMat").addEventListener("click", udalit)     //кнопка удалить мат
function udalit() {
    let q = prompt("имя удаляемого мата")
    let w = fuck.indexOf(q)                     // ищет по значению индекс елемента
    fuck.splice([w], 1)                           // удаляет элемент по найденному выше индексу

}



document.getElementById("vuhod").addEventListener("click", funcvuhod)      // vuhod всех на екран html 
function funcvuhod() {                                                      //+ обновление массива
    const vuh = document.createElement("p")
    setInterval(time, 1000)
    time()
    function time() {
        vuh.innerHTML = fuck
        document.getElementById("vuhod").appendChild(vuh)
    }
}









// alert(fuck[fuck.length - 1])
// alert(fuck.at(-2))
// alert(fuck.pop("shit"))
// alert(fuck)