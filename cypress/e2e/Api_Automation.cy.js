Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe("API Automation", () => {

        it("Land on base URL", () => {
          cy.visit(Cypress.env('baseurl'))
        })
        

    it("Test GET Users List Api", () => {
        cy.fixture('request_responses').then(json => 
            {
            cy.request(Cypress.env('baseurl')+Cypress.env('list_users'))
               .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.statusText).to.eq('OK')
                    expect(response.body).to.include(json.Users_List_Response)
               })
          
            })
        })

    it("Test GET Single Users Api", () => {
        cy.fixture('request_responses').then(json => 
        {
            cy.request(Cypress.env('baseurl')+Cypress.env('single_user'))
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.statusText).to.eq('OK')
                    console.log(response.body)
                    expect(response.body).to.deep.equal(json.User_Found)     
                })
            })
        })  

    it("Test GET Single User Not Found Api", () => {
        cy.fixture('request_responses').then(json => 
        {
            cy.request(
                {
                url: Cypress.env('baseurl')+Cypress.env('single_user_not_found'),
                failOnStatusCode: false
                })
                .then((response) => {
                    expect(response.status).to.eq(404)
                    expect(response.statusText).to.eq('Not Found')
                    expect(response.body).to.include(json.User_NotFound)
                })        
            })
        })


    it("Test GET List Resource Api", () => {
        cy.fixture('request_responses').then(json => 
            {
            cy.request(Cypress.env('baseurl')+Cypress.env('list_resource'))
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.statusText).to.eq('OK')
                    expect(response.body).to.deep.equal(json.Resource_List)
                })
            })
        })

    it("Test GET Single Resource Api", () => {
        cy.fixture('request_responses').then(json => 
            {
            cy.request(Cypress.env('baseurl')+Cypress.env('single_resource'))
                 .then((response) => {
                        expect(response.status).to.eq(200)
                        expect(response.statusText).to.eq('OK')
                        expect(response.body).to.deep.equal(json.Single_Resource_Found)
                    }) 
            })
        })

    it("Test GET Single Resource not found Api", () => {
        cy.fixture('request_responses').then(json => 
            {
                cy.request({url: Cypress.env('baseurl')+Cypress.env('single_resource_not_found'),failOnStatusCode: false})
                .then((response) =>
                    {
                        expect(response.status).to.eq(404)
                        expect(response.statusText).to.eq('Not Found')
                        expect(response.body).to.include(json.Single_Resource_NotFound)
                    })                
            })
        })


    it("Test POST Create User Api", () => {
            cy.fixture('request_responses').then(json => 
            {
                cy.request
                ({
                    method: 'POST',
                    url: Cypress.env('baseurl')+Cypress.env('create_user'),
                    body: json.Create_User        
                })
                .then((response) => 
                {
                    expect(response.status).to.eq(201)
                    expect(response.statusText).to.eq('Created')
                    expect(response.body).to.include(json.create_User_Response)             
                })
            })
        })

    it("Test PUT Update User Api", () => {
        cy.fixture('request_responses').then(json => 
            {
            cy.request
                ({
                method: 'PUT',
                url: Cypress.env('baseurl')+Cypress.env('update/delete_user'),
                body: json.Update_User
                })
                .then((response) => 
                {
                    expect(response.status).to.eq(200)
                    expect(response.statusText).to.eq('OK')
                    expect(response.body).to.include(json.Update_User_Response) 
                })
            })
        })


    it("Test PATCH Update User Api", () => {
        cy.fixture('request_responses').then(json => 
            {
            cy.request
                ({
                method: 'PATCH',
                url: Cypress.env('baseurl')+Cypress.env('update/delete_user'),
                body: json.Update_User
                })
                .then((response) => 
                {
                    expect(response.status).to.eq(200)
                    expect(response.statusText).to.eq('OK')
                    expect(response.body).to.include(json.Update_User_Response)
                })
            })
        })

    it("Test Delete User Api", () => {
            cy.request
                    ({
                    method: 'DELETE',
                    url: Cypress.env('baseurl')+Cypress.env('update/delete_user')
                      })
                    .then((response) => 
                        {
                        expect(response.status).to.eq(204)
                        expect(response.statusText).to.eq('No Content')
                        })
        })


    it("Test POST Regiser Successful User Api", () => {
        cy.fixture('request_responses').then(json => 
            {
            cy.request
                ({
                    method: 'POST',
                    url: Cypress.env('baseurl')+Cypress.env('register'),
                    body: json.Post_Successful_Register
                })
                .then((response) => 
                {
                    expect(response.status).to.eq(200)
                    expect(response.statusText).to.eq('OK')
                    expect(response.body).to.include(json.Register_Successful)
                })            
            })
        })

    it("Test POST Regiser UnSuccessful User Api", () => {
        cy.fixture('request_responses').then(json => 
            {
            cy.request
            ({
                url: Cypress.env('baseurl')+Cypress.env('register'),
                method: 'POST',
                body: json.Post_UnSuccessful_Register,
                failOnStatusCode: false
            })
            .then((response) => 
            {
                expect(response.status).to.eq(400)
                expect(response.statusText).to.eq('Bad Request')
                expect(response.body).to.include(json.Register_UnSuccessful)
                })
            })
        })

    it("Test POST Successful Login User Api Response", () => {
        cy.fixture('request_responses').then(json => 
            {
            cy.request
            ({
                method: 'POST',
                url: Cypress.env('baseurl')+Cypress.env('login'),
                body: json.Post_Successful_Login
            })
            .then((response) => 
            {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq('OK')
                expect(response.body).to.include(json.Login_Successful)
                })
            })
        })

    it("Test POST UnSuccessful Login User Api Response", () => {
        cy.fixture('request_responses').then(json => 
            {
            cy.request
            ({
                method: 'POST',
                url: Cypress.env('baseurl')+Cypress.env('login'),
                body: json.Post_UnSuccessful_Login,
                failOnStatusCode: false
            })
            .then((response) => 
            {
                expect(response.status).to.eq(400)
                expect(response.statusText).to.eq('Bad Request')
                expect(response.body).to.include(json.Login_UnSuccessful)
            })
            })
        
        })


    it("Test GET Delayed Response Api", () => {
        cy.fixture('request_responses').then(json => 
            {
                cy.request(Cypress.env('baseurl')+Cypress.env('delay_response'))
                    .then((response) => 
                    {
                    cy.wait(8000)    
                        expect(response.status).to.eq(200)
                        expect(response.statusText).to.eq('OK')
                        expect(response.body).to.include(json.DelayedResponse)
                    })
                })
            })

})


