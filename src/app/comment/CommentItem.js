'use client'


import Image from 'next/image'
import styles from './CommentItem.module.css'
import { useEffect, useState } from 'react'
import Modald from './Modald'

const CommentItem = ({
  data,
  left
}) => {

  const [openModal, setOpenModal] = useState(false)
  const [password, setPassword] = useState("")


  const images=[
    "","001.png", "002.png", "003.png", "004.png"
  ]

  const formatToDateTime = (input) => {
    const date = typeof input === 'string' ? new Date(input) : input;
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  useEffect(()=> {console.log(openModal)}, [openModal])
  useEffect(()=> {console.log(password)}, [password])

  
  if(left)
    return(
  <>
      <div className={styles.main}  onClick={()=>setOpenModal(true)}>
        <div className={styles.img}>
          <Image
            src={`/character/${images[data.selectedCharacter]}`}
            alt="캐릭터"
            layout="fill"
            objectFit='cover'
          />
        </div>
        <div>
          <p className={styles.text}>
            <strong>{data.name} | </strong>{data.comment}
          </p>
          <p className={styles.createdAt}>{formatToDateTime(data.created_at)}</p>
        </div>
      </div>
        {openModal && 
          <Modald onClose={()=>{setOpenModal(false);setPassword("")}} type="password"
            {...{password, setPassword}} commentPw={data.password} id={data.id}
            />
        }
      </>
    )
  else
    return(
  <>
      <div className={styles.main} onClick={()=>setOpenModal(true)}>
        <div>
          <p className={styles.text}>
            <strong>{data.name} | </strong>{data.comment}
          </p>
          <p className={styles.createdAt}>{formatToDateTime(data.created_at)}</p>
        </div>
        <div className={styles.img}>
          <Image
            src={`/character/${images[data.selectedCharacter]}`}
            alt="캐릭터"
            layout="fill"
            objectFit='cover'
          />
        </div>
      </div>
      {openModal && 
          <Modald onClose={()=>{setOpenModal(false);setPassword("")}} type="password"
            {...{password, setPassword}} commentPw={data.password} id={data.id}
            />
        }
    </>
  )
}
export default CommentItem