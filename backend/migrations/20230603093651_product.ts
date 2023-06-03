// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('product', (table) => {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.string('productCode')
    table.double('price')
    table.integer('taxPercentage')
    table.bigint('categoryId').references('id').inTable('category')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('product')
}
