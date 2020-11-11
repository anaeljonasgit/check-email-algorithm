# check-email-algorithm
Algoritmo JavaScript (JS) que valida e-mails através de uma função (front-end ou back-end).

```
CheckEmail('anaeljonas@outlook.com');
true
```

> CheckEmail('anael@$#$@$@outlook.com');
> false

> CheckEmail('a@o.c');
> true

> CheckEmail('@');
> false

> CheckEmail('aoc');
> false

> CheckEmail(anael.@.jonas.com);
> false
