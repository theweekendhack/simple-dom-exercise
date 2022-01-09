
const main = (()=>{

 
    //Event Listener variables
    const beGoneButton = document.querySelector("#pressMeBtn");
    const calCubeButton = document.querySelector("#cubeButton");
    const createBoxesButton = document.querySelector("#createBoxesButton");

    //DOM Node Elements Variables
    const numberForm =document.querySelector("form:nth-child(2)");  
    const createBoxesForm = numberForm.nextElementSibling;


    //Regular variables 

    //regular fuctions 
    const calCube = (n)=>{
        return n**3;
    }


    //Event Listeners
    beGoneButton.addEventListener("click",()=>{
       

        //This toggle always you to toogle between adding hide and removing hide
        numberForm.classList.toggle("hide");
        createBoxesForm.classList.toggle("hide");

    })


    calCubeButton.addEventListener("click",()=>{

        
        const cubeTxtBox = document.querySelector("#number");
        const number = parseInt(cubeTxtBox.value);


        alert(`The cube is ${calCube(number)}`);

        cubeTxtBox.value="";
        cubeTxtBox.focus();
    
    })

    createBoxesButton.addEventListener("click",()=>{

        const boxesTxtBox = document.querySelector("#boxes");

        const boxNo = parseInt(boxesTxtBox.value);

        for(let i=1; i<=boxNo;i++)
        {
            const divElement = document.createElement("div");//<div></div>

            divElement.innerText= `Box ${i}`;//<div>Boc</div>
            divElement.style.width="100px";
            divElement.style.height="100px";

            i%2==0 ? divElement.style.backgroundColor="blue" : divElement.style.backgroundColor="grey";

            divElement.style.marginBottom="2px";
            divElement.style.textAlign="center";
            divElement.style.display="flex";
            divElement.style.alignItems="center";
            divElement.style.justifyContent="center";


            document.body.append(divElement);
        }

       
    })



})();