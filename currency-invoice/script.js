let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

const inputDate = document.getElementById("exampleInput1");
const inputDate2 = document.getElementById("exampleInput2");


let mood = 'create' ;
let tmp;



//get total : calculer le total
function getTotal(){
    if(price.value != ''){
        let result =(((+count.value * +price.value) * ( +taxes.value / 100)) + ( +count.value * +price.value) - +discount.value);

        // total.innerHTML = Math.round(parseFloat(result) * 100) / 100;

        let totalArrondi = Math.round(result * 100) / 100;

        total.innerHTML = totalArrondi ;
        total.style.background='rgba(22, 167, 22, 0.813)' ;
    }
    else {
        total.innerHTML = 'Enter Price !';
        total.style.background='#ff3c34' ;
    }
}




//create product : after clicking on create + save in localstorage
//array is the best place to save data
// input : .value || other like total : .innerHTML
//data 1)interface 2)array 3)localstorage if you wanna update.. you will aplie it in the array
let dataPro;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}
else{
    dataPro=[];
}

submit.onclick = function(){
    let newPro = {
        title : title.value,
        price : price.value ,
        taxes : taxes.value ,
        // ads : ads.value ,
        discount : discount.value ,
        total : total.innerHTML ,
        count : count.value ,
        category : category.value,

    }
    if(title.value != '' && price.value != '' && category.value != '' && newPro.count < 100){
    if(mood == 'create'){

            dataPro.push(newPro);
    }else{
        dataPro[tmp] = newPro ;
        mood = 'create' ;
        submit.innerHTML = 'Create' ;
        count.style.display = 'block' ;
    }
    clearData()
    }

    //save locaalstorage
    localStorage.setItem('product',JSON.stringify(dataPro))
    console.log(newPro) ;

    
    showData()
}






//clean inputs : after clicking on create delete the data just in the screen
function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
    total.style.background='#ff3c34'
}


//delete
//1-delete : some
function deleteData(i){
    
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro);
    showData() ;
}

//2-delete : all
function deleteAll(){
    localStorage.clear() ;
    dataPro.splice(0);
    showData()

}


//update
function updateData(i){
    title.value = dataPro[i].title ;
    price.value = dataPro[i].price ;
    taxes.value = dataPro[i].taxes ; 
    // ads.value = dataPro[i].ads ;
    discount.value = dataPro[i].discount ;
    count.value = dataPro[i].count ;

    getTotal();
    // count.style.display = 'none' ;
    category.value = dataPro[i].category ;
    submit.innerHTML = 'Modifier'
    mood = 'update' ;
    tmp = i ;
    scroll({

        // let value = scrollY;
        // console.log(value)

        top :671.59375,
        behavior:'smooth',

    })


}


//Changer Logo
const selectImageButton = document.getElementById("select-image-button");
const fileInput = document.getElementById("file-input");
const imagePreview = document.getElementById("image-preview");
const logoImage = document.getElementById("logoImage");



selectImageButton.addEventListener("click", function () {
    fileInput.click(); // Cela ouvrira la boîte de dialogue de sélection de fichier
});

// Écoutez les modifications de l'élément input de fichier pour obtenir le fichier sélectionné
fileInput.addEventListener("change", function () {
    const selectedFile = fileInput.files[0]; 





    if (selectedFile) {



        const newImage = new Image();

        // Définissez la source de la nouvelle image
        newImage.src = URL.createObjectURL(selectedFile);

        // Appliquez les styles CSS directement à la nouvelle image
        newImage.style.width = "150px";
        newImage.style.marginTop = "0px";
        newImage.style.marginBottom = "10px";
        newImage.style.marginLeft = "40px";
        // Vous pouvez définir d'autres styles ici

        // Remplacez l'image existante par la nouvelle image dans le conteneur
        const imgEse = document.getElementById("imgEse");
        imgEse.innerHTML = ''; // Effacez le contenu actuel
        imgEse.appendChild(newImage); // Ajoutez la nouvelle image

        // Faites quelque chose avec le fichier, par exemple, affichez-le dans une balise d'image
        // const imagePreview = document.getElementById("image-preview");
        // imagePreview.src = URL.createObjectURL(selectedFile);
        // logoImage.src = URL.createObjectURL(selectedFile);


        imagePreview.src = newImage.src;

        imagePreview.style.width = "200px";

    }
});


//Modal

