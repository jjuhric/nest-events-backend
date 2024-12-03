-- START DB OVER FROM BEGINING
DROP DATABASE IF EXISTS `nest_events`;
CREATE DATABASE IF NOT EXISTS `nest_events`
    DEFAULT CHARACTER SET = 'utf8mb4';

DROP TABLE IF EXISTS `nest_events`.`event`;
CREATE TABLE `nest_events`.`event` (
    id  int,
    name varchar(255),
    description varchar(255),
    `when` DATETIME,
    address varchar(255)
);

INSERT INTO `nest_events`.`event` (`id`, `description`, `when`, `address`, `name`) VALUES
(1,	'Let\'s meet together.',	'2021-02-15 21:00:00',	'Office St 120',	'Team Meetup'),
(2,	'Let\'s learn something.',	'2021-02-17 21:00:00',	'Workshop St 80',	'Workshop'),
(3,	'Let\'s meet with big bosses',	'2021-02-17 21:00:00',	'Boss St 100',	'Strategy Meeting'),
(4,	'Let\'s try to sell stuff',	'2021-02-11 21:00:00',	'Money St 34',	'Sales Pitch'),
(5,	'People meet to talk about business ideas',	'2021-02-12 21:00:00',	'Invention St 123',	'Founders Meeting');
