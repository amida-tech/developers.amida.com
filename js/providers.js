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
    
    function ProvidersPUT()
        {
         $phixid = $("#phixid").val();    
            
         if($phixid!=''){
             
            document.getElementById('ProvidersPUTResponseDisplayLoading').style.display='';
                
            $url = "http://phix.proxy.publicprivatesector.org/providers";    
            
            // API app id and key    
            var appid = $( "#appid" ).val();
            var appkey = $( "#appkey" ).val();  
            
            var npi = $( "#ProvidersPUTNPI" ).val(); 
            var type = $( "#ProvidersPUTType" ).val();
            var firstname = $( "#ProvidersPUTFirstName" ).val();
            var middlename = $( "#ProvidersPUTMiddleName" ).val(); 
            var lastname = $( "#ProvidersPUTLastName" ).val(); 
            var credential = $( "#ProvidersPUTCredential" ).val(); 
            var address1 = $( "#ProvidersPUTAddress1" ).val(); 
            var address2 = $( "#ProvidersPUTAddress2" ).val(); 
            var city = $( "#ProfilePUTCity" ).val(); 
            var state = $( "#ProfilePUTState" ).val(); 
            var zipcode = $( "#ProfilePUTZipcode" ).val(); 
            var phone = $( "#ProfilePUTPhone" ).val();
            var fax = $( "#ProfilePUTFax" ).val();
            var country = $( "#ProfilePUTCountryCode" ).val();
            var enumerationdate = $( "#ProfilePUTEnumerationDate" ).val();
            var update = $( "#ProfilePUTUpdateDate" ).val();
            var gender = $( "#ProfilePUTGender" ).val();
            var details = $( "#ProfilePUTDetails" ).val();
            var identifiers = $( "#ProfilePUTIdentifiers" ).val();   
            var proprietor = $( "#ProfilePUTProprietor" ).val();   
            var email = $( "#ProfilePUTEmail" ).val();      
            
            var $method = "PUT";
 
            var formData = {appid:"" + appid + "",appkey:"" + appkey + "",npi:"" + npi + "",type:"" + type + "",firstname:"" + firstname + "",middlename:"" + middlename + "",lastname:"" + lastname + "",credential:"" + credential + "",address1:"" + address1 + "",address2:"" + address2 + "",city:"" + city + "",state:"" + state + "",zipcode:"" + zipcode + "",phone:"" + phone + "",fax:"" + fax + "",country:"" + country + "",enumerationdate:"" + enumerationdate + "",update:"" + update + "",gender:"" + gender + "",details:"" + details + "",identifiers:"" + identifiers + "",proprietor:"" + proprietor + "",email:"" + email + "",phixid:"" + $phixid + "",_METHOD:"" + $method + ""}; 
            
            // populate request fields
            document.getElementById('ProvidersPUTRequestHeaderTitle').innerHTML = "PUT";
            document.getElementById('ProvidersPUTRequestHeader').innerHTML = $url;  
            
            $.ajax
              ({
                url: $url,   
                type: "post",        
                data: formData,                
                error: function(xhRequest, ErrorText, thrownError){
                    //console.log("ERROR: "+ JSON.stringify(xhRequest));
                    document.getElementById('ProvidersPUTResponseDisplayError').style.display = '';
                    document.getElementById('ProvidersPUTResponseDisplayErrorText').innerHTML = "ERROR: "+ JSON.stringify(xhRequest);          
                  },        
              success: function(data, textStatus, request){
                         
                // get headers      
                var headers = request.getAllResponseHeaders().toLowerCase();
                
                // return the body;
                var obj = jQuery.parseJSON(data);
                body = obj.body;
                phixid = obj.phix_id;
                
                $("#phixid").val(phixid);
                document.getElementById('ProvidersPUTResponseHeaders').innerHTML = headers;
                document.getElementById('ProvidersPUTResponseBody').innerHTML = body;    
                
                document.getElementById('ProvidersPUTResponseDisplay1').style.display = '';
                document.getElementById('ProvidersPUTResponseDisplay2').style.display = '';
                
                document.getElementById('ProvidersPUTResponseDisplayLoading').style.display='none';
                document.getElementById('ProvidersPUTResponseHR').style.display='';
                
                document.getElementById('ProvidersPUTResponseDisplayMessage').style.display = '';
                document.getElementById('ProvidersPUTResponseDisplayMessageText').innerHTML = 'Provider Added!'; 

               }
            }); 
        }             
    } 