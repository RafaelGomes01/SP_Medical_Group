USE SPMedicalGroup

INSERT INTO tipoUsuario (tituloTipoUsuario)
VALUES
	('Administrador'),
	('Medico'),
	('Paciente');
GO

INSERT INTO especialidade (tituloEspecialidade)
VALUES
	('Pediatra'),
	('Gastro'),
	('Odontologia');
GO

INSERT INTO situacao (situacao)
VALUES
	('Espera'),
	('Em andamento'),
	('Finalizada');
GO

INSERT INTO clinica (CNPJ, nomeFantasia, razaoSocial, endereco)
VALUES
	('69576506000140', 'Gustavo e Luiza Odontologia', '599551310019', 'Rua Oito, 455'),
	('55192803000187', 'Saude e Bem estar', '948532739996', 'Rua João Ramalho, 533'),
	('2550609000160', 'Cruz do Bem', '409984433779', 'Rua Estelio Di Nolla, 501');
GO

INSERT INTO usuario (idTipoUsuario, nome, email, senha)
VALUES
	('1', 'João Pedro', 'joaopedroSPMED@gmail.com', 'Senai@132'),
	('3', 'Rafael de Oliveira', 'rafaeloliveiraSPMED@gmail.com', 'Senai@132'),
	('2', 'Fernanda Console', 'fernandaconsoleSPMED@gmail.com', 'Senai@132');
GO

INSERT INTO paciente (idUsuario, idadePaciente, rg, cpf, telefone, dataCadastro)
VALUES
	('2', '3', '129857609', '75310620036', '45889239610', 2020/05/25),
	('1', '3', '183854044', '94217031033 ', '25259039261', 2020/05/25),
	('3', '2', '154803893', '98515746000', '83422803938', 2020/05/25);
	
GO

INSERT INTO medico (idEspecialidade, idClinica, idUsuario, crm, dataCadastro)
VALUES
	('3', '2', '1', '1223', 2020/05/25),
	('2', '3', '2', '4332', 2020/05/25),
	('1', '1', '3', '7685', 2020/05/25);
GO

INSERT INTO consulta (idPaciente, idSituacao, idMedico, dataConsulta, descricao)
VALUES
	('3', '1', '3', '13/01/2021', 'Cirurgia no estomago'),
	('1', '2', '2', '20/10/2019', 'Gripe leve'),
	('2', '2', '1', '22/08/2021', 'Fratura na perna esquerda');
GO