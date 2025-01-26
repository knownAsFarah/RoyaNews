import logo from '/royaNewsLogo.svg' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';


function Header(){
    return (
        <>
          <div className="top-header welcome">
            <div className='right'>
            <span className='welcomeMessage'>مرحبا بك في موقع رؤيا الإخباري لتطلع على آخر الأحداث والمستجدات في الأردن والعالم</span>
            </div>
            <div className='left'>
            <button className='header-button login'>تسجيل الدخول</button>
            <button className='header-button live'>البث المباشر</button>
            </div>
          </div>
          <div className="top-header">
            <div className='right'>
            {/* <FontAwesomeIcon icon={faBars} className="menu"/> */}
            <img src={logo} className="logo" alt="Roya News Logo"></img> 
            <p className='header-title'>رؤيا الإخباري</p>
            </div>
            <div className='left'>
            <FontAwesomeIcon icon={faEarthAmericas}  />
            <span>English</span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <div className="bottom-header">
          <a>الرئيسية</a>
          <a>أسعار الذهب</a>
          <a>الأردن</a>
          <a>فلسطين</a>
          <a>طقس</a>
          <a>عربي ودولي</a>
          <a>اقتصاد</a>
          <a>رياضة</a>
          <a>هنا وهناك</a>
          <a>صحة</a>
          <a>تكنولوجيا</a>
          <a>انتخابات 2024</a>
          <a>أحداث مهمة</a>
            
          </div>
        </>
      )
}

export default Header