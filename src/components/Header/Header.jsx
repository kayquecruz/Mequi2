import app from "../../assets/app1.png"
import celapp from "../../assets/app.png"
import * as S from "./header_styled"

export default function Header() {
  return (
    <S.Header>
            <S.App>
                <img src={app} alt="" />
                <p>Baixe o App</p>
            </S.App> 
        <S.BtnApp>
                <p>Peça seu Méqui</p>
                <img src={celapp} alt="" />
        </S.BtnApp>
    </S.Header>
  )
}
