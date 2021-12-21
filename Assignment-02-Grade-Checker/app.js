let overallMarks = 300;


function Checkpercentage() {
    let name = document.getElementById('name').value;
    let eng = document.getElementById('eng').value;
    let mth = document.getElementById('mth').value;
    let urdu = document.getElementById('urdu').value
    let result = parseInt(eng) + parseInt(mth) + parseInt(urdu);
    let nameof = document.getElementById('nameof');
    let engof = document.getElementById('engof');
    let mthof = document.getElementById('mthof');
    let urduof = document.getElementById('urduof');
    let tmarks = document.getElementById('tmarks');
    grade = document.getElementById('grade');
    scoredpercentage = document.getElementById('scoredpercentage');
    if(name === '' || eng === '' || mth === '' || urdu===''){
        alert("Please enter all values")
    }
    else{
    nameof.innerHTML = name;
    engof.innerHTML = eng;
    mthof.innerHTML = mth;
    urduof.innerHTML = urdu;
    tmarks.innerHTML = result;
    let Percentage = (100 * result) / overallMarks
    let calculate = Math.ceil(Percentage);
    scoredpercentage.innerHTML = `${calculate}%`

    if (calculate == 100) {
        grade.innerHTML = "A+ grade"
    }

    else if (calculate <= 100 && calculate >= 70) {
        grade.innerHTML = "A grade"
    }

    else if (calculate <= 70 && calculate >= 60) {
        grade.innerHTML = "B grade"
    }

    else if (calculate <= 60 && calculate >= 40) {
        grade.innerHTML = "C grade"
    }

    else {
        grade.innerHTML = 'fail'
    }
}
}