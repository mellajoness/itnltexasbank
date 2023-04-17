import { NavLink, useLocation } from "react-router-dom";
import styles from './css/sidebar.module.scss';
import Header from "./header"; 
import { BiDownArrowAlt, BiUpArrowAlt} from "react-icons/bi"; 
import { AiFillCreditCard,AiOutlineCreditCard} from "react-icons/ai";
import { MdOutlineAddChart} from "react-icons/md";
import { BsPersonSquare,BsFileText,BsBoxArrowRight,BsCreditCard2Front,BsBoxArrowLeft } from "react-icons/bs";  
import { RxDashboard } from "react-icons/rx";
import { useEffect } from "react";
const SideMenu = ({children}:any) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  const overviewItem={
      items:[
        {
          path:'/dashboard',
          name:'Dashboard',
          icon:<RxDashboard className={styles.menuIcon} />,
         
        },
        {
          path:'/my-account',
          name:'My Account',
          icon:<BsPersonSquare className={styles.menuIcon} />,
        },
        {
            path:'/account-summary',
            name:'Account Summmary',
            icon:<BsFileText className={styles.menuIcon} />,
        },
        {
            path:'/transfer',
            name:'Transfer',
            icon:<BsBoxArrowRight className={styles.menuIcon} />,
        },
        {
            path:'/cross-border-transfer',
            name:'Cross Border Transfer',
            icon:<BsCreditCard2Front className={styles.menuIcon} />,
        },
        {
            path:'/deposit-check',
            name:'Deposit Check',
            icon:<BsBoxArrowLeft className={styles.menuIcon} />,
        },
        {
          path:'/pay-bills',
          name:'Pay Bills',
          icon:<AiOutlineCreditCard className={styles.menuIcon} />,
        },
        {
          path:'/visual-cards',
          name:'Virtual Cards',
          icon:<AiFillCreditCard className={styles.menuIcon} />,
        },
          
    ]
    };


    return ( 
      <div>
        <Header/>
        <div style={{display:'flex'}}>
         
          <div className={styles.parent} >  
            <div className={styles.partOne}>
               <div className={styles.available}>AVAILABLE BALANCE</div>  
               <div className={styles.row}>
                 <div className={styles.money}>650,000<span className={styles.usd}>USD</span></div>
                 <div className={styles.iconDiv}><MdOutlineAddChart/></div>
               </div>
               <div className={styles.moneyTwo}>650,000 <span className={styles.usd}>USD</span></div>  
               <div className={styles.row}>
                 <div className={styles.income}>Income</div>
                 <div className={styles.rowTwo}>
                    <div className={styles.incomePercent}>0%</div>
                    <BiUpArrowAlt className={styles.arrowUp}/>
                 </div>
               </div>

               <div className={styles.row}>
                 <div className={styles.income}>Outcome</div>
                 <div className={styles.rowTwo}>
                    <div className={styles.outcomePercent}>0%</div>
                    <BiDownArrowAlt className={styles.arrowDown}/>
                 </div>
               </div>

               <div className={styles.rowBtn}>
                  <button className={styles.transferBtn}>
                    <div>Transfer</div>
                  </button>
                  <button className={styles.billsBtn}>Pay Bills</button>
               </div>
               

            </div>  
            
            <div>
              <div className={styles.menu}>Menu</div>
              {overviewItem.items.map((item,index)=>
              <NavLink to={item.path}  key={index} className={styles.link} style={({ isActive }) => ({ color: isActive ? '#5034ee' : "#647787",background: isActive ? 'white' : "",fontWeight:'bold' })}>  
                <div className={styles.iconpagename}>
                  <div className={styles.menuIcon}>{item.icon}</div>
                  <div className={styles.pageName}>{item.name}</div>
                </div>  
              </NavLink>
            )}
            </div>
          </div>
          <main className={styles.main}>{children}</main>
        </div>
      </div>  
     );
}
 
export default SideMenu;