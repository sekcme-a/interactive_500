'use client'

import styles from "./Footer.module.css"


import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import { useRouter } from "next/navigation";

const Footer = ({noMargin}) => {
  const router = useRouter()

  return(
    <>
        <div className={styles.container} style={noMargin ? {marginTop: "20px" }: {}} >
          <div className={styles.back} onClick={()=>router.back()}>
            <ReplyRoundedIcon 
              style={{color:"white",}}
            />
          </div>

          <HomeRoundedIcon
            style={{fontSize:"35px", cursor:"pointer"}}
            onClick={()=>router.push("/")}
          />

          <ChatOutlinedIcon
            style={{fontSize:"35px", cursor:"pointer"}}
            onClick={()=>router.push("/comment")}
          />


          <Person2RoundedIcon 
            style={{fontSize:"35px", cursor:"pointer"}}
            onClick={()=>router.push("/credit")}
          />
 <p className={styles.thanks}>본 기획물은 한국언론진흥재단의 지원을 받아 제작되었습니다</p>
        </div>
      
         </>
  )
}

export default Footer