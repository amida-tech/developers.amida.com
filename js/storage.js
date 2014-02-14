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
   
    function StorageRecordGET()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('StorageRecordGETResponseDisplayLoading').style.display='';
              
            $url = "http://phix.proxy.publicprivatesector.org/storage/record";    
            console.log($url);
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();
            
            var $identifier = $( "#StorageRecordGETIdentifier" ).val();    
            
            // populate request fields
            document.getElementById('StorageRecordGETRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('StorageRecordGETRequestHeader').innerHTML = $url;  
            
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid + "&identifier=" + $identifier;
            
            $.ajax
              ({
                type: "get",
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('StorageRecordGETResponseDisplayError').style.display = '';
                    document.getElementById('StorageRecordGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('StorageRecordGETResponseHeaders').innerHTML = headers;
                document.getElementById('StorageRecordGETResponseBody').innerHTML = body;    
                
                document.getElementById('StorageRecordGETResponseDisplay1').style.display = '';
                document.getElementById('StorageRecordGETResponseDisplay2').style.display = '';
                
                document.getElementById('StorageRecordGETResponseDisplayLoading').style.display='none';
                document.getElementById('StorageRecordGETResponseHR').style.display='';
                
                document.getElementById('StorageRecordGETResponseDisplayMessage').style.display = '';
                document.getElementById('StorageRecordGETResponseDisplayMessageText').innerHTML = 'File Has Been Pulled!'; 

               }
            }); 
        }             
    } 
   
    function StorageRecordIdentifierGET()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
         	
         	var $identifier = $( "#StorageRecordIdentifierGETIdentifier" ).val();
             
            document.getElementById('StorageRecordIdentifierGETResponseDisplayLoading').style.display='';
              
            $url = "http://phix.proxy.publicprivatesector.org/storage/record/" + $identifier;;    
            console.log($url);
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // populate request fields
            document.getElementById('StorageRecordIdentifierGETRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('StorageRecordIdentifierGETRequestHeader').innerHTML = $url;  
            
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid;
            
            $.ajax
              ({
                type: "get",
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('StorageRecordIdentifierGETResponseDisplayError').style.display = '';
                    document.getElementById('StorageRecordIdentifierGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('StorageRecordIdentifierGETResponseHeaders').innerHTML = headers;
                document.getElementById('StorageRecordIdentifierGETResponseBody').innerHTML = body;    
                
                document.getElementById('StorageRecordIdentifierGETResponseDisplay1').style.display = '';
                document.getElementById('StorageRecordIdentifierGETResponseDisplay2').style.display = '';
                
                document.getElementById('StorageRecordIdentifierGETResponseDisplayLoading').style.display='none';
                document.getElementById('StorageRecordIdentifierGETResponseHR').style.display='';
                
                document.getElementById('StorageRecordIdentifierGETResponseDisplayMessage').style.display = '';
                document.getElementById('StorageRecordIdentifierGETResponseDisplayMessageText').innerHTML = 'File Has Been Pulled!'; 

               }
            }); 
        }             
    } 
   
    function StoragePUT()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('StoragePUTResponseDisplayLoading').style.display='';
              
            $url = "http://phix.proxy.publicprivatesector.org/storage";    
            console.log($url);
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            var $file = $( "#StoragePUTFile" ).val();  
            
            $method = "PUT";
            
            // populate request fields
            document.getElementById('StoragePUTRequestHeaderTitle').innerHTML = "PUT";
            document.getElementById('StoragePUTRequestHeader').innerHTML = $url;  
            
            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",phixid:"" + $phixid + "",_METHOD:"" + $method + "",file:"" + $file + ""}; 
            
            $.ajax
              ({
                url: $url,   
                type: "post",        
                data: formData, 
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('StoragePUTResponseDisplayError').style.display = '';
                    document.getElementById('StoragePUTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('StoragePUTResponseHeaders').innerHTML = headers;
                document.getElementById('StoragePUTResponseBody').innerHTML = body;    
                
                document.getElementById('StoragePUTResponseDisplay1').style.display = '';
                document.getElementById('StoragePUTResponseDisplay2').style.display = '';
                
                document.getElementById('StoragePUTResponseDisplayLoading').style.display='none';
                document.getElementById('StoragePUTResponseHR').style.display='';
                
                if(body=='Unauthorized')
                	{
                    document.getElementById('StoragePUTResponseDisplayError').style.display = '';
                    document.getElementById('StoragePUTResponseDisplayErrorText').innerHTML = "There Was A Problem With Uploading File!";                		
                	}
                else
                	{
                	document.getElementById('StoragePUTResponseDisplayMessage').style.display = '';
                	document.getElementById('StoragePUTResponseDisplayMessageText').innerHTML = 'File Has Been Uploaded';
                	} 

               }
            }); 
        }             
    } 
   
    function StoragePOST()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('StoragePOSTResponseDisplayLoading').style.display='';
              
            $url = "http://phix.proxy.publicprivatesector.org/storage";    
            console.log($url);
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();
            
            var $identifier = $( "#StoragePOSTIdentifier" ).val();    
            
            // populate request fields
            document.getElementById('StoragePOSTRequestHeaderTitle').innerHTML = "POST";
            document.getElementById('StoragePOSTRequestHeader').innerHTML = $url;  
            
            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",identifier:"" + $identifier + "",phixid:"" + $phixid + ""};             
            
            $.ajax
              ({
                url: $url,   
                type: "post",        
                data: formData,  
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('StoragePOSTResponseDisplayError').style.display = '';
                    document.getElementById('StoragePOSTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('StoragePOSTResponseHeaders').innerHTML = headers;
                document.getElementById('StoragePOSTResponseBody').innerHTML = body;    
                
                document.getElementById('StoragePOSTResponseDisplay1').style.display = '';
                document.getElementById('StoragePOSTResponseDisplay2').style.display = '';
                
                document.getElementById('StoragePOSTResponseDisplayLoading').style.display='none';
                document.getElementById('StoragePOSTResponseHR').style.display='';
                               
                if(body=='false')
                	{
                    document.getElementById('StoragePOSTResponseDisplayError').style.display = '';
                    document.getElementById('StoragePOSTResponseDisplayErrorText').innerHTML = "There Was A Problem Updating File!";                		
                	}
                else
                	{
               		document.getElementById('StoragePOSTResponseDisplayMessage').style.display = '';
                	document.getElementById('StoragePOSTResponseDisplayMessageText').innerHTML = 'File Has Been Updated!';
                	}                  

               }
            }); 
        }             
    } 
   
    function StoragePreviewPOST()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('StoragePreviewPOSTResponseDisplayLoading').style.display='';
              
            $url = "http://phix.proxy.publicprivatesector.org/storage/preview";    
            console.log($url);
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();
            
            var $identifier = $( "#StoragePreviewPOSTIdentifier" ).val();    
            
            // populate request fields
            document.getElementById('StoragePreviewPOSTRequestHeaderTitle').innerHTML = "POST";
            document.getElementById('StoragePreviewPOSTRequestHeader').innerHTML = $url;  
            
            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",identifier:"" + $identifier + "",phixid:"" + $phixid + ""}; 
            
            $.ajax
              ({
                url: $url,   
                type: "post",        
                data: formData,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('StoragePreviewPOSTResponseDisplayError').style.display = '';
                    document.getElementById('StoragePreviewPOSTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('StoragePreviewPOSTResponseHeaders').innerHTML = headers;
                document.getElementById('StoragePreviewPOSTResponseBody').innerHTML = body;    
                
                document.getElementById('StoragePreviewPOSTResponseDisplay1').style.display = '';
                document.getElementById('StoragePreviewPOSTResponseDisplay2').style.display = '';
                
                document.getElementById('StoragePreviewPOSTResponseDisplayLoading').style.display='none';
                document.getElementById('StoragePreviewPOSTResponseHR').style.display='';
                 
                
                if(body=='false')
                	{
                    document.getElementById('StoragePreviewPOSTResponseDisplayError').style.display = '';
                    document.getElementById('StoragePreviewPOSTResponseDisplayErrorText').innerHTML = "There Was A Problem Retrieving File!";                		
                	}
                else
                	{
                	document.getElementById('StoragePreviewPOSTResponseDisplayMessage').style.display = '';
                	document.getElementById('StoragePreviewPOSTResponseDisplayMessageText').innerHTML = 'File Has Been Returned For Preview';
                	}                  

               }
            }); 
        }             
    } 
   
    function StorageDELETE()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('StorageDELETEResponseDisplayLoading').style.display='';
            
            var $identifier = $( "#StoragePreviewPOSTIdentifier" ).val(); 
              
            $url = "http://phix.proxy.publicprivatesector.org/storage/" + $identifier;    
            console.log($url);
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  

            $method = "DELETE";
            
            // populate request fields
            document.getElementById('StorageDELETERequestHeaderTitle').innerHTML = "DELETE";
            document.getElementById('StorageDELETERequestHeader').innerHTML = $url;  
            
            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",phixid:"" + $phixid + "",_METHOD:"" + $method + ""}; 
            
            $.ajax
              ({
                url: $url,   
                type: "post",        
                data: formData,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('StorageDELETEResponseDisplayError').style.display = '';
                    document.getElementById('StorageDELETEResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('StorageDELETEResponseHeaders').innerHTML = headers;
                document.getElementById('StorageDELETEResponseBody').innerHTML = body;    
                
                document.getElementById('StorageDELETEResponseDisplay1').style.display = '';
                document.getElementById('StorageDELETEResponseDisplay2').style.display = '';
                
                document.getElementById('StorageDELETEResponseDisplayLoading').style.display='none';
                document.getElementById('StorageDELETEResponseHR').style.display='';
                
                document.getElementById('StorageDELETEResponseDisplayMessage').style.display = '';
                document.getElementById('StorageDELETEResponseDisplayMessageText').innerHTML = 'Providers Pulled!'; 

               }
            }); 
        }             
    } 
   