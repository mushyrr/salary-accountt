const normalGun = document.getElementById('normalGun');
const normalSaat = document.getElementById('normalSaat');
const normalUcret = document.getElementById('normalUcret');
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
const salary = document.getElementById('salary')

const dateElement = document.getElementById('myDate');
const ayi = document.getElementById('ayi');

const haveSalary = document.getElementById('haveSalary');
const fazlaTotal = document.getElementById('fazlaTotal');
const totalFily= document.getElementById('totalFily');
const notice = document.getElementById('notice');

let myArray 
if(localStorage.myList !=null){
    myArray = JSON.parse(localStorage.myList)
}else{
    myArray = [];
}


let myData = new Date();
const day = myData.getDate();
const month = myData.toLocaleString('en', { month: 'short' }); // E.g., "Jul"
const year = myData.getFullYear();
const formattedDate = `${day}/${month}/${year}`;
dateElement.innerHTML = formattedDate
ayi.innerHTML = month



let yesterday ;
let mm = localStorage.yest;
mm ? yesterday = mm : yesterday = day ;


let dayli1 ;
let dayli2 ;
let dayli3 ;

const day1 = localStorage.dayli1;
const day2 = localStorage.dayli2;
const day3 = localStorage.dayli3;

day1 ? dayli1 = day1 : '';
day2 ? dayli2 = day2 : '';
day3 ? dayli3 = day3 : '';

function myactive(a ,b ){
            
    if(formattedDate == a){
        b.classList.add('notActive');
        b.placeholder = 'تمت الاضافة'
    }else{
        b.classList.remove('notActive');
        
    }
    }

    myactive(dayli3 ,fazla10 );
    myactive(dayli1 ,devamsiz );
    myactive(dayli2 ,fazla5 );





let mesayi5 ;
let mesayi10; 
let notmany;
const mymesa5 = localStorage.mesa5;
const mymesa10 = localStorage.mesa10;
const myNot = localStorage.notM
mymesa5 ? mesayi5 = mymesa5 : mesayi5 =0;
mymesa10 ? mesayi10 = mymesa10: mesayi10 = 0 ;
myNot ? notmany = myNot : notmany = 0;

let mySalary;
const ss = localStorage.salary
ss ? mySalary = ss : mySalary = 11402;

let myAzgeri =  mySalary / 30 / 8;
let handilSalary =Math.floor( mySalary / 30 / 8);


let handilNormalGun = (day - (notmany /8)) + (normalGun % 8 === 0  ? " %": '');
let myHours =  (day * 8) - notmany;
let myMaas = myHours * myAzgeri;
let finlyUgret=   myAzgeri * (mesayi5 * 1.5) +  myAzgeri * (mesayi10 * 2) -  (myAzgeri * notmany )
let finlyFazla =  Math.floor(( myAzgeri * (mesayi5 * 1.5)) + ( myAzgeri * (mesayi10 * 2)));



let hanNormalUcret = Math.floor(myMaas) + ' tl' ;
let hanfazlaYGun = `${mesayi5 / 8} ${mesayi5 % 8 === 0 ? ""  :   "%"}` ;
let hanFazlaTGun = `${mesayi10 / 8} ${mesayi10 % 8 === 0 ? ""  :  "%"}` ;
let hanZGun =  `${notmany / 8} ${notmany % 8 === 0 ? ""  :  "%"}` ;
let hanFazlaYUgret = Math.floor((myAzgeri * (mesayi5 * 1.5))) + ' tl';
let hanFazlaTUgret =  Math.floor(( myAzgeri * (mesayi10 * 2))) + ' tl';
let hanZUcret = Math.floor(( myAzgeri * notmany )) + ' tl';
let hanTotalFinly =  Math.floor(( myMaas + finlyUgret));

