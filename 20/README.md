### Dojo Easy (7)

Given a dictionary/hash/object of languages and your respective test results, return the list of languages where your test score is at least 60, in descending order of the results.

Note: There will be no duplicate values.

```
    {"Java": 10, "Ruby": 80, "Python": 65}  --> ["Ruby", "Python"]
    {"Hindi": 60, "Dutch" : 93, "Greek": 71} --> ["Dutch", "Greek", "Hindi"]
    {"C++": 50, "ASM": 10, "Haskell": 20}   --> []
```

### Dojo Medium (6)

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('\_').

```
    solution('abc') // should return ['ab', 'c_']
    solution('abcdef') // should return ['ab', 'cd', 'ef']
```

### Dojo Medium (5)

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.

### Dojo Hard (4)

Consider the following expansion:

```
    solve("3(ab)") = "ababab" -- "ab" repeats 3 times
    solve("2(a3(b))") = "abbbabbb" -- "a3(b)" == "abbb" repeats twice.
```

Given a string, return the expansion of that string.

Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.

More examples in test cases.

Good luck!