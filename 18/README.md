# 4 Dojos

## Very Easy: Alphabetized (Niveau 7)

Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order.

_Warning: Whitespace and punctuation shall simply be removed!_

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

```
    alphabetized("The Holy Bible!") // "BbeehHilloTy"
```

[https://www.codewars.com/kata/alphabetized](https://www.codewars.com/kata/alphabetized)

## Multiples of 3 or 5 (Niveau 6)

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.

Example

```
    multiple(10) => [3,5,6,9]
```

[https://www.codewars.com/kata/multiples-of-3-or-5](https://www.codewars.com/kata/multiples-of-3-or-5)

## Josephus Permutation (Niveau 5)

This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act).

Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.

You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.

Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.

For example, with n=7 and k=3 josephus(7,3) should act this way.

[https://www.codewars.com/kata/josephus-permutation](https://www.codewars.com/kata/josephus-permutation)

```
    [1,2,3,4,5,6,7] - initial sequence
    [1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
    [1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
    [1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
    [1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
    [1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
    [4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
    [] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
```

## Permutation & Combinaisons (Niveau 4)

In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

```
    permutations('a'); // ['a']
    permutations('ab'); // ['ab', 'ba']
    permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
```

[https://www.codewars.com/kata/permutations](https://www.codewars.com/kata/permutations)

```

```