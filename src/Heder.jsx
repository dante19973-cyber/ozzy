import './heder.css'
function Heder(){
    return (
        <header>
            <div>
                <ul>
                    <li><a href="#home">Головна</a></li>
                    <li><a href="#life">Життєвий шлях</a></li>
                    <li className="burger">
                        <span className="burgerName">Групи</span>
                        <ul className="burgerList">
                            <li><a href="#blackS">Black Sabbath</a></li>
                            <li><a href="#ozzyO">Ozzy Osbourne</a></li>
                        </ul>
                    </li>
                    <li className="burger">
                        <span className="burgerName">Альбоми</span>
                        <ul className="burgerList">
                            <li><a href="#albumB">Black Sabbath</a></li>
                            <li><a href="#albumO">Ozzy Osbourne</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Heder