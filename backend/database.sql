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
    user_id BIGINT NOT NULL REFERENCES users(id)
);

CREATE TABLE forms (
    id SERIAL PRIMARY KEY,
    form_id BIGINT NOT NULL REFERENCES user_forms(id),
    question_id BIGINT NOT NULL REFERENCES questions(id)
);

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    quest_title TEXT,
    question_type TEXT,
    questions_questions_id BIGINT NOT NULL REFERENCES questions_questions(id)
);

CREATE TABLE questions_questions (
    id SERIAL PRIMARY KEY,
    quest_quest_title TEXT
);

DROP TABLE questions;
DROP TABLE questions_questions;
DROP TABLE forms;
DROP TABLE user_forms;
