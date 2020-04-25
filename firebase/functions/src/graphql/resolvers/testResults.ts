
const getTests = () => {
    const tests = [{
        title: "NEGATIVE",
        type: 'TEST_RESULT',
        message: "You have been tested negative. To minimize risk you should stay at home",
        published: new Date().toISOString(),
        end: new Date().toISOString(),
    },
    {
        title: "NEGATIVE",
        type: 'TEST_RESULT',
        message: "You have been tested negative. To minimize risk you should stay at home",
        published: new Date().toISOString(),
        end: new Date().toISOString(),
    },
    {
        title: "POSITIVE",
        type: 'TEST_RESULT',
        message: "Plese follow your country orders, advisories. Your medical person will soon contact you.",
        published: new Date().toISOString(),
        end: new Date().toISOString(),
    }
    ];
    return tests
}



export const testResultsResolver = () => {
    return getTests()
}