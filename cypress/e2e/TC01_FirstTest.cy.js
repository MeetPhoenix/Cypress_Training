/// <reference types="cypress" />

describe ('Login Functionality' , function(){

    it('Login Test using Conduit' , function(){
        cy.visit('https://react-redux.realworld.io/#/?_k=6s6l5p')
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(1) > .form-control').type('cypressdemo@gmail.com')
        cy.get(':nth-child(2) > .form-control').type('cypressdemo')
        cy.get('.btn').click()
        cy.get('.ion-gear-a').click()
        cy.get('.btn-outline-danger').click()
    })
})