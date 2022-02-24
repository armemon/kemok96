async function getMotorDataOn() {
    firebase.database().ref('Relay/motor').on('value', function(data) {
        RelayData1 = data.val()
        if (RelayData1 == "on") {
            document.getElementById("motoron").checked = "checked"
            console.log(RelayData1)
        }
        if (RelayData1 == "off") {
            document.getElementById("motoroff").checked = "checked"
            console.log(RelayData1)
        }
    })
}
getMotorDataOn()
var RelayData = []

function motoron() {
    RelayData['motor'] = "on"
    firebase.database().ref('Relay').set(RelayData)
}

function motoroff() {
    RelayData['motor'] = "off"
    firebase.database().ref('Relay').set(RelayData)
}