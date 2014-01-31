    function accessGET()
        {
            
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
                         
            document.getElementById('AccessGETResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/access";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            var username = $( "#accessusername" ).val();;      
                
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid + "&username=" + username;     

            // populate request fields
            document.getElementById('AccessGETRequestHeaderTitle').innerHTML = "POST";
            document.getElementById('AccessGETRequestHeader').innerHTML = $url;        

            $.ajax
              ({
                url: $url,   
                type: "get",              
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('AccessGETResponseDisplayError').style.display = '';
                    document.getElementById('AccessGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('AccessGETResponseHeaders').innerHTML = headers;
                document.getElementById('AccessGETResponseBody').innerHTML = body;    
                
                document.getElementById('AccessGETResponseDisplay1').style.display = '';
                document.getElementById('AccessGETResponseDisplay2').style.display = '';
                
                document.getElementById('AccessGETResponseDisplayLoading').style.display='none';
                document.getElementById('AccessGETResponseHR').style.display='none';
                
                document.getElementById('AccessGETResponseDisplayMessage').style.display = '';
                
                
                if(body=='Bad Request'){
                    document.getElementById('AccessGETResponseDisplayMessageText').innerHTML = username + ' is not currently a PHIX user.'; 
                }
                else{
                    document.getElementById('AccessGETResponseDisplayMessageText').innerHTML = username + ' is an existing PHIX user.'; 
                }
               }
            }); 
        }             
    }  
    
    function accessPendingGET()
        {
            
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
                         
            document.getElementById('AccessPendingGETResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/access/pending";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // PHIX username & Password
            var username = $( "#accesspendingusername" ).val();;      
                
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid + "&username=" + username; 
             
            // populate request fields
            document.getElementById('AccessPendingGETRequestHeaderTitle').innerHTML = "POST";
            document.getElementById('AccessPendingGETRequestHeader').innerHTML = $url;        
            
            $.ajax
              ({
                url: $url,   
                type: "get",
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('AccessPendingGETResponseDisplayError').style.display = '';
                    document.getElementById('AccessPendingGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('AccessPendingGETResponseHeaders').innerHTML = headers;
                document.getElementById('AccessPendingGETResponseBody').innerHTML = body;    
                
                document.getElementById('AccessPendingGETResponseDisplay1').style.display = '';
                document.getElementById('AccessPendingGETResponseDisplay2').style.display = '';
                
                document.getElementById('AccessPendingGETResponseDisplayLoading').style.display='none';
                document.getElementById('AccessPendingGETResponseHR').style.display='none';
                
                document.getElementById('AccessPendingGETResponseDisplayMessage').style.display = '';
                
                
                if(body=='Bad Request'){
                    document.getElementById('AccessPendingGETResponseDisplayMessageText').innerHTML = username + ' is not currently a PHIX user.'; 
                }
                else{
                    document.getElementById('AccessPendingGETResponseDisplayMessageText').innerHTML = username + ' is an existing PHIX user.'; 
                }
               }
            }); 
        }             
    }  