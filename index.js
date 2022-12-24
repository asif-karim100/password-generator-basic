
 
var keylist= "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var temp=''
 
function generatepass(plength){
temp=''
for (i=0;i<plength;i++)
temp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
return temp
}
 
function populateform(enterlength){
document.pgenerate.output.value=generatepass(enterlength)
}

////////restrict website from copy paste
/////IN HTML BODY  body <oncopy="return false" oncut="return false" onpaste="return false">
/////////////
// $('body').bind('copy paste',function(e) {
//     e.preventDefault(); return false; 
// });





////////////////////





    

        

