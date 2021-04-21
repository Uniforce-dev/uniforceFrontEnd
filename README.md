# uniforceFrontEnd

    Le projet donne une structure de base avec un design basique aux couleurs de UNI-FORCE.

    Il permet d'ajouter des pages simplement.

    La logique des props et du state est fonctionnelle.

[http://www.uni-force.bzh/](http://www.uni-force.bzh/)

    Le site en ligne est en construction. Mais un contenu alternatif minimum est disponible.

---
## Framework ReactJS

[Help & tutorials](https://github.com/MaximeMerrien/uniforceFrontEnd/wiki/Help-&-tutorials)

---
## Uniforce web site with REACTJS

[Installation](https://github.com/MaximeMerrien/uniforceFrontEnd/wiki/Installation)

---
## Basics Components in App.js

[Examples](https://github.com/MaximeMerrien/uniforceFrontEnd/wiki/Components-with-ReactJS)

---
## State & API

[Examples](https://github.com/MaximeMerrien/uniforceFrontEnd/wiki/State-&-API-call)



# Documentation du projet de développement du site Uniforce : 
Pour travailler sur le projet il faut un environnement composé de npm et de nodejs.

Pour récupérer le code source du projet vous devez cloner le projet sur le github : https://github.com/Uniforce-dev/uniforceFrontEnd
Une fois le projet cloné sur la machine ouvrir un terminal dans le dossier de code et faire « npm install » 
Framework Reactjs 
Le projet comporte des « assets », « data » et « views »
-	Assets regroupe les éléments de styles « img » et « jss » 
o	Img : regroupe les ressources en image du site (logos, icons etc…)
o	Jss : regroupe les fichiers de styles (css)
-	Data permet de regrouper des datas pour les tests 
-	Views regroupe le code logique pour la récupération, le traitement et l’affichage des données :
o	La partie front-end est divisée en plusieurs components : 
	Home qui est la page d’accueil du site 
	LeftMenu est le menu vertical sur la gauche de l’écran qui appelle le component Menu
	Menu est le contenu du menu et la navigation vers les autres pages du site
	homeHeader regroupe la navigation de la page home avec les ancres 
	footer est l’élément de bas de page avec les liens externes 
	Le dossier « planning » permet la gestion de l’affichage des plannings des streams prévus sur la semaine courante : 
	dayplan : 
	planning :
	stream template : 
	Les dossiers « présentation » et « streamers » sont les autres pages du site ils contiennent les components nécessaires à l’affichage des infos : 
•	présentation 
o	uniforce présentation : affichage de la présentation de l’association 
•	streamers 
o	gamer card : component de présentation d’un streamer 
o	uniforce team : page regroupant toutes les gamercard 
o	la partie back-office est en cours de réalisation, pour cela nous avons implémenté une librairie spécifique (react-admin) pour retrouver cette partie vous pouvez récupérer la branche devSego du git. Le  dossier back contient les fichiers nécessaires au fonctionnement du back-office. 
	Le fichier back : permet de récupérer les données du back-end grâce à l’api 

