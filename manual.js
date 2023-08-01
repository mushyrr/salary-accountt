const normalGun = document.getElementById('normalGun');
const normalSaat = document.getElementById('normalSaat');
const normalUcret = document.getElementById('normalUcret');
const normalBtn = document.getElementById('normalBtn');
const normalinput = document.getElementById('normalinput')
const fazlaYGun = document.getElementById('fazlaYGun');
const fazlaYSaat = document.getElementById('fazlaYSaat');
const fazlaYUgret = document.getElementById('fazlaYUgret');
const fazlaTSaat = document.getElementById('fazlaTSaat');
const fazlaTUgret = document.getElementById('fazlaTUgret');
const fazlaTGun = document.getElementById('fazlaTGun');
const zGun = document.getElementById('zGun');
const zSaat = document.getElementById('zSaat');
const zUgret = document.getElementById('zUgret');
const devamsiz = document.getElementById('devamsiz');
const fazla5 = document.getElementById('fazla5');
const fazla10 = document.getElementById('fazla10');
const avans = document.getElementById('avans');
const avansBtn = document.getElementById('avansBtn');
const salaryElement = document.getElementById('salary');
const totalSalary = document.getElementById('totalSalary');
const salaryBtn = document.getElementById('salaryBtn');
const salaryDiv = document.querySelector('.salary');
const dateElement = document.getElementById('myDate');
const haveSalary = document.getElementById('haveSalary');
const fazlaTotal = document.getElementById('fazlaTotal');
const totalFily= document.getElementById('totalFily');


let mySalary =0;
let day = 0;
let notmany = 0;
let mesayi5 =0;
let mesayi10 = 0;


normalBtn.addEventListener('click', ()=>{
    let normalValue = normalinput.value;
    if(normalValue != '' &&  normalValue <= 31){
        day = normalValue ;
        normalinput.value = '';
    innerDate()

    }
})

salaryBtn.addEventListener('click', ()=>{
    let salaryValue = totalSalary.value;
    if(salaryValue != ''){
        mySalary = salaryValue;
        totalSalary.value = '';
    }
        innerDate()
})





function setMany(many , many2 , many3){

    if(many2.value <= 0){
many2.value < 0? setError(many2 , 'المعذرى لا يمكن اضافة قيمة سالبة')
:many2.value == 0 ?( many2.value ='') + ( many2.placeholder === 'تمت الاضافة'?'': 'يجب اضافة قيمة !') : "";
    }else{

    many = +many2.value;


    
    many3.textContent = parseFloat(many3.textContent) + +many;
    mesayi5 = +fazlaYSaat.textContent;
   
    mesayi10 = +fazlaTSaat.textContent;
   
    notmany = +zSaat.textContent;

   
    
        many2.value = ''
        const myError =document.getElementById('myError');

        
        myError? myError.remove() : '';

        




        innerDate();
        
    }
};



function setError(a , b){
    const errorElement = `<p id="myError" class="setError"> ${b} </p>`
    
    a.insertAdjacentHTML('afterend' , errorElement)
    
    
    };






let myAzgeri =  mySalary / 30 / 8;
let handilSalary = ( mySalary / 30 / 8);


let handilNormalGun = (day - (notmany /8)) + (normalGun % 8 === 0  ? " %": '');
let myHours =  (day * 8) - notmany;
let myMaas = myHours * myAzgeri;
let finlyUgret=  Math.floor(( myAzgeri * (mesayi5 * 1.5)) + ( myAzgeri * (mesayi10 * 2)));
let finlyFazla =  ( myAzgeri * (mesayi5 * 1.5)) +  myAzgeri * (mesayi10 * 2);



let hanNormalUcret = Math.floor(myMaas) + ' tl' ;
let hanfazlaYGun = `${mesayi5 / 8} ${mesayi5 % 8 === 0 ? ""  :   "%"}` ;
let hanFazlaTGun = `${mesayi10 / 8} ${mesayi10 % 8 === 0 ? ""  :  "%"}` ;
let hanZGun =  `${notmany / 8} ${notmany % 8 === 0 ? ""  :  "%"}` ;
let hanFazlaYUgret = Math.floor( ( myAzgeri * (mesayi5 * 1.5))) + ' tl';
let hanFazlaTUgret = Math.floor(( myAzgeri * (mesayi10 * 2)) ) + ' tl';
let hanZUcret =Math.floor( myAzgeri * notmany ) + ' tl';
let hanTotalFinly =  myMaas + finlyUgret;




const ceza = document.getElementById('ceza')
const kimet = document.getElementById('kimet')
let aa =(( notmany / 8) + ( 30 - day))  / 3
let myceza = Math.floor(aa)  * (mySalary / 30) ;

function innerDate(){

    myAzgeri =  mySalary / 30 / 8;
 handilNormalGun = (day - (notmany /8)) + (normalGun % 8 === 0  ? " %": '');
 myHours =  (day * 8) - notmany;
 myMaas = myHours * myAzgeri;
 finlyUgret=  Math.floor(( myAzgeri * (mesayi5 * 1.5)) + ( myAzgeri * (mesayi10 * 2)));
 finlyFazla = Math.floor(( myAzgeri * (mesayi5 * 1.5)) + ( myAzgeri * (mesayi10 * 2)));

 hanTotalFinly =  (myMaas) + finlyUgret;
    
 hanNormalUcret = Math.floor(myMaas) + ' tl' ;
 hanfazlaYGun = `${mesayi5 / 8} ${mesayi5 % 8 === 0 ? ""  :   "%"}` ;
 hanFazlaTGun = `${mesayi10 / 8} ${mesayi10 % 8 === 0 ? ""  :  "%"}` ;
 hanZGun =  `${notmany / 8} ${notmany % 8 === 0 ? ""  :  "%"}` ;
 hanFazlaYUgret = Math.floor( myAzgeri * (mesayi5 * 1.5)) + ' tl';
 hanFazlaTUgret = Math.floor(( myAzgeri * (mesayi10 * 2)) ) + ' tl';
 hanZUcret =Math.floor( myAzgeri * notmany ) + ' tl';

    normalGun.innerHTML=handilNormalGun;
    normalSaat.innerHTML =myHours ;
    normalUcret.innerHTML =hanNormalUcret;
    fazlaYGun.innerHTML =hanfazlaYGun;
    fazlaYSaat.innerHTML = mesayi5
    fazlaTGun.innerHTML = hanFazlaTGun;
    fazlaTSaat.innerHTML = mesayi10
    zGun.innerHTML = hanZGun ;
    fazlaYUgret.innerHTML =hanFazlaYUgret;
    fazlaTUgret.innerHTML =hanFazlaTUgret;

    zUgret.innerHTML = hanZUcret;
    zSaat.innerHTML = notmany;

        totalFily.innerHTML =  Math.floor(myMaas) + finlyUgret;

        fazlaTotal.innerHTML = finlyFazla;
    haveSalary.innerHTML = mySalary;

    aa = ((notmany / 8) + ( 30 - day) ) / 3

    myceza = Math.floor(aa) * (mySalary / 30) ;
    
    cza()
}
innerDate();


document.getElementById('back').addEventListener('click',()=> history.back());




function cza(){
    
if((aa) >= 1 && day != 0 && mySalary != 0){
    ceza.classList.remove('none');
    kimet.innerHTML = Math.floor(myceza)
}else{
    ceza.classList.add('none');
}
}