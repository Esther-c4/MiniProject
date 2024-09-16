let form = document.getElementById("form")
let user = document.getElementById("user")
let age = document.getElementById("age")
let email = document.getElementById("email")
let date = document.getElementById("date")
let time = document.getElementById("time")
let minor = document.getElementById("minor")
let h2 = document.getElementById("h1")
let para = document.getElementById("para")
let artist = localStorage.getItem("artist")
let sub = document.getElementById("sub")
h1.innerHTML = `${artist} Concert`
concert = 0

let zErr = document.getElementById("zErr")
let aErr = document.getElementById("aErr")
let bErr = document.getElementById("bErr")
let dErr = document.getElementById("dErr")
let eErr = document.getElementById("eErr")
let fErr = document.getElementById("fErr")
let gErr = document.getElementById("gErr")
let hErr = document.getElementById("hErr")
let iErr = document.getElementById("iErr")

document.getElementById('form').addEventListener("submit", function (e) {
    e.preventDefault()
    let bill = 200
    let valid = true
    if (user.value == "") {
        aErr.innerHTML = 'Enter your fullname'
        valid = false
    } else {
        aErr.innerHTML = ""
    }
    if (age.value == "") {
        bErr.innerHTML = 'Enter your Age'
        valid = false
    } else if (age < '18') {
        bErr.innerHTML = ''
        if (minor.value == '') {
            zErr.innerHTML = "Enter Guidance's Name"
            valid = false
        } else {
            zErr.innerHTML = ""
        }
    } else {
        bErr.innerHTML = ""
        zErr.innerHTML = ""
    }
    if (email.value === "") {
        dErr.innerHTML = 'please enter an email address';
        valid = false;
    } else {
        dErr.textContent = '';
    }
    if (date.value == "") {
        eErr.innerHTML = 'Enter Date'
        valid = false
    } else {
        eErr.innerHTML = ""
    }
    if (time.value == "") {
        fErr.innerHTML = 'Enter Time'
        valid = false
    } else {
        fErr.innerHTML = ""
    }
    if (select1.value == "") {
        gErr.innerHTML = 'Select an option'
        valid = false
    } else {
        gErr.innerHTML = ""
        if (select1.value == '1') {
            bill += 100
        } else {
            bill += 200
            //console.log('bill')
        }
    }
    if (select2.value == "") {
        hErr.innerHTML = 'Select an option'
        valid = false
    } else {
        hErr.innerHTML = ""
        if (select2.value == '1') {
            bill += 100
        } else {
            bill += 200
        }
    }
    if (select3.value == "") {
        iErr.innerHTML = 'Select an option'
        valid = false
        //console.log('logg')
    } else if (select3.value == '0') {
        alert('No event for this date')
        valid = false
    }
    else {
        iErr.innerHTML = ''
    }
    if (!valid) {
     console.log('error in connection')
     }else{
    localStorage.setItem('logged_in_user', user.value)
    localStorage.setItem("age", age.value)
    localStorage.setItem('bill', bill)
    window.location.href = "services.html";  
    console.log(bill)
     }
        // document.getElementById('form').reset();
})

if (artist == 'Ballet') {
    document.getElementById('select3').innerHTML = `
                <option value="">Select option</option>
                <option value="0">Sunday</option>
                <option value="0">Monday</option>
                <option value="0">Tuesday</option>
                <option value="0">Wednesday</option>
                <option value="0">Thursday</option>
                <option value="1">Friday</option>
                <option value="2">Saturday</option>
    `
}
else if (artist == 'Pop') {
    document.getElementById('select3').innerHTML = `
<option value="">Select option</option>
<option value="0">Sunday</option>
<option value="0">Monday</option>
<option value="1">Tuesday</option>
<option value="2">Wednesday</option>
<option value="0">Thursday</option>
<option value="0">Friday</option>
<option value="0">Saturday</option>
`
}
else if (artist == 'Mars') {
    document.getElementById('select3').innerHTML = `
<option value="">Select option</option>
<option value="0">Sunday</option>
<option value="1">Monday</option>
<option value="0">Tuesday</option>
<option value="2">Wednesday</option>
<option value="0">Thursday</option>
<option value="0">Friday</option>
<option value="0">Saturday</option>
`
}
else if (artist == 'Eminem') {
    document.getElementById('select3').innerHTML = `
<option value="">Select option</option>
<option value="0">Sunday</option>
<option value="0">Monday</option>
<option value="1">Tuesday</option>
<option value="0">Wednesday</option>
<option value="2">Thursday</option>
<option value="0">Friday</option>
<option value="0">Saturday</option>
`
}
else if (artist == 'Drake') {
    document.getElementById('select3').innerHTML = `
<option value="">Select option</option>
<option value="1">Sunday</option>
<option value="0">Monday</option>
<option value="0">Tuesday</option>
<option value="0">Wednesday</option>
<option value="0">Thursday</option>
<option value="0">Friday</option>
<option value="2">Saturday</option>
`
}
else if (artist == 'White_guy') {
    document.getElementById('select3').innerHTML = `
<option value="">Select option</option>
<option value="0">Sunday</option>
<option value="0">Monday</option>
<option value="1">Tuesday</option>
<option value="2">Wednesday</option>
<option value="0">Thursday</option>
<option value="0">Friday</option>
<option value="0">Saturday</option>
`
} else if (artist == 'White_guy2') {
    document.getElementById('select3').innerHTML = `
<option value="">Select option</option>
<option value="0">Sunday</option>
<option value="0">Monday</option>
<option value="1">Tuesday</option>
<option value="0">Wednesday</option>
<option value="0">Thursday</option>
<option value="2">Friday</option>
<option value="0">Saturday</option>
`
} else {
    document.getElementById('select3').innerHTML = `
<option value="">Select option</option>
<option value="0">Sunday</option>
<option value="0">Monday</option>
<option value="1">Tuesday</option>
<option value="2">Wednesday</option>
<option value="0">Thursday</option>
<option value="0">Friday</option>
<option value="0">Saturday</option>
`
}