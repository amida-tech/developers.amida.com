    function directInboxGET()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('DirectInboxGETResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/direct/inbox";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // populate request fields
            document.getElementById('DirectInboxGETRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('DirectInboxGETRequestHeader').innerHTML = $url;  
            
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid;
            
            $.ajax
              ({
                type: "get",
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('DirectInboxGETResponseDisplayError').style.display = '';
                    document.getElementById('DirectInboxGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('DirectInboxGETResponseHeaders').innerHTML = headers;
                document.getElementById('DirectInboxGETResponseBody').innerHTML = body;    
                
                document.getElementById('DirectInboxGETResponseDisplay1').style.display = '';
                document.getElementById('DirectInboxGETResponseDisplay2').style.display = '';
                
                document.getElementById('DirectInboxGETResponseDisplayLoading').style.display='none';
                document.getElementById('DirectInboxGETResponseHR').style.display='';
                
                document.getElementById('DirectInboxGETResponseDisplayMessage').style.display = '';
                document.getElementById('DirectInboxGETResponseDisplayMessageText').innerHTML = 'Inbox Messages Pulled!'; 

               }
            }); 
        }             
    } 
    
    function directOutboxGET()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('DirectOutboxGETResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/direct/outbox";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // populate request fields
            document.getElementById('DirectOutboxGETRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('DirectOutboxGETRequestHeader').innerHTML = $url;  
            
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid;
            
            $.ajax
              ({
                type: "get",
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('DirectOutboxGETResponseDisplayError').style.display = '';
                    document.getElementById('DirectOutboxGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('DirectOutboxGETResponseHeaders').innerHTML = headers;
                document.getElementById('DirectOutboxGETResponseBody').innerHTML = body;    
                
                document.getElementById('DirectOutboxGETResponseDisplay1').style.display = '';
                document.getElementById('DirectOutboxGETResponseDisplay2').style.display = '';
                
                document.getElementById('DirectOutboxGETResponseDisplayLoading').style.display='none';
                document.getElementById('DirectOutboxGETResponseHR').style.display='';
                
                document.getElementById('DirectOutboxGETResponseDisplayMessage').style.display = '';
                document.getElementById('DirectOutboxGETResponseDisplayMessageText').innerHTML = 'Outbox Messages Pulled!'; 

               }
            }); 
        }             
    } 
    
    function directMessagePOST()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('DirectMessagePOSTResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/direct/message";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            var messageid = $( "#directmessagestatuseid" ).val(); 
            var status = $( "#directmessagestatus" ).val();  
            
            $url = $url + "/" + messageid;
            
            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",status:"" + status + "",phixid:"" + $phixid + ""};
            
            // populate request fields
            document.getElementById('DirectMessagePOSTRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('DirectMessagePOSTRequestHeader').innerHTML = $url;  
            
            $.ajax
              ({
                url: $url,   
                type: "post",        
                data: formData,                
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('DirectMessagePOSTResponseDisplayError').style.display = '';
                    document.getElementById('DirectMessagePOSTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('DirectMessagePOSTResponseHeaders').innerHTML = headers;
                document.getElementById('DirectMessagePOSTResponseBody').innerHTML = body;    
                
                document.getElementById('DirectMessagePOSTResponseDisplay1').style.display = '';
                document.getElementById('DirectMessagePOSTResponseDisplay2').style.display = '';
                
                document.getElementById('DirectMessagePOSTResponseDisplayLoading').style.display='none';
                document.getElementById('DirectMessagePOSTResponseHR').style.display='';
                
                document.getElementById('DirectMessagePOSTResponseDisplayMessage').style.display = '';
                document.getElementById('DirectMessagePOSTResponseDisplayMessageText').innerHTML = 'Providers Pulled!'; 

               }
            }); 
        }             
    } 
    
    function directMessageDELETE()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('DirectMessageDELETEResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/direct/message";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            var messageid = $( "#directmessagedeleteid" ).val();  
            var username = $( "#directmessageusername" ).val();  
            
            $url = $url + "/" + messageid;
            
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid + "&username=" + username;
            
            console.log($url);
            
            // populate request fields
            document.getElementById('DirectMessageDELETERequestHeaderTitle').innerHTML = "GET";
            document.getElementById('DirectMessageDELETERequestHeader').innerHTML = $url;  
            
            
            $.ajax
              ({
                url: $url,   
                type: "delete",        
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('DirectMessageDELETEResponseDisplayError').style.display = '';
                    document.getElementById('DirectMessageDELETEResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('DirectMessageDELETEResponseHeaders').innerHTML = headers;
                document.getElementById('DirectMessageDELETEResponseBody').innerHTML = body;    
                
                document.getElementById('DirectMessageDELETEResponseDisplay1').style.display = '';
                document.getElementById('DirectMessageDELETEResponseDisplay2').style.display = '';
                
                document.getElementById('DirectMessageDELETEResponseDisplayLoading').style.display='none';
                document.getElementById('DirectMessageDELETEResponseHR').style.display='';
                
                document.getElementById('DirectMessageDELETEResponseDisplayMessage').style.display = '';
                document.getElementById('DirectMessageDELETEResponseDisplayMessageText').innerHTML = 'Providers Pulled!'; 

               }
            }); 
        }             
    } 