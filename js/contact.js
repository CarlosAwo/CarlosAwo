
let name = document.getElementById("name")
let email = document.getElementById("email")
let msg = document.getElementById("msg")
let envoyer = document.getElementById("envoyer")
let answer = document.querySelector(".contactFormulaire").querySelector(".answer")

function isValidEmail(email){
  let emailReg = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")
  let valid = emailReg.test(email)
  if (!valid) {
    
    return false
  }
  else{
    
    return true
  }
}


envoyer.addEventListener("click",(e)=>{
  e.preventDefault()
    answer.innerHTML = ""
    if(email.classList.contains("input--error")){email.classList.remove("input--error")}
    if(answer.classList.contains("answer--success")){answer.classList.remove("answer--success")}
      if(answer.classList.contains("answer--error")){answer.classList.remove("answer--error")}
    //CHek required content
    if (name.value === "" || email.value === "" || msg.value === "") {
      console.log("name not full ")
      answer.innerHTML = "Veuillez a remplire tout les champs<br> Si vous ne possédez pas d'adresse mail, Veuillez utlisez l'un des liens socials ci-dessous pour me contactez"
      answer.classList.add("answer--error")
      return

    }


  //Check content Validity

  if (isValidEmail(email.value)==false) {
    answer.innerHTML = "Veuillez saisir une addresse mail valide"
    answer.classList.add("answer--error")
    return
  }


          answer.textContent = "Veuillez Patientez...."
  

  let data = new FormData();

  data.append("name", name.value)
  data.append("email", email.value)
  data.append("msg", msg.value)

  fetch(path,
    {
      method:"post",
      body : data,
      mode:"no-cors"

    }).then((res)=> res.json())
    .then((result)=>{
        console.log(result)
      if(result.statut === "success"){
          answer.classList.add("answer--success")
          answer.innerHTML = result.msg
        }
        else{
          answer.classList.add("answer--error")
          answer.innerHTML = result.msg

        }

      
    })
    .catch((e)=>{
      console.log(e)
    })

})

