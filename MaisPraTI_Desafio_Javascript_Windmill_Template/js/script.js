function cadastrar(){

    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let data_nascimento = document.getElementById('data_nascimento').value;
    let nota_final = document.getElementById('nota_final').value;

    if((nome=='') || (telefone=='') || (data_nascimento=='') || (nota_final=='')){

    alert("Todos os campos tem que estar preenchidos!");

    }

    else{

    let table = document.getElementById("minha_tabela");   
    let tablesize = table.rows.length;
    let row = table.insertRow(tablesize);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    row.id = tablesize;

    cell1.innerHTML = tablesize;
    cell2.innerHTML = nome
    cell3.innerHTML = telefone;
    cell4.innerHTML = data_nascimento;
    cell5.innerHTML = nota_final;

    document.getElementById('nome').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('data_nascimento').value = "";
    document.getElementById('nota_final').value = "";

    alert("Cadastro do(a) Aluno(a) EFETUADO com SUCESSO!");

    }

    return false
    
}

function excluir_cadastro(){
            
    let id_aluno = document.getElementById('id_aluno').value;

    let filho = document.getElementById(id_aluno);
    let pai = document.getElementById("pai");

    if (id_aluno=='' ){

    alert("O campo tem que estar preenchido!");
    alert("Digite um ID VÁLID0!");

    }
            
    else if((id_aluno > 0) && (filho != null)){

    let noRemovido = pai.removeChild(filho);

    document.getElementById("id_aluno").value = "";

    alert("Exclusão do Cadastro do(a) Aluno(a) EFETUADO com SUCESSO!");

    }

    else{

    document.getElementById("id_aluno").value = "";

    alert("Digite um ID VÁLID0!");

    }
            
    return false

}
