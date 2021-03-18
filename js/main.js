const nameWriterINPUT= document.getElementById("nameWriterINPUT");
const nameMagazineINPUT= document.getElementById("nameMagazineINPUT");
const filmURLINPUT= document.getElementById("filmURLINPUT");
const filmTitleINPUT= document.getElementById("filmTitleINPUT");
const directorINPUT= document.getElementById("directorINPUT");
const bookURLINPUT= document.getElementById("bookURLINPUT");
const bookTitleINPUT= document.getElementById("bookTitleINPUT");
const writterINPUT= document.getElementById("writterINPUT");
const nameWriter= document.getElementById("nameWriter");
const nameMagazine= document.getElementById("nameMagazine");
const filmTitle= document.getElementById("filmTitle");
const director= document.getElementById("director");
const bookTitle= document.getElementById("bookTitle");
const writter= document.getElementById("writter");
const colorPicker= document.getElementById("colorPicker");
const formSubmit= document.getElementById("formSubmit");
const mainDesign = document.querySelector(".main-design-template");
const designTemplate = document.querySelector(".design-template");
const filmURL = document.getElementById("filmURL");
const bookURL = document.getElementById("bookURL");
let loadingScreen = document.querySelector(".loading-screen");
const bottomBar = document.querySelector(".design-bottom-bar");
const filmfile = document.getElementById("filmfileURLINPUT");
const bookfile = document.getElementById("bookfileURLINPUT");

eventListener();

function eventListener(){
    formSubmit.addEventListener("submit",addValue); 
    bottomBar.addEventListener("click",capture); 
    filmfile.addEventListener("change",filmGet);  
    bookfile.addEventListener("change",bookGet);  
    
}

function filmGet(){
    const file = this.files[0];
    filmURLINPUT.value = file.name;
    if (file){
        const reader = new FileReader(); 
        reader.readAsDataURL(file);       
        reader.addEventListener("load", function(){
            filmURL.setAttribute("src",this.result);
        });
    }

}
function bookGet(){
    const file = this.files[0];
    bookURLINPUT.value = file.name;
    if (file){
        const reader = new FileReader(); 
        reader.readAsDataURL(file);       
        reader.addEventListener("load", function(){
            bookURL.setAttribute("src",this.result);
        });
    }

}

function addValue(e){    
    nameWriter.textContent = nameWriterINPUT.value;
    nameMagazine.textContent = nameMagazineINPUT.value;
    filmTitle.textContent = filmTitleINPUT.value;
    director.textContent = directorINPUT.value;
    bookTitle.textContent = bookTitleINPUT.value;
    writter.textContent = writterINPUT.value;
    mainDesign.style.backgroundColor = colorPicker.value;
    if (filmfile.value==""){
        filmURL.setAttribute("src",filmURLINPUT.value);
    } 
    if (bookfile.value==""){
        bookURL.setAttribute("src",bookURLINPUT.value);
    }         
    e.preventDefault();
}

function capture(e){ 
    if (e.target.className === "capture-image"){
        loadingScreen.style.opacity = '100';
        mainDesign.style.transform = 'scale(8) translateX(-99999px)';       
        html2canvas(mainDesign, {
            allowTaint: true,
            useCORS: true
        }).then(canvas => {
            loadingScreen.style.opacity = '0';
            mainDesign.style.transform = "scale(1)";
            let a = document.createElement("a");
            a.setAttribute('download', nameMagazineINPUT.value + '-türgedeb-post.png');
            a.setAttribute('href',canvas.toDataURL('image/png'));
            a.click();
        });
    }
}