// Get references to the modal and buttons
const modal = document.getElementById('myModal');
const showModalButton = document.getElementById('showModalButton');
const closeButton = document.querySelector('.close');
const changeButton = document.getElementById('changeButton');
const Adresse = document.getElementById('Adresse');
const NumEse = document.getElementById('NumEse');
const MailEse = document.getElementById('MailEse');
const SiteEse = document.getElementById('SiteEse');
const TVAEse = document.getElementById('TVAEse');
const adrsEse = document.getElementById('adrsEse');
const Adrs = document.getElementById('Adrs');
const numEse = document.getElementById('numEse');
const Tel = document.getElementById('Tel');
const mailEse = document.getElementById('mailEse');
const webSiteEse = document.getElementById('webSiteEse');
const webSite = document.getElementById('webSite');
const codeTVA = document.getElementById('codeTVA');
const RC = document.getElementById('RC');
const RCF = document.getElementById('RCF');
const RIBEse = document.getElementById('RIBEse');
const RIBF = document.getElementById('RIBF');

let savedAdresse = '';
let savedNumEse = '';
let savedMailEse = '';
let savedSiteEse = '';

// Show the modal when the "Changer Info" button is clicked
showModalButton.addEventListener('click', () => {
    // Store the current values for later comparison
    savedAdresse = Adresse.value;
    savedNumEse = NumEse.value;
    savedMailEse = MailEse.value;
    savedSiteEse = SiteEse.value;
    savedTVAEse = TVAEse.value;
    savedRC = RC.value;
    savedRIBEse = RIBEse.value;


    
    modal.style.display = 'block';
});

// Close the modal when the close button (×) is clicked
closeButton.addEventListener('click', () => {
    // Reset the input values to the saved values if the modal is closed without saving
    Adresse.value = savedAdresse;
    NumEse.value = savedNumEse;
    MailEse.value = savedMailEse;
    SiteEse.value = savedSiteEse;
    TVAEse.value = savedTVAEse;
    RC.value = savedRC;
    RIBEse.value = savedRIBEse;

    
    


    modal.style.display = 'none';
});



// Change the input values and update the corresponding <span> elements when the "Changer" button is clicked
changeButton.addEventListener('click', () => {
    // Save the new input values
    const newAdresse = Adresse.value;
    const newNumEse = NumEse.value;
    const newMailEse = MailEse.value;
    const newSiteEse = SiteEse.value;
    const newTVAEse = TVAEse.value;
    const newRC = RC.value;
    const newRIBEse = RIBEse.value;


    


    // Update the corresponding <span> elements with the new data
    adrsEse.textContent = newAdresse;
    Adrs.textContent = newAdresse;

    
    numEse.textContent = newNumEse;
    Tel.textContent = newNumEse;

   
    mailEse.textContent = newMailEse;
    eMail.textContent = newMailEse;

    
    webSiteEse.textContent = newSiteEse;
    webSite.textContent = newSiteEse;


    codeTVA.textContent = newTVAEse;

    RCF.textContent = newRC;

    RIBF.textContent = newRIBEse;


    // Vous pouvez également mettre à jour le nom du client si nécessaire

    // Close the modal
    modal.style.display = 'none';
});





//Modaldevis

// Get references to the modal and buttons
const modalDevis = document.getElementById('myModalDevis');
const showModalButtonDevis = document.getElementById('showModalButtonDevis');
const closeButtonDevis = document.querySelector('.closeDevis');
const changeButtonDevis = document.getElementById('changeButtonDevis');
const NumDevis = document.getElementById('NumDevis');
const reference = document.getElementById('reference');
const pieceDevis = document.getElementById('piece');
const lettreTotTtc = document.getElementById('lettreTotTtc');


let savedNumDevis = '';


// Show the modal when the "Changer Info" button is clicked
showModalButtonDevis.addEventListener('click', () => {
    // Store the current values for later comparison
    savedNumDevis = NumDevis.value;


    
    modalDevis.style.display = 'block';
});

// Close the modal when the close button (×) is clicked
closeButtonDevis.addEventListener('click', () => {
    // Reset the input values to the saved values if the modal is closed without saving
    NumDevis.value = savedNumDevis



    modalDevis.style.display = 'none';
});


// Change the input values and update the corresponding <span> elements when the "Changer" button is clicked
changeButtonDevis.addEventListener('click', () => {


    previousButtonClicked = "devisbtn" ;
    // Save the new input values
    const newANumDevis = NumDevis.value;


    // Update the corresponding <span> elements with the new data
    reference.textContent = newANumDevis;
    pieceDevis.textContent = 'Devis'



    timbreContainer.style.display = 'none';
    lettreTotTtc.style.display = 'none';

    
    // Close the modal
    modalDevis.style.display = 'none';



});




