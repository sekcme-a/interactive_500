'use client'

import Header from "@/components/header"

import styles from "./page.module.css"
import Image from "next/image"
import Footer from "@/components/Footer"


import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { useRouter } from "next/navigation"

const Credit = () => {

  const router = useRouter()

  return(
    <div style={{height:"100vh"}}>
      <Header />
      
      <div className={styles.top}>
        <div className={styles.img}>
          <Image
            src="/effiel.jpg"
            alt="에펠탑"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.buttons}>
          <div className={styles.button} onClick={()=>router.back()}>
            <div className={styles.back} >
              <ReplyRoundedIcon 
                style={{color:"white",fontSize:"36px"}}
              />
            </div>
            <p>뒤로가기</p>
          </div>
          <div className={styles.button} onClick={()=>router.push("/")}>
          
              <HomeRoundedIcon 
                style={{fontSize:"36px"}}
              />
            <p>메인이동</p>
          </div>
          <div className={styles.button} onClick={()=>router.push("/comment")}>
          
              <ChatOutlinedIcon
                style={{fontSize:"36px"}}
              />
            <p>댓글달기</p>
          </div>


        </div>
      </div>

      <h3 className={styles.text}>
      한국다문화뉴스 ‘한국 다문화사회로, 다문화 실패 선언한 유럽과 주변국 사례 탐사’ 보도는 정부광고 수수료로 조성된 언론진흥기금의 지원을 받았습니다.
      </h3>

      <h4 className={styles.url} onClick={()=>window.open("https://www.kmcn.kr", "_blank")}>
        www.kmcn.kr
      </h4>

      <h5 className={styles.who_text}>만든 사람들</h5>

      <div className={styles.profile_container}>
        <div className={styles.profile}>
          <div className={styles.profile_img}>
            <Image
              src="/credit/1.jpg"
              alt="강성혁 기자"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p>강성혁 기자</p>
          <p>dealyness</p>
          <p>@naver.com</p>
        </div>
        <div className={styles.profile}>
          <div className={styles.profile_img}>
            <Image
              src="/credit/2.jpg"
              alt="김관섭 기자"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p>김관섭 기자</p>
          <p>subsub8531</p>
          <p>@naver.com</p>
        </div>
        <div className={styles.profile}>
          <div className={styles.profile_img}>
            <Image
              src="/credit/3.jpg"
              alt="소해련 기자"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p>소해련 기자</p>
          <p>shryun210</p>
          <p>@naver.com</p>
        </div>
      </div>

      {/* <Footer /> */}
      <p className={styles.thanks}>본 기획물은 한국언론진흥재단의 지원을 받아 제작되었습니다.</p>
      
    </div>
  )
}

export default Credit