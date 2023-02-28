var skip = document.getElementById('skip')
var score = document.getElementById('score');
var totalscore = document.getElementById('totalscor');
var countdown = document.getElementById('countdown');
var count = 0;
var scoreCount = 0;
var duration = 0;
var qa_set = document.querySelectorAll('.qa_set')
var qaAnsRow = document.querySelectorAll('.qa_set qa_ans_row input')

skip.addEventListener('click',function(){
    step()  
})

function step(){
    count += 1;
    for(var i = 0; i < qaSet.length; i++){
        qaSet[i].className= 'qa_set';
    }
    qaSet[count].className= 'qa_set active';
    if(count == 5){
        skip.style.display = 'none';
    }
}