    function ProfileGET()
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