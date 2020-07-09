document.querySelector('#grandParent').addEventListener('click',()=>{
    console.log("click on grandparent")
})
document.querySelector('#parent').addEventListener('click',()=>{
    console.log("click on parent")
})
document.querySelector('#child').addEventListener('click',()=>{
    console.log("click on child")
})
document.querySelector('#grandParent1').addEventListener('click',()=>{
    console.log("click on grandparent")
},true)
document.querySelector('#parent1').addEventListener('click',()=>{
    console.log("click on parent")
},true)
document.querySelector('#child1').addEventListener('click',()=>{
    console.log("click on child")
},true)
document.querySelector('#grandParent2').addEventListener('click',()=>{
    console.log("click on grandparent")
},true)
document.querySelector('#parent2').addEventListener('click',()=>{
    console.log("click on parent")
},false)
document.querySelector('#child2').addEventListener('click',()=>{
    console.log("click on child")
},true)
document.querySelector('#grandParent3').addEventListener('click',()=>{
    console.log("click on grandparent")
},true)
document.querySelector('#parent3').addEventListener('click',()=>{
    console.log("click on parent")
},false)
document.querySelector('#child3').addEventListener('click',(e)=>{
    console.log("click on child");
    e.stopPropagation();
},true)