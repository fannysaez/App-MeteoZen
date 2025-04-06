# Création des branches collaboratives

2. Créer et basculer sur une nouvelle branche

- Chacun crée sa propre branche à partir de main :

### Se placer sur main et récupérer les dernières modifications
```bash
git checkout main
git pull main
```

### Créer et basculer sur la branche de Fanny
``` bash
git checkout -b fanny
git push fanny
```

### Créer et basculer sur la branche d’Amine
``` bash
git checkout -b Amine
git push Amine
```

### Créer et basculer sur la branche de Noémie
``` bash
git checkout -b Noémie
git push Noémie
```

3. Travailler sur votre branche

Faites vos modifications dans les fichiers HTML, CSS ou JS.

4. Ajouter et valider les modifications

``` bash
git add .
git commit -m "Ajout de la barre de recherche"
```

5. Pousser votre branche sur GitHub

``` bash
git push origin nom-de-ta-branche
```

<p align="center">
<a href="./jobBranch.md">Suivant</a>
</p>