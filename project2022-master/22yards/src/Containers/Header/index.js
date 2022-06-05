import {Navbar,Nav,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import './index.css'
import {isMobile} from 'react-device-detect'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {LogoutStart, GetUserDetails} from "../../redux/actions/Auth"
import {EditProfileSave, EditProfileCancel, SeteditedUserDetails} from "../../redux/actions/Profile"
import ImageUploader from '../../Components/ImageUploader'
import {IPLTeamLogos} from "../../Util/util"

function Header(){
  const [expanded, setExpanded] = useState(false);
  const isUserLoggedIn=useSelector((state)=>state.authReducer.isUserLoggedIn)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const loggedInUserDetails=useSelector((state)=>state.authReducer.loggedInUserDetails);
  const isProfileInEditMode=useSelector((state)=>state.profileReducer.isProfileInEditMode);
  const editedUserDetailsobj=useSelector((state)=>state.profileReducer.editedUserDetailsobj);
  

  function userLogOut(){
    dispatch(LogoutStart())
  }

  async function handleSaveTheProfile(){
    console.log(editedUserDetailsobj)
    let profile_image=editedUserDetailsobj.profile_image
    if(editedUserDetailsobj.profile_image!==loggedInUserDetails.profile_image &&
       !IPLTeamLogos.includes(editedUserDetailsobj.profile_image)
       && editedUserDetailsobj.profile_image!=="https://res.cloudinary.com/dhz8n0ka8/image/upload/v1646731518/22YardsLOGO_edjjo1.png"  
    ){
        profile_image=await ImageUploader(editedUserDetailsobj.profile_image)
    }
    const obj={profile_image,bio:editedUserDetailsobj.bio}
    console.log(obj)
    dispatch(EditProfileSave(obj))
  }

  function handleCancelEditTheProfile(){
    // dispatch(GetUserDetails())
    dispatch(SeteditedUserDetails(loggedInUserDetails))
    dispatch(EditProfileCancel())
  }
  
  function handleNavigateToNotification(){
     navigate("/notifications")
  }

  return (
    <>
     {
        !isUserLoggedIn &&
         <nav className='nav-bar1'>
            <div className='d-flex align-items-center'>
            <Link to='/' className='nav-bar-item'>
               <img src="https://res.cloudinary.com/du7d2nmbw/image/upload/v1645445493/header1logo_oizjix.jpg" className='logo-navbar1'/>
            </Link>
            </div>
            
         </nav>
     }
     { isUserLoggedIn &&
       <nav className='nav-bar'>
          { !isProfileInEditMode &&
            <img className='btn-in-mobile' onClick={() => setExpanded(!expanded)}src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAABmJLR0QA/wD/AP+gvaeTAAAAfUlEQVQ4jWN8Zm7OQA3ARBVThrdBLHAWh7Mzi5QUSZr/PHv2Y+9edIN4k5JYlJVJMuj3nTtwgxhHo58gQAQ2f0kJs7w8SZr/Pnz4saeHCi76//8/nD0aa4QBItZEly4lNYv8uXv3dXQ0ukFfFi1iUVEhzaA7d+Ds0Vijo0EAywMl/MlqbDwAAAAASUVORK5CYII="></img>
          }
          {
           isProfileInEditMode &&
           <div className=''>
              {/* <img onClick={handleCancelEditTheProfile} className="saveTheProfile" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABmJLR0QA/wD/AP+gvaeTAAABgElEQVRIie2WwYqCQBjHVSaQgoSZ0x5C8GCPUNfqBYroHaLSS2+SYqfoBYpeoEPHbp2VELrsnsaoXWpZzd2D4UYNjigtu0vfbdDv//P7z58Z2edSiblncXdVfwDiFLhaPy2XKRVfyuXL5Y9PQPyKmEWc/u9vMh2Qrde5fJ7QiRBfq1HbyXsQVq7Vyvf72UbDURR/v79UR4YBCoXt6fS+WEQoUCY4zueebWeKRajrnCCceyBEmgZE0V2vP1araAUKwN9ucbfr2XZGlqGmcYLAQYh0HUiSa1mOovi7XbQCxaIzQ1GQYWRkGQ4GLM8DUXRN88q0hBOcGRjjdjvwCoiia1mOqsZRjwtgGIZh2bhvJgBwCKHhEEiSa5reZhN4RcxuEsB3ZizLUdXQq8tcJQfcZuY2V6kAuWYzcMbp9cJEBrkKvOKr1WgFSkxfR6NPzztMp1eZ8THGnQ5fqRxms1QAxvffxmPyE4wPkwml/VecpimLbFH6mzmsu0/APn4d/z/gC1H/qttebgteAAAAAElFTkSuQmCC"></img> */}
              <img  onClick={handleCancelEditTheProfile} style={{height:"50px"}} className="saveTheProfile" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAABmJLR0QA/wD/AP+gvaeTAAACkElEQVRYhe3XS0/iQADA8T6oG+QhTH0UUTHBoBITIxcPfiGpARNBTx49mWhAaNEv40fQmBAfiR6UV422GNG4sQ/2QDddVtadaWHZ3fR/bDozv0zbTIpXl5exvy+i34DO2SyUbBZKNgslm4WSzULpH2c5pqdpnieGh80tgzudYG9vIBbrMmsonR6IxehslvD7kU2DgyCT+bKyMpRKYQTUirCs+va2fH3tCIfpw0OkPdP3aXFRFQRpawvTtG6ytKcnKR6XLy8doRDNcSScDHc6wf7+wNKSKggiy6qVCuRyCK+81mhIiURLBiBkP5uqVfi10L7ENhnPfyKzYkJmGbKLC8fUFOB5cmSkg8nlonM50yYzLF2WTP5KhrtcdDZLLSyYNplktckmJ3+U4W63YYrHzZnMszrIRkdxt5vOZAxTrWZ6ctziDxnh9YJ8nopElHK5+fxMRaNqpSKyrHp/b2VaqywMwwiPB2SzVDSKYZhaq4ksa2Wf9Dktju9RVlmE1ws4jopGlXJZPj8nAwE6nyfHxvrJ0h9fJKKUSlI8LiaTcrFIBoP00REZCPSHRXg84OCAmp9XSiWJZdWHh+bLi7i+LheLJMPQhQI5Pv6nWYbp7q5lal1vvr6KicT76SnJMDTPm5aZYREeD8jlPpp02dubtLFhUYbM0k1zc8rtrcSy6uPjx3usy9BYbaa1tY6mrsgQWITPBwqFlkn81NQmOznRZcFg91mEz0dzHDUz0zJpvzMZslRKl3EcvAyW5d/ZcYTDys2NuLoKaTJk6fT72RnJMGB3F/IXg0xNTMDcJ19dUaGQtLmp1evwpu+D5a/Hx9TsbIPjVEGAGdGFo7oX/adHdY+yWSjZLJRsFko2CyWbhdI3YItphwkMPhcAAAAASUVORK5CYII="></img>
              {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAABmJLR0QA/wD/AP+gvaeTAAAFhklEQVR4nO3byU/UbBzA8V8LQzuKCvNeiQdjBi5clBEGIgJjlP/CP8BEDq96RAIYxRUEcUNRLyZuBxOXxERjOLiQgCYqiktIJGgI6ywsnZn2PbSWWYHfy9M+Jfl9by2d53nySfuwDCOMlZcDtbpE3gtYTxEWIsJCRFiICAsRYSEiLESEhYiwEBEWIsJCRFiICAsRYSEiLESEhYiwEBEWIsJCRFiICAsRYSEiLESEhYiwEFmAJYoFx4659+9nP/Lqcnm9ns5OccsW5iPn/FtUxHI8USxoanLX18t79sRHR2M/frAcfBXpUq5t26Ty8oUXL7TFRYaDM76zCpqa3Pv2AQCIYkFjo3vvXrbjL5+rpMRz8aJ+T7m8Xs+FC4IkMRyfMdbCy5cQixkHOTkFzc3u+nq2U2TL5fV6OjrETZuWFtPXx/bOYvwYxkZGYj9/umtqQBQBAARBrq6Oj43Fvn9nOEt6Lq/X09WVuE+FenrCPT1sZ2G9Z2Xz+v079u0b24nMXMXFnq4ucfNm80zo2rXw9evMJ2KPBQCxkZHo169yXZ2QkwMAIAjy7t3xP3+s8HIVF3s6O22QAouwACD+61d0eNhqLzulwDossN4rg9TVq+EbN5gMnjELsUD3Snkeq6vV6eno0NAaR3aVlNgsBVZjQUavyso1enGRAhuwgLWXIZXw81ToypVwby+r1S6THVige335IgcCSV4zM1gvjlJgGxYAxEdH1+iVQery5fDNm1asNmP2YYHplfI8zs5GP39e8bV5paX/dHaK+fnmGZulwGYsyOjl92vB4PJeeaWlnvZ2YeNG84z9UmA/FuheQ0OJXtKyXg6RAi5YgPFyjhTwwoJsXqFQ9NMn85q80lJPR4dDpIAjFmT0qqjQwmHdy5DasMG8PnTpUvjWLV6rBb5YkM0rEhFE0WlSACA44SN0kt9f2NYm5OUZx5qmRaNLhwDBjo7InTt8FpeQI94KW3z9evroUU1RjGNBSJQKdXc7QQocggUAi2/eTB85suT1t1B3d/j2bS5LSs8pWAAAgsB7BSvEeYM3kyoqCk+dSnz6jPM+H0SjyocPXFaVkiOwJL8/SUrf4PXvjwCSz6dFItGPH7mt72/8H0OpoiLlW2GwvX3q4EFtbs68ZnNDQ/6BA3zWlxDnOyv16dO04Pnzkbt34+PjysCAOxAwvyT5fBCLKe/fc1srX6xsUvpRfHxcGRxM8ior4+vFDSuD1LlzkXv3Eq9xmhcfrPQdPV1Kz1FeHLDSf7mZPXt27v79bNc7x8turPR7ankpvfj4+OK7d3IgYP4LkVRWBvG4zV62YhlSLpdxrGmzZ87MPXiwmteqExNKfz9fL/uwpMrK/y2lx93LJiypsrKwrS1J6vTpuYcPseMYXnV1SV6qqgwOMlxttuzAkqqqmEjpqRMTSsr+tXOnPV6WY0lVVYUnTy5JqerM8ePzjx6tZUx1cpKLl7VYmaUeP177yJm9NM1SLwuxrJMyxrPdyyosuabGc+JEklRr6/yTJ2xnUScnlbdvU70AlIEBthPpWYIl19QUtrZCbq5xrKozLS3zT58ynwgyeu3YAdZ4sceSa2ttkzJm0L3q6gRZ1s9Y5MUYS66tLWxpSZJqbp5/9ozhFBkz9q9kL0GSlP5+hrMw/kupXFu7JBWPzzQ22iClFx0enmpoUEMh84y0axfbj6MwvrMWXr3KLSpybd9u3FPPnzMcfMXUiQnzeYwOD08dOqRFIgzHZ71nadpCX1/u1q3h3t4Fe6X01MlJpb8/p6ho+vBhNRhkO7gj3r5fL/F/d2cdRViICAsRYSEiLESEhYiwEBEWIsJCRFiICAsRYSEiLESEhYiwEBEWIsJCRFiICAsRYSEiLESEhYiwEBEWIsJC9B8JNiuNxiIBaQAAAABJRU5ErkJggg=="></img> */}
           </div>
        }
          {/* <img className='btn-in-mobile' onClick={() => setExpanded(!expanded)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAAaklEQVRoge3XOwrCUBRF0Y2jM86/TkCch/aSIuIDfboWnP5+qlMAAAAcc6m26j55tmo5svD1C4YdldvzcqcjF/h1S7X2+e+8m7U6D74NAAAv0ZYmjra0R1sCAGAQbWniaEt7tCUAAIC/8wBJyseMLM211AAAAABJRU5ErkJggg=="/> */}
          <div>
                <Link to='/' className='nav-bar-item'>
                  <img src="/LogoWhite.png" className='logo-navbar'/>
                </Link>
          </div>
          <div className='d-flex align-items-center'>
              <Link to='/' className='nav-bar-item'>
                <img src="/LogoWhite.png" className='logo-nav-bar-mobile'/>
              </Link>
          </div>
        {  !isProfileInEditMode &&
           <div className='d-flex align-items-center'>
          
            <ul className='nav-bar-list'>
              <Link to='/' className='nav-bar-item'>
                  <li>Home</li>
              </Link>
              <Link to='/feed' className='nav-bar-item'>
                  <li >Feed</li>
              </Link>
              <Link to="/networks" className='nav-bar-item'>
                  <li>Networks</li>
              </Link>
              <Link to="/notifications" className='nav-bar-item'>
                <li >Notifications</li>
              </Link>
              <Link to="/newsArticles" className='nav-bar-item'>
                <li>News</li>
              </Link >
              {
                  isMobile && 
                  <Link to="/scores" className='nav-bar-item'>
                    <li>Scores</li>
                  </Link>
              }
              <Link 
              to={{
                pathname:`/profile/${loggedInUserDetails.username}`, 
              }}
              state={{state:"abcd"}}
              className='nav-bar-item'>
                  <li>Profile</li>
              </Link>
              
            </ul>
            
            <img className='nav-bar-seach-icon'  onClick={handleNavigateToNotification} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAABmJLR0QA/wD/AP+gvaeTAAADlklEQVRoge2aOUgrQRzG59hsjs3mWKNYKKKCIh4J3o0gdmKhpBALj1IbQRS0UAsbW8UoWHogeNT2WgUJsRM8UAPRhyDKE42amGRfEXkv4Evcncy8fWJ+5ex+/28+ZmYn2R34o6kJfGWQ1h3IFMYBOA5wHFsHRnX5+npxcJCvqgKyHDk6elxejvj9LIyYjIChrS1nYSEWDN6Pjt6PjcWurnI8HkNrKwsv+iMADQbr+PjT2trj8nKiJez1xm5vrRMTYa9XDofp2tEfAd7lQhbL0+pqcuPTygqyWnmnk7od/QBQEOKhkPzyktwoPz/HQyEoitTt6AeIBgJIFLni4uRGrrQUiWL08pK6HYMA5+cRv982NYXs9ncPu902ORn2+aIXF9TtIIudGDkc0vw8zsuL+HwAAL6xMXZzcz8yEr+7o+6FxwoKaNaDkK+uNrS0IJtNV1rKlZRwJSVQr4+enSGzGchy7PaWph3FEYAGg7GjQ+ju5oqK0twWDQRC29svu7u0nqd0AvA1NdbJyfRdTyZ2ff1zdpbK3kxhComDg8lLVgnIYjG1t0MII4eHGbpnFgBCy8iIua8PQEig5WtrsSSFvV4gy8RdyCiAODRk7u0llgMAdBUVEKFM5hL5PsDX1Zn7+4nlvzEPDOgbG4nlhAGgXm+bmQGIxj6IkHV6GvI8oZpMZurqwg4HmfYjODfX1NlJpiUKgLGQ2dT/iNDXBzAmEJIE4GtqcG4ugTANOC+Pr6oiEJIE0Dc3E6gYlSUaAQb/SwAAvMtFoCIJQH3+JEA5OSQqEo0kEag+Bf+zANBoJFB9XlYQCFTZN3Nakw2gNdkAWpMNoDXZAFqTDaA12QBa8/0CQJ2ORT/eUf9RWXUAXFioVqIcTn1x1QGM7e1qJcoxud1qJeoC8E6n0NOj1kM5gtut9t2E4gAcZ3K7pcVFtmsAY8njMbndyt/SKfpCI3k8uvJyZLFk1jsVxB8e3k5P74eHP71T0arXNzRk3CV1IKtVoen32wf+N7IBtEbRIn5aX1deUVdWpk/xZAsfHLydniovpQRFAR6XlpRXlObmUl6LRlWVUgL9KaRL/aFFV1lJ3Y7Bgac0myjRV7D00A/wdnKS6lI09SVi6AcIbW2lvLSzQ92OfoDXvb2/djS0ufm6v0/djvaBJwBA4pxlMIjz87HdDuLxt+PjR48ntLFB3QgwOnL2h8SqjcXYObA92My06wm+/E+JXwlx6IHEhLBfAAAAAElFTkSuQmCC"></img>
            <img className="nav-bar-logout" onClick={userLogOut} src="data:image/png;base64,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"></img>
           </div>
        }
        {
           isProfileInEditMode &&
           <div className=''>
              <img onClick={handleSaveTheProfile} className="saveTheProfile" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAABmJLR0QA/wD/AP+gvaeTAAACFklEQVRoge3ZP0/CQBzG8YeWoR1UCAkuJL4Mt9qUviMSNzUtYXFw43UQBxKMhOj7MPgnkVV0gaEHDiKWWqF3bX89k/tO0B7NJ5eWXqE0OT7Gf0srGiCSQlOl0FQpNFUKTZVCUyU12rDtw37/cDAwHCe8XV606brVTker1bRK5eD0NLxLUrTpuhXPg66v3i8W4b0yoqNixt4vL8MDpEMbzWZkjqe+P7+7C4+RC200m1Xf3xB73uzmJjJMInRCMeRBJxdDEjSXGDKgecUoHC0gRrFoMTEKRAuLURQ6jRiFoFOKQY9OLwYxOhMxKNFZiRGLNiyrfn1d7/UMy0qjDGe67oaYsen5uZgYgN5qNCKbat2uXq9re3um47CXl2A8TsNF3Pp4enExGw6FDxgz00vGVq90veJ5pusKHx05iBE702wyMR0HmgYAmmacnAjPdx5ixKKD5+fg6cm07R+3bbPX1+DhgevQMVee789ub1OK49EAgsfHDXepZFgWlzvD74qkaKRz5yrehoaoO2/xDjT43QTi3WjwuGnEidBI5iYTJ0Vjl5tSzIHG3+7y0RGlGECJ92/m3zc5AJnf87ZX5v3AbDhcLhbVdnsFXXPxfc/LWQyx9fR8NHo7O8N6XfVV/mfFOsGHgKibUAyB02PdfDR6Y2y/1cJy+XF1Nb+/z5C1Pe4LUYaK/y1PIIWmSqGpUmiqFJoqhabqE/LdtCA4S+ucAAAAAElFTkSuQmCC"></img>
             
              {/* <img onClick={handleSaveTheProfile} className="saveTheProfile" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABmJLR0QA/wD/AP+gvaeTAAABHElEQVRIie2WP6rCQBDGZ/O20uJBxsZqwUvoQeId1GDnTdTkEF5BsPUUkjTvNY5WosUaLBaDStxMIhEVv25h8vvmm8k/8dduQ5VyKqV/DTiSN+fmcvkg8b/TuTw+PUFmF0xlpn//Jb+2gYNY8zx7TfaSmXQMAqmUEGI3m90tK0l3XRyPpVI6jg+Lha2yJH0yka2WjuON7x/X6/IGNc9zEK8uQMQwNHQaDOz0HIN6t/s7GmEQpB7p3A09IbLTcwz287leraRSGIY/jcbl3De+z6GD/S5KtlsaDk3L7nQKAIV6z08AAAkR9XomR9HeWQZwzqGjSEcRZ6s3Yj1oCRH1+8asEJ1rUA5t9NovO46yR/T4lzlV5QnE99fx8w1O7Lt8KkI+bbUAAAAASUVORK5CYII="></img> */}
           </div>
        }
       {
          expanded &&
        <ul className='nav-bar-list-mobile'>
          <Link to='/home' className='nav-bar-item-mobile-link' onClick={() => setExpanded(false)}>
            <li className='nav-bar-item-mobile'>Home</li>
         </Link>
         <Link to='/feed' className='nav-bar-item-mobile-link' onClick={() => setExpanded(false)}>
            <li className='nav-bar-item-mobile'>Feed</li>
         </Link>
         <Link to="/networks" className='nav-bar-item-mobile-link' onClick={() => setExpanded(false)}>
            <li className='nav-bar-item-mobile'>Networks</li>
         </Link>
         <Link to="/notifications" className='nav-bar-item-mobile-link' onClick={() => setExpanded(false)}>
           <li className='nav-bar-item-mobile'>Notifications</li>
         </Link>
         <Link to="/newsArticles" className='nav-bar-item-mobile-link' onClick={() => setExpanded(false)}>
           <li className='nav-bar-item-mobile'>News</li>
         </Link >
          <Link to="/scores" className='nav-bar-item-mobile-link' onClick={() => setExpanded(false)}>
            <li className='nav-bar-item-mobile'>Scores</li>
          </Link>
         <Link to={{
                pathname:`/profile/${loggedInUserDetails.username}`,
                }} 
                className='nav-bar-item-mobile-link' onClick={() => setExpanded(false)}>
            <li className='nav-bar-item-mobile'>Profile</li>
         </Link>
         <li className='nav-bar-item-mobile' onClick={userLogOut}>LogOut</li>
        </ul>
       }
       </nav>
     }
    </>
  )
}

export default Header


