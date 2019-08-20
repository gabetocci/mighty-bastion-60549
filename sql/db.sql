DROP TABLE addresses CASCADE;
DROP TABLE breeds CASCADE;
DROP TABLE incidents CASCADE;
DROP TABLE dog_owners CASCADE;
DROP TABLE dogs CASCADE;

-- reference tables
CREATE TABLE addresses (
   id SERIAL PRIMARY KEY NOT NULL,
   street1 TEXT,
   street2 TEXT,
   street3 TEXT,
   city TEXT,
   state TEXT,
   zip TEXT,
   timestamp TIMESTAMPTZ
);

CREATE TABLE breeds (
   id SERIAL PRIMARY KEY NOT NULL,
   name TEXT,
   timestamp TIMESTAMPTZ
);

-- app tables
CREATE TABLE dogs (
   id SERIAL PRIMARY KEY NOT NULL,
   name TEXT,
   age INT,
   owner_id INT,
   breed_id INT,
   address_id INT,
   timestamp TIMESTAMPTZ
);

CREATE TABLE dog_owners (
   id SERIAL PRIMARY KEY NOT NULL,
   name TEXT,
   age INT,
   address_id INT,
   timestamp TIMESTAMPTZ
);

CREATE TABLE incidents (
   id SERIAL PRIMARY KEY NOT NULL,
   title TEXT,
   description TEXT,
   incident_timestamp TIMESTAMPTZ,
   address_id INT,
   dog_id INT,
   timestamp TIMESTAMPTZ
);

-- constraints
ALTER TABLE dogs
	ADD CONSTRAINT fk_dogs_owners
	FOREIGN KEY (owner_id)
	REFERENCES dog_owners (id);
ALTER TABLE dogs
	ADD CONSTRAINT fk_dogs_breeds
	FOREIGN KEY (breed_id)
	REFERENCES breeds (id);
ALTER TABLE dogs
	ADD CONSTRAINT fk_dogs_addresses
	FOREIGN KEY (address_id)
	REFERENCES addresses (id);

ALTER TABLE dog_owners
	ADD CONSTRAINT fk_dog_owners_addresses
	FOREIGN KEY (address_id)
	REFERENCES addresses (id);

ALTER TABLE incidents
	ADD CONSTRAINT fk_incidents_addresses
	FOREIGN KEY (address_id)
	REFERENCES addresses (id);
ALTER TABLE incidents
	ADD CONSTRAINT fk_incidents_dogs
	FOREIGN KEY (dog_id)
	REFERENCES dogs (id);