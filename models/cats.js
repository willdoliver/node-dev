const { Model } = require('objection')
const { Logs } = require('./logs')

class Cats extends Model {
    static get tableName() {
        return 'cats';
    }

    $beforeInsert() {
        this.createdAt = new Date();
    }

    $beforeUpdate() {
        this.updatedAt = new Date();
    }

    static get nameColumn() {
        return 'name';
    }

    static get ageColumn() {
        return 'age';
    }

    static get raceColumn() {
        return 'race';
    }

    static get vaccineColumn() {
        return 'vaccine';
    }

    static get addoptedColumn() {
        return 'addopted';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'age', 'race'],
            properties: {
                id: { type: 'integer'},
                name: { type: 'string', minLength: 1, maxLength: 50 },
                age: { type: 'number' },
                race: { type: 'string' },
                vaccine: { type: 'string' },
                adopted: { type: 'boolean' },
            }
        }
    }

    static relationMappings = {
        catsLogs: {
            relation: Model.HasOneRelation,
            modelClass: Logs,
            join: {
                from: 'cats.id',
                to: 'logs.log_id'
            }
        }
    }
}

module.exports = Cats;