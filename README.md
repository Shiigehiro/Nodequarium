# Nodequarium
[Exercice du Javaquarium](https://zestedesavoir.com/forums/sujet/447/javaquarium/) fait en NODE.js

Avancement actuel : 

Exercice 1.2 : un peu de diversité
- [x] Rajouter les especes de poisson
- [x] Rajouter les sexes
- [x] Stockage des poissons et des algues
- [x] Systeme et tour
- [x] Rajouter les types carnivore et herbivores
- [ ] Faire manger tout les poissons a chaque tours

En fait, des poissons tous identiques, c'est pas très passionnant. Dans le magasin où se fournit monsieur Shingshan, on trouve des poissons carnivores et d'autres herbivores. Il y a six races de poissons : Poissons carnivores : Mérou, Thon, Poisson-clown. Poissons herbivores : Sole, Bar, Carpe. Chaque poisson peut donc manger (une méthode) : selon s'il est carnivore, il mange une algue (paramètre : une algue), ou un autre poisson (paramètre : un poisson quel qu'il soit).

# Partie 1 : Peuplons notre Nodequarium
## Exercice 1.1 : Remplissage de l'aquarium

Il s'agit de la base du programme : avoir un aquarium rempli. L'aquarium contient des poissons et des algues, un nombre quelconque de chaque. L'algue ne fait rien : c'est une algue, elle se contente d'exister ou non. Le poisson, lui, a un nom (monsieur Shingshan aime ses poissons et leur donne un nom à chacun) et un sexe (mâle ou femelle). L'aquarium a une méthode une méthode pour ajouter un poisson (avec son nom et son sexe), et une autre méthode pour ajouter une algue. L'aquarium a une méthode pour faire passer le temps : à chaque nouveau tour, on fait toutes les actions (ce qui n'est pas très passionnant pour l'instant puisqu'il n'y en a aucune) et on affiche sur la console :

* Le nombre d'algues présentes
* La liste des poissons avec leur nom et leur sexe.

## Exercice 1.2 : un peu de diversité

En fait, des poissons tous identiques, c'est pas très passionnant. Dans le magasin où se fournit monsieur Shingshan, on trouve des poissons carnivores et d'autres herbivores. Il y a six races de poissons : **Poissons carnivores** : Mérou, Thon, Poisson-clown. **Poissons herbivores** : Sole, Bar, Carpe. Chaque poisson peut donc manger (une méthode) : selon s'il est carnivore, il mange une algue (paramètre : une algue), ou un autre poisson (paramètre : un poisson quel qu'il soit).

# Partie 2 : Mange, tu ne sais pas qui te mangera
## Exercice 2.1 : Miam miam miam !

Nos poissons sont des goinfres : à chaque tour, tous les poissons mangent, et ils mangent tout ce qu'ils ont commencé. En clair, ça veut dire que ce qui et mangé disparaît purement et simplement. Attention : un poisson ne peut pas se manger lui-même, et un poisson mangé ne peut rien faire. L'algue ou le poisson mangé est choisi au hasard.

## Exercice 2.2 : un peu de douceur dans ce monde de brutes

Tout ça est beaucoup trop brutal, introduisons la notion de points de vie (PV).

Les poissons et les algues sont des êtres vivants. Tous les êtres vivants commencent avec 10 PV. Un être vivant qui arrive à 0 PV meurt.

Chaque algue grandit à chaque tour : elle gagne 1 PV. Une algue mangée par un poisson perds 2 PV.

A chaque tour qui passe, le poisson a de plus en plus faim : il perds 1 PV. Un poisson qui a suffisamment faim (5 PV ou moins) cherche à manger. Les herbivores n'ont pas trop de problème, mais les algues ne sont pas très nourrissantes : +3 PV. Les carnivores mangent de la bonne viande de poisson, qui fait gagner +5 PV. Un carnivore attaque chaque tour un poisson au hasard : il n'a qu'une seule chance. Hélas pour lui, il ne peut ni se manger lui-même, ni manger un poisson de son espèce. Se faire mordre fait très mal et fait perdre 4 PV.

# Partie 3 : Reproductions
## Exercice 3.1 : Le désastre du vieillissement

