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
    
	function hiePUT()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('hiePUTResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/hie";    
            console.log($url);
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
           
            var $username = $( "#hiePUTUsername" ).val(); 
            var $clinicianname = $( "#hiePUTClinicianName" ).val(); 
            var $clinicianid = $( "#hiePUTClinicianID" ).val(); 
            var $directemail = $( "#hiePUTDirectemail" ).val(); 
            var $all = $( "#hiePUTAll" ).val();
            var $demographics = $( "#hiePUTDemographics" ).val();
            var $procedures = $( "#hiePUTProcedures" ).val();
            var $medications = $( "#hiePUTMedications" ).val();
            var $allergies = $( "#hiePUTAllergies" ).val();
            var $vitals = $( "#hiePUTVitals" ).val(); 
            var $immunizations = $( "#hiePUTImmunizations" ).val(); 
            var $encounters = $( "#hiePUTEncounters" ).val();
            var $results = $( "#hiePUTResults" ).val();  

			var $er = false;
			var $active = false;
			var $status = '';
			
			var $timestamp = "01/15/2014"; 
			
			var $method = "PUT";
			
            // populate request fields
            document.getElementById('hiePUTRequestHeaderTitle').innerHTML = "PUT";
            document.getElementById('hiePUTRequestHeader').innerHTML = $url;  
           
            var $Clinician = {clinicianName:"" + $clinicianname + "",clinicianID:"" + $clinicianid + "",directemail:"" + $directemail};
            $Clinician = JSON.stringify($Clinician);
            var $Permissions = {all:"" + $all + "",demographics:"" + $demographics + "",procedures:"" + $procedures + "",medications:"" + $medications + "",allergies:"" + $allergies + "",vitals:"" + $vitals + "",immunizations:"" + $immunizations + "",encounters:"" + $encounters + "",results:"" + $results + ""};
            $Permissions = JSON.stringify($Permissions);
            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",username:"" + $username + "",clinician:"" + $Clinician + "",permissions:"" + $Permissions + "",er:"" + $er + "",active:"" + $active + "",status:"" + $status + "",timestamp:"" + $timestamp + "",phixid:"" + $phixid + "",_METHOD:"" + $method + ""}; 
            
            $.ajax
              ({
	            type: "post",        
	            data: formData,
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('hiePUTResponseDisplayError').style.display = '';
                    document.getElementById('hiePUTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                //console.log(data);
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                bodyobject = JSON.parse(body);
                status = bodyobject.status;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('hiePUTResponseHeaders').innerHTML = headers;
                document.getElementById('hiePUTResponseBody').innerHTML = body;    
                
                document.getElementById('hiePUTResponseDisplay1').style.display = '';
                document.getElementById('hiePUTResponseDisplay2').style.display = '';
                
                document.getElementById('hiePUTResponseDisplayLoading').style.display='none';
                
                document.getElementById('hiePUTResponseDisplayMessage').style.display = '';
                document.getElementById('hiePUTResponseDisplayMessageText').innerHTML = status;

               }
            }); 
        }             
    }  
    
    function hieDELETE()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('hieDELETEResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/hie";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            var username = $( "#hieDELETEusername" ).val();  
            var clinician = $( "#hieDELETEclinician" ).val();  
            
            $url = $url + "/" + clinician + "/" + username;
            
            var $method = "DELETE";
          
            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",phixid:"" + $phixid + "",_METHOD:"" + $method + ""};    
            
            // populate request fields
            document.getElementById('hieDELETERequestHeaderTitle').innerHTML = "DELETE";
            document.getElementById('hieDELETERequestHeader').innerHTML = $url;              
            
            $.ajax
              ({
                url: $url,   
	            type: "post",        
	            data: formData,       
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('hieDELETEResponseDisplayError').style.display = '';
                    document.getElementById('hieDELETEResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                bodyobject = JSON.parse(body);
                status = bodyobject.status;                
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('hieDELETEResponseHeaders').innerHTML = headers;
                document.getElementById('hieDELETEResponseBody').innerHTML = body;    
                
                document.getElementById('hieDELETEResponseDisplay1').style.display = '';
                document.getElementById('hieDELETEResponseDisplay2').style.display = '';
                
                document.getElementById('hieDELETEResponseDisplayLoading').style.display='none';
                document.getElementById('hieDELETEResponseHR').style.display='';
                
                document.getElementById('hieDELETEResponseDisplayMessage').style.display = '';
                document.getElementById('hieDELETEResponseDisplayMessageText').innerHTML = status;

               }
            }); 
        }             
    } 