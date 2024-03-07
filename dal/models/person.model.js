const { DataTypes } = require("sequelize");

module.exports = ({ SequelizeConnection }) => {
  const Person = SequelizeConnection.connection().define(
    "Person",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Person",
      timestamps: false
    }
  );

  Person.findByName = async function(name) {
    try {
      const data = await this.findAll({
        where: {
          name: name
        }
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return Person;
};
