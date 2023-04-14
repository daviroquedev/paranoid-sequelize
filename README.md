# paranoid-sequelize

<p>O paranoid é um recurso do Sequelize que adiciona suporte para exclusão suave (soft delete) em modelos, ou seja, em vez de excluir fisicamente um registro do banco de dados, o registro é marcado como excluído e ainda pode ser recuperado posteriormente. </p>

<p>Quando você define paranoid: true em um modelo do Sequelize, ele adiciona uma coluna "deletedAt" na tabela do banco de dados, que é preenchida com a data e hora em que o registro foi marcado como excluído.  Isso permite que o Sequelize exclua o registro logicamente, mas ainda o mantenha no banco de dados para fins de auditoria ou recuperação posterior.</p>

<p>Para realizar a exclusão suave em um registro, você pode usar o método destroy() no modelo. Quando você chama esse método em um registro, ele não é excluído fisicamente, mas a coluna "deletedAt" é preenchida com a data e hora atual. Se você quiser recuperar o registro posteriormente, poderá usar o método restore(), que remove a marcação de exclusão suave. </p>

<p> Por padrão, o Sequelize exclui registros marcados como excluídos quando você chama o método destroy() novamente no registro ou ao executar uma consulta que exclui registros. Mas você pode mudar esse comportamento para que ele não exclua fisicamente esses registros, adicionando paranoid: true na opção force em suas consultas.</p>



