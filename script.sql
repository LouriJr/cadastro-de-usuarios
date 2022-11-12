CREATE DATABASE CadUsuario;
USE CadUsuario;

CREATE TABLE Usuarios(
		ID INT NOT NULL auto_increment PRIMARY KEY,
        Nome VARCHAR(255),
        CPF VARCHAR(255),
        Email VARCHAR(255),
        Celular VARCHAR(255)
);

