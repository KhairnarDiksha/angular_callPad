angular.module('eventApp')
.service('eventFactory',  function(){
	
	var eventFactory = {};
   
	var events = [
        {id:1,name:"rutuja",number:2323454545},
        {id:2,name:"amol",  number:6565464645},
        {id:3,name:"aniketh",number:9876789654},
        {id:4,name:"pavnesh",number:7865459088},
        {id:5,name:"medha",number:8765098723},
        {id:6,name:"prachi",number:9812340987},
        {id:7,name:"rajeshwari",number:8787654398},
        {id:8,name:"manish",number:9435653652},
        {id:9,name:"sushma",number:96325874123},
        {id:10,name:"diksha.",number:9975161019},
];
    var contactDetails = [
        {id:1,name:"rutuja",number:2323454545},
        {id:2,name:"amol",  number:6565464645},
        {id:3,name:"aniketh",number:9876789654},
        {id:4,name:"pavnesh",number:7865459088},
        {id:5,name:"medha",number:8765098723},
        {id:6,name:"prachi",number:9812340987},
        {id:7,name:"rajeshwari",number:8787654398},
        {id:8,name:"manish",number:9435653652},
        {id:9,name:"sushma",number:96325874123},
        {id:10,name:"diksha.",number:9975161019},
];

    var dialer=[
        {ids:1,alfabet:'.'},
        {ids:2,alfabet:'abc'},
        {ids:3,alfabet:'def'},
        {ids:4,alfabet:'ghi'},
        {ids:5,alfabet:'jkl'},
        {ids:6,alfabet:'mno'},
        {ids:7,alfabet:'pqrs'},
        {ids:8,alfabet:'tuv'},
        {ids:9,alfabet:'wxyz'},
        {ids:0,alfabet:'+'},
        {ids:'*',alfabet:''},
        {ids:'#',alfabet:''}
    ];
	 var copyOfAlpha=[];
    var tempID = [];
    var tempPhone = [];
   var phoneNumber = [{id:1,name:"rutuja",number:2323454545}];
   

    var pressAllDigit='';
    eventFactory.getAllEvents = function () {
         
		return events;
        
        
	}
    
    eventFactory.clickedEventService = function(number) {
            
        phoneNumber = []; 
                
        var digit = dialer.filter(function(item) {
            
          return item.ids === number;
                
        });
        
       /* var clickNumber = digit[0].ids;
        pressAllDigit = pressAllDigit + clickNumber;
        
       
         contactDetails.filter(function(phno){
                
             var phone = (phno.number).toString();
             var id = phno.id;
             
             
             if(phone.includes(pressAllDigit)==true){
                
                 phoneNumber.push(phno);
                                 
             }
             
             
         });
*/
           
        var contact = events.filter(function(phno){
              
                var name = phno.name;
                var alfa = digit[0].alfabet;
            
               
            
                
                for(var i=0;i<alfa.length;i++){
                  
                    
                    if((name.includes(alfa.slice(i,i+1)))==true)
                        {
                            
                            var id = phno.id 
                            tempID.push(phno);
                        }
                 }
          
        });

        
        
        var tempData =[];
        var value = 0;
        events.filter(function(phno){
                                      
                        var ids = phno.id;
                        
                        tempID.filter(function(index){
                           
                                if(index.id == ids){
                                    
                                    tempData.filter(function(repeat){
                                        
                                        var isRepeat=repeat.id;
                                        if(index.id == isRepeat)
                                            {
                                              value =isRepeat;
                                                
                                            }
                                           
                                        });
                                        
                                      if(value != index.id) {
                                           tempData.push(index);
                                      }                                   
                                   
                                }
                         })
         });
        
        /*var copyOfAlpha = [];
        
        angular.copy(tempData,copyOfAlpha);
     
      
        console.log(tempData);
        console.log("tempData");
        
       
         copyOfAlpha.filter(function(aids){
                phoneNumber.filter(function(pid){
                    if(aids.id != pid.id)
                        {
                            copyOfAlpha.push(pid)
                        }
                });
            });
    
         
        
        console.log("copyOfAlpha");
        console.log(copyOfAlpha);
*/
        events = []; 
        
        events =  tempData;
               
        tempID = [];  
        
        return events;
             
    }
             
	return eventFactory;
});