import * as S from "./footer_styled";
import Logo from "./Logo.png";
import googleplay from "../../assets/googleplay.png";
import AppStore from "../../assets/AppStore.png";


export default function Footer() {
  return (
    <S.Footer>
      <img src={Logo} alt="" />
      <S.RightContent>
        <img src={googleplay} alt="" />
        <img src={AppStore} alt="" />
      </S.RightContent>
    </S.Footer>
  );
}
