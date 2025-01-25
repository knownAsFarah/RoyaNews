import logo from '/royaNewsLogo.svg' 
import GPAS from '/googlplayandappstore.png' 


function Footer(){
    return (
        <>
        <div className='footer'>
          <div className='footer-logo'>
            <img src={logo} className="logo" alt="Roya News Logo"></img> 
            <p className='header-title'>رؤيا الإخباري</p>
            <p > جميع الحقوق محفوظة رؤيا 2024</p>
            <p >موقع اخباري تابع لقناة رؤياالفضائية ينقل لكم الاخبار المحلية و العالمية </p>
            <img src={GPAS} className="gpas-logo" alt="Google Play and App Store Logos "></img>
          <p className='links'><a className='link'>معايير التصحيح </a><a className='link'>السياسة الفكرية</a><a className='link'>سياسة الملكية</a></p> 
          </div>
          <div className="bottom-header">
          
          
            
          </div>
          </div>
        </>
      )
}

export default Footer