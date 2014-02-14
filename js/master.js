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
    
    function MasterCCDAPOST()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('MasterCCDAPOSTResponseDisplayLoading').style.display='';
              
            $url = "http://phix.proxy.publicprivatesector.org/master/ccda";    
            console.log($url);
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
         	var $all = $( "#MasterCCDAPOSTAll" ).val();
            var $demographics = $( "#MasterCCDAPOSTDemographics" ).val();
            var $procedures = $( "#MasterCCDAPOSTProcedures" ).val();
            var $medications = $( "#MasterCCDAPOSTMedications" ).val();
            var $allergies = $( "#MasterCCDAPOSTAllergies" ).val();
            var $vitals = $( "#MasterCCDAPOSTVitals" ).val(); 
            var $immunizations = $( "#MasterCCDAPOSTImmunizations" ).val(); 
            var $encounters = $( "#MasterCCDAPOSTEncounters" ).val();
            var $results = $( "#MasterCCDAPOSTResults" ).val();             
            
            // populate request fields
            document.getElementById('MasterCCDAPOSTRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('MasterCCDAPOSTRequestHeader').innerHTML = $url;  
            
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid;
            
            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",all:"" + $all + "",demographics:"" + $demographics + "",procedures:"" + $procedures + "",medications:"" + $medications + "",allergies:"" + $allergies + "",vitals:"" + $vitals + "",immunizations:"" + $immunizations + "",encounters:"" + $encounters + "",results:"" + $results + "",phixid:"" + $phixid + ""};
            
            $.ajax
              ({
	            type: "post",        
                url: $url,  
                data: formData,  
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('MasterCCDAPOSTResponseDisplayError').style.display = '';
                    document.getElementById('MasterCCDAPOSTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('MasterCCDAPOSTResponseHeaders').innerHTML = headers;
                document.getElementById('MasterCCDAPOSTResponseBody').innerHTML = body;    
                
                document.getElementById('MasterCCDAPOSTResponseDisplay1').style.display = '';
                document.getElementById('MasterCCDAPOSTResponseDisplay2').style.display = '';
                
                document.getElementById('MasterCCDAPOSTResponseDisplayLoading').style.display='none';
                document.getElementById('MasterCCDAPOSTResponseHR').style.display='';
                
                document.getElementById('MasterCCDAPOSTResponseDisplayMessage').style.display = '';
                document.getElementById('MasterCCDAPOSTResponseDisplayMessageText').innerHTML = 'Master Record Has Been Updated!'; 

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
                document.getElementById('MasterUsernameElementGETResponseDisplayMessageText').innerHTML = 'Element Pulled!'; 

               }
            }); 
        }             
    } 
    
    function MasterUsernameElementPOST()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('MasterUsernameElementPOSTResponseDisplayLoading').style.display='';
              
            var username = $( "#masterusername" ).val()
            var element = $( "#masterelement" ).val()  
              
            $url = "http://phix.proxy.publicprivatesector.org/master/" + username + "/" + element;    
            console.log($url);
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            var content = $( "#MasterUsernameElementPOSTContent" ).val();  
            
            // populate request fields
            document.getElementById('MasterUsernameElementPOSTRequestHeaderTitle').innerHTML = "POST";
            document.getElementById('MasterUsernameElementPOSTRequestHeader').innerHTML = $url;  
            
            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",content:"" + content + "",phixid:"" + $phixid + ""};

            $.ajax
              ({
	            type: "post",        
	            data: formData,
                url: $url,  
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('MasterUsernameElementPOSTResponseDisplayError').style.display = '';
                    document.getElementById('MasterUsernameElementPOSTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('MasterUsernameElementPOSTResponseHeaders').innerHTML = headers;
                document.getElementById('MasterUsernameElementPOSTResponseBody').innerHTML = body;    
                
                document.getElementById('MasterUsernameElementPOSTResponseDisplay1').style.display = '';
                document.getElementById('MasterUsernameElementPOSTResponseDisplay2').style.display = '';
                
                document.getElementById('MasterUsernameElementPOSTResponseDisplayLoading').style.display='none';
                
                if(body==false)
                	{
                    document.getElementById('MasterUsernameElementPOSTResponseDisplayError').style.display = '';
                    document.getElementById('MasterUsernameElementPOSTResponseDisplayErrorText').innerHTML = "There Was Problem Updating Element!";
                	}
                else
                	{
                	document.getElementById('MasterUsernameElementPOSTResponseDisplayMessage').style.display = '';
                	document.getElementById('MasterUsernameElementPOSTResponseDisplayMessageText').innerHTML = 'Element Pulled!';
                	} 
               }
            }); 
        }             
    } 
    
    function MasterUsernameElementPUT()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('MasterUsernameElementPUTResponseDisplayLoading').style.display='';
              
            var username = $( "#masterusername" ).val()
            var element = $( "#masterelement" ).val()  
              
            $url = "http://phix.proxy.publicprivatesector.org/master/" + username + "/" + element;    
            console.log($url);
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            var content = $( "#MasterUsernameElementPUTContent" ).val();  
            
            // populate request fields
            document.getElementById('MasterUsernameElementPUTRequestHeaderTitle').innerHTML = "PUT";
            document.getElementById('MasterUsernameElementPUTRequestHeader').innerHTML = $url;  
            
            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",content:"" + content + "",phixid:"" + $phixid + ""};
            
            $.ajax
              ({
	            type: "post",        
	            data: formData,
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('MasterUsernameElementPUTResponseDisplayError').style.display = '';
                    document.getElementById('MasterUsernameElementPUTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('MasterUsernameElementPUTResponseHeaders').innerHTML = headers;
                document.getElementById('MasterUsernameElementPUTResponseBody').innerHTML = body;    
                
                document.getElementById('MasterUsernameElementPUTResponseDisplay1').style.display = '';
                document.getElementById('MasterUsernameElementPUTResponseDisplay2').style.display = '';
                
                document.getElementById('MasterUsernameElementPUTResponseDisplayLoading').style.display='none';

                if(body==false)
                	{
                    document.getElementById('MasterUsernameElementPUTResponseDisplayError').style.display = '';
                    document.getElementById('MasterUsernameElementPUTResponseDisplayErrorText').innerHTML = "There Was Problem Adding Element!";
                	}
                else
                	{
                	document.getElementById('MasterUsernameElementPUTResponseDisplayMessage').style.display = '';
                	document.getElementById('MasterUsernameElementPUTResponseDisplayMessageText').innerHTML = 'Element Added!';
                	}                  

               }
            }); 
        }             
    } 