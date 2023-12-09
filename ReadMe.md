# Tutoriel Git en Markdown

## Introduction

Git est un système de contrôle de version distribué qui permet de suivre les modifications apportées au code source pendant le développement du logiciel. Il est conçu pour gérer tout, des petits aux grands projets avec rapidité et efficacité.

## Installation

Pour installer Git, visitez le [site officiel de Git](https://git-scm.com/downloads) et téléchargez le logiciel pour votre système d'exploitation.

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

## Conclusion

Ceci est un aperçu de base de l'utilisation de Git. Git a beaucoup plus de fonctionnalités et d'options. Pour en savoir plus, consultez la [documentation officielle de Git](https://git-scm.com/doc).