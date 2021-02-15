let sign="X";
 let disp=document.getElementById("heade");

 function printelement(number){
    let isko=document.getElementById("r"+number);
    if(isko.innerText==""){
        isko.innerHTML="<center>"+sign+"</center>";
        winner();
        checksign();
        changecolor();
        // winner();
    }
 }

function checksign(){
    if(sign=="X"){
        sign="O"
        document.getElementById("turn").innerText=" O's Turn"
    }
    else{
        sign="X"
        document.getElementById("turn").innerText=" X's Turn"
    }
}

function getbox(no){
    return document.getElementById("r"+no).innerText;
}

function checkmove(first,second,third,move){
    if(getbox(first)==move && getbox(second)==move && getbox(third)==move){
        return true;
    }
    return false;
}
function changecolor(){
    for(let i=1;i<=9;i++){
        textcolor=document.getElementById("r"+i);
        // console.log(textcolor)
        if(textcolor.innerText=="X"){
            textcolor.style.color="red"
        }else{
            textcolor.style.color="green"
        }
    }
}
function clearboard(){
    for(let i=1;i<=9;i++){
        document.getElementById("r"+i).innerHTML="";
    }
}

function winner(){
    
    if(checkmove(1,2,3,sign)||checkmove(4,5,6,sign)||checkmove(7,8,9,sign)
    ||checkmove(1,4,7,sign)||checkmove(2,5,8,sign)||checkmove(3,6,9,sign)
    ||checkmove(1,5,9,sign)||checkmove(7,5,3,sign)){
    disp.innerHTML = "<center>" +sign + " Won the Game" + "</center>";
     clearboard();
     document.getElementById("turn").innerText=""
    }
    else{
        if(getbox(1)!=""&& getbox(2)!=""&& getbox(3)!=""&&
    getbox(4)!=""&& getbox(5)!=""&& getbox(6)!=""&&
    getbox(7)!=""&& getbox(8)!=""&& getbox(9)!=""){
        disp.innerHTML = "<center>"  + "Game is tie " + "</center>";
        clearboard();
    }
    }
}