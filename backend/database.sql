CREATE DATABASE googleforms

CREATE TABLE "session" (
    "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
CREATE INDEX "IDX_session_expire" ON "session" ("expire");

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

CREATE TABLE user_forms (
    id SERIAL PRIMARY KEY,
    form_title TEXT,
    descrip TEXT,
    category TEXT,
    user_id BIGINT NOT NULL
);

CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    form_id BIGINT NOT NULL,
    rating INT
);

CREATE TABLE user_solved (
    id SERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    form_id BIGINT NOT NULL,
    score INT
);

CREATE TABLE questions (
    form_id BIGINT NOT NULL,
    question_id BIGINT NOT NULL,
    quest_title TEXT,
    question_type TEXT,
    correct_text TEXT,
    points INT,
    required BOOLEAN,
    UNIQUE (form_id, question_id)
);

CREATE TABLE questions_questions (
    form_id BIGINT NOT NULL,
    question_id BIGINT NOT NULL,
    qq_id BIGINT NOT NULL,
    qq_title TEXT,
    UNIQUE (qq_id, question_id, form_id)
);

DROP TABLE questions;
DROP TABLE questions_questions;
DROP TABLE user_forms;
