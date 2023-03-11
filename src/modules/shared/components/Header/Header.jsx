import { HeaderStyle } from "./Header.Style";
import logo from "./images/logo.png";
import carrinho from "./images/carrinho.png";
import search from "./images/Search.svg";

export const Header = () => {
  return (
    <HeaderStyle>
        <section>
            <div className="nav-main">
                <div className="header-top">
                    <div className="logo-container">
                        <img
                            className="logo-dc"
                            width={33}
                            height={33}
                            src={logo}
                            alt={"logo"}
                        />

                        <p className="digital-store-p">
                            Digital Store
                        </p>
                    </div>

                    <div className="search-bar">

                        <input
                            className="search-input"
                            type="text"
                            placeholder="Pesquisar produto..."
                        />

                        <img
                            className="search-icon"
                            width={17}
                            height={17}
                            src={search}
                            alt={search}
                        />

                    </div>

                    <p className="link-cadastrar">
                        Cadastre-se
                    </p>
                    <button>
                        Entrar
                    </button>
                    <img
                        className="carrinho"
                        width={33}
                        height={29}
                        src={carrinho}
                        alt={"carrinho"}
                    />
                </div>

                <div className="nav-bar">
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Produtos</li>
                            <li>Categorias</li>
                            <li>Meus Pedidos</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    </HeaderStyle>
  );
};
