## Utilisation de l'ORM Sequelize

### Génération des models depuis la base de données (via sequelize-auto)

```npm install -g sequelize-auto```
```npm install -g mysql2```

```sequelize-auto --output "./repository/entity" --database nodejs_atelier4 --host 127.0.0.1 --port 8889 --dialect mysql --user root --pass root```

- **--output :** précise le dossier de sortie (sources générées)
- **--database :** indique le nom de votre base de données
- **--host :** indique l'hôte (127.0.0.1 en local par exemplee)
- **--port :** indique le port de votre base de données (3306 par défaut sur MySQL)
- **--dialect :** indique le dialect (mysql par exemple)
- **--user :** indique le nom d'utilisateur votre base de données
- **--pass :** indique le mot de passe de l'utilisateur votre base de données
