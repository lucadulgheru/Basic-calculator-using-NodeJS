"use strict";

var cowsay = require("cowsay");


function display(){

    var str1 = cowsay.say({ text: 'Calculator, Author: Luca Dulgheru' })+'\n';

    var str2 =  'display'+'\n'+
                'addition'+'\n'+
                'subtraction'+'\n'+
                'division'+'\n'+
                'multiply'+'\n'+
                'modulo'+'\n'+
                'sqrt'+'\n'+
                'absolute'+'\n'+
                'power'+'\n'+
                'sort'+'\n'+
                'reverse'+'\n'+
                'maximum'+'\n'+
                'minimum'+'\n'+
                'unique'+'\n'+
                'cosinus'+'\n'+
                'sinus';
    
    return str1+str2;

}



function addition(){

     var total = 0;

     var real = 0;
     var imaginary = 0;
     var i;
     var complex_total ="";

     let arr = process.argv.slice(3);
     var complex_arr;

     try{
       
        if(arr.length<2) throw "ERROR: addition command uses at least 2 parameters";
    
        if(process.argv[process.argv.length-1]=="complex"){

            complex_arr=process.argv.slice(3,process.argv.length-1);

               
                for( i=0;i<complex_arr.length;i=i+2){
                    if(!isNaN(complex_arr[i]))
                        real+=Number(complex_arr[i]);
                    else real+=0;

                    if(!isNaN(complex_arr[i+1]))
                        imaginary+=Number(complex_arr[i+1]);

                    else imaginary+=0;

                }

                if(imaginary!=0)
                     complex_total=real+"+"+imaginary+"i";
                else complex_total=real;

            return complex_total;


        }

        else{

            for(i=0; i<arr.length;i++)
                total+=Number(arr[i]);

            return total; 

        }
     }

     catch(err){

        return err;
     }

}

function subtraction(){

    var total = process.argv[3];

    let arr = process.argv.slice(4);

     var real;
     var imaginary;
     var i;
     var complex_total ="";

     var complex_arr;


    try{
       
        if(arr.length<1) throw "ERROR: subtraction command uses at least 2 parameters";

        if(process.argv[process.argv.length-1]=="complex"){

            complex_arr=process.argv.slice(3,process.argv.length-1);
       
                real=Number(complex_arr[0]);
                    imaginary=Number(complex_arr[1]);
                
               for(i=2;i<complex_arr.length;i=i+2)
                    {
                        
                            real-=Number(complex_arr[i]);
                       
                            imaginary-=Number(complex_arr[i+1]);

                    }
    
         
                   if(Number(imaginary)>0)
                        complex_total=real+"+"+Number(imaginary)+"i";

                   else complex_total=real.toString()+imaginary.toString()+"i";


            return complex_total;
    
    
        }

        else{
    
            for( i=0; i<arr.length;i++)
                total-=Number(arr[i]);

            return total; 

        }
     }

     catch(err){

        return err;
     }
}


function multiply(){

    var total = 1;
    var i;
    var preal;
    var pimaginary;

    var currentreal;
    var currentimaginary;

    var placeholderreal;
    var placeholderimaginary;

    var complex_total="";
    var complex_arr;

    let arr = process.argv.slice(3);

    try{

        if(arr.length<2) throw "ERROR: multiply command uses at least 2 parameters";

        if(process.argv[process.argv.length-1]=="complex"){

            complex_arr=process.argv.slice(3,process.argv.length-1);

           
                preal=complex_arr[0];
                pimaginary=complex_arr[1];


            for( i=2;i<complex_arr.length;i=i+2){

                    currentreal=Number(complex_arr[i]);
                    currentimaginary=Number(complex_arr[i+1]);

                    placeholderreal=Number(preal)*Number(currentreal)-Number(pimaginary)*Number(currentimaginary);
                    placeholderimaginary=Number(preal)*Number(currentimaginary)+Number(pimaginary)*Number(currentreal);

                    preal=placeholderreal;
                    pimaginary=placeholderimaginary;

            }


               if(Number(pimaginary)>0)
                        complex_total=preal+"+"+Number(pimaginary)+"i";

                   else complex_total=preal.toString()+pimaginary.toString()+"i";


            return complex_total;

        }


        else{
    
            for(i=0; i<arr.length;i++)
                total*=Number(arr[i]);

            return total; 

        }


     }

     catch(err){

        return err;
     }
}


function division(){

    let arr = process.argv.slice(3);

    var total = arr[0];

    try{
       
        if(arr.length<2) throw "ERROR: division command uses at least 2 parameters";
    
            for(var i=1; i<arr.length;i++)
                total/=Number(arr[i]);

            return total; 
     }

     catch(err){

        return err;
     }
}


