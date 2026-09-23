import Album from './Album.jsx'
import { useState } from 'react';
function AlbumB(){
        const albums = [
                {
                        name: "Black Sabbath",
                        year: "1970",
                        image: "https://metalitalia.com/wp-content/uploads/2018/08/Black-Sabbath-Black-Sabbath.jpg",
                        album: "https://open.spotify.com/embed/album/3OmnatFgQ8o1DlYLp9EpNJ"
                },
                {
                        name: "Paranoid",
                        year: "1970",
                        image: "https://m.media-amazon.com/images/I/51G-r0tMSYL._UF1000,1000_QL80_.jpg",
                        album: "https://open.spotify.com/embed/album/7LGVdC9fFwgWYaIrZwsSv6"
                },
                {
                        name: "Master of Reality",
                        year: "1971",
                        image: "https://www.sentireascoltare.com/wp-content/uploads/2017/04/black_sabbath-master_of_reality.jpg",
                        album: "https://open.spotify.com/embed/album/24fNwoIq4NLDf4ARJYAFN9"
                },
                {
                        name: "Vol.4",
                        year: "1972",
                        image: "https://m.media-amazon.com/images/I/81O0PYcuj3L._UF1000,1000_QL80_.jpg",
                        album: "https://open.spotify.com/embed/album/61j7phQkxuKzcoFsi0XtkQ"
                },
                {
                        name: "Sabbath Bloody Sabbath",
                        year: "1973",
                        image: "https://muzikercdn.com/uploads/products/20835/2083562/main_5cf019e3.jpg",
                        album: "https://open.spotify.com/embed/album/6tjx1ACkf4cYyFuhkyqz2A"
                },
                {
                        name: "Sabotage",
                        year: "1975",
                        image: "https://m.media-amazon.com/images/I/71MZlZ-9TOL._UF1000,1000_QL80_.jpg",
                        album: "https://open.spotify.com/embed/album/3VSOzRDe4dNrjcCYEeLz9b"
                },
                {
                        name: "Technical Ecstasy",
                        year: "1976",
                        image: "https://m.media-amazon.com/images/I/51TOIV5wlML._UF1000,1000_QL80_.jpg",
                        album: "https://open.spotify.com/embed/album/6YRSguBqTTkCNMFprOLVo8"
                },
                {
                        name: "Never Say Die!",
                        year: "1978",
                        image: "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwa863dd77/images/4/8/0/5/480551a.jpg?sfrm=png",
                        album: "https://open.spotify.com/embed/album/3L6ss776rbc4BlupPEDOLw?utm_source=generator&si=a3b288fdbe384981"
                },
                {
                        name: "13",
                        year: "2013",
                        image: "https://www.aristocraziawebzine.com/wp-content/uploads/2013/07/black-sabbath-13.jpg",
                        album: "https://open.spotify.com/embed/album/5WXL9YjbNd4GIqWc9mZOOq"
                }
        ];
const [currentAlbum, setCurrentAlbum] = useState(0);
        function nextA() {
                setCurrentAlbum((currentAlbum + 1 + albums.length)% albums.length);
        }
function privA() {
                setCurrentAlbum((currentAlbum - 1 + albums.length) % albums.length);
        }
        const prevIndex = (currentAlbum - 1 + albums.length) % albums.length;
        const nextIndex = (currentAlbum + 1) % albums.length;
        return(
        <section className="albumB">
                <button className="albumNav prev" onClick={privA}
                        title={albums[prevIndex].name}
                        aria-label={`Попередній альбом: ${albums[prevIndex].name}`}>
                        <img src={albums[prevIndex].image} alt="" />
                </button>
                <Album
                    name={albums[currentAlbum].name}
                    year={albums[currentAlbum].year}
                    image={albums[currentAlbum].image}
                    album={albums[currentAlbum].album}
                />
                <button className="albumNav next" onClick={nextA}
                        title={albums[nextIndex].name}
                        aria-label={`Наступний альбом: ${albums[nextIndex].name}`}>
                        <img src={albums[nextIndex].image} alt="" />
                </button>
        </section>
        );
}
export default AlbumB
