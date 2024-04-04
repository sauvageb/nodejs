# Utilisation de Mongodb

## Pré-requis :

## Installation de MongoDB et de Compass nécessaire

Installer Compass ou visualiser la base de données graphiquement :
https://www.mongodb.com/docs/compass/current/install/

Installer une instance de MongoDB, soit directement sur la machine, soit via docker

### OPTION 1 : Via docker :

```docker run --name mongodb -itd -p 27017:27017 mongodb/mongodb-community-server:latest```

### OPTION 2 : Sur la machine

https://www.mongodb.com/docs/v3.0/tutorial/install-mongodb-on-windows/

#### Création d'un dossier local dans le projet (/data/db)

Sur Windows : (Par défaut, il est situé sur le C:\data\db)
Sur MacOS   : (Par défaut, il est situé sur le ~\data\db)

Créer un dossier dans votre répertoire courant :
```mkdir -p ./data/db```

## Lancement de votre base de données MongDB

```mongod --dbpath ./data/db/```

## En parallèle, lancez votre mongosh (Shell mongo)

```mongosh```

###  
