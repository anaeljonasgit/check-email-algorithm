# Check E-mail Algorithm (Algoritmo de Checagem de E-mails)
Algoritmo JavaScript (JS) que valida e-mails através de uma função (front-end ou back-end).

# Instalação

### Copiando e colando
Por padrão, basta você criar um arquivo chamado ```CheckEmail.js``` nos seus arquivos de código, copiar e colar o código que está aqui e jogar dentro do repositório. Se estiver validando e-mails no front-end, possivelmente será necessário remover a última linha de código ```module.exports = CheckEmail;``` do seu arquivo e chama-la como for necessário ao seu formato padrão de desenvolvimento.

### Git Clone
Uma maneira mais fácil de você baixar este código é fazendo um ```Git Clone``` no repositório. Para isso, entre no seu ```terminal``` padrão e digite ```git clone https://github.com/anaeljonasgit/check-email-algorithm``` (obs: você precisa ter o git instalado na sua máquina).

# Usagem

Todo o algoritmo foi desenvolvido de forma a retornar apenas 2 valores possíveis: ```true``` ou ```false```. E essa resposta irá depender da string input que a gente colocar dentro do escopo da função. Um exemplo de e-mail válido de sucesso é o que temos logo abaixo. Ele possui diversas características condizentes com um email de verdade: possui um tamanho definido, um arroba, um ponto após o arroba e nenhum caractere especial que possa permitir códigos de invasão ao nosso banco de dados.
```
CheckEmail('anaeljonas@outlook.com');
Retorna true
```

Inserir caracteres maiúsculos ou minúsculos não tem diferença:
```
CheckEmail('AnaelJonasAlencar@outlook.com');
Retorna true
```

Porém, o uso de caracteres especiais/desconhecidos são rejeitados na mesma hora:
```
CheckEmail('anael@$#$@$@outlook.com');
Retorna false
```

Assim como qualquer coisa que interfira o primeiro caractere, o último caractere e tudo o que estiver em volta do arroba:
```
CheckEmail(.anael.@.jonas.com.);
Retorna false
```

O mínimo viável que um e-mail precisa ter são: o arroba, o ponto e um tamanho de pelo menos 5 caracteres.
```
CheckEmail('a@o.c');
Retorna true
```

O uso de e-mails menores que isso ou que não obdecem a todas as condições possível, são rejeitados imediamente.
```
CheckEmail('aoc');
Retorna false
```

Muito obrigado a todos que utilizaram ou utilizam este algoritmo em seus códigos no dia a dia!

Criado por Anael Jonas (E-mail: anaeljonas@outlook.com - Twitter: @anaeljonastt).
