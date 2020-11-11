# check-email-algorithm
Algoritmo JavaScript (JS) que valida e-mails através de uma função (front-end ou back-end).

```
CheckEmail('anaeljonas@outlook.com');
Retorna true
```

```
CheckEmail('anael@$#$@$@outlook.com');
Retorna false
```

```
CheckEmail('a@o.c');
Retorna true
```

```
CheckEmail('@');
Retorna false
```

```
CheckEmail('aoc');
Retorna false
```

```
CheckEmail(anael.@.jonas.com);
Retorna false
```
