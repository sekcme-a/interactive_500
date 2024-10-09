'use client'
import Image from "next/image";
import styles from "./page.module.css";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PersonIcon from '@mui/icons-material/Person';

import Header from "@/components/header";
import Share from "./components/share";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <div className={styles.main}>
      <Header />
      <h2>한국 다문화사회로,</h2>
      <h3>{`다문화실패 선언한\n유럽과 주변국 사례탐사`}</h3>

      <div className={styles.main_img}
        onClick={()=>router.push("/effiel")}
      >
        <Image
          src="/effiel.jpg"
          alt="에펠탑"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.buttons_container}>
          <div className={styles.button}>
            <ChatOutlinedIcon
              style={{ color: "rgb(150,150,150)", fontSize: "18px" }}
            />
          </div>
          <div className={styles.button}>
            <PersonIcon
              style={{ color: "rgb(150,150,150)", fontSize: "22px" }}
            />
          </div>
          <div className={styles.button}>
            <Share />
          </div>
        </div>

        <div className={styles.likes_container}>
          <FavoriteIcon style={{ color: "white", fontSize: "1rem" }} />
          <p>2024 Likes</p>
        </div>
      </div>


      <div className={styles.images_container}>
        <div className={styles.sub_img} onClick={()=>router.push("/france")}>
          <Image
            src="/france.jpg"
            alt="프랑스"
            layout="fill"
            objectFit="cover"
          />
          <p>#프랑스 다문화 정책</p>
        </div>
        <div className={styles.sub_img} onClick={()=>router.push("/japan")}>
          <Image
            src="/japan.jpg"
            alt="일본"
            layout="fill"
            objectFit="cover"
          />
          <p>#일본 다문화 정책</p>
        </div>
        <div className={styles.sub_img} onClick={()=>router.push("/korea")}>
          <Image
            src="/ansan.png"
            alt="한국"
            layout="fill"
            objectFit="cover"
          />
          <p>#한국 도시 다문화 정책</p>
        </div>
      </div>


      <p className={styles.thanks}>본 기획물은 한국언론진흥재단의 지원을 받아 제작되었습니다.</p>
      

    </div>
  );
}
