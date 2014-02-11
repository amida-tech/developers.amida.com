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
    
    function AccessPendingPOST()
        {
          
         $phixid = $("#phixid").val();    
  
         if($phixid!=''){
                         
            document.getElementById('AccessPendingPOSTResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/access/pending";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // PHIX username & Password
            var $provider = $( "#AccessPendingPOSTProviderID" ).val();
            $url = $url + "/" + $provider;    
			console.log($url);

            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",phixid:"" + $phixid + ""};
             
            // populate request fields
            document.getElementById('AccessPendingPOSTRequestHeaderTitle').innerHTML = "POST";
            document.getElementById('AccessPendingPOSTRequestHeader').innerHTML = $url;        
            
            $.ajax
              ({
                url: $url,   
	            type: "post",        
	            data: formData,
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('AccessPendingPOSTResponseDisplayError').style.display = '';
                    document.getElementById('AccessPendingPOSTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('AccessPendingPOSTResponseHeaders').innerHTML = headers;
                document.getElementById('AccessPendingPOSTResponseBody').innerHTML = body;    
                
                document.getElementById('AccessPendingPOSTResponseDisplay1').style.display = '';
                document.getElementById('AccessPendingPOSTResponseDisplay2').style.display = '';
                
                document.getElementById('AccessPendingPOSTResponseDisplayLoading').style.display='none';
                document.getElementById('AccessPendingPOSTResponseHR').style.display='none';
                
                document.getElementById('AccessPendingPOSTResponseDisplayMessage').style.display = '';               

                document.getElementById('AccessPendingPOSTResponseDisplayMessageText').innerHTML = body; 
               }
            }); 
        }             
    }  
    
    function AccessPendingDELETE()
        {
            
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
                         
            document.getElementById('AccessPendingDELETEResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/access/pending";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
             var $method = "DELETE";
            
            // PHIX username & Password
            var $provider = $( "#AccessPendingDELETEProviderID" ).val();
            $url = $url + "/" + $provider;    
            
            console.log($url);

            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",phixid:"" + $phixid + "",_METHOD:"" + $method + ""}; 
             
            // populate request fields
            document.getElementById('AccessPendingDELETERequestHeaderTitle').innerHTML = "POST";
            document.getElementById('AccessPendingDELETERequestHeader').innerHTML = $url;        
            
            $.ajax
              ({
                url: $url,   
	            type: "post",        
	            data: formData,
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('AccessPendingDELETEResponseDisplayError').style.display = '';
                    document.getElementById('AccessPendingDELETEResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('AccessPendingDELETEResponseHeaders').innerHTML = headers;
                document.getElementById('AccessPendingDELETEResponseBody').innerHTML = body;    
                
                document.getElementById('AccessPendingDELETEResponseDisplay1').style.display = '';
                document.getElementById('AccessPendingDELETEResponseDisplay2').style.display = '';
                
                document.getElementById('AccessPendingDELETEResponseDisplayLoading').style.display='none';
                document.getElementById('AccessPendingDELETEResponseHR').style.display='none';
                
                document.getElementById('AccessPendingDELETEResponseDisplayMessage').style.display = '';
                
                document.getElementById('AccessPendingPOSTResponseDisplayMessageText').innerHTML = body; 
               }
            }); 
        }             
    }  
    
    function AccessPOST()
        {
          
         $phixid = $("#phixid").val();    
  
         if($phixid!=''){
                         
            document.getElementById('AccessPOSTResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/access";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // PHIX username & Password
            var $provider = $( "#AccessPOSTProviderID" ).val();
            $url = $url + "/" + $provider;    
			console.log($url);

            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",phixid:"" + $phixid + ""};
             
            // populate request fields
            document.getElementById('AccessPOSTRequestHeaderTitle').innerHTML = "POST";
            document.getElementById('AccessPOSTRequestHeader').innerHTML = $url;        
            
            $.ajax
              ({
                url: $url,   
	            type: "post",        
	            data: formData,
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('AccessPOSTResponseDisplayError').style.display = '';
                    document.getElementById('AccessPOSTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('AccessPOSTResponseHeaders').innerHTML = headers;
                document.getElementById('AccessPOSTResponseBody').innerHTML = body;    
                
                document.getElementById('AccessPOSTResponseDisplay1').style.display = '';
                document.getElementById('AccessPOSTResponseDisplay2').style.display = '';
                
                document.getElementById('AccessPOSTResponseDisplayLoading').style.display='none';
                document.getElementById('AccessPOSTResponseHR').style.display='none';
                
                document.getElementById('AccessPOSTResponseDisplayMessage').style.display = '';               

                document.getElementById('AccessPOSTResponseDisplayMessageText').innerHTML = body; 
               }
            }); 
        }             
    }  
    
    function AccessDELETE()
        {
            
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
                         
            document.getElementById('AccessDELETEResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/access";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
             var $method = "DELETE";
            
            // PHIX username & Password
            var $provider = $( "#AccessDELETEProviderID" ).val();
            $url = $url + "/" + $provider;    
            
            console.log($url);

            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",phixid:"" + $phixid + "",_METHOD:"" + $method + ""}; 
             
            // populate request fields
            document.getElementById('AccessDELETERequestHeaderTitle').innerHTML = "POST";
            document.getElementById('AccessDELETERequestHeader').innerHTML = $url;        
            
            $.ajax
              ({
                url: $url,   
	            type: "post",        
	            data: formData,
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('AccessDELETEResponseDisplayError').style.display = '';
                    document.getElementById('AccessDELETEResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('AccessDELETEResponseHeaders').innerHTML = headers;
                document.getElementById('AccessDELETEResponseBody').innerHTML = body;    
                
                document.getElementById('AccessDELETEResponseDisplay1').style.display = '';
                document.getElementById('AccessDELETEResponseDisplay2').style.display = '';
                
                document.getElementById('AccessDELETEResponseDisplayLoading').style.display='none';
                document.getElementById('AccessDELETEResponseHR').style.display='none';
                
                document.getElementById('AccessDELETEResponseDisplayMessage').style.display = '';
                
                document.getElementById('AccessPOSTResponseDisplayMessageText').innerHTML = body; 
               }
            }); 
        }             
    }  