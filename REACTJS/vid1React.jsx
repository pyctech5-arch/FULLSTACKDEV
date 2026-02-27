/*map() in React
The map() method is commonly used in React to render lists of elements:

Example:*/

const fruit=['apple,banana,chery'];
function mylist(){
    return(
        <ul>
    {fruit.map(fruits=>
        <li key={fruits}>{fruits}</li>
    )}
</ul>
);
}
/*Note: When using map() in React to create list items, each item needs a unique key prop.

map() with Objects
You can also use map() with arrays of objects:

Example:*/
