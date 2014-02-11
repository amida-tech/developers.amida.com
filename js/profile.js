    function ProfileGET()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('ProfileGETResponseDisplayLoading').style.display='';
              
			var token = $( "#identitytokenget" ).val();                
                
            $url = "http://phix.proxy.publicprivatesector.org/profile";    
            console.log($url);
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            // populate request fields
            document.getElementById('ProfileGETRequestHeaderTitle').innerHTML = "GET";
            document.getElementById('ProfileGETRequestHeader').innerHTML = $url;  
            
            $url = $url + "?appid=" + appid + "&appkey=" + appkey + "&phixid=" + $phixid;
            
            $.ajax
              ({
                type: "get",
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('ProfileGETResponseDisplayError').style.display = '';
                    document.getElementById('ProfileGETResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('ProfileGETResponseHeaders').innerHTML = headers;
                document.getElementById('ProfileGETResponseBody').innerHTML = body;    
                
                document.getElementById('ProfileGETResponseDisplay1').style.display = '';
                document.getElementById('ProfileGETResponseDisplay2').style.display = '';
                
                document.getElementById('ProfileGETResponseDisplayLoading').style.display='none';
                document.getElementById('ProfileGETResponseHR').style.display='';
                
                document.getElementById('ProfileGETResponseDisplayMessage').style.display = '';
                document.getElementById('ProfileGETResponseDisplayMessageText').innerHTML = 'Profile Pulled!'; 

               }
            }); 
        }             
    } 
    
    function ProfilePOST()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('ProfilePOSTResponseDisplayLoading').style.display='';
              
			var token = $( "#identitytokenget" ).val();                
                
            $url = "http://phix.proxy.publicprivatesector.org/profile";    
            console.log($url);
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();
            
            var firstname = $( "#ProfilePOSTFirstName" ).val(); 
            var middlename = $( "#ProfilePOSTMiddleName" ).val(); 
            var lastname = $( "#ProfilePOSTLastName" ).val(); 
            var birthdate = $( "#ProfilePOSTBirthdate" ).val(); 
            var ssn = $( "#ProfilePOSTSSN" ).val(); 
            var gender = $( "#ProfilePOSTGender" ).val(); 
            var address = $( "#ProfilePOSTAddress" ).val(); 
            var address2 = $( "#ProfilePOSTAddress2" ).val(); 
            var city = $( "#ProfilePOSTCity" ).val(); 
            var state = $( "#ProfilePOSTState" ).val(); 
            var zipcode = $( "#ProfilePOSTZipcode" ).val();
            var phone = $( "#ProfilePOSTPhone" ).val();   
            var phonetype = $( "#ProfilePOSTPhoneType" ).val();      
            
            // populate request fields
            document.getElementById('ProfilePOSTRequestHeaderTitle').innerHTML = "POST";
            document.getElementById('ProfilePOSTRequestHeader').innerHTML = $url;  
            
            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",firstname:"" + firstname + "",middlename:"" + middlename + "",lastname:"" + lastname + "",birthdate:"" + birthdate + "",ssn:"" + ssn + "",gender:"" + gender + "",address:"" + address + "",address2:"" + address2 + "",city:"" + city + "",state:"" + state + "",zipcode:"" + zipcode + "",phone:"" + phone + "",phonetype:"" + phonetype + "",phixid:"" + $phixid + ""};

            $.ajax
              ({
	            type: "post",        
	            data: formData,
                url: $url,    
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('ProfilePOSTResponseDisplayError').style.display = '';
                    document.getElementById('ProfilePOSTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('ProfilePOSTResponseHeaders').innerHTML = headers;
                document.getElementById('ProfilePOSTResponseBody').innerHTML = body;    
                
                document.getElementById('ProfilePOSTResponseDisplay1').style.display = '';
                document.getElementById('ProfilePOSTResponseDisplay2').style.display = '';
                
                document.getElementById('ProfilePOSTResponseDisplayLoading').style.display='none';
                document.getElementById('ProfilePOSTResponseHR').style.display='';
                
                if(body!=false)
                	{
                	document.getElementById('ProfilePOSTResponseDisplayMessage').style.display = '';
                	document.getElementById('ProfilePOSTResponseDisplayMessageText').innerHTML = 'Profile Updated!';
                	}
                else
                	{
                    document.getElementById('ProfilePOSTResponseDisplayError').style.display = '';
                    document.getElementById('ProfilePOSTResponseDisplayErrorText').innerHTML = "Profile Was Not Updated!";
                	}  

               }
            }); 
        }             
    } 
    
    function ProfilePUT()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('ProfilePUTResponseDisplayLoading').style.display='';
              
			var token = $( "#identitytokenget" ).val();                
                
            $url = "http://phix.proxy.publicprivatesector.org/profile";    
            console.log($url);
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            var firstname = $( "#ProfilePUTFirstName" ).val(); 
            var middlename = $( "#ProfilePUTMiddleName" ).val(); 
            var lastname = $( "#ProfilePUTLastName" ).val(); 
            var birthdate = $( "#ProfilePUTBirthdate" ).val(); 
            var ssn = $( "#ProfilePUTSSN" ).val(); 
            var gender = $( "#ProfilePUTGender" ).val(); 
            var address = $( "#ProfilePUTAddress" ).val(); 
            var address2 = $( "#ProfilePUTAddress2" ).val(); 
            var city = $( "#ProfilePUTCity" ).val(); 
            var state = $( "#ProfilePUTState" ).val(); 
            var zipcode = $( "#ProfilePUTZipcode" ).val();
            var phone = $( "#ProfilePUTPhone" ).val();   
            var phonetype = $( "#ProfilePUTPhoneType" ).val();              
            
            var $method = "PUT";
            
            // populate request fields
            document.getElementById('ProfilePUTRequestHeaderTitle').innerHTML = "PUT";
            document.getElementById('ProfilePUTRequestHeader').innerHTML = $url;  

            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",firstname:"" + firstname + "",middlename:"" + middlename + "",lastname:"" + lastname + "",birthdate:"" + birthdate + "",ssn:"" + ssn + "",gender:"" + gender + "",address:"" + address + "",address2:"" + address2 + "",city:"" + city + "",state:"" + state + "",zipcode:"" + zipcode + "",phone:"" + phone + "",phonetype:"" + phonetype + "",phixid:"" + $phixid + "",_METHOD:"" + $method + ""};
            
            $.ajax
              ({
	            type: "post",        
	            data: formData,
                url: $url,   
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('ProfilePUTResponseDisplayError').style.display = '';
                    document.getElementById('ProfilePUTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('ProfilePUTResponseHeaders').innerHTML = headers;
                document.getElementById('ProfilePUTResponseBody').innerHTML = body;    
                
                document.getElementById('ProfilePUTResponseDisplay1').style.display = '';
                document.getElementById('ProfilePUTResponseDisplay2').style.display = '';
                
                document.getElementById('ProfilePUTResponseDisplayLoading').style.display='none';
                document.getElementById('ProfilePUTResponseHR').style.display='';
                
                if(body!=false)
                	{
                	document.getElementById('ProfilePUTResponseDisplayMessage').style.display = '';
                	document.getElementById('ProfilePUTResponseDisplayMessageText').innerHTML = body;
                	}
                else
                	{
                    document.getElementById('ProfilePUTResponseDisplayError').style.display = '';
                    document.getElementById('ProfilePUTResponseDisplayErrorText').innerHTML = "Profile Was Not Added!";
                	}                 

               }
            }); 
        }             
    } 