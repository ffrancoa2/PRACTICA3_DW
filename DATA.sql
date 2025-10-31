Create table usuarios(
id serial primary key,
nombre varchar(50),
correo varchar (100),
contrasena varchar (100)
);

insert into usuarios (nombre, correo, contrasena) values
('FIORELLA', 'FIORE@GMAIL.COM', 'CONTRA123'),
('ANDRES', 'ANDRES@GMAIL.COM', 'CONTRA456'),
('JOSUE', 'JOSUE@GMAIL.COM', 'CONTRA789');

SELECT * FROM USUARIOS;
