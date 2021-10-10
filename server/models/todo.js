export default (sequelize, DataTypes) => {
  return sequelize.define(
    "todo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      isFinished: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    {}
  );
};