//ModalFact
// Get references to the modal and buttons
const modalFact = document.getElementById('myModalFact');
const showModalButtonFact = document.getElementById('showModalButtonFact');
const closeButtonFact = document.querySelector('.closeFact');
const changeButtonFact = document.getElementById('changeButtonFact');
const NumFact = document.getElementById('NumFact');
const referenceFact = document.getElementById('reference');
const pieceFact = document.getElementById('piece');
const TimbreFact = document.getElementById('TimbreFact');
const timbre = document.getElementById('timbre');
const timbreContainer = document.getElementById('timbreContainer');

let ajoutTimbreActif = false;
showModalButtonFact.addEventListener('click', () => {
    // Activez l'ajout du timbre
    ajoutTimbreActif = true;
});
showModalButtonDevis.addEventListener('click', () => {
    // Désactivez l'ajout du timbre
    ajoutTimbreActif = false;
});
changeButtonDevis.addEventListener('click', () => {
    // Vérifiez si l'ajout du timbre est actif
    if (ajoutTimbreActif) {
        // Récupérez la valeur du timbre et faites ce que vous devez avec
        const timbreValue = TimbreFact.value;
        console.log(`Ajout du timbre : ${timbreValue}`);
    } else {
        // L'ajout du timbre n'est pas actif
        console.log('Ajout du timbre désactivé');
    }
});

let savedNumFact = '';

// Show the modal when the "Changer Info" button is clicked
showModalButtonFact.addEventListener('click', () => {
    // Store the current values for later comparison
    savedNumFact = NumFact.value;   
    modalFact.style.display = 'block';
});

// Close the modal when the close button (×) is clicked
closeButtonFact.addEventListener('click', () => {
    // Reset the input values to the saved values if the modal is closed without saving
    NumFact.value = savedNumFact



    modalFact.style.display = 'none';
});

// Change the input values and update the corresponding <span> elements when the "Changer" button is clicked
changeButtonFact.addEventListener('click', () => {


    previousButtonClicked = "factbtn"
    // Save the new input values
    const newANumFact = NumFact.value;

    // Update the corresponding <span> elements with the new data
    referenceFact.textContent = newANumFact;
    pieceFact.textContent = 'Facture';
    
    if (TimbreFact.value.trim() !== '') {
        // Si le champ Timbre n'est pas vide, affichez le champ correspondant
        timbreContainer.style.display = 'block';
        
        // Mettez à jour le contenu du champ timbre avec la valeur du champ Timbre
        const timbreValue = TimbreFact.value;
        document.getElementById('timbre').textContent = timbreValue;
    } 
    else {
        timbreContainer.style.display = 'none';
    }


    document.querySelector('#lettreTotTtc').style.marginBottom = '1px'
    document.querySelector('.cont').style.marginBottom = '0px'
    // document.querySelector('.cont').style.background = 'beige'
    // document.querySelector('.signature-space').style.background = 'pink'
    document.querySelector('.signature-space').style.marginTop = '80px'
        // document.querySelector('.tabelss').style.background = 'pink'

    document.querySelector('.tabelss').style.padding = '0px'





    lettreTotTtc.style.display = 'block';

    // Close the modal
    modalFact.style.display = 'none';
});


