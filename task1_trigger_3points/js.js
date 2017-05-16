// var counter=0;
// var trig=document.querySelector('.trig');
// trig.onclick= function() {
//
//     if (counter==2){
//         counter=0;
//         console.log(counter);
//         trig.classList='trig-default trig';
//     } else
//     if (counter==0) {
//         counter++;
//         console.log(counter);
//         trig.classList='trig-default trig1';
//     }
//     else if (counter==1) {
//         counter++;
//         console.log(counter);
//         trig.classList='trig-default trig2';
//     }
// }
trigger={
    'pos':0,
    'delta':0,
    'sdvig': function() {
        trigger.pos ++;
        if (trigger.pos == 1) {
            trigger.delta += 50;
        }
        else if (trigger.pos == 2) {
            trigger.delta += 50;
        }
        else if (trigger.pos == 3) {
            trigger.delta = 3;
            trigger.pos = 0;
        }
        console.log(trigger.pos);
        document.querySelector('.trig').style.left=trigger.delta+'px';
    }
}
console.log(trigger.delta);
document.querySelector('.box').onclick=trigger.sdvig;