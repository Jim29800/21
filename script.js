console.log("coucou")

let nombreJoueur = 0;
let min = 2;
let max = 9;
let erreur = "Le nombre de joueurs doit être compris entre " + min + " et " + max ;

let joueurs = [];



function random() {
    return Math.floor(Math.random() * Math.floor(9) + 1);
}

$("#setup").click(function(){
    nombreJoueur = parseInt($("#nombreJoueur").val());

    if (nombreJoueur >= min && nombreJoueur <= max) {
        $("#afficher").html("")        
        for (let i = 1; i < nombreJoueur + 1; i++) {
            $("#afficher").append(
                '<div><button class="joueur" data-joueur= ' + i + '>Joueur ' + i + '</button> Total : <span id="total' + i + '">0</span></div>'
            )
            joueurs[i] = 0;
        }
    }else{
        $("#afficher").html(erreur)
    }
})





$(document).on("click", ".joueur", function(){
    
    idJoueur = parseInt($(this).data("joueur"));
    joueurs[idJoueur] = joueurs[idJoueur] + random();
    $("#total" + idJoueur).html(joueurs[idJoueur])

    console.log("Joueurs : " + joueurs);
    // console.log("Joueur 1 : " + joueurs[1]);

})
