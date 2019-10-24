console.log('TESTEM');
console.log('');
console.log(`Environment: test
cleaning up...
Built project successfully. Stored in "/tmp/tests-dist-2019924-23324-151etxu.7ter".
not ok 1 Chrome 77.0 - [568 ms] - Acceptance | first test: it works (nicely!)
    ---
        actual: >
           actual value
        expected: >
            expected value
        stack: >
                at Object.<anonymous> (http://localhost:7357/assets/tests.js:15:14)
        message: >
            this is the message
        negative: >
            false
        browser log: |
    ...
ok 2 Chrome 77.0 - [326 ms] - Acceptance | it works 2
ok 3 Chrome 77.0 - [655 ms] - Acceptance | it works 3
not ok 5 Chrome 77.0 - [301 ms] - Acceptance | it works 4
    ---
        actual: >
            other actual
        expected: >
            other expected
        stack: >
                at DOMAssertions.hasText (http://localhost:7357/assets/test-support.js:10008:20)
                at Object.<anonymous> (http://localhost:7357/assets/tests.js:87:49)
        message: >
            other message
        negative: >
            false
        browser log: |
    ...
ok 6 Chrome 77.0 - [630 ms] - Acceptance | it works 5
`);

console.log('');
console.log('');
console.log('TEMPLATE LINT');
console.log('');
console.log(`/home/test-app/app/components/date-picker.hbs
  20:4  error  'blub' is defined but never used  no-unused-block-params

/home/test-app/app/components/f-input.hbs
  8:1  error  Non-translated string used  no-bare-strings
  11:5  error  Non-translated string used  no-bare-strings

✖ 3 problems (3 errors, 0 warnings)
`);
