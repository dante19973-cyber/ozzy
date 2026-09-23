import { useState } from 'react';
import Album from './Album.jsx';
function AlbumO() {
        const albums = [
                {
                        name: "Blizzard of Ozz",
                        year: "1981",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT392UPBkG53mxgkcqrkx5gfeFJG-ccK8TrdXod0AZu6uTNq8jlF9tnVRtZ&s=10",
                        album: "https://open.spotify.com/embed/album/4qUMByJ3Pk94BFnCmGaUPS"
                },
                {
                        name: "Diary of a Madman",
                        year: "1980",
                        image: "https://m.media-amazon.com/images/I/81aW6KIEtKL._UF1000,1000_QL80_.jpg",
                        album: "https://open.spotify.com/embed/album/4xiRrFE0Gq4Si9mAfPB3hZ?utm_source=generator&si=f6edd7cffc7e4e8d"
                },
                {
                        name: "Bark at the Moon",
                        year: "1983",
                        image: "https://i.scdn.co/image/ab67616d0000b273bd43d0ba8cb7863da40cba8b",
                        album: "https://open.spotify.com/embed/album/537qKeG5gbEvKJpQ4Qmszn?utm_source=generator&si=12943e34244143f7"
                },
                {
                        name: "The Ultimate Sin",
                        year: "1986",
                        image: "https://i.scdn.co/image/ab67616d0000b273ca110425c6233c263beb0a4f",
                        album: "https://open.spotify.com/embed/album/2IPIumpbhrtBvjyzIgGE9j"
                },
                {
                        name: "No Rest for the Wicked",
                        year: "1988",
                        image: "https://uk.rarevinyl.com/cdn/shop/products/ozzy-osbourne-no-rest-for-the-wicked-ex-uk-vinyl-lp-album-record-462581-607988.jpg?v=1706236165",
                        album: "https://open.spotify.com/embed/album/0gkILbwcOoXEb8D4aRptez"
                },
                {
                        name: "No More Tears",
                        year: "1991",
                        image: "https://i.scdn.co/image/ab67616d0000b273c898e0e6b49f7f2f4b94d392",
                        album: "https://open.spotify.com/embed/album/6eh82ojicL8RSJF7GkYTh7"
                },
                {
                        name: "Ozzmosis",
                        year: "1995",
                        image: "https://upload.wikimedia.org/wikipedia/en/b/b7/Ozzy_-_Ozzmosis_Cover.jpg",
                        album: "https://open.spotify.com/embed/album/5m8Fj0thHTE4CBGJTdF6s9"
                },
                {
                        name: "Down to Earth",
                        year: "2001",
                        image: "https://m.media-amazon.com/images/I/81Rt+n40XnL._UF1000,1000_QL80_.jpg",
                        album: "https://open.spotify.com/embed/album/35FSH5VP6Om7kBFtGn25wm"
                },
                {
                        name: "Black Rain",
                        year: "2007",
                        image: "https://m.media-amazon.com/images/I/81sj-VY5C6L._UF1000,1000_QL80_.jpg",
                        album: "https://open.spotify.com/embed/album/6wiS0vTk9GfsiUKJEOav8Z?utm_source=generator&si=1ab4268905f74ae3"
                },
                {
                        name: "Scream",
                        year: "2010",
                        image: "https://m.media-amazon.com/images/I/81BajhmRiML._UF1000,1000_QL80_.jpg",
                        album: "https://open.spotify.com/embed/album/72OTYgFKqc6ALaGfXZQUWM"
                },
                {
                        name: "Ordinary Man",
                        year: "2020",
                        image: "https://i.scdn.co/image/ab67616d0000b27394cb9ac2de0aec1d2fa9ee90",
                        album: "https://open.spotify.com/embed/album/2x2cG56QicVfymWnRF0Nmj"
                },
                {
                        name: "Patient Number 9",
                        year: "2022",
                        image: "https://duffmckagan.com/wp-content/uploads/2023/05/Patient-Number-9-Art.jpg",
                        album: "https://open.spotify.com/embed/album/4u1LXToDGOdhDDf4c9zeqb"
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
            <section className="albumO">
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
export default AlbumO;