/*JavaScript Code Blocks
JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.

The purpose of code blocks is to define statements to be executed together.

One place you will find statements grouped together in blocks, is in JavaScript functions:

Example*/ 
function color(){
    document.getElementById("er").style.backgroundColor="red";
}
/*External JavaScript
Scripts can also be placed in external files:

External file: myScript.js
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
External scripts are practical when the same code is used in many different web pages.

JavaScript files have the file extension .js.

To use an external script, put the name of the script file in the src (source) attribute of a <script> tag:

Example
<script src="myScript.js"></script>
You can place an external script reference in <head> or <body> as you like.

The script will behave as if it was located exactly where the <script> tag is located.

External scripts cannot contain <script> tags.

External JavaScript Advantages
Placing scripts in external files has some advantages:

It separates HTML and code
It makes HTML and JavaScript easier to read and maintain
Cached JavaScript files can speed up page loads
To add several script files to one page  - use several script tags:

External References
An external script can be referenced in 3 different ways:

With a full URL (a full web address)
With a file path (like /js/)
Without any path

*/
/*In JavaScript you cannot use these reserved words as variables, labels, or function names:
abstract	arguments	async *	await *
boolean	break	byte	case
catch	char	class *	const *
continue	debugger	default	delete
do	double	else	enum *
eval	export *	extends *	false
final	finally	float	for
function	goto	if	implements
function	import *	in	instanceof
int	interface	let *	long
native	new	null	package
private	protected	public	return
short	static	super *	switch
synchronized	this	throw	throws
transient	true	try	typeof
using *	var	void	volatile
while	with	yield*/ 
/*JavaScript Keywords
JavaScript statements often start with a keyword to identify the JavaScript action to be performed.

Our Reserved Words Reference lists all JavaScript keywords.

Here is a list of some of the keywords you will learn about in this tutorial:

Keyword	Description
var	Declares a variable
let	Declares a block variable
const	Declares a block constant
if	Marks a block of statements to be executed on a condition
switch	Marks a block of statements to be executed in different cases
for	Marks a block of statements to be executed in a loop
function	Declares a function
return	Exits a function
try	Implements error handling to a block of statements*/
