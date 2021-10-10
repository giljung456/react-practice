export default (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      accessToken: {
        type: DataTypes.STRING(100),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {}
  );
};
