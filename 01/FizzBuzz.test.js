/** 
 * Ce dojo utilise la librarie Chai pour les tests unitaires (TDD)
 * Avec l'environnement Mocha
*/


const FizzBuzz = require('./FizzBuzz.js');
const assert = require('chai').assert // Librarie Chai : http://chaijs.com/guide/installation/



/**
 * All Suite Test
 */
describe('Suite test in FizzBuzz Dojo', () => {

    it('test si mutiple de 3', (done) => {
        assert.equal(FizzBuzz(9), 2); 
        assert.equal(FizzBuzz(12), 2); 
        done();
    });
    
    it('test si mutiple de 5', (done) => {
        assert.equal(FizzBuzz(10), 2); 
        assert.equal(FizzBuzz(20), 2); 

        done();
    });

    it('test si mutiple de 3 et de 5', (done) => {
        assert.equal(FizzBuzz(15), 2); 
        assert.equal(FizzBuzz(30), 2); 

        done();
    });

    it('test si ni mutiple de 3 ni de 5', (done) => {
        assert.equal(FizzBuzz(8), 2); 
        assert.equal(FizzBuzz(7), 2); 

        done();
    });

    it("test si ce n'est pas un nombre ", (done) => {
        assert.equal(FizzBuzz("Hello World !"), 2); 
        done();
    });

});