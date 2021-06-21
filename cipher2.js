    function mod(x, y){
        return x % y;
    }
    
    function caeser(str, key) {
    	var result = "";
    	for (var i = 0; i < str.length; i++) {
    		var c = str.charCodeAt(i);
    		
    		if (65 <= c && c <= 90){
    		    result += String.fromCharCode(mod(c - 65 + key, 26) + 65);  // Uppercase
    		} else if (97 <= c && c <= 122) {
    		    result += String.fromCharCode(mod(c - 97 + key, 26) + 97);  // Lowercase
    		} else {
    		    result += str.charAt(i); 
    		}
    	}
    	return result;
    }
    
    function executeCipher(){
        var str = document.getElementById("strBox").value;
        var key = parseInt(document.getElementById("keyBox").value);

        var enc = document.getElementById("enc").checked;
        var dec = document.getElementById("dec").checked;
        
        var message = "";
        if (enc == true){
            message = caeser(str, key);
            $("#displayBox").html(message);
        } else if (dec == true){
            key = (26 - key) % 26;
            message = caeser(str, key);
            $("#displayBox").html(message);
        } else {
            alert("Please Choose Decrypt or Encrypt");
        }
    }