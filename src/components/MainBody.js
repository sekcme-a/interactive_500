// MainBody.js
'use client'

import Image from "next/image"
import styles from "./MainBody.module.css"
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from "next/navigation";

const MainBody = ({ images, text, tags, goText, video }) => {
  const router = useRouter()

  const onClick = (url) => {
    if(url.includes("https"))window.open(img.url, '_blank')
    else router.push("/france/minigame")
  }

  const handleVideoClick = (event) => {
    const video = event.currentTarget;

    // Check if the video is already in fullscreen
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      // Request fullscreen on the video element
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
      }
    }
  }
  return (
    <>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {video &&
            <div className={styles.container}>
              <div className={styles.image_container}>
                <video
                  className={styles.video} // Optional: you can add styles for the video
                  src={video} // Assuming img.video contains the URL of the video
                  autoPlay
                  loop
                  // muted
                  playsInline
                  onClick={handleVideoClick}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} // Adjust styles as needed
                />
                <div
                  className={styles.goto_container}
                  onClick={() => router.push("/france/minigame")}
                >
                  <p>{goText}</p>
                  <KeyboardDoubleArrowRightRoundedIcon
                    style={{ fontSize: "40px" }}
                  />
                </div>
              </div>
            </div>
          }
          {!video && images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className={styles.container}>
                <div className={styles.image_container}>
                  <Image
                    src={img.image}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div
                    className={styles.goto_container}
                    onClick={()=>onClick(img.url)}
                  >
                    <p>{goText}</p>
                    <KeyboardDoubleArrowRightRoundedIcon
                      style={{ fontSize: "40px" }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      <h4 className={styles.text}>{text}</h4>
      <h5 className={styles.tags}>{tags}</h5>
    </>
  )
}

export default MainBody
