import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main_container}>
      <div>
        <Image
          src={"/img.jpeg"}
          alt="메인페이지"
          layout="fill"
          objectFit="contain"

        />
      </div>
    </div>
  );
}
