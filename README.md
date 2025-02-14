# Travel Budget

## Description du projet
Une application web qui permet de calculer un budget pour un voyage en fonction de sa durée et des dépenses prévues.

## Fonctionnement 
Tout d'abord, il est nécessaire de rentrer le budget prévu dans la case "Budget" et la durée prévue du voyage en jours dans la case "Days".
Ensuite, vous pouvez des dépenses grâce au formulaire prévu à cet effet juste en dessous. Pour ajouter une dépense, il sera demander de renseigner les informations suivantes :
- Description : nom de la dépense (exemple: hôtel, restaurants, avion...)
- Amount : le coût de la dépense
- Type : définir si la dépense se reproduit tous les jours (daily) ou si c'est une dépense unique
- Total : montant total de la dépense. Si type = one-time, alors le total sera égal à amount. Si type = daily, alors le total sera égal à amount multiplié par la durée du voyage (days)
- Add expense : permet d'ajouter la dépense et de reset le formulaire
La somme des dépenses est ensuite calculé et afficher dans "Total expenses", puis la case "Money left" affichera la quantité d'argent disponible après avoir soustrait le total des dépenses au budget prévu.

## Technologies utilisées
Ce site web a été réalisé grâce aux Framework React et Redux du langage de programmation JavaScript.

## Lien vers le site web
Le site web est déployé à l'adresse suivante : [https://jordandonguy-travelbudget.netlify.app](https://jordandonguy-travelbudget.netlify.app)