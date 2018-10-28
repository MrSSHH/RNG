function random() {
    var max = Number(document.getElementById('Max').value);
    var min = Number(document.getElementById('Min').value);
    var times = Number(document.getElementById('Times').value);
    var all = "";
      if (isNaN(max) || max == "" || isNaN(min)  || isNaN(times) || times == "" || min > max) {
        return document.getElementById('result').innerHTML = 'Please enter a valid numbers  !';
    }
    for (let i = 0; i < times; i++ ) {
        var random = Math.round(Math.random() * (max - min) ) + min;
        all += random + '\n';
    }

    document.getElementById('result').innerHTML = all;
}
document.getElementById('result').innerHTML = "";
