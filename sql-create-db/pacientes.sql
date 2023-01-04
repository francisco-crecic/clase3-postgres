CREATE TABLE pacientes (
    id serial,
    nombre character varying(64) NOT NULL,
    apellidos character varying(64) NOT NULL,
    edad integer NOT NULL,
    created_at timestamp NOT NULL default now(),
    updated_at timestamp,
    deleted_at timestamp,
    PRIMARY KEY(id)
);

INSERT INTO pacientes (nombre,apellidos,edad) VALUES
	 ('Kevin','Cid Arenas',30),
	 ('Jorge','Mendoza Garrido',37),
	 ('Edmundo','Garrido Miranda',18),
	 ('Sebastian (modificado)','Reyes Zapata',60);



CREATE TABLE users (
    id serial,
    name character varying(64) NOT NULL,
    username character varying(64) NOT NULL,
    email character varying(64) NOT NULL,
    phone character varying(64) NOT NULL,
    website character varying(64) NOT NULL,
    PRIMARY KEY(id)
);
 
CREATE TABLE addresses (
    id serial,
    userId integer NOT NULL,
    street character varying(64) NOT NULL,
    suite character varying(64) NOT NULL,
    city character varying(64) NOT NULL,
    zipcode character varying(64) NOT NULL,
    lat decimal(10,6) NOT NULL,
    lng decimal(10,6) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (userId) REFERENCES users (id)
);
 
CREATE TABLE companies (
    id serial,
    userId integer NOT NULL,
    name character varying(64) NOT NULL,
    catchPhrase character varying(64) NOT NULL,
    bs character varying(64) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (userId) REFERENCES users (id)
);
 
CREATE TABLE posts (
    id serial,
    userId integer NOT NULL,
    title character varying(64) NOT NULL,
    body character varying(4000) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (userId) REFERENCES users (id)
);
 
CREATE TABLE comments (
    id serial,
    postId integer NOT NULL,
    name character varying(64) NOT NULL,
    email character varying(64) NOT NULL,
    body character varying(4000) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (postId) REFERENCES posts (id)
);
 
CREATE TABLE albums (
    id serial,
    userId integer NOT NULL,
    title character varying(64) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (userId) REFERENCES users (id)
);
 
CREATE TABLE photos (
    id serial,
    albumId integer NOT NULL,
    title character varying(64) NOT NULL,
    url character varying(64) NOT NULL,
    thumbnailUrl character varying(64) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (albumId) REFERENCES albums (id)
);
 
CREATE TABLE todos (
    id serial,
    userId integer NOT NULL,
    title character varying(64) NOT NULL,
    completed bool NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (userId) REFERENCES users (id)
);