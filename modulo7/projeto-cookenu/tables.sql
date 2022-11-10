-- Active: 1665612941149@@35.226.146.116@3306@hooks-4313654-veronica-cruz

CREATE TABLE IF NOT EXISTS Cookenu_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL,
    role ENUM("ADMIN", "NORMAL") DEFAULT "NORMAL"
);

CREATE TABLE IF NOT EXISTS Recipes_table (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provided",
    deadline DATE,
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES Cookenu_users(id)
);

-- CREATE TABLE IF NOT EXISTS Users_signup (
--     recipe_id VARCHAR(64),
--     signup_id VARCHAR(64),
--     PRIMARY KEY (recipe_id, assignee_id),
--     FOREIGN KEY (recipe_id) REFERENCES Recipes_table(id),
--     FOREIGN KEY (signup_id) REFERENCES Cookenu_users(id)
-- );



