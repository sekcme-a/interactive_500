'use client'
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';
import styles from "./share.module.css"

const Share = () => {



  const [shareMessage, setShareMessage] = useState('');

  const onShareClick = async () => {
    
    if (typeof navigator !== 'undefined') { // 클라이언트 사이드에서만 실행
      const shareData = {
        title: document.title,
        text: '이 페이지를 확인해보세요:',
        url: window.location.href,
      };
      
      if (navigator.share) {
          await navigator.share(shareData);
          setShareMessage('링크가 성공적으로 공유되었습니다!');

      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        setShareMessage('링크가 클립보드에 복사되었습니다!');
      } else {
        // 브라우저가 공유 및 클립보드 API를 지원하지 않을 경우
        try {
          const tempInput = document.createElement('input');
          tempInput.value = shareData.url;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
          setShareMessage('링크가 클립보드에 복사되었습니다!');
        } catch (error) {
          console.error('클립보드 복사 실패:', error);
          setShareMessage('링크 복사에 실패했습니다.');
        }
      }

      // 메시지를 일정 시간 후에 초기화
      setTimeout(() => {
        setShareMessage('');
      }, 3000);
    } else {
      setShareMessage('공유 기능을 사용할 수 없습니다.');
    }
  };


  return(
    <>
    <div className={styles.share} onClick={onShareClick}>
      <ShareIcon
        style={{ color: "rgb(150,150,150)", fontSize: "18px" }}
      />
    </div>

          {/* 공유 메시지 표시 */}
          {shareMessage && (
        <div className={styles.share_container}>
          <div className={styles.share_message}>
            {shareMessage}
          </div>
        </div>
      )}
    </>
  )
}

export default Share