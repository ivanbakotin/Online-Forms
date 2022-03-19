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

MAYBE CREATE SPECIAL ENTITY FOR LINK (crypto) TO FILLOUT CURRENTLY JUST USING FORM ID

CREATE TABLE user_forms (
    id SERIAL PRIMARY KEY,
    form_title TEXT DEFAULT '',
    descrip TEXT DEFAULT '',
    user_id BIGINT NOT NULL
);

CREATE TABLE user_solved (
    id SERIAL PRIMARY KEY,
    user_id BIGINT,
    index_id BIGINT NOT NULL,
    form_id BIGINT NOT NULL,
    question_id BIGINT NOT NULL,
    answer_array TEXT[] DEFAULT ARRAY[]::TEXT[],
    answer_text TEXT DEFAULT ''
);

CREATE TABLE questions (
    form_id BIGINT NOT NULL,
    question_id BIGINT NOT NULL,
    quest_title TEXT DEFAULT '',
    question_type TEXT,
    position INT,
    required BOOLEAN DEFAULT false,
    UNIQUE (form_id, question_id)
);

CREATE TABLE questions_questions (
    form_id BIGINT NOT NULL,
    question_id BIGINT NOT NULL,
    qq_id BIGINT NOT NULL,
    qq_title TEXT DEFAULT '',
    UNIQUE (qq_id, question_id, form_id)
);

DROP TABLE questions;
DROP TABLE questions_questions;
DROP TABLE user_forms;
DROP TABLE user_solved;