Tous les êtres vivants naissent à l'âge de 0 tours. Les êtres vivants qui ont plus de 20 tours meurent de vieillesse.

On peut acheter des poissons et des algues à un âge quelconque.

## Exercice 3.2 : Le miracle de la jeunesse

Notre aquarium précédent est condamné à être désert au bout de 20 tours, ou alors il faut remettre sans arrêt des algues et des poissons. Pas très intéressant, non ? Nous avons des poissons mâles et femelles ? Faisons-les se reproduire !

Un poisson qui n'a pas faim va aller voir un autre poisson (au hasard). Si ce poisson est de même race et de sexe opposé, les deux poissons se reproduisent et donnent naissance à un troisième poisson, de même race et de sexe aléatoire. Il n'a qu'un seul essai par tour.

Concernant les algues, c'est plus simple : Une algue qui a 10 PV ou plus se sépare en deux pour donner naissance à une algue deux fois plus petite, donc avec deux fois moins de PV. Évidemment l'algue parente perds la moitié de ses PV dans le processus, mais garde son âge.

## Exercice 3.3 : Mais… la sexualité des poissons est horriblement compliquée !

Eh bien oui, la sexualité des poisson est horriblement compliquée. Pourquoi ? Parce qu'ils ne sont pas simplement "mâle" ou "femelle" ! On distingue : Le poisson mono-sexué : Comme vous et moi, ces poissons naissent mâle ou femelle et n'en changent plus. Le poisson hermaphrodite avec l'âge : Ce poisson passe les 10 premiers tours de sa vie en tant que mâle et les 10 suivants en tant que femelle. Le poisson hermaphrodite opportuniste : Ce poisson va rencontrer un membre de son espèce. Si ce membre est de même sexe que lui, notre poisson change de sexe pour pouvoir se reproduire.

Je rappelle que nous avons déjà des races herbivores et carnivores, ce qui nous donne le tableau suivant :

Poisson | Herbivore | Carnivore
------- | --------- | ---------
Mono-sexué | Carpe | Thon
Hermaphrodite avec l'âge | Bar | Mérou
Hermaphrodite opportuniste | Sole | Poisson-clown

# Partie 4 : Rendons notre simulateur d'aquarium pratique
## Exercice 4.1 : Sauvez Willy !

Monsieur Shingshan voudrait pouvoir sauvegarder l'état actuel de la simulation (par exemple au tour 35) dans un fichier (par exemple un .poisson) pour pouvoir la reprendre plus tard.

## Exercice 4.2 : Un fichier pour les enregistrer tous…

Monsieur Shingshan voudrait que les rapport de ce qui s'est passé dans le tour s'enregistrent dans un fichier en plus d'être affichés sur la console.

## Exercice 4.3 : … et dans un fichier les charger

Monsieur Shingshan est aquariophile mais pas programmeur, et n'a pas envie de re-compiler le programme à chaque fois qu'il veut changer les poissons et les algues introduits au début. De toutes façons, il ne sait pas ce qu'est "recompiler". Il veut bien lancer le programme en ligne de commande, mais il veut pouvoir écrire les poissons et les algues dans un fichier texte dont il passerait le nom au programme. Il fournit un exemple de fichier (les lignes qui commencent par // sont des commentaires et n'apparaitrons jamais dans le fichier).

```
// 1- Algues
// Format : [Nombre d'algues] algues [âge] ans
1 algues 10 ans

// 2- Poissons
// Format : [nom], [race], [âge] ans
Anaclet, Poisson-clown, 1 ans
```

## Exercice 4.4 : Tourne, la roue tourne…

Monsieur Shingshan voudrait pouvoir ajouter des poissons et des algues à n'importe quel tour. Le tour d'insertion serait indiqué par des séparateurs comme celui-ci :

```
===== tour 5 ====
```

## Exercice 4.5 : Le petit neveu

Monsieur Shingshan voudrait donner le simulateur à son petit-neveu, Ashini. Sauf que celui-ci, bien qu'aquariophile, n'est pas précautionneux : il ne faudrait pas qu'il puisse planter son PC avec le logiciel.
