function printetoile(n){
    let l='';
    for(let i=0; i<n ; i++){
       l += '*' ;
    }
    console.log(l);
}

function afficherRectangle(hauteur,largeur){
    for(let i=0;i<hauteur
        ;i++){
        printetoile(largeur);
    }
}

function afficherTriangleDroite(n) {
    for (let i = 1; i <= n; i++) {
        let espaces = " ".repeat(n+1);
        let etoiles = "*".repeat(i);
        let dec = "\\";
        console.log(espaces + etoiles + dec);
    }
}
function afficherTriangleGauche(n) {
    for (let i = 0; i < n; i++) {
        let dec='/';
        let espaces = " ".repeat(n - i);
        let etoiles = "*".repeat(i);
        proccess.stdout.write(espaces + dec + etoiles);
    }
}

function afficherPointeSapin(n) {
   
    let space = ' '.repeat(n +1);
    console.log(space + '+');
    let decg ='/';
    let decd='\\';
    for (let i = 1; i <= n; i++) {
        let esp = ' '.repeat(n - i);
        let stars = '*'.repeat(i);
        let ligne = esp + decg + stars +'|' + stars + decd;
        console.log(ligne);
    }
    
}
function afficherEtage(hauteur, pointe_offset, espacement) {
    let res = '';
    const largmax = 1 + 2 * (hauteur - 1);
    
    for (let l = pointe_offset; l < hauteur; l++) {
        const larl = 1 + 2 * l;
        const essp = (largmax - larl) / 2;
        
        for (let i = 0; i < espacement; i++) {
            res += ' ';
        }
        
        for (let i = 0; i < essp; i++) {
            res += ' ';
        }
        
       res += '/';
        
        for (let i = 0; i < larl / 2; i++) {
            res += '*';
        }
            res += '|';
        for (let i = 0; i < larl / 2; i++) {
            res += '*';
        }
    
        res += '\\';
        
        res += '\n';
    }
    
    return res;
}

function afficherSapin(etages, hauteur_etage) {
    let sapin = '';
    
    for (let i = 0; i < etages + hauteur_etage ; i++) sapin += ' ';
    sapin += '+\n';
    
    for (let i = 0; i < etages + hauteur_etage - 1; i++) sapin += ' ';
    sapin += '/|\\\n';
   
    

    for (let etage = 0; etage < etages; etage++) {
        const espacement = etages - etage - 1;
        sapin += afficherEtage(hauteur_etage + etage, 0, espacement);
    }
    
    const espacementTronc = etages + hauteur_etage - 1;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < espacementTronc; j++) sapin += ' ';
        sapin += '###\n';
    }
    
    console.log(sapin);
}
   

//afficherTriangleDroite(5);
//afficherPointeSapin(5);
//afficherEtage(3,0,3);
afficherSapin(3,3);
