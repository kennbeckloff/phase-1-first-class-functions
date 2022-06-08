function receivesAFunction(callMum){
    callMum();
 }
 function returnsANamedFunction(){
     return function callMum() {
         
     }
 }
 function returnsAnAnonymousFunction(){
     return () =>("call today")
 }
