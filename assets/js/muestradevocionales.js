import getDevocionales from "./getDevocionales.js";
const d = document;

export default function muestradevocionales(paramUrl) {
    // paramUrl viene de app.js
    const url = paramUrl;
    d.addEventListener("DOMContentLoaded", async (e) => {
        // d.getElementById("secciondevocionales").innerHTML = "No hay datos o error en la consulta con la base de datos";
        const devocionales = await getDevocionales(url);
        let cont = ``;
        let video1 = ``;
        let bandera=0;
        for(let d of devocionales){
            if(bandera>0){
                cont += `
                <article>
                    <div class="container__article">
                        <div class="text__title">${d.titulo}</div>
                        <iframe width="350" height="184" src="https://www.youtube.com/embed/${d.idVideo}" title="YouTube video player" showsearch=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </article>
                `;
            }
            
            if(bandera==0){
                video1 += `
                <article>
                    <div class="container__article">
                        <div class="text__title">${d.titulo}</div>
                        <iframe width="350" height="190" src="https://www.youtube.com/embed/${d.idVideo}" title="YouTube video player" showsearch=0 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="hero__link"><a href="#secciondevocionales">👉 Pulsa para más devocionales</a></div>
                    
                </article>
                `;
                bandera += 1;
            }
        }

        d.getElementById("secciondevocionales").innerHTML = cont;
        d.getElementById("hero__video").innerHTML = video1;
    })
}