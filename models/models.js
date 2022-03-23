const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Departament = sequelize.define('departament', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const DepartamentCard = sequelize.define('departament_card', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Card = sequelize.define('card', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    card_fio: {type: DataTypes.STRING, allowNull: false},
    card_code: {type: DataTypes.INTEGER, unique: true, allowNull: false},
})

const Facultet = sequelize.define('facultet', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    facultet_name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Group = sequelize.define('group', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    group_name: {type: DataTypes.STRING, unique: true, allowNull: false},
 })

 const FacultetGroup = sequelize.define('facultetGroup', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Departament)
Departament.belongsTo(User)

Departament.hasMany(DepartamentCard)
DepartamentCard.belongsTo(Departament)

Card.hasMany(DepartamentCard)
DepartamentCard.belongsTo(Card)

Facultet.hasMany(Card)
Card.belongsTo(Facultet)

Group.hasMany(Card)
Card.belongsTo(Group)

Facultet.belongsToMany(Group, {through: FacultetGroup })
Group.belongsToMany(Facultet, {through: FacultetGroup })

module.exports = {
    User,
    Departament,
    DepartamentCard,
    Card,
    Facultet,
    Group,
    FacultetGroup
}
  