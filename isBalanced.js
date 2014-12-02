function isBalanced (string) {
 var counter = 0;
 split = string.split("");

 split.forEach(function(x) {
   if (x== "(") {
     counter ++;
   }
   else if (x == ")") {
     counter --;
   }
   if (counter < 0) {
   counter --;
   }
 });

   if (counter === 0) {
     return true;
   }
   else {
     return false;
   }

}