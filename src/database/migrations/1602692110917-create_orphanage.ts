import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanage1602692110917 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    //Realizar as alteracoes do banco
    await queryRunner.createTable(new Table({
      name: "orphanages",
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'about',
          type: 'text'
        },
        {
          name: 'instructions',
          type: 'text'
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //Defaz o que fez no up
    await queryRunner.dropTable('orphanages')
  }

}
