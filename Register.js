import '../Asserts/Styles/Register.css'
function Register(){
    return(
      <div className="reg">
        <div className="login_form_container">
      <div className="login_form">
        <h2>SIGN UP</h2>
        <div class="input_group">
          <input type="text"placeholder="Username" class="input_text" autocomplete="off" required/>
        </div>
        <div class="input_group">
            <input type="email" placeholder="E-Mail"class="input_text"autocomplete="off"required/>
          </div>
        <div class="input_group">
         
          <input type="password"placeholder="Password" class="input_text"autocomplete="off"required/>
        </div>
        <div className="input_group">
            <input type="dob" placeholder="Enter Your Date Of Birth" class="input_text" autocomplete="off" required />
            <i className='bx bxs-user'></i>
          </div>
        <div class="input_group">
           <span>Gender </span><br />
              <label form="dot-1">
                <input type="radio" name="gender" id="dot-1" />
                <span class="gender">Male  </span>
              </label> 

              <label form="dot-2">
                <input type="radio" name="gender" id="dot-2" /> 
                <span class="gender">Female  </span>
              </label> 

              <label form="dot-3">
                <input type="radio" name="gender" id="dot-3" />
                <span class="gender">Others</span>
              </label> 

          </div>
          <div className="button_group" id="login_button">
          <a href="./" className='Logina1'>Submit</a>
          </div>
          <span>Already have an Account? SIGNIN</span>
        </div>
        </div>
        </div>
    )
}
export default Register;