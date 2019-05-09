function logList(){
    var x = document.getElementById('log-list').addEventListener('click',logList);
    var text="";
    var i;
    for (i=0; i<x.length;i++){
        text += x.elements[i].value + "<br>";
    }
    console.log(element)
}


// let list=[]
// let copy=[]
// list.forEach(function(element,index,list){
//     copy.push
// })
// let sum = list.reduce(function(acc,element,index,list){
//     acc=acc+element
// })
// console.log(sum)

// $(document).ready(function(){
//     $('.add').live('click', function(e){
//         e.preventDefault();
//         let sum = 0;
//         $(add).each(function(){
//             sum += Number($(this).val());
//         });
//         $('')
//     })
// })