function showData(){
    let table ='' ;
    for(let i = 0 ; i < dataPro.length ; i++){

        const totalArrondi = Math.round(parseFloat(dataPro[i].total) * 100) / 100;


        const tottva = (dataPro[i].count * dataPro[i].price * dataPro[i].taxes) / 100;
        const roundedTottva = tottva.toFixed(2); // Arrondit à deux décimales


        table += `
        <tr>
        <td>${i+1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].count}</td>
        <td>${dataPro[i].category}</td>
        <td>${dataPro[i].price} TND</td>
        <td>${dataPro[i].taxes} %</td>
        <td>${roundedTottva} TND</td>
        <td>${dataPro[i].discount} TND</td>
        <td>${totalArrondi} TND</td>

        <td><button onclick="updateData(${i})" id="update">Modifier</button></td>
        <td><button onclick="deleteData(${i})" id="delete">Supprimer</button></td>

        ` ;
    }
    // ajouter le table dans tbody
    document.getElementById('tbody').innerHTML = table ;
    let btnDelete = document.getElementById('deleteAll')
    if(dataPro.length > 0){
        btnDelete.innerHTML=`
        <button onclick="deleteAll()">Supprimer Tous (${dataPro.length})</button>
        `
    }
    else{
        btnDelete.innerHTML= '' ;
    }

    let tab2 ='';
    let sommeTotaleHT = 0;
    let sommeTotaleTVA = 0;
    let sommeTotaleRemise = 0;
    // let sommeTotaleTTC = 0;

    for(let i = 0 ; i < dataPro.length ; i++){

        const totalArrondi2 = Math.round(parseFloat(dataPro[i].total) * 100) / 100;


        const tottva2 = (dataPro[i].count * dataPro[i].price * dataPro[i].taxes) / 100;

        const roundedTottva = tottva2.toFixed(2); // Arrondit à deux décimales

        tab2 += `
        <tr>
        
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].count}</td>
        <td>${dataPro[i].category}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes} %</td>
        <td>${roundedTottva}</td>
        <td>${dataPro[i].discount}</td>
        <td>${totalArrondi2}</td>

        </tr>

        ` ;

        const priceAsNumber = parseFloat(dataPro[i].price);
        const discountAsNumber = parseFloat(dataPro[i].discount);


        sommeTotaleHT += priceAsNumber;
        sommeTotaleTVA += tottva2;
        sommeTotaleRemise += discountAsNumber;
        // sommeTotaleTTC += totalArrondi2;

    }
    document.getElementById('newtr').innerHTML = tab2 ;


    const sommeTotaleHTArr = Math.round(parseFloat(sommeTotaleHT) * 100) / 100;
    const sommeTotaleTVAArr = Math.round(parseFloat(sommeTotaleTVA) * 100) / 100;
    const sommeTotaleRemiseArr = Math.round(parseFloat(sommeTotaleRemise) * 100) / 100;
    // const sommeTotaleTTCArr = Math.round(parseFloat(sommeTotaleTTC) * 100) / 100;


    document.getElementById('totalHt').textContent = `${sommeTotaleHTArr} TND`;
    document.getElementById('totalTva').textContent = `${sommeTotaleTVAArr} TND`;
    document.getElementById('totalRemise').textContent = `${sommeTotaleRemiseArr} TND`;
    // document.getElementById('totalTtc').textContent = `${sommeTotaleTTCArr} TND`;

}
showData()



