/* @license
 * Copyright pLzOO Inc. All Rights Reserved.
 * Project: identity.server
 * File: tests/modules/index.ts
 * Author: Ajay Singh <meajaysingh@hotmail.com> 
 */

import { UserManagement } from '../../lib/modules';


describe('UserManagement', () => {

    describe('Registration', () => {
        it('register user', (done) => {
            UserManagement.register({username:'ajay',email:'meajaysingh@hotmail.com',password:'12345'}).then((d) => {
                console.log(d);
                done();
            }, (errors) => {
                console.log(errors);
                done(errors);
            })
        });
    });
    describe('Registration', () => {
        it('login user', (done) => {
            UserManagement.login({  email: 'meajaysingh@hotmail.com', password: '12345' }).then((d) => {
                console.log(d);
                done();
            }, (errors) => {
                console.log(errors);
                done(errors);
            })
        });
    });

    describe('Decode', ()=>{
        it('token Decode',(done)=>{
           console.log( UserManagement.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1N2Q0YTIyMjU4NGJhNDNlYTQxNmVlMzEiLCJ1c2VybmFtZSI6ImFqYXkiLCJlbWFpbCI6Im1lYWpheXNpbmdoQGhvdG1haWwuY29tIiwiaWF0IjoxNDczNTU0NTY4LCJleHAiOjE0NzM3MjczNjh9.GB4LQw-OwvAXQdaAsuwvfQFuEEOrsyFDQ4RRGhNzD98'));
           done();

        })
    })
});