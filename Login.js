import '../Asserts/Styles/Login.css'

function Login(){
    return( 
      <div className='log'>
    <div className="login_form_container1">
    <div className="login_form1">
      <h2>SIGN IN</h2>
      <div className="input_group">
        <input type="text" placeholder="Username" className="input_text" autocomplete="off" required/>
      </div>
      <div className="input_group">
        <input type="password" placeholder="Password" className="input_text" autocomplete="off" required />
      </div>
      <p className='forget'>Forget Password?</p>
      <div className="button_group" id="login_button">
          <a href="./" className='Logina1'>Submit</a>
          </div>
          <p className='Logina2'>Dosen't have an Account? SIGNUP</p>
        </div>
        </div>
        </div>
        )
}
export default Login;