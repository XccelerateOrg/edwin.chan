const fs = require('fs')
const csvReadableStream = require('csv-reader')
const knex = require('./knex')

let inputStream = fs.createReadStream('transaction_record.csv', 'utf-8')

execute()
async function execute() {
        let rows = []
        inputStream.pipe(new csvReadableStream({ parsedNumbers: true, parseBooleans: true, trim: true }))
                .on('data', (chunk) => {
                        rows.push(chunk)
                })
                .on('end', async(chunk) => {
                        knex.transaction(async (trx) => {
                                try {
                                        for (let row of rows) {
                                                let [action, name, quan] = row
                                                let subque = trx('stock').select('id')
                                                        .from('citrus')
                                                        .where('name', '=', name);
                                                if (action == 'BUY') {
                                                        await trx('stock')
                                                                .whereIn('citrus_id', subque)
                                                                .increment('quantity', quan)
                                                }
                                                 if (action == 'SELL') {
                                                        let quantityArray = await trx('stock').select('quantity').innerJoin('citrus', 'stock.citrus_id', 'citrus.id').where('name', '=', name)
                                                        console.log(quantityArray[0].quantity)
                                                        if (quantityArray[0].quantity > quan) {
                                                                await trx('stock')
                                                                        .whereIn('citrus_id', subque)
                                                                        .decrement('quantity', quan)

                                                        }
                                                }
                                        }
                                } catch (err) {
                                                console.error(err)
                                }

                        })
                })
}
            