'use client'

import Image from "next/image";
import styles from "./header.module.css";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from "next/navigation";



const Header = () => {
  const router = useRouter()

  return(
    <div className={styles.header}>
      <ArrowBackIosIcon 
        style={{fontSize: "20px", cursor:"pointer"}}
        onClick={() => router.back()}
      />
      <h1>2024 기획취재</h1>
      <MoreVertIcon style={{fontSize: "22px"}}/>
    </div>
  )
}
export default Header