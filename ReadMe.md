# Tutoriel Git

## Introduction

Git est un système de contrôle de version distribué qui permet de suivre les modifications apportées au code source pendant le développement du logiciel. Il est conçu pour gérer tout, des petits aux grands projets avec rapidité et efficacité.


## Configuration initiale

Après l'installation, vous devez configurer votre nom d'utilisateur et votre adresse e-mail car Git insère ces informations dans chaque commit.

\`\`\`
git config --global user.name "Votre Nom"
git config --global user.email "votreemail@example.com"
\`\`\`

## Créer un nouveau dépôt

Pour créer un nouveau dépôt, utilisez la commande `git init`.

\`\`\`
git init
\`\`\`

## Cloner un dépôt

Pour cloner (copier) un dépôt existant, utilisez la commande `git clone`.

\`\`\`
git clone url_du_dépôt
\`\`\`

## Faire des changements

Pour proposer des changements, vous devez d'abord les ajouter à l'index avec la commande `git add`.

\`\`\`
git add nom_du_fichier
\`\`\`

Pour ajouter tous les fichiers modifiés, utilisez `git add .`.

Ensuite, vous pouvez confirmer vos changements avec la commande `git commit`.

\`\`\`
git commit -m "Message de commit"
\`\`\`

## Pousser les changements

Pour envoyer vos modifications à un dépôt distant, utilisez la commande `git push`.

\`\`\`
git push origin nom_de_la_branche
\`\`\`

## Tirer les changements

Pour récupérer les modifications d'un dépôt distant et les fusionner avec votre branche locale, utilisez la commande `git pull`.

\`\`\`
git pull origin nom_de_la_branche
\`\`\`

---------------------

## Faire une Pull Request

Une Pull Request (PR) est une méthode pour soumettre des contributions à un projet existant. Elle permet aux développeurs de proposer des modifications qui peuvent ensuite être examinées et éventuellement intégrées au projet. Voici comment créer une Pull Request sur GitHub :

1. **Forker le dépôt** : Cliquez sur le bouton "Fork" en haut à droite de la page du dépôt pour créer une copie du dépôt sur votre compte GitHub.

2. **Cloner le dépôt forké** : Clonez le dépôt forké sur votre machine locale en utilisant la commande `git clone`.

    \`\`\`bash
    git clone url_de_votre_fork
    \`\`\`

3. **Créer une nouvelle branche** : Créez une nouvelle branche sur laquelle vous allez travailler. Cela permet de séparer vos modifications des autres travaux en cours sur le dépôt.

    \`\`\`bash
    git checkout -b nom_de_votre_branche
    \`\`\`

4. **Faire des modifications** : Apportez les modifications nécessaires au code et ajoutez-les à l'index avec la commande `git add`.

    \`\`\`bash
    git add nom_du_fichier
    \`\`\`

    Puis, confirmez vos modifications avec la commande `git commit`.

    \`\`\`bash
    git commit -m "Description des modifications"
    \`\`\`

5. **Pousser les modifications** : Envoyez vos modifications à votre dépôt forké sur GitHub avec la commande `git push`.

    \`\`\`bash
    git push origin nom_de_votre_branche
    \`\`\`

6. **Créer une Pull Request** : Allez sur la page de votre dépôt forké sur GitHub, et cliquez sur le bouton "New Pull Request". Sélectionnez la branche que vous avez créée, puis cliquez sur "Create Pull Request". Ajoutez une description de vos modifications, puis cliquez sur "Create Pull Request".

7. **Attendez la revue** : Les propriétaires du dépôt original examineront vos modifications. Ils peuvent demander des modifications supplémentaires ou accepter et fusionner vos modifications avec le projet principal.

Notez que ce processus peut varier légèrement en fonction de la plateforme que vous utilisez (GitHub, GitLab, Bitbucket, etc.).
