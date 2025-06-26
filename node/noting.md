Aqui vou anotar uns comandos node

var n1 = 1534.5
n1
n1.toFixed(2)
n1 // 1534.50

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}) // 'US$ 1.534,50'
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}) // '€ 1.534,50'

operador ternário: 
1>0.1?`é`:`n é` // é
1<0.1?`é`:`n é` // n é
