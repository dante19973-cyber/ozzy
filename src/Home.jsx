import hero from "./assets/hero.webp"
function Home() {
    return (
        <section className="home">
            <h1>Принц Темряви</h1>
            <img src={hero} alt="hero" />
            <h2>Ozzy Osbourne</h2>
            <p>Легендарний британський рок-виконавець, музикант і композитор, якого у всьому світі знають як <strong>«Принца Темряви»</strong> та <strong>«Хресного батька хеві-металу»</strong>.</p>
        </section>
    )
}
export default Home