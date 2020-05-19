//A
CREATE TABLE stock(                                                
    id SERIAL primary key,                                                          
    name VARCHAR(255) not null,                                                     
    description VARCHAR(255),                                                       
    quantity VARCHAR(255),                                                          
    price INT);
// B
DROP TABLE stock;
//C
SELECT FIRST_NAME AND LAST_NAME FROM emoployeeList WHERE SALARY >=5000 AND SALARY <=11000;
SELECT FIRST_NAME AND LAST_NAME FROM emoployeeList WHERE CONTRACT_LENGTH <2;
INSERT INTO emoployeeList (FIRST_NAME,LAST_NAME,SALARY,CONTRACT_LENGTH) VALUES ('A','B',10000,2);
INSERT INTO emoployeeList (FIRST_NAME,LAST_NAME,SALARY,CONTRACT_LENGTH) VALUES ('TIM','CHENG',12000,2);
UPDATE emoployeeList SET SALARY =8000,CONTRACT_LENGTH = 2 WHERE FIRST_NAME = 'Nancy' AND LAST_NAME = 'Greenberg';
SELECT * FROM emoployeeList ORDER BY SALARY DESC;