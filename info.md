npx dotenv sequelize db:create

npx sequelize model:generate --name User --attributes 'firstName:string, lastName:string, email:string, hashedPassword:string'

npx dotenv sequelize db:migrate
