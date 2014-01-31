    function DelegationReceivedGET()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('DelegationReceivedGETResponseDisplayLoading').style.display='';
              
            $url = "http://phix.proxy.publicprivatesector.org/delegation/recieved";    
            console.log($url);
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // populate request fields
            document.getElementById('DelegationReceivedGETRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('DelegationReceivedGETRequestHeader').innerHTML = $url;  
            
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid;
            
            $.ajax
              ({
                type: "get",
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('DelegationReceivedGETResponseDisplayError').style.display = '';
                    document.getElementById('DelegationReceivedGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('DelegationReceivedGETResponseHeaders').innerHTML = headers;
                document.getElementById('DelegationReceivedGETResponseBody').innerHTML = body;    
                
                document.getElementById('DelegationReceivedGETResponseDisplay1').style.display = '';
                document.getElementById('DelegationReceivedGETResponseDisplay2').style.display = '';
                
                document.getElementById('DelegationReceivedGETResponseDisplayLoading').style.display='none';
                document.getElementById('DelegationReceivedGETResponseHR').style.display='';
                
                document.getElementById('DelegationReceivedGETResponseDisplayMessage').style.display = '';
                document.getElementById('DelegationReceivedGETResponseDisplayMessageText').innerHTML = 'Providers Pulled!'; 

               }
            }); 
        }             
    } 
    
    function DelegationGrantedGET()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('DelegationGrantedGETResponseDisplayLoading').style.display='';
              
            $url = "http://phix.proxy.publicprivatesector.org/delegation/granted";    
            console.log($url);
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // populate request fields
            document.getElementById('DelegationGrantedGETRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('DelegationGrantedGETRequestHeader').innerHTML = $url;  
            
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid;
            
            $.ajax
              ({
                type: "get",
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('DelegationGrantedGETResponseDisplayError').style.display = '';
                    document.getElementById('DelegationGrantedGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('DelegationGrantedGETResponseHeaders').innerHTML = headers;
                document.getElementById('DelegationGrantedGETResponseBody').innerHTML = body;    
                
                document.getElementById('DelegationGrantedGETResponseDisplay1').style.display = '';
                document.getElementById('DelegationGrantedGETResponseDisplay2').style.display = '';
                
                document.getElementById('DelegationGrantedGETResponseDisplayLoading').style.display='none';
                document.getElementById('DelegationGrantedGETResponseHR').style.display='';
                
                document.getElementById('DelegationGrantedGETResponseDisplayMessage').style.display = '';
                document.getElementById('DelegationGrantedGETResponseDisplayMessageText').innerHTML = 'Providers Pulled!'; 

               }
            }); 
        }             
    } 