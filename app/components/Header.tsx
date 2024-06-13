import { notoSansMono } from "../layout";
import NavMenu from "../components/NavMenu";

export default function Header() {
    return (
        <header>
          <h1 className={notoSansMono.className}>{`<DJPJ>`}</h1>
          <NavMenu />
        </header>
    );
}