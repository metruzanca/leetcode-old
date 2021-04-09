# Weird but Handy math stuff I found
While doing leet code I've found some weird stuff that just works yet I can't explain.

## "Length" of a number / "Masking" a decimal number
```ts
Math.floor(Math.log(12345)/Math.log(10)) //4
```
For some reason gives you the number of zeros (for 10**zeros) needed to make a mask of the number.
> Also, Math.trunc could potentially be faster yet everyone uses floor for some reason.

Used in [Palindrome Numbers](../src/9.palindrome-number.ts#L31) at line 31 & 41