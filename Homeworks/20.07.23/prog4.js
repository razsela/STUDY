var first,last,address,date
 first = prompt('Please enter your first name:')
last=prompt ('please enter your last name:')
address= prompt('please enter your address:')
date = prompt ('please enter your date of birth:')//float

document.write (' <h1 class=h1> Your user details:' ,"</h1>")
document.write ('<br><br></br></br>','<h3 class="green" id="frame">  your first name is '," ", first , '</h3>')
document.write ('<h3 class="red" id="frame">',  "your last name is ", last,"</p>")
document.write ('<h3 class="blue" id="frame">', 'you live in '," ",address," ","</h3>")
document.write ('<h3 class="orange" id="frame">','and your birthday is '," " ,date , "</h3>")


