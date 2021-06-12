CREATE TABLE IF NOT EXISTS cookenu_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM("NORMAL", "ADMIN") DEFAULT ("NORMAL")
);

CREATE TABLE IF NOT EXISTS cookenu_recipes (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provided",
    created_at DATETIME DEFAULT NOW(),
    user_id VARCHAR(64),
    FOREIGN KEY (user_id) REFERENCES cookenu_users(id)
);

CREATE TABLE IF NOT EXISTS user_followers (
    follower_id VARCHAR(64) PRIMARY KEY,
    FOREIGN KEY (follower_id) REFERENCES cookenu_users(id)
    );

CREATE TABLE IF NOT EXISTS user_recipes (
    recipe_id VARCHAR(64),
    author_id VARCHAR(64),
    PRIMARY KEY (recipe_id, author_id),
    FOREIGN KEY (recipe_id) REFERENCES cookenu_recipes(id),
    FOREIGN KEY (author_id) REFERENCES cookenu_users(id)
);