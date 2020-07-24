
const oldarr=['karun','Ahuja','here']

const newarr=oldarr.map(function(cvalue,i){
    return i+":"+cvalue+"Loves React";

});
const newarr1=oldarr.map(function(cvalue){
    return cvalue;

});
const newarr2=oldarr.map(function(cvalue,i,arr){
    console.log(arr);

});


const studentdata=[
    {id:1,name:"karun",degree:"Btech"},
    {id:2,name:"Rahul",degree:"Btech"},
    {id:3,name:"Rohan",degree:"Btech"}


]

const newData=studentdata.map((cvalue)=>{
    return `My name is ${cvalue.name}. My highest degree is ${cvalue.degree}`
})

console.log(newData);
// showdata must be present in html
document.getElementById('showdata').innerHtml=newData;
