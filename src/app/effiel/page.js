import Footer from "@/components/Footer"
import MainBody from "@/components/MainBody"
import Header from "@/components/header"



const Effiel = () => {

  return(
    <div style={{position:"relative", height:"100%"}}>
      <Header />
      
      <MainBody 
        text="전체 인구 대비 외국인 비율이 5% 이상일 경우 다인종·다문화 국가로 분류됩니다. 한국은 다문화 사회에 어떻게 대비해야 할까요?"
        tags="#다문화사회 #대한민국 #프랑스 #일본 #사례"
        images={[
          {image:"/effiel.jpg", url:""}
        ]}
      />

      <Footer />
    </div>
  )
}

export default Effiel