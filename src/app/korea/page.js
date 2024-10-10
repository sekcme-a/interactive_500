import Footer from "@/components/Footer"
import MainBody from "@/components/MainBody"
import Header from "@/components/header"



const Korea = () => {


  return(
    <div style={{position:"relative", height:"100%"}}>
      <Header />

      <MainBody
      goText="관련 기사 바로가기"
        images={[
          {image:"/ansan.png", url: "https://www.kmcn.kr/news/article.html?no=6764"},
          {image:"/chungju.png", url: "https://www.kmcn.kr/news/article.html?no=6775"},
        ]}
        text={`다문화사회로 접어든 대한민국의 도시들은 어떻게 다문화 사회를 준비하고 있을까요?
또 이민청 설치와 유치는 어떤 지자체에 하게 될까요?`}
        tags="#대한민국 #다문화정책 #이민청"
      />
    
      <Footer />
    </div>
  )
}

export default Korea