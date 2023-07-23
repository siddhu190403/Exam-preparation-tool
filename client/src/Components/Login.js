import '../styling/Login.css'
function Login(){
    return (
        <form className='form'>
            <div>
                <div className='space'>
                <label>Username : </label>
                <input type = 'text' id='Username' className='input'/>
                </div>
                <div className='space'>
                <label>Password : </label>
                <input type = 'password' id='password' className='input'/>
                </div>
                <div className='submit'>
                <input type='submit' text='submit' id='submit'/>
                </div>
            </div>
        </form>
    )
}

export default Login;