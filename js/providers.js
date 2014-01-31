    function providersGET()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('ProvidersGETResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/providers";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // populate request fields
            document.getElementById('ProvidersGETRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('ProvidersGETRequestHeader').innerHTML = $url;  
            
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid;
            
            $.ajax
              ({
                type: "get",
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('ProvidersGETResponseDisplayError').style.display = '';
                    document.getElementById('ProvidersGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('ProvidersGETResponseHeaders').innerHTML = headers;
                document.getElementById('ProvidersGETResponseBody').innerHTML = body;    
                
                document.getElementById('ProvidersGETResponseDisplay1').style.display = '';
                document.getElementById('ProvidersGETResponseDisplay2').style.display = '';
                
                document.getElementById('ProvidersGETResponseDisplayLoading').style.display='none';
                document.getElementById('ProvidersGETResponseHR').style.display='';
                
                document.getElementById('ProvidersGETResponseDisplayMessage').style.display = '';
                document.getElementById('ProvidersGETResponseDisplayMessageText').innerHTML = 'Providers Pulled!'; 

               }
            }); 
        }             
    } 