// MainBody.js
'use client'

import { useEffect, useState } from "react";
import Image from "next/image"
import styles from "./MainBody.module.css"
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from "next/navigation";

const MainBody = ({ images, text, tags, goText, video }) => {
  const router = useRouter();
  const [isIphone, setIsIphone] = useState(false);

  const [showControl, setShowControl] = useState(false)

  // Detect if the device is an iPhone
  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      setIsIphone(/iPhone/i.test(userAgent));
    }
  }, []);

  const onClick = (url) => {
    if(url.includes("https")) window.open(url, '_blank');
    else router.push("/france/minigame");
  }

  const handleVideoClick = (event) => {
    if (isIphone) {
      if(!showControl)setShowControl(true)
      // On iPhone, do not handle the click to allow default video player behavior
      return;
    }

    const videoElement = event.currentTarget;

    // Check if the video is already in fullscreen
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      // Request fullscreen on the video element
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) { // Firefox
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) { // IE/Edge
        videoElement.msRequestFullscreen();
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
          <SwiperSlide key="video-slide">
            <div className={styles.container}>
              <div className={styles.image_container}>
                <video
                  className={styles.video} // Optional: you can add styles for the video
                  src={video} // Assuming img.video contains the URL of the video
                  autoPlay
                  loop
                  muted={isIphone} // Mute only if it's an iPhone
                  playsInline
                  onClick={handleVideoClick}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} // Adjust styles as needed
                  controls={isIphone && showControl} // Show controls on non-iPhone devices
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
          </SwiperSlide>
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
                  onClick={() => onClick(img.url)}
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
