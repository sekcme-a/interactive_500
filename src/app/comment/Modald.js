'use client'

import { useState } from "react";
import styles from "./Modald.module.css";
import { supabase } from "@/components/supabase";
import { useRouter } from "next/navigation";

const Modald = ({ onClose, type, password, setPassword, commentPw , id}) => {
  const [deleteConfirmPage, setDeleteConfirmPage] = useState(false)
  const [wrongPw, setWrongPw] = useState(false)
  const [deleting, setDeleting] = useState(false)
const router = useRouter()

  const onConfirmClick = () => {
    if(commentPw===password){
      setDeleteConfirmPage(true)
      setPassword("")
    } else {
      setWrongPw(true)
    }
  }

  const onDeleteClick = async () => {
    setDeleting(true)
    const {data} = await supabase.from("z_interactive").delete().eq("id", id)
    setDeleting(false)
    alert("의견이 삭제되었습니다.")
    window.location.reload()
  }

  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        {
          type==="password" && 
          <>
          {deleteConfirmPage ? 
          <>
            <p>댓글을 삭제하시겠습니까?</p>
            <button onClick={onClose} style={{backgroundColor:"rgb(200,200,200)", color:"black"}}>취소</button>
            <button disabled={deleting} style={{marginTop:"5px"}} onClick={onDeleteClick}>삭제</button>
          </>
          :
          <>
            <p>댓글을 삭제하시려면 비밀번호를 입력해주세요.</p>
            <input value={password} onChange={(e) => {setWrongPw(false);setPassword(e.target.value)}}/>
            {wrongPw && <p style={{fontSize:".7rem"}}>비밀번호가 틀렸습니다.</p>}
            <button onClick={onClose} style={{backgroundColor:"rgb(200,200,200)", color:"black"}}>취소</button>
            <button style={{marginTop:"5px"}} onClick={onConfirmClick}>확인</button>
          </>}</>
        }
        {type==="success" &&
          <>
            <p>{`성공적으로 의견이 업로드되었습니다. \n의견을 내주셔서 감사합니다.`}</p>
            <button onClick={onClose} className={styles.button}>확 인</button>
          </>
        }
      </div>
    </div>
  );
};

export default Modald;
