const randomNumericSequence  = q => `${Math.random()}`.substring(2, q + 2)
const RGGenerator = () => randomNumericSequence(2) + '.' + randomNumericSequence(3) + '.' + randomNumericSequence(3) + '-' + randomNumericSequence(1)
