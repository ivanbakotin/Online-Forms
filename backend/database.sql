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
    user_id BIGINT NOT NULL
);

CREATE TABLE questions (
    form_id BIGINT NOT NULL,
    question_id BIGINT NOT NULL,
    quest_title TEXT,
    question_type TEXT,
    UNIQUE (form_id, question_id)
);

CREATE TABLE questions_questions (
    question_id BIGINT NOT NULL,
    qq_id BIGINT NOT NULL,
    qq_title TEXT,
    UNIQUE (qq_id, question_id)
);

DROP TABLE questions;
DROP TABLE questions_questions;
DROP TABLE forms;
DROP TABLE user_forms;
