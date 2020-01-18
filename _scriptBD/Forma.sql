
db_IEEE
servidor:

nombre: tomioukaserver
username: lmelgarejo96
pass: Logan2547265



drop table  if exists dbo.Usuarios
create table Usuarios(
IdUsuario int NOT NULL IDENTITY(1,1) PRIMARY KEY,
Correo varchar(50) not null,
Contraseña varchar(50) not null,
Pregunta varchar(50) not null,
Respuesta varchar(50) not null,
Estado bit not null,
)
go

insert into Usuarios values('luismelgarejoalarcon@gmail.com', '123456', 'A que me dedico?',  'Development', 1);
insert into Usuarios values('luis@gmail.com', '123456', 'A que me dedico?',  'Developer', 0);
insert into Usuarios values('diana@gmail.com', '123456', 'A que me dedico?',  'Ingeneria aeronautica', 1);





create database IEEE
as IEEE
create table Persona(
IdPersona int identity(1,1) not null,
Dni varchar(8) unique not null,
NombrePersona varchar(50) not null,
ApellidoPersona varchar(50) not null,
FechaNacimiento date not null,
Celular varchar(12) not null,
Trabaja bit not null,
EstadoTabla bit not null,
constraint pk_idpersona
primary key clustered(IdPersona)
)
go
create table Estudio(
IdEstudio int identity(1,1) not null,
NombreEstudio varchar(50) not null,
NombreUniversidad varchar(50) not null,
AñoIngreso date not null,
AñoFin date not null,
IdPersona int not null
constraint pk_idestudio
primary key clustered(IdEstudio),
constraint fk_idpersona
foreign key (IdPersona)
references Persona(IdPersona)
on delete cascade
)
go
insert into Persona values('48525544','Christian','Parrales','1994-07-15','918796739',1,1)
insert into Estudio values('Ingenieria de sistemas','UTP','1994-07-15','1994-07-15',1)
go
select * from Persona,Estudio
go
delete Persona where IdPersona = 1
go
select * from Persona,Estudio

