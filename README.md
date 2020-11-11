# check-email-algorithm
Algoritmo JavaScript (JS) que valida e-mails através de uma função (front-end ou back-end).

# Instalação

### Copiando e colando
Por padrão, basta você criar um arquivo chamado ```CheckEmail.js``` nos seus arquivos de código, copiar e colar o código que está aqui e jogar dentro do repositório. Se estiver validando e-mails no front-end, possivelmente será necessário remover a última linha de código ```module.exports = CheckEmail;``` do seu arquivo e chama-la como for necessário ao seu formato padrão de desenvolvimento.

### Git Clone
Uma maneira mais fácil de você baixar este código é fazendo um ```Git Clone``` no repositório. Para isso, entre no seu ```terminal``` padrão e digite ```git clone https://github.com/anaeljonasgit/check-email-algorithm``` (obs: você precisa ter o git instalado na sua máquina).

# Usagem

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
