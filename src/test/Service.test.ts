
import {getCoolName} from '../spp/Service'

describe('Service test suite',()=>{
    test('Name should be cool', ()=>{
        //CHANGED AFTER BREAKING cool-feature brunch changed implementation - and test failed -> workflow failed -> pull request failed!
        // const expected = 'CoolName'; 

        //CHANGED!  AFTER WORKFLOW FAILED
        const expected = 'Very CoolName'; 

        //ACT

        const actual = getCoolName()

        //ASSERT 
        expect(actual).toBe(expected)
    })
})