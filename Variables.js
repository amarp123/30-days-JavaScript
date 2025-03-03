function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        var x=(90-age)*365;
        var y=(90-age)*52;
        var z=(90-age)*12;
        console.log("You have "+x+" days, "+y+" weeks, and "+z+" months left.");
        
        
        
        
        
    /*************Don't change the code below**********/
    }
    lifeInWeeks(56);
    
//whos buy lunch challange

function whosPaying(names) {
    
    
            var numberOfpeople=names.length;
            var randomPosition=Math.floor(Math.random()*numberOfpeople);
            var randomperson=names[randomPosition];
            
            return randomperson+" is going to buy lunch today!"
        
    }    



    //leap year challenge

    function isLeap(year) {
    
        /**************Don't change the code above****************/    
            
            //Write your code here.   
            if((year%4===0&&year%100!=0)||(year%4==0&&year%100!=0&&year%400===0)){
                return console.log("Leap year.");
            }
            
            else{
                return console.log("Not leap year.");
            }
        
        
            
        
        /**************Don't change the code below****************/    
        
        }
        isLeap(1989);

   //fibonacci challenge

  function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    
    var output=[];
    if(n===1){
        output=[0];
        
    }
    else if(n===2){
        output=[0,1];
    }
    else{
        output=[0,1];
        for(var i=2;i<n;i++){
            output.push(output[output.length-2]+output[output.length-1]);
        }
    }
    return output;
}

fibonacciGenerator(1);

