import styles from './css/transfer.module.scss';
import { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import  Cancel from "../../assets/cancel.svg";
import Marquee from "react-fast-marquee";
import { MdArrowDropDown,MdArrowDropUp } from 'react-icons/md';
import { DropdownItem, DropdownMenu, DropdownToggle,Dropdown, Modal, ModalBody } from 'reactstrap';
import { PrimaryButton } from '../../shared/fonts/buttons/button';
import { BsInfoCircle } from 'react-icons/bs';
const TransferStepTwo = () => {
    const [dropDownValue,setDropDownValue]=useState('Select a bank to transfer')
    const [amount,setAmount]=useState('')
    const [account,setAccount]=useState([
        {id:1, amount:'Accesss Bank'},
        {id:2, amount:'GTB'},
        {id:3, amount:'Sterling'},
        {id:3, amount:'FCMB'},
        {id:3, amount:'OPay'},
        {id:3, amount:'Providus'},
        {id:3, amount:'Zenith'},
      ])
    const [menu,setMenu]=useState(false)
    const [modal,setModal]=useState(false)
    const changeValue=async(e:any)=>{
      setDropDownValue(e.amount)
    }    
    const toggle = () => {
      setModal(!modal);
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

            
            <div className={styles.boxParent}>
                <div className={styles.box}>
                    <div className={styles.title}>International Bank Of Florida</div>
                    <div  className={styles.title}>Online Banking Transfer</div>

                  <div className={styles.inputParent}>
                    <div className={styles.transferAmount}>AMOUNT TO TRANSFER:6,000 USD</div>
                    <div className={styles.inputDiv}>
                      <span className={styles.inputTitle}>Select Bank</span>
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

                    <div className={styles.row}>
                       <div className={styles.inputDivTwo}>
                          <span className={styles.inputTitle}>Routing number</span>
                          <div style={{width:'95%'}}>
                            <input onChange={e => setAmount(e.target.value)} type='text'  value={amount}  placeholder='Routing number' className={styles.inputHalf}/>
                          </div>
                       </div>

                       <div className={styles.inputDivTwo}>
                          <span className={styles.inputTitle}>Account number</span>
                          <div>
                            <input onChange={e => setAmount(e.target.value)} type='text'  value={amount}  placeholder='Account number' className={styles.inputHalf}/>
                          </div>
                       </div>
                    </div>

                    <div className={styles.inputDiv}>
                        <span className={styles.inputTitle}>Amount name</span>
                        <input onChange={e => setAmount(e.target.value)} type='text'  value={amount}  placeholder='Beneficiary name' className={styles.input}/>
                    </div>

                    <div className={styles.inputDiv}>
                        <span className={styles.inputTitle}>Transaction Description(Optional)</span>
                        <input onChange={e => setAmount(e.target.value)} type='text'  value={amount}  placeholder='Enter amount' className={styles.input}/>
                    </div>
                   

                    <div className={styles.btnDiv} onClick={toggle}>
                      <PrimaryButton buttonText='Continue to next step'></PrimaryButton>
                    </div>
                    <div className={styles.editBtnDiv}>
                      <button className={styles.editBtn}><BiEdit/>Edit</button>
                    </div>


                    <Modal isOpen={modal} toggle={toggle} size="lg" className={styles.modalParent}>
                    <div className={styles.cancelDiv}><img src={Cancel} className={styles.cancelIcon} alt="horse" /></div>
                      <ModalBody className={styles.modalContent}>
                       <div className={styles.modalTitle}>Review Transaction</div>
                       <div className={styles.modalDesc}>Kindly review the transaction before proceeding</div>
        

                       <div className={styles.boxBorder}>
                        <div>
                        <div className={styles.invoiceRow}>
                          <div className={styles.paragraph}><BsInfoCircle className={styles.infoIcon}/>Amount</div>
                          <div className={styles.paragraph}>USD 2,000</div>
                        </div>
                        <div className={styles.invoiceborderLine}/>
                        </div>

                        <div>
                        <div className={styles.invoiceRow}>
                          <div className={styles.paragraph}><BsInfoCircle className={styles.infoIcon}/>Bank name</div>
                          <div className={styles.paragraph}>First national bank of south padre</div>
                        </div>
                        <div className={styles.invoiceborderLine}/>
                        </div>

                        <div>
                        <div className={styles.invoiceRow}>
                          <div className={styles.paragraph}><BsInfoCircle className={styles.infoIcon}/>Routing number</div>
                          <div className={styles.paragraph}>46473983948</div>
                        </div>
                        <div className={styles.invoiceborderLine}/>
                        </div>

                        <div>
                        <div className={styles.invoiceRow}>
                          <div className={styles.paragraph}><BsInfoCircle className={styles.infoIcon}/>Account number</div>
                          <div className={styles.paragraph}>72526536676</div>
                        </div>
                        <div className={styles.invoiceborderLine}/>
                        </div>

                        <div>
                        <div className={styles.invoiceRow}>
                          <div className={styles.paragraph}><BsInfoCircle className={styles.infoIcon}/>Account holder</div>
                          <div className={styles.paragraph}>Jon Bull</div>
                        </div>
                        <div className={styles.invoiceborderLine}/>
                        </div>     
                       </div>
                       
                       <div className={styles.receiptBtnDiv}>
                         <PrimaryButton buttonText='Continue transaction'></PrimaryButton>
                        </div>
                     </ModalBody>
                   </Modal>
                  </div>

                </div>
            </div>
        </div>
     );
}
 
export default TransferStepTwo;