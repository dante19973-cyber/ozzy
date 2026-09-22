import BS from "./assets/BS.jpg";
function BlackS() {
    return (
    <section className="blackS">
        <img src={BS} alt="blackS" />
        <h1>Black Sabbath</h1>
        <p><strong>Black Sabbath </strong> — це легендарний британський важкий метал-гурт, створений у Бірмінгемі в 1968 році. Вони загальновизнані як засновники самого жанру heavy metal, а також першопрохідці, які вплинули на появу думу, стоунеру та сладж-металу.</p>
        <p>Гурт продав понад 100 мільйонів альбомів у всьому світі та був включений до Зали слави рок-н-ролу в 2006 році.</p>
        <h2>Включення до залу слави</h2>
        <iframe className="HollBS" src="https://www.youtube.com/embed/4Iea0UCkMZw" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        <section className="blackS-list">
            <h2>Участники гурту</h2>
            <ul className="blackS-list">
                <li><strong>Тоні Айоммі: </strong>Гітарист, лідер та беззаперечний стовп гурту. Єдиний музикант, який залишався в Black Sabbath протягом усієї історії. Його похмурі, важкі рифи через травму пальців визначили фірмовий звук металу.</li>
                <li><strong>Оззі Осборн: </strong>Оригінальний фронтмен із неймовірною харизмою. Його пронизливий і театральний вокал став візитівкою перших восьми, найважливіших альбомів гурту.</li>
                <li><strong>Ґізер Батлер: </strong>Басист і автор більшості текстів гурту (на тему окультизму, наукової фантастики та соціальних проблем). Він одним із перших почав використовувати ефект дисторшн на бас-гітарі.</li>
                <li><strong>Білл Ворд: </strong>Оригінальний барабанщик, чий потужний стиль із відчутним впливом джазу додав першим релізам гурту унікальної динаміки.</li>
            </ul>
        </section>
    </section>
    )
}
export default BlackS
