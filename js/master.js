    function MasterGET()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('MasterGETResponseDisplayLoading').style.display='';
              
            $url = "http://phix.proxy.publicprivatesector.org/master";    
            console.log($url);
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // populate request fields
            document.getElementById('MasterGETRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('MasterGETRequestHeader').innerHTML = $url;  
            
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid;
            
            $.ajax
              ({
                type: "get",
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('MasterGETResponseDisplayError').style.display = '';
                    document.getElementById('MasterGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('MasterGETResponseHeaders').innerHTML = headers;
                document.getElementById('MasterGETResponseBody').innerHTML = body;    
                
                document.getElementById('MasterGETResponseDisplay1').style.display = '';
                document.getElementById('MasterGETResponseDisplay2').style.display = '';
                
                document.getElementById('MasterGETResponseDisplayLoading').style.display='none';
                document.getElementById('MasterGETResponseHR').style.display='';
                
                document.getElementById('MasterGETResponseDisplayMessage').style.display = '';
                document.getElementById('MasterGETResponseDisplayMessageText').innerHTML = 'Providers Pulled!'; 

               }
            }); 
        }             
    } 
    
    function MasterUsernameElementGET()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('MasterUsernameElementGETResponseDisplayLoading').style.display='';
              
            var username = $( "#masterusername" ).val()
            var element = $( "#masterelement" ).val()  
              
            $url = "http://phix.proxy.publicprivatesector.org/master/" + username + "/" + element;    
            console.log($url);
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // populate request fields
            document.getElementById('MasterUsernameElementGETRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('MasterUsernameElementGETRequestHeader').innerHTML = $url;  
            
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid;
            
            $.ajax
              ({
                type: "get",
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('MasterUsernameElementGETResponseDisplayError').style.display = '';
                    document.getElementById('MasterUsernameElementGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('MasterUsernameElementGETResponseHeaders').innerHTML = headers;
                document.getElementById('MasterUsernameElementGETResponseBody').innerHTML = body;    
                
                document.getElementById('MasterUsernameElementGETResponseDisplay1').style.display = '';
                document.getElementById('MasterUsernameElementGETResponseDisplay2').style.display = '';
                
                document.getElementById('MasterUsernameElementGETResponseDisplayLoading').style.display='none';
                
                document.getElementById('MasterUsernameElementGETResponseDisplayMessage').style.display = '';
                document.getElementById('MasterUsernameElementGETResponseDisplayMessageText').innerHTML = 'Providers Pulled!'; 

               }
            }); 
        }             
    } 