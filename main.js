

function formSubmitEvent() {
        let name = document.getElementById("custname").value;
        let city = document.getElementById("city").value;
        let payment = document.getElementById("paymentpreference").value;
        let list = [name + " " + city + " " + payment];

        if (name.length < 2 && city.length < 2 ) {
             alert("please fill in all fields");
        }
        else {

        let ul = document.getElementById("custList");
        list.innerHTML = "";

        for(let i = 0; i < 1; i++) {
            let li = document.createElement("li"); 
            li.innerHTML = list
            ul.appendChild(li);
        } 
        list.appendChild(ul);
    }
}