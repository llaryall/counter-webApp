let saveel=document.getElementById("save");
console.log(saveel);
let Count=0;
function increment(){
   Count=Count+1
   document.getElementById("count").innerText=Count;}
function save(){ 
    let savenum=Count + " - "
    saveel.innerText+=savenum;
    console.log(Count);
    Count=0;
    document.getElementById("count").innerText=Count;
}
