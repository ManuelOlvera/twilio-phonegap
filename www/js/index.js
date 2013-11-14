var app = {
    // Application Constructor
    initialize: function() {
        alert('In initialize');
        console.log('In initialize');
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        alert('In bindEvents');
        console.log('In bindEvents');
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        alert('In onDeviceReady');
        console.log('In onDeviceReady');
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        alert('In receivedEvent');
        console.log('In receivedEvent');        

        alert('Received Event: ' + id);
        console.log('Received Event: ' + id);

        //Twilio Number associated to the user
        var callerId = '+19028001203';
        var endpoint = 'http://phonegap-twilio-poc.herokuapp.com/phonegap-poc-twilio-token';
        // var endpoint = 'http://localhost:1337/phonegap-poc-twilio-token';

        alert(callerId);
        alert(endpoint);
        

        // Set up the Twilio "Device" (think of it as the browser's phone) with
        // our server-generated capability token
        $.getJSON(endpoint, function(data){
            var token;
            $.each(data, function(key, value){
                alert("key: " + key);
                alert("value: " + value);
                if(key === 'twilioToken'){
                    token = data.twilioToken;
                }
            });
            alert("Token: " + token);
            TwilioPlugin.Device.setup(token);
        });
    }
};