function innerDate(){

    
 
 myAzgeri =  mySalary / 30 / 8;
 handilSalary = Math.floor( mySalary / 30 / 8);
 handilNormalGun = (day - (notmany /8)) + (normalGun % 8 === 0  ? " %": '');
 myHours =  (day * 8) - notmany;
 myMaas = myHours * myAzgeri;
 finlyUgret=  ( myAzgeri * (mesayi5 * 1.5)) + ( myAzgeri * (mesayi10 * 2)) 
 finlyFazla =  Math.floor(( myAzgeri * (mesayi5 * 1.5)) + ( myAzgeri * (mesayi10 * 2)));



 hanTotalFinly = Math.floor(( myMaas + finlyUgret));
    
 hanNormalUcret = Math.floor(myMaas) + ' tl' ;
 hanfazlaYGun = `${mesayi5 / 8} ${mesayi5 % 8 === 0 ? ""  :   "%"}` ;
 hanFazlaTGun = `${mesayi10 / 8} ${mesayi10 % 8 === 0 ? ""  :  "%"}` ;
 hanZGun =  `${notmany / 8} ${notmany % 8 === 0 ? ""  :  "%"}` ;
 hanFazlaYUgret =  Math.floor((myAzgeri * (mesayi5 * 1.5))) + ' tl';
 hanFazlaTUgret =  Math.floor(( myAzgeri * (mesayi10 * 2))) + ' tl';
 hanZUcret =Math.floor(( myAzgeri * notmany )) + ' tl';


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

        totalFily.innerHTML =  hanTotalFinly  ;

        fazlaTotal.innerHTML = finlyFazla;
    haveSalary.innerHTML = mySalary;
    
    
}
innerDate();




function setMany(many , many2 , many3){

    if(many2.value > 8 || many2.value <= 0){
many2.value > 8 ? setError(many2 , 'المعذرة لا يمكن اضافة اكثر من 8 ساعات') 
:many2.value < 0? setError(many2 , 'المعذرى لا يمكن اضافة قيمة سالبة')
:many2.value == 0 ?( many2.value ='') + ( many2.placeholder === 'تمت الاضافة'?'': 'يجب اضافة قيمة !') : "";
    }else{

    many = +many2.value;


    
    many3.textContent = parseFloat(many3.textContent) + +many;
    mesayi5 = +fazlaYSaat.textContent;
    localStorage.setItem('mesa5', mesayi5)
    mesayi10 = +fazlaTSaat.textContent;
    localStorage.setItem('mesa10' , mesayi10)
    notmany = +zSaat.textContent;
    localStorage.setItem('notM', notmany)
    
        many2.value = ''
        const myError =document.getElementById('myError');

        
        myError? myError.remove() : '';

        
        if(many2 == devamsiz){
            dayli1 = formattedDate;
            localStorage.setItem('dayli1' , dayli1);
        }else if (many2 == fazla5){
            dayli2 = formattedDate ;
            localStorage.setItem('dayli2' , dayli2);
        }else if(many2 == fazla10){
            dayli3 = formattedDate;
            localStorage.setItem('dayli3' , dayli3);
        }

        
    myactive(dayli1 ,devamsiz );
    myactive(dayli2 ,fazla5 );
    myactive(dayli3 ,fazla10 );



        innerDate();
        
    }
};
//localStorage.clear('mesa5');




if(mySalary != 11402){
salaryElement.classList.add('salaryChenget')
salary.innerHTML = mySalary
}

salaryElement.addEventListener('click', ()=>{
    salaryDiv.classList.remove('none')
    salaryElement.classList.add('none');
    totalSalary.focus()

})

salaryBtn.addEventListener('click', ()=>{
    if(totalSalary.value != '' || totalSalary.value > 0){
        mySalary = totalSalary.value
        localStorage.setItem('salary' , mySalary )
        
        salaryDiv.classList.add('none')
    }else{
         totalSalary.placeholder = 'يجب ادخال قيمة الراتب';
    
    }
    innerDate()
})

function setError(a , b){
const errorElement = `<p id="myError" class="setError"> ${b} </p>`

a.insertAdjacentHTML('afterend' , errorElement)


};



if(yesterday > day){
    sxs()
    yesterday = day
    localStorage.setItem('yest', yesterday)
    innerDate();
}else{
    yesterday = day;
    localStorage.setItem('yest', yesterday)
}

