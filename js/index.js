var macAddress = "B8:27:EB:D2:A8:4B";

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        bluetoothSerial.connect(macAddress, app.onConnect, app.onDisconnect);
        refreshButton.ontouchstart = app.onDeviceReady;
    },
    onConnect: function() {
        bluetoothSerial.subscribe("\n", app.onMessage, app.subscribeFailed);
        statusDiv.innerHTML="<p>Connected to " + macAddress + ".</p>";        
    }, 
    onDisconnect: function() {
        //alert("Disconnected");
        statusDiv.innerHTML="<p class='red'>Disconnected.</p>";
    },
    onMessage: function(data) {
        counter.innerHTML = data;        
    },
    subscribeFailed: function() {
        alert("subscribe failed");
    }
};
