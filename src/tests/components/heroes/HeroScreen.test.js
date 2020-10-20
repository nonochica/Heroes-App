import React from 'react';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';





describe('Pruebas en <HeroScreen /> ', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()

    }

    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen history={ history }/>
        </MemoryRouter>
        
    )
    
    test('Debe de mostrarse el componente redirect si no hay arumentos en el URL', () => {
        
        expect( wrapper.find('Redirect').exists() ).toBe(true);
    });

    test('Debe de mostrar un hero si el parámetro existe y se encuentra', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={ HeroScreen } />
            </MemoryRouter>

        );

        expect( wrapper.find('.row').exists() ).toBe(true);
    });
    
    test('Debe de regresar a la pantalla anterior con PUSH ', () => {

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> } />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalledWith();

        
    })

    test('debe de regresar a la pantalla anterior GOBACK', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> } />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect( history.push ).toHaveBeenCalledTimes(0);
        expect( history.goBack ).toHaveBeenCalledWith();

        
    })
    
    
    
})