//generer pdf
document.getElementById('generatePDF').addEventListener('click', function () {
    // Call the print function when the button is clicked

    if (previousButtonClicked == "devisbtn"){
        function calcTotDev(){

            let sommeTotaleTTC = 0;
            for(let i = 0 ; i < dataPro.length ; i++){
        
                const totalArrondi2 = Math.round(parseFloat(dataPro[i].total) * 100) / 100;
        
                sommeTotaleTTC += totalArrondi2;
        
            }
            const sommeTotaleTTCArr = Math.round(parseFloat(sommeTotaleTTC) * 100) / 100;
            document.getElementById('totalTtc').textContent = `${sommeTotaleTTCArr} TND`;
        
        }
        calcTotDev();

    }
    else{

        function calcTotFact(){

            const timbreValue = parseFloat(TimbreFact.value);
    
    
            let sommeTotaleTTC = 0;
            for(let i = 0 ; i < dataPro.length ; i++){
        
                const totalArrondi2 = Math.round(parseFloat(dataPro[i].total) * 100) / 100;
        
                sommeTotaleTTC += totalArrondi2;
        
            }
            let SOm = sommeTotaleTTC + timbreValue ;
            const sommeTotaleTTCArr = Math.round(SOm * 100) / 100;
            document.getElementById('totalTtc').textContent = `${sommeTotaleTTCArr} TND`;
    
    
    
    
    
            const unites = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
            const dizaines = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];
            const dizainespart = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];
            
            const centaine = ['', 'cent', 'deux cents', 'trois cents', ' quatre cents', 'cinq cents', 'six cents', 'sept cents', 'huit cents', 'neuf cents'];
            const unitemille = ['', 'mille', 'deux milles', 'trois milles', ' quatre milles', 'cinq milles', 'six milles', 'sept milles', 'huit milles', 'neuf milles'];
            const dizainemille = ['', 'dix mille', 'vingt milles', 'trente milles', ' quarante milles', 'cinquante milles', 'soixante milles', 'soixante-dix milles', 'quatre-vingt milles', 'quatre-vingt-dix milles'];
            const centainemille = ['', 'cent mille', 'deux cents mille', 'trois cents mille', ' quatre cents mille', 'cinq cents mille', 'six cents mille', 'sept cents mille', 'huit cents mille', 'neuf cents mille'];
            const exception = ['dix', 'Onze', 'Douze', 'Treize', 'Quatorze', 'Quinze', 'Seize', 'sept', 'huit', 'neuf']
            
            
            
            
            
            
            
            
            
            
            function afficherMessage(message) {
                // resultat.innerHTML = message;
                // document.getElementById('lettreTotTtc').textContent = `En Lettres : ${message}`;

                var lettreTotTtcElement = document.getElementById('lettreTotTtc');
                var strongElement = document.createElement('strong');
                strongElement.textContent = 'En Lettres : ';
                lettreTotTtcElement.innerHTML = ''; // Efface le contenu existant
                lettreTotTtcElement.appendChild(strongElement);
                lettreTotTtcElement.appendChild(document.createTextNode(message));

            }
            
            
            function traiterNombreUn(nombre,partieReelleEntiere){
            
                console.log('partieReelleEntiere : '+partieReelleEntiere)
            
            
            
                uni = Math.floor(partieReelleEntiere % 10)
                dizai = Math.floor(partieReelleEntiere / 10)
            
                if (partieReelleEntiere === 0) {
                    resdec = 'zéro';
                } 
                
                else if (partieReelleEntiere<10) {
                    resdec = unites[partieReelleEntiere];
                } 
            
                else if (partieReelleEntiere<17) {
                    resdec = exception[uni];
                } 
            
                else{
                    if((dizai == 9 || dizai == 7) && (uni)>0 && (uni) <7) {
                        resdec = dizainespart[dizai] + '-' + exception[uni];
                    }
                    else{
                        resdec = dizaines[dizai] + '-' + unites[uni];
                    }
                }
            
            
                if (nombre === 0) {
                    afficherMessage('Zéro Dinar et ' + resdec + ' Millimes');
                } 
                
                else if (nombre<10) {
                    afficherMessage(unites[nombre] +' Dinar Et ' + resdec + ' Millimes');
                } 
            }
            //-------------------------------
            
            function traiterNombreDix(nombre,partieReelleEntiere) {
            
            
                uni = partieReelleEntiere % 10
                dizai = Math.floor(partieReelleEntiere / 10)
            
                if (partieReelleEntiere === 0) {
                    resdec = 'zéro';
                } 
                
                else if (partieReelleEntiere<10) {
                    resdec = unites[partieReelleEntiere];
                } 
            
                else if (partieReelleEntiere<17) {
                    resdec = exception[uni];
                } 
            
                else{
                    if((dizai == 9 || dizai == 7) && (uni)>0 && (uni) <7) {
                        resdec = dizainespart[dizai] + '-' + exception[uni];
                    }
                    else{
                        resdec = dizaines[dizai] + '-' + unites[uni];
                    }
                }
            
                if(nombre < 100){
                    if (nombre<17) {
                        afficherMessage(exception[Math.floor(nombre%10)] +' Dinar Et ' + resdec + ' Millimes');
                    }     
                    else if((Math.floor(nombre / 10)== 9 || Math.floor(nombre / 10)== 7) && (nombre % 10)>0 && (nombre % 10) <7) {
                            afficherMessage(dizainespart[Math.floor(nombre / 10)] + '-' + exception[Math.floor(nombre % 10)] +' Dinar Et ' + resdec + ' Millimes');
                        }
                    else{
                            afficherMessage(dizaines[Math.floor(nombre / 10)] + '-' + unites[Math.floor(nombre % 10)] +' Dinar Et ' + resdec + ' Millimes');
                        }
                }
            }
            
            
            
            
            function traiterNombreCent(nombre,partieReelleEntiere) {
            
            
                
                uni = Math.floor(partieReelleEntiere % 10)
                dizai = Math.floor(partieReelleEntiere / 10)
            
                if (partieReelleEntiere === 0) {
                    resdec = 'Zéro';
                } 
                
                else if (partieReelleEntiere<10) {
                    resdec = unites[partieReelleEntiere];
                } 
            
                else if (partieReelleEntiere<17) {
                    resdec = exception[uni];
                } 
            
                else{
                    if((dizai == 9 || dizai == 7) && (uni)>0 && (uni) <7) {
                        resdec = dizainespart[dizai] + '-' + exception[uni];
                    }
                    else{
                        resdec = dizaines[dizai] + '-' + unites[uni];
                    }
                }
            
            
            
            
            
            
            
                if (nombre < 1000) {
                   
                    let rest = '';
                    if (Math.floor(nombre % 100) >= 10 && Math.floor(nombre % 100) <= 16) {
                        rest = exception[Math.floor(nombre % 10)];
                    }
                    else {
                        const unite = Math.floor(nombre % 10);
                        const dizaine = Math.floor((nombre % 100) / 10);
                        if((dizaine == 9 || dizaine == 7) && (unite)>0 && (unite) <7) {
                            rest = dizainespart[dizaine] + '-' + exception[unite];
                        }
                        else{
                            rest = dizaines[dizaine] + (unite !== 0 ? `-${unites[unite]}` : '');
                        }
                    }
                    afficherMessage(centaine[Math.floor(nombre / 100)] + ' ' + rest +' Dinar Et ' + resdec + ' Millimes');
                }
            }
            
            
            function traiterNombreMille(nombre,partieReelleEntiere) {
            
            
            
            
                uni = Math.floor(partieReelleEntiere % 10)
                dizai = Math.floor(partieReelleEntiere / 10)
            
                if (partieReelleEntiere === 0) {
                    resdec = 'zéro';
                } 
                
                else if (partieReelleEntiere<10) {
                    resdec = unites[partieReelleEntiere];
                } 
            
                else if (partieReelleEntiere<17) {
                    resdec = exception[uni];
                } 
            
                else{
                    if((dizai == 9 || dizai == 7) && (uni)>0 && (uni) <7) {
                        resdec = dizainespart[dizai] + '-' + exception[uni];
                    }
                    else{
                        resdec = dizaines[dizai] + '-' + unites[uni];
                    }
                }    
            
            
            
                if (nombre < 10000) {
                    let rest = '';
            
                    if (Math.floor(nombre % 100) >= 10 && Math.floor(nombre % 100) <= 16) {
                        rest = exception[Math.floor(nombre % 10)];
                    }
                    else {
                        const unite =  Math.floor(nombre % 10);
                        const dizaine = Math.floor(Math.floor(nombre % 100) / 10);
                        if((dizaine == 9 || dizaine == 7) && (unite)>0 && (unite) <7) {
                            rest = dizainespart[dizaine] + '-' + exception[unite];
                            console.log('rest = ' + rest)
                        }
                        else
                            {rest = dizaines[dizaine] + (unite !== 0 ? `-${unites[unite]}` : ''); 
                            }        
                        }
            
                    const centaineMille = Math.floor(Math.floor(nombre / 100) % 10);
                    rest = centaine[centaineMille] + '  ' + rest;
            
                    const mille = Math.floor(nombre / 1000);
                    rest = unitemille[mille] + '  ' + rest;
                    
            
                    afficherMessage(rest+' Dinar Et ' + resdec + ' Millimes');
                }
            }
            
            
            function traiterNombreDixMille(nombre,partieReelleEntiere) {
            
            
            
            
            
            
            
                uni = Math.floor(partieReelleEntiere % 10)
                dizai = Math.floor(partieReelleEntiere / 10)
            
                if (partieReelleEntiere === 0) {
                    resdec = 'zéro';
                } 
                
                else if (partieReelleEntiere<10) {
                    resdec = unites[partieReelleEntiere];
                } 
            
                else if (partieReelleEntiere<17) {
                    resdec = exception[uni];
                } 
            
                else{
                    if((dizai == 9 || dizai == 7) && (uni)>0 && (uni) <7) {
                        resdec = dizainespart[dizai] + '-' + exception[uni];
                    }
                    else{
                        resdec = dizaines[dizai] + '-' + unites[uni];
                    }
                }
            
            
            
            
            
            
                if (nombre < 100000) {
                    let rest = '';
            
                    if (Math.floor(nombre % 100) >= 10 && Math.floor(nombre % 100) <= 16) {
                        rest = exception[(Math.floor(Math.floor(nombre % 100) % 10))];
                    }else {
                        const unite = Math.floor(nombre % 10);
                        const dizaine = Math.floor(Math.floor(nombre % 100) / 10);
                        
                        if((dizaine == 9 || dizaine == 7) && (unite)>0 && (unite) <7) {
                            rest = dizainespart[dizaine] + '-' + exception[unite];
                        }
                        else
                            {rest = dizaines[dizaine] + (unite !== 0 ? `-${unites[unite]}` : ''); 
                            }
                    }
                    const centaineMille = Math.floor(Math.floor(nombre / 100) % 10);
                    if (centaineMille >= 1) {
                        rest = centaine[centaineMille] + '  ' + rest;
                    }
            
                    const mille = Math.floor(Math.floor(nombre / 1000) % 10);
                    const dizaineMille = Math.floor(Math.floor(nombre / 10000) % 10);
            
                    if (mille < 7 && dizaineMille == 1) {
                        rest = (exception[mille] + ' milles ' + rest) ;
                    }
                    else{
                        if((dizaineMille == 9 || dizaineMille == 7) && (mille)>0 && (mille) <7) {
                            rest = dizainespart[dizaineMille] + '-' + exception[mille] + ' milles '+ rest;
                        }
                        else
                            {
                                rest = (dizaines[dizaineMille] + '-' + unites[mille] + ' milles '+ rest) ;
                            }
                    }
            
                    afficherMessage(rest+' Dinar Et ' + resdec + ' Millimes');
                }
            }
            
            
            
            
            function traiterNombreCentMille(nombre,partieReelleEntiere) {
            
            
            
            
            
                uni = Math.floor(partieReelleEntiere % 10)
                dizai = Math.floor(partieReelleEntiere / 10)
            
                if (partieReelleEntiere === 0) {
                    resdec = 'zéro';
                } 
                
                else if (partieReelleEntiere<10) {
                    resdec = unites[partieReelleEntiere];
                } 
            
                else if (partieReelleEntiere<17) {
                    resdec = exception[uni];
                } 
            
                else{
                    if((dizai == 9 || dizai == 7) && (uni)>0 && (uni) <7) {
                        resdec = dizainespart[dizai] + '-' + exception[uni];
                    }
                    else{
                        resdec = dizaines[dizai] + '-' + unites[uni];
                    }
                }
            
            
            
            
            
            
                if (nombre < 1000000) {
                    let rest = '';
            
                    if (Math.floor(nombre % 100) >= 10 && Math.floor(nombre % 100) <= 16) {
                        rest = exception[Math.floor(Math.floor(nombre % 100) % 10)];
                    }else {
                        const unite = Math.floor(nombre % 10);
                        const dizaine = Math.floor(Math.floor(nombre % 100) / 10);
                        if((dizaine == 9 || dizaine == 7) && (unite)>0 && (unite) <7) {
                            rest = dizainespart[dizaine] + '-' + exception[unite];
                        }
                        else
                            {
                                rest = (dizaines[dizaine] + '-' + unites[unite]) ;
                            }
            
            
            
                    }
            
                    const centaineMille = Math.floor(Math.floor(nombre / 100) % 10);
                    rest = centaine[centaineMille] + '  ' + rest;
            
                    const mille = Math.floor(Math.floor(nombre / 1000) % 10);
                    const dizaineMille = Math.floor(Math.floor(nombre / 10000) % 10);
                    const CentaineMille = Math.floor(Math.floor(nombre / 100000) % 10);
            
                    if (mille < 7 && dizaineMille == 1) {
                        rest = (centaine[CentaineMille] + ' ' + exception[mille] + ' milles ' + rest) ;
                    }
                    else {
                        if((dizaineMille == 9 || dizaineMille == 7) && (mille)>0 && (mille) <7) {
                            rest = centaine[CentaineMille] + ' ' +  dizainespart[dizaineMille] + '-' + exception[mille] + ' milles '+ rest;
                        }
                        else{
                            rest = (centaine[CentaineMille] + ' ' +  dizaines[dizaineMille] + '-' + unites[mille] + ' milles '+ rest) ;
                        }
                    }
                    afficherMessage(rest+' Dinar Et ' + resdec + ' Millimes');
                }
            }
            
            
            
            
            
            
                    const nombre1 = sommeTotaleTTCArr; 
                    const partieReelle = nombre1 - Math.floor(nombre1);
                    const partieReelleEntiere = Math.round(partieReelle * 100); // Convertir la partie décimale en un nombre entier
            
            
                    const nombre = sommeTotaleTTCArr;
                // const nombre = parseInt(inputNombre.value);
                if (nombre<10){
                    traiterNombreUn(nombre,partieReelleEntiere)
                }
                else if(nombre<100){
                    traiterNombreDix(nombre,partieReelleEntiere);
                }
                else if(nombre<1000){
                    traiterNombreCent(nombre,partieReelleEntiere);
                }
            
                else if(nombre<10000){
                    traiterNombreMille(nombre,partieReelleEntiere)
                }
            
                else if(nombre<100000){
                    traiterNombreDixMille(nombre,partieReelleEntiere)
                }
            
                else if(nombre<1000000)
                {
                    traiterNombreCentMille(nombre,partieReelleEntiere)
                }
            
                else if (nombre == 1000000)
                {
                    afficherMessage('un million Dinar et zéro Millime ')
                }
        }
        calcTotFact() ;
    }

    window.print();
});



