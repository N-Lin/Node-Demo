const sequelize = require('../config/db.config');
const { DataTypes } = require("sequelize");

class ItemController {

    db = {};

    constructor() {
        this.db.sequelize =sequelize;
        this.db.items = require('../model/item.model')(sequelize, DataTypes);
        this.db.sequelize.sync()
            .then(() => {
                console.log("Synced db.");
            })
            .catch((err) => {
                console.log("Failed to sync db: " + err.message);
            });
    }

    async getItems() {
        try {
            const items= await this.db.items.findAll();
            return items
        } catch (err) {
            console.log("Failed to find tasks: " + err.message);
            return [];
        }
    }

    async getItemById(id) {
        try {
            const item= await this.db.items.findByPk(id);
            return item;
        } catch (err) {
            console.log("Failed to find tasks: " + err.message);
            return [];
        }
    }

    async createItem(item) {
        console.log(item);
        let data = {};
        try {
            item.createdat= new Date().toISOString();
            data = await this.db.items.create(item);

        } catch(err) {
            console.log(err);
        }
        return data;
    }

    async updateItem(item) {
        let data = {};
        try {
            data = await this.db.items.update({...item}, {
                where: {
                    id: item.id
                }
            });
        } catch(err) {
            console.log("error: "+err);
        }
        return data;
    }

    async deleteItem(itemId) {
        let data = {};
        try {
            data = await this.db.items.destroy({
                where: {
                    id: itemId
                }
            });
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }
}
module.exports = new ItemController();