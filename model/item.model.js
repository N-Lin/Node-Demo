module.exports = (sequelize, DataTypes) => {

    const Items = sequelize.define('items', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM,
            values: ['notstart', 'inprogress', 'done']
        },
        createdat: {
            type: DataTypes.STRING,
            allowNull: true
        },
        duedate: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        timestamps: false,
        modelName: 'items' // We need to choose the model name
    });

    return Items;
}