
import {getCoolName} from '../spp/Service'

describe('Service test suite',()=>{
    test('Name should be cool', ()=>{
        const expected = 'CoolName'; 
        //ACT
        const actual = getCoolName()

        //ASSERT 
        expect(actual).toBe(expected)
    })
})