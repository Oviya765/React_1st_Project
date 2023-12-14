import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import '../Asserts/Styles/Navbar.css'
import Login from '../Components/Login'
import Register  from '../Components/Register'
import Home from '../Components/HomePage'
function Navbar(){
    return(
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to='/' className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to='/login' className='link'>Login</Link>
                    </li>
                    <li>
                        <Link to='/register' className='link'>Register</Link>
                    </li>

                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/register' element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Navbar;