document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
function getmessage(){
    // get date
let currentDate = Data.now();
let storagDate;
let message;


    // data from storage
let date = localStorage.getItem('date');

if(date){
    storeDate = new Date(storeDate);
}
    // camparet the date
    if (date){
    let differnece = currentDate-storeDate;

    console.log(`difference: ${difference}`);
    }else{
        message = 'Welcome! Let us kno if you have any questions' ;

    }
    localStorage.setItem('date', currentDate.getMilliseconds());
    

}