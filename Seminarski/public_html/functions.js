/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function datum()
{
    var danas= new Date();                  
    var gde= document.getElementById("datum");
    gde.innerHTML+=danas.toLocaleDateString();
}
   
function brojacPoseta(novikuki)
{
                           
    var delovikukija = novikuki.split("=");     /*deli niz u podskupove*/
    var imekukija = delovikukija[0];             /*ime kukija je u prvom delu kukija*/
    var vrednostkukija = decodeURI(delovikukija[1]);  /*dekodiranje URI-ja, vrednost kukija */
    var prethodnavrednost = vrednostkukija; 
    
    if (imekukija != "brojac" || vrednostkukija == null)  /*postavlja vrednost kukija ako ga nema */
    {
           prethodnavrednost = 0;
    }
    
    var novavrednost = parseInt(prethodnavrednost) + 1;
    var newDate = new Date();
    newDate.setTime(newDate.getTime() + 2592000000);
    document.cookie = " brojac=" + novavrednost + ";expires=" + newDate.toUTCString();
    return novavrednost;
                            
}


function mOver(id)
{
    id.style.backgroundColor="orange"; 
}
 
 function mOut(id)
 { 
     id.style.backgroundColor="rgba(26, 10, 9, 0.87)";
 }
 