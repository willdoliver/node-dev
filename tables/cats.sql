CREATE TABLE `node-project`.`cats` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `race` VARCHAR(45) NOT NULL,
  `vaccine` VARCHAR(45) NULL,
  `addopted` TINYINT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`));

