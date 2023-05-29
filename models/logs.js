const { Model } = require('objection')

class Logs extends Model {
    static get tableName() {
        return 'logs';
    }

    $beforeInsert() {
        this.createdAt = new Date();
    }

    $beforeUpdate() {
        this.updatedAt = new Date();
    }

    static get oldField() {
        return old_field;
    }

    static get newField() {
        return new_field;
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['old_field', 'new_field'],
            properties: {
                id: { type: 'integer' },
                old_field: { type: 'string' },
                new_field: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' }
            }
        }
    }
}

module.exports = Logs;