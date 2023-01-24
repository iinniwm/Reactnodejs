module.exports = (sequelize, Sequelize) => {
    const CSVfile = sequelize.define("csvfile", {
          first_Name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          last_Name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          dob: {
            type: Sequelize.DATEONLY,
            allowNull: false
          },
          gender: {
            type: Sequelize.STRING,
            allowNull: false
          },
          address: {
            type: Sequelize.STRING,
            allowNull: false
          },
          phone_number: {
            type: Sequelize.STRING,
            allowNull: false
          },
          email: {
            type: Sequelize.STRING,
            unique: true
          }
    });
  
    return CSVfile;
  };