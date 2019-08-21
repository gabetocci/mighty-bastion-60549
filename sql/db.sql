-- select * from breeds;

DROP TABLE IF EXISTS addresses CASCADE;
DROP TABLE IF EXISTS breeds CASCADE;
DROP TABLE IF EXISTS incidents CASCADE;
DROP TABLE IF EXISTS people CASCADE;
DROP TABLE IF EXISTS dogs CASCADE;

-- reference tables
CREATE TABLE addresses (
   id SERIAL PRIMARY KEY NOT NULL,
   street1 TEXT,
   street2 TEXT,
   street3 TEXT,
   city TEXT,
   state TEXT,
   zip TEXT,
   created_at TIMESTAMPTZ,
   updated_at TIMESTAMPTZ
);

CREATE TABLE breeds (
   id SERIAL PRIMARY KEY NOT NULL,
   name TEXT,
   created_at TIMESTAMPTZ,
   updated_at TIMESTAMPTZ
);

-- app tables
CREATE TABLE dogs (
   id SERIAL PRIMARY KEY NOT NULL,
   name TEXT,
   age INT,
   person_id INT,
   breed_id INT,
   address_id INT,
   created_at TIMESTAMPTZ,
   updated_at TIMESTAMPTZ
);

CREATE TABLE people (
   id SERIAL PRIMARY KEY NOT NULL,
   name TEXT,
   age INT,
   address_id INT,
   created_at TIMESTAMPTZ,
   updated_at TIMESTAMPTZ
);

CREATE TABLE incidents (
   id SERIAL PRIMARY KEY NOT NULL,
   title TEXT,
   description TEXT,
   incident_timestamp TIMESTAMPTZ,
   address_id INT,
   dog_id INT,
   created_at TIMESTAMPTZ,
   updated_at TIMESTAMPTZ
);

-- constraints
ALTER TABLE dogs
	ADD CONSTRAINT fk_people
	FOREIGN KEY (person_id)
	REFERENCES people (id);
ALTER TABLE dogs
	ADD CONSTRAINT fk_breeds
	FOREIGN KEY (breed_id)
	REFERENCES breeds (id);
ALTER TABLE dogs
	ADD CONSTRAINT fk_addresses
	FOREIGN KEY (address_id)
	REFERENCES addresses (id);

ALTER TABLE people
	ADD CONSTRAINT fk_addresses
	FOREIGN KEY (address_id)
	REFERENCES addresses (id);

ALTER TABLE incidents
	ADD CONSTRAINT fk_addresses
	FOREIGN KEY (address_id)
	REFERENCES addresses (id);
ALTER TABLE incidents
	ADD CONSTRAINT fk_dogs
	FOREIGN KEY (dog_id)
	REFERENCES dogs (id);
