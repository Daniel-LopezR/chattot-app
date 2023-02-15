CREATE DATABASE chattot;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    user_id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    profile_img VARCHAR DEFAULT "profile_img",
    last_refresh_token VARCHAR NULL
);