function modulo(){

    var total;

    let arr = process.argv.slice(3);

    try{
       
        if(arr.length!=2) throw "ERROR: modulo command uses at least 2 parameters";
    
           
                total=arr[0]%arr[1];

            return total; 
     }

     catch(err){

        return err;
     }
}

function sqrt(){

    var total;

    let arr = process.argv.slice(3);

    try{
       
        if(arr.length!=1) throw "ERROR: sqrt command uses at least 1 parameters";
    
            total = Math.sqrt(arr[0]);

            return total; 
     }

     catch(err){

        return err;
     }
}


function absolute(){

    var total;

    let arr = process.argv.slice(3);

    try{
       
        if(arr.length!=1) throw "ERROR: absolute command uses at least 1 parameters";
    
            total = Math.abs(arr[0]);

            return total; 
     }

     catch(err){

        return err;
     }
}


function power(){

    var total;

    let arr = process.argv.slice(3);

    try{
       
        if(arr.length!=2) throw "ERROR: power command uses at least 2 parameters";
    
            total = Math.pow(arr[0],arr[1]);

            return total; 
     }

     catch(err){

        return err;
     }
}


function sort(){

    let arr = process.argv.slice(3);

    var str = "";

    try{
       
        if(arr.length<1) throw "ERROR: sort command uses at least 1 parameters";

        arr = arr.sort(function(a, b){return a - b;});
        
        for(var i=0; i<arr.length;i++)
            str+=arr[i]+" ";


        return str;
     }

     catch(err){

        return err;
     }
}

function reverse(){

    let arr = process.argv.slice(3);

    var str="";

    try{
       
        if(arr.length<1) throw "ERROR: reverse command uses at least 1 parameters";

        arr=arr.reverse();

        for(var i=0; i<arr.length;i++)

            str+=arr[i]+" ";


    return str;
     }

     catch(err){

        return err;
     }
}

function unique(){

    let arr = process.argv.slice(3);

    var str = "";

    try{
       
        if(arr.length<1) throw "ERROR: unique command uses at least 1 parameters";

        arr = [...new Set(arr)];

        for(var i=0; i<arr.length;i++)

            str+=arr[i]+" ";


    return str;
     }

     catch(err){

        return err;
     }
}

function maximum(){

    let arr = process.argv.slice(3);

    try{
       
        if(arr.length<1) throw "ERROR: maximum command uses at least 1 parameter";

        return Math.max( ...arr );
     }

     catch(err){

        return err;
     }
}
  

function minimum(){

    let arr = process.argv.slice(3);

    try{
       
        if(arr.length<1) throw "ERROR: minimum command uses at least 1 parameter";

        return Math.min( ...arr );
     }

     catch(err){

        return err;
     }
}

function cosinus(){

    let arr = process.argv.slice(3);

    try{
       
        if(arr.length!=1) throw "ERROR: cosinus command uses only 1 parameter";

            return Math.cos(arr[0]); 
     }

     catch(err){

        return err;
     }
}

function sinus(){

    let arr = process.argv.slice(3);

    try{
       
        if(arr.length!=1) throw "ERROR: cosinus command uses only 1 parameter";

            return Math.sin(arr[0]); 
     }

     catch(err){

        return err;
     }
}

var commands =  [null,'display','addition','subtraction','division','multiply','modulo','sqrt','absolute','power','sort','reverse','maximum','minimum','unique','cosinus','sinus'];

var check=false;

for(var i=0;i<commands.length;i++)
    
    if(process.argv[2]==commands[i])

        check=true;


switch(process.argv[2]){

    case 'display':

        console.log(display());
        break;
    
    case 'addition':

        console.log(addition());
        break;

    case 'subtraction':

        console.log(subtraction());
        break;

    case 'division':

        console.log(division());
        break;

    case 'multiply':

        console.log(multiply());
        break;

    case 'modulo':

        console.log(modulo());
        break;

    case 'sqrt':

        console.log(sqrt());
        break;

    case 'absolute':

        console.log(absolute());
        break;

    case 'power':

        console.log(power());
        break;

    case 'sort':

        console.log(sort());

        break;

    case 'reverse':

        console.log(reverse());
        break;

    case 'maximum':

        console.log(maximum());
        break;

    case 'minimum':

        console.log(minimum());
        break;

    case 'unique':

        console.log(unique());
        break;

    case 'cosinus':

        console.log(cosinus());
        break;

    case 'sinus':

        console.log(sinus());
        break;

    default:

        if(check==true)
        
            console.log(display());

        else console.log("ERROR: this command does not exist, use display to see available commands");
        
}




