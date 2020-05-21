//A
CREATE TABLE stock (
    id SERIAL primary key,
    quantity INT,
    price INT,
    citrus_id INT);

INSERT INTO stock (quantity,price,citrus_id) VALUES (33,25,1),(50,15,2),(10,35,3),(0,20,4);

SELECT name,color,quantity FROM citrus JOIN stock ON citrus.id = stock.citrus_id WHERE color = 'orange';

//B
ALTER TABLE stock DROP COLUMN id
SELECT * INTO citrus_stock FROM citrus JOIN stock ON citrus.id = stock.citrus_id;
// I combined the two table to citrus_stock

//C

BEGIN;
UPDATE citrus_stock SET quantity = quantity + 20 WHERE name = 'lemon';
COMMIT;
BEGIN;
UPDATE citrus_stock SET quantity = quantity + 40 WHERE name = 'orange';
COMMIT;
BEGIN;
UPDATE citrus_stock SET quantity = quantity - 20 WHERE name = 'orange';
COMMIT;
BEGIN;
UPDATE citrus_stock SET quantity = quantity + 40 WHERE name = 'lime';
COMMIT;
BEGIN;
UPDATE citrus_stock SET quantity = quantity - 30 WHERE name = 'lemon';
COMMIT;
BEGIN;
UPDATE citrus_stock SET quantity = quantity - 20 WHERE name = 'lime';
COMMIT;
BEGIN;
UPDATE citrus_stock SET quantity = quantity + 20 WHERE name = 'grapefruit';
COMMIT;
BEGIN;
UPDATE citrus_stock SET quantity = quantity - 20 WHERE name = 'grapefruit';
COMMIT;
