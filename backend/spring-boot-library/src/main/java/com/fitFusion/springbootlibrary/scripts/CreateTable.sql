CREATE
DATABASE IF NOT EXISTS `fitfusiondatabase`;
USE
`fitfusiondatabase`;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT = @@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS = @@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION = @@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE = @@TIME_ZONE */;
/*!40103 SET TIME_ZONE = '+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0 */;
/*!40101 SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES = @@SQL_NOTES, SQL_NOTES = 0 */;


CREATE TABLE Exercise
(
    exercise_id INT PRIMARY KEY,
    name       VARCHAR(255) NOT NULL,
    duration   INT,
    intensity  VARCHAR(50)
);
CREATE TABLE Schedule
(
    schedule_id INT PRIMARY KEY,
    dayOfWeek  VARCHAR(20) NOT NULL,
    startTime  TIME,
    endTime    TIME
);
CREATE TABLE FitnessPlan
(
    id       INT PRIMARY KEY,
    planName VARCHAR(255) NOT NULL,
    goals    VARCHAR(255)
);
CREATE TABLE User
(
    id       INT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Customer
(
    user_id        INT PRIMARY KEY,
    fitness_plan_id INT,
    FOREIGN KEY (user_id) REFERENCES User (id),
    FOREIGN KEY (fitness_plan_id) REFERENCES FitnessPlan (id)
);

CREATE TABLE Trainer
(
    user_id INT PRIMARY KEY,
    wage DOUBLE NOT NULL,
    FOREIGN KEY (userId) REFERENCES User (id)
);

CREATE TABLE fitness_class
(
    class_id    INT PRIMARY KEY,
    class_name  VARCHAR(255) NOT NULL,
    trainer_id  INT,
    schedule_id INT,
    image      MEDIUMBLOB,
    FOREIGN KEY (trainer_id) REFERENCES Trainer (user_id),
    FOREIGN KEY (schedule_id) REFERENCES Schedule (schedule_id)
);
CREATE TABLE FitnessClassParticipants
(
    class_id INT,
    user_id  INT,
    PRIMARY KEY (class_id, user_id),
    FOREIGN KEY (class_id) REFERENCES FitnessClass (class_id),
    FOREIGN KEY (user_id) REFERENCES User (id)
);

UNLOCK
TABLES;
/*!40103 SET TIME_ZONE = @OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE = @OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT = @OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS = @OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION = @OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES = @OLD_SQL_NOTES */;

