[Container With Most Water - LeetCode](https://leetcode.com/problems/container-with-most-water/)

Esse eu consegui achar a solução óbvia, mas não a solução ótima.

A primeira pode ser alcançada simplesmente verificando todas as combinações entre as colunas do array.

Esse algoritmo tem complexidade `O(n^2)`. É possível deduzir isso com a fórmula da combinação (expressões matemáticas vão chover nesse blog assim que eu tiver tempo de analisar como renderizá-las no navegador).

Quando fui submeter minha resposta, o LeetCode rejeitou por ter excedido o limite de tempo :'(

Então fiquei pensando numa solução mais eficiente. Era tarde da noite e eu cedi à tentação de olhar a resposta. Porém, mesmo olhando a resposta eu não entendi de imediato.

Eu entendi como o algoritmo funcionava, mas não entendi como ele _garantia_ a resposta correta. Fui dormir, que é a melhor coisa a se fazer nesse tipo de situação.

No dia seguinte, olhei com cuidado a solução e consegui finalmente entender como o algoritmo garante a resposta correta. Esse algoritmo tem complexidade `O(n)` e é a solução ótima.

A explicação que me fez entender eu encontrei aqui:

https://www.enjoyalgorithms.com/blog/container-with-most-water
