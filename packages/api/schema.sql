    CREATE DATABASE chattot;

    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE user(
        user_id uuid DEFAULT uuid_generate_v4 (),
        username VARCHAR UNIQUE NOT NULL,
        password VARCHAR NOT NULL,
        profile_img VARCHAR DEFAULT "",
    )