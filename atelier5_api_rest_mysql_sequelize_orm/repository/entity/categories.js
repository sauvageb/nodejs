import Sequelize from 'sequelize';


class Category extends Sequelize.Model {

    static initialize(sequelize, DataTypes) {
        super.init(
            {
                id: {
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true
                },
                name: {
                    type: DataTypes.STRING(255),
                    allowNull: false
                }
            }, {
                sequelize,
                modelName: 'Category',
                tableName: 'categories',
                timestamps: false,
                indexes: [
                    {
                        name: "PRIMARY",
                        unique: true,
                        using: "BTREE",
                        fields: [
                            {name: "id"},
                        ]
                    },
                ]
            });

        // VERY IMPORTANT BELOW
        return this;
    }
}

export default Category;