//--------------Clt---------
//nom
const NomClt = document.getElementById('NomClt')
const nomClt = document.getElementById('nomClt')

NomClt.addEventListener('input', function() {
    // Récupérer la valeur de l'input lorsque l'input change
    let valNomClt = NomClt.value;
    
    // Assigner la valeur de l'input au contenu du span
    nomClt.textContent = valNomClt;
});
//adrs
const AdrsClt = document.getElementById('AdrsClt')
const adrsClt = document.getElementById('adrsClt')

AdrsClt.addEventListener('input', function() {
    // Récupérer la valeur de l'input lorsque l'input change
    let valAdrsClt = AdrsClt.value;
    
    // Assigner la valeur de l'input au contenu du span
    adrsClt.textContent = valAdrsClt;
});
//num
const TelClt = document.getElementById('TelClt')
const numClt = document.getElementById('numClt')

TelClt.addEventListener('input', function() {
    // Récupérer la valeur de l'input lorsque l'input change
    let valTelClt = TelClt.value;
    
    // Assigner la valeur de l'input au contenu du span
    numClt.textContent = valTelClt;
});
//mail
// MailClt  mailClt
const MailClt = document.getElementById('MailClt')
const mailClt = document.getElementById('mailClt')

MailClt.addEventListener('input', function() {
    // Récupérer la valeur de l'input lorsque l'input change
    let valMailClt = MailClt.value;
    
    // Assigner la valeur de l'input au contenu du span
    mailClt.textContent = valMailClt;
});
//matricule fiscale
// MatClt matClt
const MatClt = document.getElementById('MatClt')
const matClt = document.getElementById('matClt')

