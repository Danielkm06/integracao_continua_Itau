const Cliente = require('../../models/cliente')
 
describe('Clientes', ()=> {
    beforeEach(async ()=> {
    })

    it('Retorna todos', async () => {
        let Clientes  = Cliente.todos()
        expect(Clientes.length).toEqual(10)
    });
})