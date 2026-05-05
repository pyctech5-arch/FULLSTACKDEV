public class j2 {
    public static void main(String[] args) {
        System.out.println("Java identifiers");
/* Java identifiers

All Java variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

Note: It is recommended to use descriptive names in order to create understandable and maintainable code: */

/*The general rules for naming variables are:

Names can contain letters, digits, underscores, and dollar signs
Names must begin with a letter
Names should start with a lowercase letter, and cannot contain whitespace
Names can also begin with $ and _
Names are case-sensitive ("myVar" and "myvar" are different variables)
Reserved words (like Java keywords, such as int or boolean) cannot be used as names
 
 Invalid Identifiers
Here are some examples of invalid identifiers that would cause errors:

Example
// Invalid identifiers:
int 2ndNumber = 5;  // Cannot start with a digit
int my var = 10;    // Cannot contain spaces
int int = 20;       // Cannot use reserved keywords
 */

/*Constants (final keyword)
When you do not want a variable's value to change, use the final keyword.

A variable declared with final becomes a constant, which means unchangeable and read-only: 
final int myNum = 15;
myNum = 20;  // Error: cannot assign a value to final variable 'myNum'

When to Use final?
You should declare variables as final when their values should never change. For example, the number of minutes in an hour, or your birth year:
final int MINUTES_PER_HOUR = 60;
final int BIRTHYEAR = 1980;
*/ 
    }
}