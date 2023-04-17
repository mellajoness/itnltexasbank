import { useNavigate } from 'react-router-dom';
import styles from './css/landing.module.scss';
import { AiOutlineMenu,AiFillLock, AiFillBank, AiFillDribbbleCircle } from "react-icons/ai";
import { BsFillPinMapFill, BsPiggyBank } from 'react-icons/bs';
const Landing = () => {
   let navigate=useNavigate()
   const gotoLogin=()=>{
      navigate('/login')
   }
    return ( 
        <div>
            <div className={styles.header}>
             <div>LOGO</div>

             <div className={styles.menu}>
                <div className={styles.menuItem}>BUSINESS</div>
                <div className={styles.menuItem}>LENDING</div>
                <div className={styles.menuItem}>PERSONAL</div>
                <div className={styles.menuItem}>MORTGAGES</div>
             </div>

             <div className={styles.row}>
             <AiOutlineMenu className={styles.menuIcon}/>
             <button className={styles.lockBtn}>
                <AiFillLock/>
                <div onClick={gotoLogin}>LOGIN</div>
             </button>
             </div>
            </div>

            <div className={styles.simple}>
             <div className={styles.ab}>
              <div className={styles.title}>We get to know our customer</div>
              <div className={styles.paragraph}>By learning exactly who our customers are we can deliver the financial solution they need.</div>
              <div className={styles.btnCenter}>
                <button className={styles.btn}>SMALL BUSINESS SOLUTIONS</button>
              </div>
              </div>
            </div>
 
            <div className={styles.rowParent}>
            <div className={styles.rowBanking}>
               <div className={styles.rowImg}>
                  <button className={styles.businessBtn}>BUSINESS BANKING</button>
               </div>
               <div className={styles.rowImg}>
                  <button className={styles.businessBtn}>PERSONAL BANKING</button>
               </div>
            </div>
            </div>

            <div className={styles.serviceDiv}>
               <div className={styles.serviceBox}>
                     <div className={styles.iconDiv}><AiFillBank className={styles.serviceIcon}/></div>
                     <div className={styles.small}>Small Business Loans</div>
                     <div className={styles.descTwo}>We have options to help expand your business, upgrade equipment or purchase a commercial building.</div>
                     <div className={styles.btnCenter}>
                      <button className={styles.btn}>LEARN MORE</button>
                    </div>
               </div>
               <div className={styles.serviceBox}>
                     <div className={styles.iconDiv}><BsPiggyBank className={styles.serviceIcon}/></div>
                     <div className={styles.small}>Checking & Saving</div>
                     <div className={styles.descTwo}>Our convenient, accessible accounts are designed to keep you in charge of your money - and your business.</div>
                     <div className={styles.btnCenter}>
                      <button className={styles.btn}>LEARN MORE</button>
                    </div>
               </div>
               <div className={styles.serviceBox}>
                     <div className={styles.iconDiv}><BsFillPinMapFill className={styles.serviceIcon}/></div>
                     <div className={styles.small}>Personalized Service</div>
                     <div className={styles.descTwo}>Our employees are innovative, creative, and empowered to ensure our customers have the best experience.</div>
                     <div className={styles.btnCenter}>
                      <button className={styles.btn}>LEARN MORE</button>
                    </div>
               </div>
               <div className={styles.serviceBox}>
                     <div className={styles.iconDiv}><AiFillDribbbleCircle className={styles.serviceIcon}/></div>
                     <div className={styles.small}>Bill Pay</div>
                     <div className={styles.descTwo}>At the office or on the go, paying bills is quick, easy and convenient with our Bill Pay service.</div>
                     <div className={styles.btnCenter}>
                      <button className={styles.btn}>LEARN MORE</button>
                    </div>
               </div>
               
            </div>
        </div>
     );
}
 
export default Landing;