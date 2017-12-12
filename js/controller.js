
angular.module('eventApp').controller('formCtrl',['eventFactory', function(eventFactory) {

	var self = this;
	this.eventForm = {};
    var value;
    this.matchingContacts=[
       
        {id:1,name:"rutuja",number:2323454545},
        {id:2,name:"amol",  number:6565464645},
        {id:3,name:"aniketh",number:9876789654},
        {id:4,name:"pavnesh",number:7865459088},
        {id:5,name:"medha",number:8765098723},
        {id:6,name:"prachi",number:9812340987},
        {id:7,name:"rajeshwari",number:8787654398},
        {id:8,name:"manish",number:9435653652},
        {id:9,name:"sushma",number:96325874123},
            {id:10,name:"diksha",number:9975161019},
];
    
    this.event = eventFactory.getAllEvents();
    
    this.clickedEvent = function(number){
        
        
        var value = eventFactory.clickedEventService(number);
        
        this.matchingContacts=value;
       
    }
    
     
 
}]);