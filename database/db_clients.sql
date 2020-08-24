-- MySQL Script generated by MySQL Workbench
-- Mon Aug 24 18:58:57 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema clientes
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema clientes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `clientes` DEFAULT CHARACTER SET utf8 ;
USE `clientes` ;

-- -----------------------------------------------------
-- Table `clientes`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clientes`.`usuarios` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `id_user_UNIQUE` (`id_user` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clientes`.`pessoa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clientes`.`pessoa` (
  `id_pessoa` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `idade` SMALLINT NOT NULL,
  `altura` FLOAT NULL,
  `peso` FLOAT NULL,
  `telefone` INT NULL,
  `email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_pessoa`),
  UNIQUE INDEX `id_pessoa_UNIQUE` (`id_pessoa` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;