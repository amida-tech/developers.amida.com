    function hieGET()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('hieGETResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/hie/";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
           
            var clinician = $( "#hieGetClinician" ).val(); 
            
            // populate request fields
            document.getElementById('hieGETRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('hieGETRequestHeader').innerHTML = $url;  
            
            $url = $url + clinician + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid;
            
            $.ajax
              ({
                type: "get",
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('hieGETResponseDisplayError').style.display = '';
                    document.getElementById('hieGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('hieGETResponseHeaders').innerHTML = headers;
                document.getElementById('hieGETResponseBody').innerHTML = body;    
                
                document.getElementById('hieGETResponseDisplay1').style.display = '';
                document.getElementById('hieGETResponseDisplay2').style.display = '';
                
                document.getElementById('hieGETResponseDisplayLoading').style.display='none';
                document.getElementById('hieGETResponseHR').style.display='';
                
                document.getElementById('hieGETResponseDisplayMessage').style.display = '';
                document.getElementById('hieGETResponseDisplayMessageText').innerHTML = 'Providers Pulled!'; 

               }
            }); 
        }             
    } 

    function hieLookupPOST()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('hieLookupPOSTResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/hie/lookup";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
           
            var firstname = $( "#hielookupfirstname" ).val(); 
            var middlename = $( "#hielookupmiddlename" ).val(); 
            var lastname = $( "#hielookuplastname" ).val(); 
            var birthdate = $( "#hielookupbirthdate" ).val(); 

            // populate request fields
            document.getElementById('hieLookupPOSTRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('hieLookupPOSTRequestHeader').innerHTML = $url;  
            
           var formData = {appid:"" + appid + "",appkey:"" + appkey + "",firstname:"" + firstname + "",middlename:"" + middlename + "",lastname:"" + lastname + "",birthdate:"" + birthdate + "",phixid:"" + $phixid + ""};
            
            $.ajax
              ({
	            type: "post",        
	            data: formData,
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('hieLookupPOSTResponseDisplayError').style.display = '';
                    document.getElementById('hieLookupPOSTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('hieLookupPOSTResponseHeaders').innerHTML = headers;
                document.getElementById('hieLookupPOSTResponseBody').innerHTML = body;    
                
                document.getElementById('hieLookupPOSTResponseDisplay1').style.display = '';
                document.getElementById('hieLookupPOSTResponseDisplay2').style.display = '';
                
                document.getElementById('hieLookupPOSTResponseDisplayLoading').style.display='none';
                
                document.getElementById('hieLookupPOSTResponseDisplayMessage').style.display = '';
                document.getElementById('hieLookupPOSTResponseDisplayMessageText').innerHTML = 'HIE Lookup Complete'; 

               }
            }); 
        }             
    }     