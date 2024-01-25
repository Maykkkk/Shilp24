CREATE DATABASE Shilp24;

-- Install Extension
-- CREATE EXTENSION if not exists "uuid-ossp";
CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    pass_hash CHAR(60) NOT NULL
);