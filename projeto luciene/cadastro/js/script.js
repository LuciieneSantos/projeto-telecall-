function validar(){
	var nome = document.formulario.nome;
	var endereco = document.formulario.endereco;
	var formacao = document.formulario.formacao;
	var login = document.formulario.login;
	var senha= document.formulario.senha;
	var confirma= document.formulario.confirma;
	var rodape = document.getElementById('rodape');
	var mensagem=''
	if(nome.value==''){
		mensagem = 'Mensagem de Erro:O campo nome é obrigatório';
		nome.focus();
		rodape.innerHTML=mensagem;
	}
	
	else if(endereco.value==''){
		mensagem = 'Mensagem de Erro:O campo endereço é obrigatório';
		endereco.focus();
		rodape.innerHTML=mensagem;
	}
	
	else if(formacao.value=='0'){
		mensagem = 'Mensagem de Erro:O campo formação é obrigatório';
		formacao.focus();
		rodape.innerHTML=mensagem;
	}
	
	else if(login.value==''){
		mensagem = 'Mensagem de Erro:O campo login é obrigatório';
		login.focus();
		rodape.innerHTML=mensagem;
	}
	
	else if(login.value.length!='5'){
		mensagem = 'Mensagem de Erro:O campo login deve ter 5 caracteres';
		login.focus();
		rodape.innerHTML=mensagem;
	}
	
	else if(senha.value==''){
		mensagem = 'Mensagem de Erro:O campo senha é obrigatório';
		senha.focus();
		rodape.innerHTML=mensagem;
	}
	
	else if(senha.value!=confirma.value){
		mensagem = 'Mensagem de Erro:Os campos senha e confirma senha devem ser iguais';
		senha.focus();
		rodape.innerHTML=mensagem;
	}
	else {
		document.formulario.submit();
	}
	
}

function alteraIdade(){
	var idade = document.formulario.idade;
	var idadeSelecionada = document.getElementById('idadeSelecionada');
	idadeSelecionada.innerHTML = idade.value;
}