# Dojos

## Compare powers (Niveau 6)

You certainly can tell which is the larger number between 210 and 215.

But what about, say, 210 and 310? You know this one too.

Things tend to get a bit more complicated with both different bases and exponents: which is larger between 39 and 56?

Well, by now you have surely guessed that you have to build a function to compare powers, returning -1 if the first member is larger, 0 if they are equal, 1 otherwise; powers to compare will be provided in the [base, exponent] format:

```
    comparePowers([2,10],[2,15])===1
    comparePowers([2,10],[3,10])===1
    comparePowers([2,10],[2,10])===0
    comparePowers([3,9],[5,6])===-1
    comparePowers([7,7],[5,8])===-1
```

-- Bonus: Arguments can be more that 2... 3?4?

## Dojo Sum of Digits recursive (Niveau 6)

In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

```
    digital_root(16)
    => 1 + 6
    => 7

    digital_root(942)
    => 9 + 4 + 2
    => 15 ...
    => 1 + 5
    => 6

    digital_root(132189)
    => 1 + 3 + 2 + 1 + 8 + 9
    => 24 ...
    => 2 + 4
    => 6

    digital_root(493193)
    => 4 + 9 + 3 + 1 + 9 + 3
    => 29 ...
    => 2 + 9
    => 11 ...
    => 1 + 1
    => 2
```

## Dojo: Return substring instance count (Niveau 5)

Complete the solution so that it returns the number of times the search_text is found within the full_text.

```
    searchSubstr( fullText, searchText, allowOverlap = true )
```

So that overlapping solutions are (not) counted. If the searchText is empty, it should return 0.
Usage examples:

```
searchSubstr('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
searchSubstr('aaabbbcccc', 'bbb') # should return 1
searchSubstr( 'aaa', 'aa' ) # should return 2
searchSubstr( 'aaa', '' ) # should return 0
searchSubstr( 'aaa', 'aa', false ) # should return 1
```

https://www.codewars.com/kata/return-substring-instance-count-2

## Dojo Lazy Repeater (Niveau 5)

ES6 / Generators

The makeLooper() function (make_looper in Python) takes a string (of non-zero length) as an argument. It returns a function. The function it returns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.

```
    let abc = makeLooper('abc');
    abc(); // should return 'a' on this first call
    abc(); // should return 'b' on this second call
    abc(); // should return 'c' on this third call
    abc(); // should return 'a' again on this fourth call
```

https://www.codewars.com/kata/lazy-repeater

## Strip Comments (Niveau 4)

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Given an input string of:

```
    apples, pears # and bananas
    grapes
    bananas !apples
```

output:

```
apples, pears
grapes
bananas
```

The code would be called like so:

```
const result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// apples, pears\ngrapes\nbananas
```

![https://media.giphy.com/media/gmEeXtFmsfVEA/giphy.gif](https://media.giphy.com/media/gmEeXtFmsfVEA/giphy.gif)