function sxs(){


    let myYesterday = (yesterday - (notmany /8)) ;
    let myHours1 =  (yesterday * 8) - notmany;
    
    let myMaas1 = myHours1 * myAzgeri;
    let hanNormalUcret = Math.floor(myMaas1) + ' tl' ;

    
    hanTotalFinly = Math.floor(( myMaas1 + finlyUgret));
    
    let myMonth =  myData.getMonth('en', { month: 'short' })
    myMonth >1? myMonth - 1 : myMonth = 12;
    



        
    
    let myOb = {
        datetheList :year + '/' + myMonth ,
        today: myYesterday,
        myHours:myHours1,
        myMaas:myMaas1,
        hanNormalUcret:hanNormalUcret,

        hanfazlaYGun:hanfazlaYGun,
        hanFazlaTGun:hanFazlaTGun,
        hanZGun:hanZGun,
        hanFazlaYUgret:hanFazlaYUgret,
        hanFazlaTUgret:hanFazlaTUgret,
        hanZUcret:hanZUcret,

        mesayi5:mesayi5,
        mesayi10:mesayi10,
        notmany:notmany,
        mySalary:mySalary,

        finlyFazla:finlyFazla,
        totalFinly:hanTotalFinly 
    }
    myArray.unshift(myOb)
    localStorage.setItem('myList' , JSON.stringify(myArray))



   localStorage.removeItem('mesa5');
   localStorage.removeItem('mesa10');
   localStorage.removeItem('notM');
   
   creatList()
innerDate()
    }


    function creatList(){
        let myHTML= '' ;
        for(let i = 0; i< myArray.length;i++){

            myHTML += `
            <h2> ${myArray[i].datetheList}</h2>
            <table>
            <thead>
              <tr>
                <th>bordrolar</th>
                <th>ايام</th>
                <th>ساعات</th>
                <th>الاجرة</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>الدوام العادي</th>
                <td>${myArray[i].today}</td>
                <td>${myArray[i].myHours}</td>
                <td>${myArray[i].hanNormalUcret}</td>
              </tr>
            </tbody>
            <tbody>
              <th>الاضافي <sub>%50</sub></th>
              <td>${myArray[i].hanfazlaYGun}</td>
              <td>${myArray[i].mesayi5}</td>
              <td>${myArray[i].hanFazlaYUgret}</td>
            </tbody>
            <tbody>
              <th>الاضافي <sub>%100</sub></th>
              <td>${myArray[i].hanFazlaTGun}</td>
              <td>${myArray[i].mesayi10}</td>
              <td>${myArray[i].hanFazlaTUgret}</td>
            </tbody>
            <tfoot>
              <th>الغياب</th>
              <td>${myArray[i].hanZGun}</td>
              <td>${myArray[i].notmany}</td>
              <td>${myArray[i].hanZUcret}</td>
            </tfoot>
          </table>


          <table style="margin: 3px 0 ;">
                <thead>
                    <tr>
                        <th> حذف القائمة </th>
                        <th>قيمة راتبك</th>
                        <th>مجموع العمل الاضافي</th>
                        <th>المجموع النهائي للراتب</th>
                    </tr>
                    <tr>
                        <th id="deleteList"><button  onclick="delateItem(${i})" > delete </button> </th>
                        <th>${myArray[i].mySalary}</th>
                        <td>${myArray[i].finlyFazla}</td>
                        <td>${myArray[i].totalFinly} </td>
                    </tr>
                </thead>
            </table>
            
        `;
        };
        document.getElementById('myList').innerHTML = myHTML;
       

    
    }

    creatList();


    if(myArray.length > 0){
        let worning = document.getElementById('worning');
        worning.innerHTML =' \\/ قائمة عمل الاشهر الفائتة \\/ '
    };



    const ceza = document.getElementById('ceza')
    const kimet = document.getElementById('kimet')
    let myceza = Math.floor((notmany /8 /3) * (mySalary / 30)) ;

    if((notmany / 8 / 3) >= 1){
        ceza.classList.remove('none');
        kimet.innerHTML = myceza
    }else{
        ceza.classList.add('none');
    }


    if(day == 15){
        notice.innerHTML = ' ! اليوم هو موعد استلام الراتب'
    }else if(day == 1){
        notice.innerHTML = ' ! اليوم هو موعد سحب الاونص'
    }else{
        notice.innerText = 'هل صليت على النبي اليوم ؟'
    }

    console.log(hanTotalFinly)

    function delateItem(i){
        myArray.splice(i,1)
        localStorage.myList = JSON.stringify(myArray);
        creatList()
    }
