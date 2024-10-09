import styles from "./Footer.module.css"


import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';

const Footer = () => {

  return(
    <>
        <div className={styles.container}>
          <div className={styles.back}>
            <ReplyRoundedIcon 
              style={{color:"white", }}
            />
          </div>

          <HomeRoundedIcon
            style={{fontSize:"35px"}}
          />

          <ChatOutlinedIcon
            style={{fontSize:"35px"}}
          />


          <Person2RoundedIcon 
            style={{fontSize:"35px"}}
          />
 <p className={styles.thanks}>본 기획물은 한국언론진흥재단의 지원을 받아 제작되었습니다</p>
        </div>
      
         </>
  )
}

export default Footer