function Album ({name, year, image,}){
    return(
        <section className="album">
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <h2>{year}</h2>
            <iframe data-testid="embed-iframe"
                    src="https://open.spotify.com/embed/album/7LGVdC9fFwgWYaIrZwsSv6?utm_source=generator&si=5d1955c2798f43eb"
                    width="100%" height="352" frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
        </section>
    )
}

export default Album
