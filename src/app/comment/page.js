'use client'

import Footer from "@/components/Footer"
import Header from "@/components/header"

import styles from "./page.module.css"
import CommentItem from "./CommentItem"
import Image from "next/image"
import { useEffect, useState } from "react"
import { supabase } from "@/components/supabase"
import Modald from "./Modald"

const Comment = () => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    const fetchData = async () => {
      const {data} = await supabase.from("z_interactive").select("*").order("created_at", {ascending: false})
      setComments(data)
      setLoading(false)
    }

    fetchData()
  },[])

  const [selectedCharacter, setSelectedCharacter] = useState(1)
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [password, setPassword] = useState("")

  const [uploading, setUploading] = useState(false)
  const [openSuccessModal, setOpenSuccessModal] = useState(false)


  const onSendClick = async () => {
    setUploading(true)
    if(name.length>10) alert("이름은 10글자 이내여야합니다.")
    else if(password.length>20) alert("비밀번호는 20글자 이내여야 합니다.")
    else if(comment.length>200) alert("의견은 200글자 이내여야 합니다.")
    else {
      const {data, error} = await supabase.from("z_interactive").insert({
        name, password, comment, selectedCharacter
      })
      if(error) alert("알수없는 오류로 의견을 남기실 수 없습니다.")
      else{
        setOpenSuccessModal(true)
        setComments(prev => ([{name, password, comment, selectedCharacter, created_at: new Date()},...prev]))
        setName("")
        setPassword("")
        setSelectedCharacter(1)
        setComment("")
        
      }
    }

    setUploading(false)
    

  }


  return(
    <div>
      <Header />

      <div className={styles.comments}>
      {loading && <p className={styles.loader}>의견을 받아오는 중입니다..</p>}
        {
          comments.map((item, index) => {
            return(
              <div key={index}>
                <CommentItem data={item} left={index%2===0}/>
              </div>
            )
          })
        }
      </div>

      <div className={styles.seperator}>
        <p>의견 남기기</p>
        <div className={styles.line} />
      </div>

      <div className={styles.select_character}>
        {[1,2,3,4].map((item, index) => (
          <div className={`${styles.img} ${item===selectedCharacter && styles.selected}`} key={index}
            onClick={()=>setSelectedCharacter(item)}
          >
            <Image
              src={`/character/00${item}.png`}
              alt="캐릭터"
              layout="fill"
              objectFit='cover'
            />
          </div>
        ))}
      </div>

      <div className={styles.textinput}>
        <p>{`이름 (닉네임)`}</p>
        <input
          className={styles.input}
          onChange={(e) => {if(e.target.value.length<10) setName(e.target.value)}}
          value={name}
        />
      </div>
      <div className={styles.textinput} style={{marginBottom:"2px"}}>
        <p>{`비밀번호`}</p>
        <input
                className={styles.input}
          onChange={(e) => {if(e.target.value.length<20) setPassword(e.target.value)}}
          value={password}
        />
      </div>
      <p style={{fontSize:".7rem", marginBottom:"10px", marginLeft:"10px"}}>*자신이 작성한 의견을 삭제할 때 사용됩니다.</p>
      <div className={styles.textinput}>
        <p>{`의견 입력`}</p>
        <textarea
                className={styles.input}
          onChange={(e) => {if(e.target.value.length<200) setComment(e.target.value)}}
          value={comment}
          style={{height:"3rem"}}
        />
      </div>

      <div className={`${styles.send_button} ${uploading && styles.disabled}`} onClick={onSendClick}>
        <p>의견 남기기</p>
      </div>

      <Footer />
    

      {openSuccessModal &&
        <Modald onClose={()=>setOpenSuccessModal(false)} type="success"/>
      }
    
    </div>
  )
}

export default Comment