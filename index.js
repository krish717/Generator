const input = document.getElementById("noofwords");
const container = document.querySelector(".container");


const generateLetter = (n) => {
    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text="";

    for(let i=0; i<n; i++){
        const random = (Math.random()*(letter.length-1)).toFixed(0);
        text+=letter[random];
    }

    return text;
}
// console.log(generateLetter());

let nof;
const getData = () => {
   nof =  Number(input.value);
//    console.log(nof);

   const para = document.createElement("p");

   let data="";
   for(let i=0; i<nof; i++){
    const randomNumber = (Math.random()*15).toFixed(0);
    data+=generateLetter(randomNumber);
    data+=" ";
}
   para.innerText = data;
   para.setAttribute("class", "paras");
   container.append(para);
};