const { default : TestRunner } = require('jest-runner')
const a7aFunction = require('./code')



test("Tizak hamra ya kosmak" , ()=>{
    expect(a7aFunction("A7A" , "ya kosmak"))
    .toBe("Tizak Hamra la tany maraa ya kosmak it is running")
}
)