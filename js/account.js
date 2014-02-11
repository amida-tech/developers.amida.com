    function accountLogin()
        {
        document.getElementById('AccountLoginPOSTResponseDisplayLoading').style.display='';
            
        $url = "http://phix.proxy.publicprivatesector.org/account/login";    
        
        // API app id and key    
        var appid = $( "#appid" ).val();
        var appkey = $( "#appkey" ).val();  
        
        // PHIX username & Password
        var username = $( "#username" ).val();
        var password = $( "#password" ).val();            
            
        var formData = {appid:"" + appid + "",appkey:"" + appkey + "",username:"" + username + "",password:"" + password + ""};
         
        // populate request fields
        document.getElementById('AccountLoginPOSTRequestHeaderTitle').innerHTML = "POST";
        document.getElementById('AccountLoginPOSTRequestHeader').innerHTML = $url;        
        
        $.ajax
          ({
            url: $url,   
            type: "post",        
            data: formData,
            error: function(xhRequest, ErrorText, thrownError){
                //console.log("ERROR: "+ JSON.stringify(xhRequest));
                document.getElementById('AccountLoginPOSTResponseDisplayError').style.display = '';
                document.getElementById('AccountLoginPOSTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
              },        
          success: function(data, textStatus, request){
                     
            // get headers      
            var headers = request.getAllResponseHeaders().toLowerCase();
            
            // return the body;
            var obj = jQuery.parseJSON(data);
            body = obj.body;
            phixid = obj.phix_id;
            
            $("#phixid").val(phixid);
            document.getElementById('AccountLoginPOSTResponseHeaders').innerHTML = headers;
            document.getElementById('AccountLoginPOSTResponseBody').innerHTML = body;    
            
            document.getElementById('AccountLoginPOSTResponseDisplay1').style.display = '';
            document.getElementById('AccountLoginPOSTResponseDisplay2').style.display = '';
            
            document.getElementById('AccountLoginPOSTResponseDisplayLoading').style.display='none';
            document.getElementById('AccountLoginPOSTResponseHR').style.display='';
            //alert(body);
            if(body!=false)
            	{
            	document.getElementById('AccountLoginPOSTResponseDisplayMessage').style.display = '';
            	document.getElementById('AccountLoginPOSTResponseDisplayMessageText').innerHTML = 'You are now logged in with the PHIX system!';
            	}
            else
            	{
                document.getElementById('AccountLoginPOSTResponseDisplayError').style.display = '';
                document.getElementById('AccountLoginPOSTResponseDisplayErrortext').innerHTML = "ERROR: Login was unsuccessful!";
            	}             
            
            if(body=='OK'){
                console.log("OK DOKY!");
            }
            else{
                console.log("NOT OK DOKY!");
            }
           }
        });              
    }
    
    function accountLoggedIn()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('AccountLoggedInGETResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/account/loggedin";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // populate request fields
            document.getElementById('AccountLoggedInGETRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('AccountLoggedInGETRequestHeader').innerHTML = $url;        
            
             $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid;
            
            $.ajax
              ({
                type: "get",
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('AccountLoggedInGETResponseDisplayError').style.display = '';
                    document.getElementById('AccountLoggedInGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('AccountLoggedInGETResponseHeaders').innerHTML = headers;
                document.getElementById('AccountLoggedInGETResponseBody').innerHTML = body;    
                
                document.getElementById('AccountLoggedInGETResponseDisplay1').style.display = '';
                document.getElementById('AccountLoggedInGETResponseDisplay2').style.display = '';
                
                document.getElementById('AccountLoggedInGETResponseDisplayLoading').style.display='none';
                document.getElementById('AccountLoggedInGETResponseHR').style.display='';
                
                document.getElementById('AccountLoggedInGETResponseDisplayMessage').style.display = '';
                document.getElementById('AccountLoggedInGETResponseDisplayMessageText').innerHTML = 'Now your are logged in with PHIX!'; 
                
                if(body=='OK'){
                    console.log("OK DOKY!");
                }
                else{
                    console.log("NOT OK DOKY!");
                }
               }
            }); 
        }             
    } 
    
    function accountVerify()
        {
            
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
                         
            document.getElementById('AccountVerifyPOSTResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/account/verify";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // PHIX username & Password
            var username = $( "#verifyusername" ).val();
            var email = $( "#verifyemail" ).val();            
                
            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",username:"" + username + "",email:"" + email + "",phixid:"" + $phixid + ""};
             
            // populate request fields
            document.getElementById('AccountVerifyPOSTRequestHeaderTitle').innerHTML = "POST";
            document.getElementById('AccountVerifyPOSTRequestHeader').innerHTML = $url;        
            
            $.ajax
              ({
                url: $url,   
                type: "post",        
                data: formData,
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('AccountVerifyPOSTResponseDisplayError').style.display = '';
                    document.getElementById('AccountVerifyPOSTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                
                $thisbody = jQuery.parseJSON(body);
                
                if($thisbody['verified']=='true'){
                    $verified = 1; 
                    $verifiedmessage = "This user is a verified user in the PHIX system.";
                    }
                else{
                   $verified = 0; 
                   $verifiedmessage = "This user is not a verified user in the PHIX system.";
                    }
                
                document.getElementById('AccountVerifyPOSTResponseHeaders').innerHTML = headers;
                document.getElementById('AccountVerifyPOSTResponseBody').innerHTML = JSON.stringify($thisbody);    
                
                document.getElementById('AccountVerifyPOSTResponseDisplay1').style.display = '';
                document.getElementById('AccountVerifyPOSTResponseDisplay2').style.display = '';
                
                document.getElementById('AccountVerifyPOSTResponseDisplayLoading').style.display='none';
                document.getElementById('AccountVerifyPOSTResponseHR').style.display='';
                
                document.getElementById('AccountVerifyPOSTResponseDisplayMessage').style.display = '';
                document.getElementById('AccountVerifyPOSTResponseDisplayMessageText').innerHTML = $verifiedmessage;

               }
               
            });  
        }            
    }     
    
    function accountValidUser()
        {
            
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
                         
            document.getElementById('AccountValidUserPOSTResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/account/validuser";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // PHIX username & Password
            var username = $( "#validusername" ).val();     
                
            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",username:"" + username + "",phixid:"" + $phixid + ""};
             
            // populate request fields
            document.getElementById('AccountValidUserPOSTRequestHeaderTitle').innerHTML = "POST";
            document.getElementById('AccountValidUserPOSTRequestHeader').innerHTML = $url;        
            
            $.ajax
              ({
                type: "POST",
                url: $url,   
                type: "post",        
                data: formData,
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('AccountValidUserPOSTResponseDisplayError').style.display = '';
                    document.getElementById('AccountValidUserPOSTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('AccountValidUserPOSTResponseHeaders').innerHTML = headers;
                document.getElementById('AccountValidUserPOSTResponseBody').innerHTML = body;    
                
                document.getElementById('AccountValidUserPOSTResponseDisplay1').style.display = '';
                document.getElementById('AccountValidUserPOSTResponseDisplay2').style.display = '';
                
                document.getElementById('AccountValidUserPOSTResponseDisplayLoading').style.display='none';
                document.getElementById('AccountValidUserPOSTResponseHR').style.display='';
                
                document.getElementById('AccountValidUserPOSTResponseDisplayMessage').style.display = '';
                
                
                if(body=='Bad Request'){
                    document.getElementById('AccountValidUserPOSTResponseDisplayMessageText').innerHTML = username + ' is not currently a PHIX user.'; 
                }
                else{
                    document.getElementById('AccountValidUserPOSTResponseDisplayMessageText').innerHTML = username + ' is an existing PHIX user.'; 
                }
               }
            }); 
        }             
    }    
    
    function accountGET()
        {
            
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
                         
            document.getElementById('AccountGETResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/account";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  

            // populate request fields
            document.getElementById('AccountGETRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('AccountGETRequestHeader').innerHTML = $url;      
            
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid;            
            
            $.ajax
              ({
                url: $url,   
                type: "get",        
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('AccountGETResponseDisplayError').style.display = '';
                    document.getElementById('AccountGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('AccountGETResponseHeaders').innerHTML = headers;
                document.getElementById('AccountGETResponseBody').innerHTML = body;    
                
                document.getElementById('AccountGETResponseDisplay1').style.display = '';
                document.getElementById('AccountGETResponseDisplay2').style.display = '';
                
                document.getElementById('AccountGETResponseDisplayLoading').style.display='none';
                document.getElementById('AccountGETResponseHR').style.display='';
                
                //document.getElementById('AccountGETResponseDisplayMessage').style.display = '';

                //document.getElementById('AccountGETResponseDisplayMessageText').innerHTML = ''
                    
               }
            }); 
        }             
    }      
    
    function accountUpdate()
        {
            
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
                         
            document.getElementById('AccountPOSTResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/account";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // PHIX username & Password
            var username = $( "#updateusername" ).val();
            var email = $( "#updateemail" ).val(); 
            var password = $( "#updatepassword" ).val();      
                
            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",username:"" + username + "",email:"" + email + "",password:"" + password + "",phixid:"" + $phixid + ""};
             
            // populate request fields
            document.getElementById('AccountPOSTRequestHeaderTitle').innerHTML = "POST";
            document.getElementById('AccountPOSTRequestHeader').innerHTML = $url;        
            
            $.ajax
              ({
                url: $url,   
                type: "post",        
                data: formData,
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('AccountPOSTResponseDisplayError').style.display = '';
                    document.getElementById('AccountPOSTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('AccountPOSTResponseHeaders').innerHTML = headers;
                document.getElementById('AccountPOSTResponseBody').innerHTML = body;    
                
                document.getElementById('AccountPOSTResponseDisplay1').style.display = '';
                document.getElementById('AccountPOSTResponseDisplay2').style.display = '';
                
                document.getElementById('AccountPOSTResponseDisplayLoading').style.display='none';
                document.getElementById('AccountPOSTResponseHR').style.display='';
                
                document.getElementById('AccountPOSTResponseDisplayMessage').style.display = '';
                
                
                if(body=='Bad Request'){
                    document.getElementById('AccountPOSTResponseDisplayMessageText').innerHTML = username + ' is not currently a PHIX user.'; 
                }
                else{
                    document.getElementById('AccountPOSTResponseDisplayMessageText').innerHTML = username + ' is an existing PHIX user.'; 
                }
               }
            }); 
        }             
    } 
    
    function accountAdd()
        {
            
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
                         
            document.getElementById('AccountPUTResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/account";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // PHIX username & Password
            var username = $( "#addusername" ).val();
            var email = $( "#addemail" ).val(); 
            var password = $( "#addpassword" ).val();      
                
            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",username:"" + username + "",email:"" + email + "",password:"" + password + "",phixid:"" + $phixid + ""};            
            //formData = "appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid + "&username=" + username + "&email=" + email + "&password=" + password; 
             
            // populate request fields
            document.getElementById('AccountPUTRequestHeaderTitle').innerHTML = "POST";
            document.getElementById('AccountPUTRequestHeader').innerHTML = $url;        
            
            //console.log(JSON.stringify(formData));
            console.log($url);
            console.log(formData);
            
            $.ajax
              ({
                url: $url,   
                type: "put",
                data: formData,                
                contentType: 'multipart/form-data',
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('AccountPUTResponseDisplayError').style.display = '';
                    document.getElementById('AccountPUTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('AccountPUTResponseHeaders').innerHTML = headers;
                document.getElementById('AccountPUTResponseBody').innerHTML = body;    
                
                document.getElementById('AccountPUTResponseDisplay1').style.display = '';
                document.getElementById('AccountPUTResponseDisplay2').style.display = '';
                
                document.getElementById('AccountPUTResponseDisplayLoading').style.display='none';
                document.getElementById('AccountPUTResponseHR').style.display='';
                
                document.getElementById('AccountPUTResponseDisplayMessage').style.display = '';
                
                
                if(body=='Bad Request'){
                    document.getElementById('AccountPUTResponseDisplayMessageText').innerHTML = username + ' is not currently a PHIX user.'; 
                }
                else{
                    document.getElementById('AccountPUTResponseDisplayMessageText').innerHTML = username + ' is an existing PHIX user.'; 
                }
               }
            }); 
        }             
    } 