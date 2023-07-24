var a , b , c
a = parseInt(prompt("Enter number 'A'"))
b = parseInt(prompt("Enter number 'B'"))
c = parseInt ( prompt("Enter number 'C'"))

if ( a < b ){
    document.write( a ," ", "is not the biggest")
}
else if (a > c) {
    document.write(a , " ", "is the biggest")
}
else {
    document.write ( a,  "is not the biggest")
}