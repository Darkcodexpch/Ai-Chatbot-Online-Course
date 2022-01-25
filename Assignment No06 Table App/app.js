function Check() {
    let inputNumb = document.getElementById("numb").value;
    let inputLenght = document.getElementById("lenght").value;
    for (let i = 0; i < inputLenght; i++) {
        let inputBase = i + 1;
        document.write(`${inputNumb} X ${inputBase} = ${inputBase * inputNumb} </br>`)

    }
}