MatClt.addEventListener('input', function() {
    // Récupérer la valeur de l'input lorsque l'input change
    let valMatClt = MatClt.value;
    
    // Assigner la valeur de l'input au contenu du span
    matClt.textContent = valMatClt;
});
//--------------dates&nums---------

//date1 :

const exampleInput1 = document.getElementById('exampleInput1');
const dateDiv = document.getElementById('date');

// Obtenez la date d'aujourd'hui au format jj/mm/aaaa
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const formattedDate = `${day}/${month}/${year}`;

// Afficher la date par défaut dans l'input et le div
exampleInput1.value = currentDate.toISOString().substr(0, 10);
dateDiv.textContent = formattedDate;

// Ajouter un gestionnaire d'événements "input" à l'élément input
inputDate.addEventListener('input', function () {
    const selectedDate = exampleInput1.value;

    // Formater la date au format jj/mm/aaaa
    const parts = selectedDate.split('-');
    if (parts.length === 3) {
        const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;

        // Mettre à jour la valeur de l'élément div avec l'ID "date"
        dateDiv.textContent = formattedDate;
    }
});
//date2
const exampleInput2 = document.getElementById('exampleInput2');
const dateValiditeDiv = document.getElementById('deteValidite');

// Obtenir la date d'aujourd'hui
const currentDate2 = new Date();

// Ajouter un mois à la date d'aujourd'hui
currentDate2.setMonth(currentDate2.getMonth() + 1);

// Formater la date d'un mois après aujourd'hui au format jj/mm/aaaa
const day2 = String(currentDate2.getDate()).padStart(2, '0');
const month2 = String(currentDate2.getMonth() + 1).padStart(2, '0');
const year2 = currentDate2.getFullYear();
const formattedDate2 = `${day2}/${month2}/${year2}`;

// Afficher la date par défaut dans l'input et le div
exampleInput2.value = currentDate2.toISOString().substr(0, 10);
dateValiditeDiv.textContent = formattedDate2;

// Ajouter un gestionnaire d'événements "input" à l'élément input
exampleInput2.addEventListener('input', function () {
    const selectedDate2 = exampleInput2.value;

    // Formater la date au format jj/mm/aaaa
    const parts = selectedDate2.split('-');
    if (parts.length === 3) {
        const formattedDate2 = `${parts[2]}/${parts[1]}/${parts[0]}`;

        // Mettre à jour la valeur de l'élément div avec l'ID "deteValidite"
        dateValiditeDiv.textContent = formattedDate2;
    }
});