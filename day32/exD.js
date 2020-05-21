const { Client } = require('pg')
const fs = require('fs')
const CSVReadableStream = require('csv-reader');

let inputStream = fs.createReadStream('transaction_record.csv', 'utf-8')

let config = {
    user: 'anotherone',
    database: 'fruits',
    password: '1234',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
}

const client = new Client(config);

async function execute() {
    let rows =[]
    await client.connect();
    inputStream
        .pipe(new CSVReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
        .on('data', function (chunk) {
            rows.push(chunk)
        })
        .on('end', async function (data) {
            await client.query('BEGIN TRANSACTION ISOLATION LEVEL Serializable')
            console.log(rows)
            for (let row of rows) {
                let [action, taste, quantity] = row
                console.log(row)
                try {
                    if (action == 'BUY') {
                        console.log('bought')
                        await client.query('UPDATE stock SET quantity = quantity + $1 FROM citrus WHERE stock.citrus_id = citrus.id AND name = $2 ', [quantity, taste])
                    }

                    else if (action == 'SELL') {
                        let stockN = await client.query('SELECT quantity FROM stock INNER JOIN citrus ON stock.citrus_id = citrus.id WHERE name = $1', [taste]);
                        console.log(stockN.rows[0])
                        if (stockN.rows[0].quantity < quantity) {
                            throw new Error(`Not enough ${name} to sell!`);
                          } else {
                            await client.query('UPDATE stock SET quantity = quantity - $1 FROM citrus WHERE stock.citrus_id = citrus.id AND name = $2 ', [quantity, taste]);
                          }
                    }
                    await client.query('COMMIT')
                }
                catch (err) {
                    await client.query('ROLLBACK')
                    console.log(`there is an ${err}`)
                }
                
            }
                await client.end()
            console.log('end')

            
            console.log('No more rows!');
        })
        
}
execute()

// async function commands() {
//     await client.connect();
  
//     let rows = [];
  
//     inputStream
//       .pipe(
//         CSVReadableStream({ parseNumbers: true, parseBooleans: true, trim: true })
//       )
//       .on("data", async (row) => {
//         console.log(row);
//         rows.push(row);
  
//         console.log(rows);
//         return { row };
//       })
//       .on("end", async (data) => {
//         console.log(data);
  
//         await client.query("BEGIN TRANSACTION ISOLATION LEVEL Serializable;");
  
//         try {
//           for (let row of rows) {
//             let [action, name, quantity] = row;
//             if (action === "SELL") {
//               let result = await client.query(
//                 `
//                       SELECT quantity FROM stock INNER JOIN citrus on stock.citrus_id = citrus.id
//                       WHERE citrus.name = $1 GROUP BY quantity;
//                       `,
//                 [name]
//               );
//               console.log(result);
//               console.log(result.rows[0].quantity);
//               if (result.rows[0].quantity < quantity) {
//                 throw new Error(`Not enough ${name} to sell!`);
//               }
//             }
//             if (action === "BUY") {
//               let result = await client.query(
//                 `
//                       UPDATE stock SET quantity = quantity + $1
//                       FROM citrus
//                       WHERE stock.citrus_id = citrus.id AND name = $2`,
//                 [quantity, name]
//               );
//               console.log(`You have bought ${quantity} ${name}'s!`);
//             } else {
//               let result = await client.query(
//                 `
//                       UPDATE stock SET quantity = quantity - $1
//                       FROM citrus
//                       WHERE stock.citrus_id = citrus.id AND name = $2`,
//                 [quantity, name]
//               );
//               console.log(`${quantity} ${name} sold!`);
//             }
//             await client.query("COMMIT");
//           }
//         } catch (e) {
//           await client.query("ROLLBACK");
//           console.log(e);
//         }
//       });
//   }
  
//   commands();
   


