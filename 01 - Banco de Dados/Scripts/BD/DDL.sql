CREATE DATABASE SPMedicalGroup
GO

USE SPMedicalGroup
GO

CREATE TABLE tipoUsuario(
	idTipoUsuario INT PRIMARY KEY IDENTITY,
	tituloTipoUsuario VARCHAR(200) NOT NULL,
);
GO

CREATE TABLE especialidade(
	idEspecialidade INT PRIMARY KEY IDENTITY,
	tituloEspecialidade VARCHAR(200) NOT NULL,
);
GO

CREATE TABLE situacao(
	idSituacao INT PRIMARY KEY IDENTITY,
	situacao VARCHAR(200) NOT NULL,
);
GO


CREATE TABLE clinica(
	idClinica INT PRIMARY KEY IDENTITY,
	CNPJ VARCHAR (200) NOT NULL,
	nomeFantasia VARCHAR (200) NOT NULL,
	razaoSocial VARCHAR (200) NOT NULL,
	endereco VARCHAR (200) NOT NULL,
);
GO

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY IDENTITY,
	idTipoUsuario INT FOREIGN KEY REFERENCES tipoUsuario(idTipoUsuario),
	nome VARCHAR(200) NOT NULL,
	email VARCHAR(200) NOT NULL,
	senha VARCHAR(200) NOT NULL
);
GO

CREATE TABLE paciente(
	idPaciente INT PRIMARY KEY IDENTITY,
	idUsuario INT FOREIGN KEY REFERENCES usuario(idUsuario),
	idadePaciente SMALLINT NOT NULL,
	rg VARCHAR(200) NOT NULL,
	cpf VARCHAR(200) NOT NULL,
	telefone VARCHAR(200) NOT NULL,
	dataCadastro DATETIME NOT NULL,
);
GO

CREATE TABLE medico(
	idMedico INT PRIMARY KEY IDENTITY,
	idEspecialidade INT FOREIGN KEY REFERENCES especialidade(idEspecialidade),
	idClinica INT FOREIGN KEY REFERENCES clinica(idClinica),
	idUsuario INT FOREIGN KEY REFERENCES usuario(idUsuario),
	crm VARCHAR(200) NOT NULL,
	dataCadastro DATETIME NOT NULL,
);
GO

CREATE TABLE consulta(
	idConsulta INT PRIMARY KEY IDENTITY,
	idPaciente INT FOREIGN KEY REFERENCES paciente(idPaciente),
	idSituacao INT FOREIGN KEY REFERENCES situacao(idSituacao),
	idMedico INT FOREIGN KEY REFERENCES medico(idMedico),
	dataConsulta DATE NOT NULL,
	descricao TEXT NOT NULL,
);
GO