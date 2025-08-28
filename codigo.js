var cont = 2

$('#adicionar_aluno').click(function () {
    $("#formulario_alunos").append('<div id="aluno_' + cont + '">'+

        '<label> nome do aluno #' + cont + '</label>'+
        '<input type="text" id="nome_'+cont+'">'+

        '<label>nota 1</label>'+
        '<input type="number" id="nota_1_' +cont+ '">'+
        
        '<label>nota 2</label>'+
        '<input type="number" id="nota_2_' +cont+ '">'+
        
        '<label>nota 3</label>'+
        '<input type="number" id="nota_3_' +cont+ '">'+
        
        '<button onclick="remover(' +cont+ ')">remover</button>'+
        '<br><br>'+

        '</div>')
    cont++
}
)

function remover(id) {
    $('#aluno_' + id).remove();
}