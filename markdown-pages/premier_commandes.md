---
title: "Les premieres commandes"
path: "/premiere-commandes"
step: 2
---

# Docker, c'est un CLI

Sans plus attendre, nous allons jouer avec le CLI `docker`.

Essayez :
```bash
docker version
```

Vous devriez obtenir un output ressenblant a ca:
```bash
$ docker version
Client:
 Version:           18.09.3-ce
 API version:       1.39
 Go version:        go1.12
 Git commit:        774a1f4eee
 Built:             Thu Feb 28 20:38:40 2019
 OS/Arch:           linux/amd64
 Experimental:      false

Server:
 Engine:
  Version:          18.09.3-ce
  API version:      1.39 (minimum version 1.12)
  Go version:       go1.12
  Git commit:       774a1f4eee
  Built:            Thu Feb 28 20:37:49 2019
  OS/Arch:          linux/amd64
  Experimental:     false
```

Comme vous pouvew le constater ici, la commade `docker` est un client qui va discuter avec un daemon/server via un API. C'est le deamon qui va parler avec les primitives du noyau Linux pour realiser la 'magie' de la conteneurisation.

Puis, lachez vous en tentant la commande suivante :
```bash
docker info
```

Vous devriez avoir un truc qui ressemble a ca:
```bash
$ docker info
Containers: 16
 Running: 13
 Paused: 0
 Stopped: 3
Images: 173
Server Version: 18.09.3-ce
Storage Driver: overlay2
 Backing Filesystem: extfs
 Supports d_type: true
 Native Overlay Diff: false
Logging Driver: json-file
Cgroup Driver: cgroupfs
Plugins:
 Volume: local
 Network: bridge host macvlan null overlay
 Log: awslogs fluentd gcplogs gelf journald json-file local logentries splunk syslog
Swarm: inactive
Runtimes: runc
Default Runtime: runc
Init Binary: docker-init
containerd version: 9f2e07b1fc1342d1c48fe4d7bbb94cb6d1bf278b.m
runc version: ccb5efd37fb7c86364786e9137e22948751de7ed-dirty
init version: fec3683
Security Options:
 seccomp
  Profile: default
Kernel Version: 5.0.0-arch1-1-ARCH
Operating System: Arch Linux
OSType: linux
Architecture: x86_64
CPUs: 4
Total Memory: 15.43GiB
Name: archi
ID: ZDP4:3AYQ:CCFD:EKB5:LYP2:E4EH:F7TV:F5A3:EZQX:WIUK:ONPK:DHQI
Docker Root Dir: /var/lib/docker
Debug Mode (client): false
Debug Mode (server): false
Username: jpthiery
Registry: https://index.docker.io/v1/
Labels:
Experimental: false
Insecure Registries:
 127.0.0.0/8
Live Restore Enabled: false

```
<!-- A voir si nous leur donnons ici quelques explications sur l'output. -->