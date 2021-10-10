export default (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.STRING(45),
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },

      accessToken: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      profileURL: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {}
  );
};
