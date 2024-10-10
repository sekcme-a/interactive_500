// MainBody.js
'use client'

import Image from "next/image"
import styles from "./MainBody.module.css"
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from "next/navigation";

const MainBody = ({ images, text, tags, goText }) => {
  const router = useRouter()

  const onClick = (url) => {
    if(url.includes("https"))window.open(img.url, '_blank')
    else router.push("/france/minigame")
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
          {images.map((img, index) => (
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
