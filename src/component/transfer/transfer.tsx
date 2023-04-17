import styles from './css/transfer.module.scss';
import { useState } from 'react';
import Marquee from "react-fast-marquee";
import { MdArrowDropDown,MdArrowDropUp } from 'react-icons/md';
import { DropdownItem, DropdownMenu, DropdownToggle,Dropdown } from 'reactstrap';
import { PrimaryButton } from '../../shared/fonts/buttons/button';
import { useNavigate } from 'react-router-dom';
const Transfer = () => {
    const [dropDownValue,setDropDownValue]=useState('Select a transfer account')
    const [amount,setAmount]=useState('')
    const [account,setAccount]=useState([
        {id:1, amount:'787482979027- George Yakubu'},
        {id:2, amount:'7288762882- Amos Pam'},
        {id:3, amount:'7252545533 - Joy John'},
      ])
    const [menu,setMenu]=useState(false)
    let navigate=useNavigate()
    const changeValue=async(e:any)=>{
      setDropDownValue(e.amount)
    }  
    const gotoCrossBorder=()=>{
      navigate('/cross-border-transfer')
    }  
    const transferStepTwo=()=>{
      navigate('/transfer/transfer-step-two')
    }  
    return ( 
        <div className={styles.parent}>
            <div className={styles.gdpDiv}>
                <Marquee className={styles.gdpRow}>
                  <div className={styles.rowMarquee}>
                    <div>GDP/AUD = </div>
                    <div className={styles.gdptext}>1.2334</div>
                    <MdArrowDropDown style={{fontSize:'2em',color:'rgb(173, 34, 34)'}} />
                  </div>
                  <div className={styles.rowMarquee}>
                    <div>GDP/AUD = </div>
                    <div style={{color:'green'}} className={styles.gdptext}>1.2334</div>
                    <MdArrowDropUp style={{fontSize:'2em',color:'green'}} />
                  </div>
                  <div className={styles.rowMarquee}>
                    <div>GDP/AUD = </div>
                    <div className={styles.gdptext}>1.2334</div>
                    <MdArrowDropDown style={{fontSize:'2em',color:'rgb(173, 34, 34)'}} />
                  </div>
                  <div className={styles.rowMarquee}>
                    <div>GDP/AUD = </div>
                    <div style={{color:'green'}} className={styles.gdptext}>1.2334</div>
                    <MdArrowDropUp style={{fontSize:'2em',color:'green'}} />
                  </div>
                  <div className={styles.rowMarquee}>
                    <div>GDP/AUD = </div>
                    <div className={styles.gdptext}>1.2334</div>
                    <MdArrowDropDown style={{fontSize:'2em',color:'rgb(173, 34, 34)'}} />
                  </div>
                  <div className={styles.rowMarquee}>
                    <div>GDP/AUD = </div>
                    <div style={{color:'green'}} className={styles.gdptext}>1.2334</div>
                    <MdArrowDropUp style={{fontSize:'2em',color:'green'}} />
                  </div>
                </Marquee>
            </div>

            <div className={styles.payDiv}>
                <Marquee className={styles.gdpRowTwo}>
                  <div className={styles.rowMarquee}>
                    <div className={styles.pay}>PAY FOR GOODS AND SERVICES</div>
                  </div>
                </Marquee>
                <button onClick={gotoCrossBorder}  className={styles.btnTwo}>Cross-border-transfer</button>
            </div>
            
            
            <div className={styles.boxParent}>
                <div className={styles.box}>
                    <div className={styles.title}>International Bank Of Florida</div>
                    <div  className={styles.title}>Online Banking Transfer</div>

                  <div className={styles.inputParent}>
                    <div className={styles.inputDiv}>
                      <span className={styles.inputTitle}>Select Account</span>
                      <Dropdown  isOpen={menu} toggle={() =>setMenu(!menu)} style={{cursor:'pointer'}} >
                        <DropdownToggle  tag="a" className={styles.dropdownToggle} >
                          <div>{dropDownValue}</div>
                          <div className={styles.dropDownrow}>
                            <div style={{color:'#777E90',}}><MdArrowDropDown style={{fontSize:'2em'}} /></div>
                          </div>
                        </DropdownToggle>
                        <DropdownMenu className={styles.dropBox}>
                          {account.map(amount=>
                            <DropdownItem className={styles.value}  onClick={()=>changeValue(amount)}>{amount.amount} </DropdownItem>
                          )}
                        </DropdownMenu>
                     </Dropdown> 
                    </div>

                    <div className={styles.inputDiv}>
                    <span className={styles.inputTitle}>Amount to transfer</span>
                        <input onChange={e => setAmount(e.target.value)} type='text'  value={amount}  placeholder='Enter amount' className={styles.input}/>
                    </div>
                    <div className={styles.row}>
                       <span className={styles.minValue}>Mininmum:5.00 USD</span>
                       <span className={styles.minValue}>1 USD =1 USD</span>
                    </div>

                    <div className={styles.btnDiv} onClick={transferStepTwo}>
                      <PrimaryButton buttonText='Continue to next step'></PrimaryButton>
                    </div>
                  </div>

                </div>
            </div>
        </div>
     );
}
 
export default Transfer;