function Album ({name, year, image,album}){
    return(
        <section className="album">
            <h1>{name}</h1>
            <img src={image} alt={name}/>
            <h2>{year}</h2>
            <iframe data-testid="embed-iframe"
                    src={album}
                    width="90%" height="152" frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
        </section>
    )
}

export default Album