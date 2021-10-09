const faker = require('faker-br');

function createUser(context, events, done) {
    context.vars.cpf = faker.br.cpf();
    context.vars.firstName = faker.name.firstName();
    context.vars.lastName = faker.name.lastName();
    context.vars.birthDay = faker.date.past();

    context.vars.income = faker.random.float();
    context.vars.value = faker.random.float();
    context.vars.quantity = faker.random.number();
    context.vars.rate = faker.random.float();
    
    done();
}

module.exports = { createUser }