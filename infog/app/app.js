
dataArr = [
    {
        id:"c1",
        content:"info 1"
    },
    {
        id:"c2",
        content:"info 2"
    },
    {
        id:"c3",
        content:"info 3"
    },
    {
        id:"c4",
        content:"info 4"
    },
    {
        id:"c5",
        content:"info 5"
    },
    {
        id:"c6",
        content:"info 6"
    },
    {
        id:"c7",
        content:"info 7"
    },
    {
        id:"c8",
        content:"info 8"
    }
]


let circle = document.querySelectorAll('.circle'); 

const bill=(elid)=>{
    
 dataArr.forEach((element)=>{
    if(element.id==elid){
document.querySelector('.ccontent').innerHTML = element.content ; 

    }
})
reqColor = jQuery('#'+elid).css("background-color");
    
    document.getElementById('c1').style.backgroundColor = reqColor;
   document.getElementById('c1').style.transition = "all 3s";

   document.querySelectorAll('.circle')[6].style.transition = " .1s";
   document.querySelectorAll('.circle')[5].style.transition = " .15s";
   document.querySelectorAll('.circle')[4].style.transition = " .20s";
   document.querySelectorAll('.circle')[3].style.transition = " .25s";
   document.querySelectorAll('.circle')[2].style.transition = " .30s";
   document.querySelectorAll('.circle')[1].style.transition = " .35s";
   document.querySelectorAll('.circle')[0].style.transition = " .40s";
    document.querySelectorAll('.circle').forEach((element)=>{;
element.style.visibility = 'hidden'
}) ;
}


bill2=()=>{
    document.getElementById('c1').style.backgroundColor = '#092327';
    document.getElementById('c1').style.transition = "all 3s"
    document.querySelectorAll('.circle')[6].style.transition = " .1s";
    document.querySelectorAll('.circle')[5].style.transition = " .15s";
    document.querySelectorAll('.circle')[4].style.transition = " .20s";
    document.querySelectorAll('.circle')[3].style.transition = " .25s";
    document.querySelectorAll('.circle')[2].style.transition = " .30s";
    document.querySelectorAll('.circle')[1].style.transition = " .35s";
    document.querySelectorAll('.circle')[0].style.transition = " .40s";
    document.querySelectorAll('.circle').forEach((element)=>{element.style.visibility = 'visible'}) ;
}

