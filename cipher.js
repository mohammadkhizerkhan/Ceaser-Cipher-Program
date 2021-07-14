    function executeCipher(){
        var str = document.getElementById("strBox").value;
        var key = parseInt(document.getElementById("keyBox").value);
        
        var enc = document.getElementById("enc").checked;
        var dec = document.getElementById("dec").checked;
        
        var message = "";
        if (enc == true){
            message = encrypt(str, key);
            $("#displayBox").html(message);
        } else if (dec == true){
            message = decrypt(str, key);
            $("#displayBox").html(message);
        } else {
            alert("Please Choose Decrypt or Encrypt");
        }
    }
    
    
    function encrypt(text,number){
            var cipherText = "";
            var heck = text.toLowerCase();
            for(var i=0; i< heck.length; i++){
                var initChar, encryptChar;
                initChar = heck.charAt(i);
                //dont encode non letters
                if(initChar < 'a' || initChar > 'z'){
                   cipherText += initChar;
                } else {
                    encryptChar = cipher(initChar,number);
                    cipherText += encryptChar;
                }


        }
        return cipherText;
    }
    
    function decrypt(text,number){
            var cipherText = "";
            var heck = text.toLowerCase();
            for(var i=0; i< heck.length; i++){
                var initChar, encryptChar;
                initChar = heck.charAt(i);
                //dont encode non letters
                if(initChar < 'a' || initChar > 'z'){
                   cipherText += initChar;
                } else {
                    encryptChar = antiCipher(initChar,number);
                    cipherText += encryptChar;
                }


        }
        return cipherText;
    }
    
    function cipher(ch, value){
        var code;
        var encryptChar;
        // var debug =ch.charCodeAt(0);
        var really = 'a';
        really = really.charCodeAt(0);
        code = ch.charCodeAt(0) - really;//convert to number between 0 and 25
        code = (code + value) % 26;
        //wrap to beginning of alphabet

        //makes a number with the offset included
        var cryptNum = code + really;
        //casts that number to a char
        
        encryptChar = String.fromCharCode(cryptNum);
        return encryptChar;
    }
    
    function antiCipher(ch, value){
        var code;
        var encryptChar;
        // var debug =ch.charCodeAt(0);
        var really = 'a';
        really = really.charCodeAt(0);
        code = ch.charCodeAt(0) - really;//convert to number between 0 and 25
        code = (code - value) % 26;
        //wrap to beginning of alphabet

        //makes a number with the offset included
        var cryptNum = code + really;
        //casts that number to a char
        
        encryptChar = String.fromCharCode(cryptNum);
        return encryptChar;
    }