const { authReducer } = require("../../auth/authReducer");
const { types } = require("../../types/types");


describe('Pruebas en authReducer', () => {
    test('should retornar el estado por defecto', () => {
        
        const state = authReducer({ logged: false }, {});
        expect( state).toEqual({ logged: false });

    })

    test('should de autenticar y colocar el name del usuario', () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Juan'
            }
        }
    })
    

    test('debe de borrar el name del usuario y logged en false', () => {
        
        const action = {
            type: types.logout
        }

        const state = authReducer({ logged: true, name: 'Antonio' }, action);
        expect( state ).toEqual({ logged: false});
    })
    
});
