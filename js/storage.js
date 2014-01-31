    function StorageGET()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('StorageGETResponseDisplayLoading').style.display='';
              
            $url = "http://phix.proxy.publicprivatesector.org/storage";    
            console.log($url);
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // populate request fields
            document.getElementById('StorageGETRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('StorageGETRequestHeader').innerHTML = $url;  
            
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid;
            
            $.ajax
              ({
                type: "get",
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('StorageGETResponseDisplayError').style.display = '';
                    document.getElementById('StorageGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('StorageGETResponseHeaders').innerHTML = headers;
                document.getElementById('StorageGETResponseBody').innerHTML = body;    
                
                document.getElementById('StorageGETResponseDisplay1').style.display = '';
                document.getElementById('StorageGETResponseDisplay2').style.display = '';
                
                document.getElementById('StorageGETResponseDisplayLoading').style.display='none';
                document.getElementById('StorageGETResponseHR').style.display='';
                
                document.getElementById('StorageGETResponseDisplayMessage').style.display = '';
                document.getElementById('StorageGETResponseDisplayMessageText').innerHTML = 'Providers Pulled!'; 

               }
            }); 
        }             
    } 
   