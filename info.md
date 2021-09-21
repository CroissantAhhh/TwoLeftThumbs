npx dotenv sequelize db:create

npx sequelize model:generate --name User --attributes 'firstName:string, lastName:string, email:string, hashedPassword:string'

npx sequelize model:generate --name Question --attributes 'title:string, body:string, userId:integer'

npx sequelize model:generate --name Answer --attributes 'body:text, userId:integer, questionId:integer'

npx sequelize model:generate --name Vote --attributes 'answerId:integer, userId:integer, questionId:integer'

npx dotenv sequelize db:migrate

npx dotenv sequelize db:migrate:undo:all
