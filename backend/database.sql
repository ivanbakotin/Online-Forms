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

CREATE TABLE forms (
    id SERIAL PRIMARY KEY,
    question_id BIGINT NOT NULL REFERENCES users(id)
);

CREATE TABLE user_forms (
    id SERIAL PRIMARY KEY,
    title TEXT,
    user_id BIGINT NOT NULL REFERENCES users(id),
    form_id BIGINT NOT NULL REFERENCES forms(id)
);

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    title TEXT,
    question_type TEXT,
    question_array text[]
);
