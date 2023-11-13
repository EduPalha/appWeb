/*
EVENT LOOP:
A principal razão para isso é melhorar o desempenho.
O JavaScript opera em um único thread, o que significa que ele precisa lidar com diversas tarefas simultaneamente, 
como executar seu código, renderizar a tela (incluindo cálculos CSS e desenho de pixels) e responder às interações 
do usuário, como cliques em botões ou rolagem de página. Todas essas tarefas acontecem no mesmo thread.
Quando a pilha de chamadas fica sobrecarregada com muitas tarefas, seu site pode parar de responder. Para evitar 
esse problema, o navegador utiliza um sistema de agendamento para chamadas de API Web.

Este sistema permite que o navegador adie essas tarefas até que a pilha de chamadas esteja vazia, garantindo que 
seu site permaneça responsivo. Entretanto, é importante observar que o loop de eventos, embora eficaz no gerenciamento 
dessas tarefas, não é um design perfeito. Ainda é possível desacelerar inadvertidamente o seu site devido à forma 
como o JavaScript funciona dentro do navegador.

O loop de eventos executa uma tarefa: verifica constantemente se há algum item na fila de retorno de chamada e os 
envia para a pilha de chamadas, mas apenas quando a pilha de chamadas não está ocupada.

https://hackernoon.com/understanding-the-javascript-event-loop-everything-you-need-to-know?source=rss&ref=dailydev
*/