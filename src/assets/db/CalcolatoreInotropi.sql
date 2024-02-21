 DROP TABLE IF EXISTS `farmaco`;
 CREATE TABLE `farmaco` (
   `Codice` char(8) NOT NULL,
   `Name` char(50) NOT NULL,
   `Soluto` int NOT NULL, 
   `Solvente` int,
   `Fiale` int,
   `Min_dose` float,
   `Max_dose` float);

INSERT INTO `farmaco` VALUES
('F001', 'Dopamina', 400, 100, 2, 3, 20),
('F002', 'Dobutamina', 500, 100, 2, 2, 20),
('F003', 'Adrenalina', 4, 50, 4, 0.01, 0.5),
('F004', 'Noradrenalina', 4, 50, 2, 0.01, 1);

DROP TABLE IF EXISTS `otherfarmaco`;
CREATE TABLE `otherfarmaco` (
   `Codice` char(8) NOT NULL,
   `Name` char(50) NOT NULL,
   `Sostanza` float NOT NULL,
   `Min_volume` int,
   `Dose_standard` char(50) NOT NULL);

-- BEGIN;
INSERT INTO `otherfarmaco` VALUES
('B001', 'Remifentanil flacone 1 mg', 1, null, '0.025-2 mcg/kg/min'),
('B002', 'Remifentanil flacone 5 mg', 5, null, '0.025-2 mcg/kg/min'),
('B003', 'Midazolam fiale 5 mg / ml', 5, 1, '0.03-0.2 mg/kg/h'),
('B004', 'Midazolam fiale 15 mg /3 ml', 15, 3, '0.03-0.2 mg/kg/h'),
('B005', 'Propofol 1% 200 mg / 20 ml', 200, 20, '0.3-12 mg/kg/h'),
('B006', 'Dexmedetomidina 200 mcg / 2 ml', 0.2, 2, '0.2-1.4 mcg/kg/h'),
('B007', 'Dexmedetomidina 400 mcg / 4 ml', 0.4, 4, '0.2-1.4 mcg/kg/h'),
('B008', 'Levosimendan 12,5 mg / 5 ml', 12.5, 5, '0.05-0.2 mcg/kg/min'),
('B009', 'Levosimendan 25 mg / 10 ml', 25, 10, '0.05-0.2 mcg/kg/min');

