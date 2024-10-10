import Footer from "@/components/Footer"
import MainBody from "@/components/MainBody"
import Header from "@/components/header"



const France = () => {


  return(
    <div style={{position:"relative", height:"100%"}}>
      <Header />

      <MainBody
        goText="관련 기사 바로가기"
        images={[
          {image: "/france.jpg", url: "https://www.kmcn.kr/news/article.html?no=6759"}
        ]}
        text={`프랑스는 이주민 소수의 문화가 선주민 주류 문화에 동화하도록 다문화, 이민정책을 펼치고 있습니다.\n프랑스인들은 다문화에 어떤 생각을 갖고 있을까요?`}
        tags="#프랑스 #동화주의 #다문화인식"
      />
    
      <Footer />
    </div>
  )
}

export default France