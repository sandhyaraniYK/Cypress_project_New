import{Login_Page} from '../Pages/login_page1'
beforeEach(function(){
    cy.log('i am outside describe block')
})
describe('my login tests',function(){
    let login_page=new Login_Page()

    beforeEach(function(){
        cy.visit('https://trytestingthis.netlify.app/')
    })
it('login test-validcreds',()=>{
 
    
    login_page.loginWithValidCredentials('test','test')
    
})
it('login test-invalidcreds',()=>{
    
    login_page.loginWithInValidCredentials('abc','123')
    
})
    
})
