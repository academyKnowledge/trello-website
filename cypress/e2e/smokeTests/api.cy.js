/// <reference types="cypress" />
describe('Http Requests And Responses', () => {
    it('Http Requests', () => {
        // cy.request(url)
        // cy.request(method,url)
        // cy.request(method,url,body)

        // GET Request 

        // get all users 
        cy.request("GET","https://jsonplaceholder.typicode.com/users")
        // get all posts 
        cy.request("https://jsonplaceholder.typicode.com/posts")
        // get single post 
        cy.request("https://jsonplaceholder.typicode.com/posts/10")
        // create a new data (post)
        cy.request("POST","https://jsonplaceholder.typicode.com/posts",{"userId":99 , "id":400, "title":"My post" , "body":"this is my post"})
        // delete existing data 
        cy.request("DELETE","https://jsonplaceholder.typicode.com/posts/10")
        // update existing data 
        cy.request("PUT","https://jsonplaceholder.typicode.com/posts/10",{"title":"My Title"})

        cy.request("GET","https://reqres.in/api/users/2").then((response)=>{
            // cypress api testing 

            // cy.log(response);
            expect(response.status).to.eq(200);
            // cy.log(response.body.data.email)
            expect(response.body.data.email).to.contain("janet.weaver@reqres.in")
            expect(response.body.data.id).to.eq(2)
            expect(response.body.support.url).to.eq("https://reqres.in/#support-heading")

        })
    });
});