---
title: "Lancement"
path: "/lancement"
step: 1
---

# Vous avez installe Docker sur votre machine

Parfait, vous pouvez passer a l'etape suivante.

# Vous n'avez pas Docker sur votre poste

Les gentils organisateurs vont vous faire circuler une cle USB contenu une cle privee qui vous permettra d'avoir access a une machine dans Cloud avec docker d'installer dessus.

De plus, nous avons du vous remettre un petit papier avec un nom de machine que nous affecterons a `THE_NICE_ENGINE_HOSTNAME`.

Une fois le fichier `docker.pem` de copier sur votre poste, vous devriez etre en mesure de vous connecter a votre machine en tant la commande suivante :

```bash
ssh -i docker.pem <THE_NICE_ENGINE_HOSTNAME>
```

En cas de probleme, n'hesitez pas a nous solliciter.