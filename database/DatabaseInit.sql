DROP DATABASE IF EXISTS SIMPLENODEAPP;
CREATE DATABASE SIMPLENODEAPP;
CREATE USER 'FeederKing'@'localhost' IDENTIFIED BY 'feederking';
GRANT ALL PRIVILEGES ON SIMPLENODEAPP.* TO 'FeederKing'@'localhost' WITH GRANT OPTION;