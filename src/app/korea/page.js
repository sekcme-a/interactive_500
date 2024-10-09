import Footer from "@/components/Footer"
import MainBody from "@/components/MainBody"
import Header from "@/components/header"



const Korea = () => {


  return(
    <div style={{position:"relative", height:"100%"}}>
      <Header />

      <MainBody
        images={[
          {image:"/ansan.png", url: "https://www.kmcn.kr/news/article.html?no=6764"},
          {image:"/chungju.png", url: "https://www.kmcn.kr/news/article.html?no=6775"},
        ]}
        text={`일본은 대한민국보다 외국인의 비중이 낮지만 이민정책과 지자체 주도의 다문화정책을 펼치고 있습니다.
어떤 사례가 있을까요?`}
        tags="#일본 #지자체 #다문화정책"
        url="https://www.kmcn.kr/news/article.html?no=6761
"
      />
    
      <Footer />
    </div>
  )
}

export default Korea