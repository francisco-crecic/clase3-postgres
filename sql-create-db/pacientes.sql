CREATE TABLE public.pacientes (
    id serial,
    nombre character varying(64) NOT NULL,
    apellidos character varying(64) NOT NULL,
    edad integer NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO public.pacientes (nombre,apellidos,edad) VALUES
	 ('Kevin','Cid Arenas',30),
	 ('Jorge','Mendoza Garrido',37),
	 ('Edmundo','Garrido Miranda',18),
	 ('Sebastian (modificado)','Reyes Zapata',60);

