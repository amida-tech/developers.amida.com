    function IdentityAccountGET()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('IdentityAccountGETResponseDisplayLoading').style.display='';
              
			var token = $( "#identitytokenget" ).val();                
                
            $url = "http://phix.proxy.publicprivatesector.org/identity/account/" + token;    
            console.log($url);
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // populate request fields
            document.getElementById('IdentityAccountGETRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('IdentityAccountGETRequestHeader').innerHTML = $url;  
            
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid;
            
            $.ajax
              ({
                type: "get",
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('IdentityAccountGETResponseDisplayError').style.display = '';
                    document.getElementById('IdentityAccountGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('IdentityAccountGETResponseHeaders').innerHTML = headers;
                document.getElementById('IdentityAccountGETResponseBody').innerHTML = body;    
                
                document.getElementById('IdentityAccountGETResponseDisplay1').style.display = '';
                document.getElementById('IdentityAccountGETResponseDisplay2').style.display = '';
                
                document.getElementById('IdentityAccountGETResponseDisplayLoading').style.display='none';
                document.getElementById('IdentityAccountGETResponseHR').style.display='';
                
                document.getElementById('IdentityAccountGETResponseDisplayMessage').style.display = '';
                document.getElementById('IdentityAccountGETResponseDisplayMessageText').innerHTML = 'Providers Pulled!'; 

               }
            }); 
        }             
    } 
    
    function IdentityAccountPUT()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('IdentityAccountPUTResponseDisplayLoading').style.display='';
              
			var token = $( "#identitytokenget" ).val();                
                
            $url = "http://phix.proxy.publicprivatesector.org/identity/account/" + token;    
            console.log($url);
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            $method = "PUT";
            
            // populate request fields
            document.getElementById('IdentityAccountPUTRequestHeaderTitle').innerHTML = "PUT";
            document.getElementById('IdentityAccountPUTRequestHeader').innerHTML = $url;  
            
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid;
            
			var formData = {appid:"" + appid + "",appkey:"" + appkey + "",phixid:"" + $phixid + "",_METHOD:"" + $method + ""};             
            
            $.ajax
              ({
	            type: "post",        
	            data: formData,
                url: $url,    
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('IdentityAccountPUTResponseDisplayError').style.display = '';
                    document.getElementById('IdentityAccountPUTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('IdentityAccountPUTResponseHeaders').innerHTML = headers;
                document.getElementById('IdentityAccountPUTResponseBody').innerHTML = body;    
                
                document.getElementById('IdentityAccountPUTResponseDisplay1').style.display = '';
                document.getElementById('IdentityAccountPUTResponseDisplay2').style.display = '';
                
                document.getElementById('IdentityAccountPUTResponseDisplayLoading').style.display='none';
                document.getElementById('IdentityAccountPUTResponseHR').style.display='';

                if(body!=false)
                	{
                	document.getElementById('IdentityAccountPUTResponseDisplayMessage').style.display = '';
                	document.getElementById('IdentityAccountPUTResponseDisplayMessageText').innerHTML = body;
                	}
                else
                	{
                    document.getElementById('IdentityAccountPUTResponseDisplayError').style.display = '';
                    document.getElementById('IdentityAccountPUTResponseDisplayErrorText').innerHTML = "User Is Not Validated!";
                	}                    

               }
            }); 
        }             
    } 