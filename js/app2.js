const version = "0.6",
    secciones = [],
    data = {},
    rutas = { bandas: "data/bandas.json" },
    datetimeinicio = new Date("2020-02-07T19:00:00-03:00"),
    contador = document.querySelector(".cuenta");
console.log("Iniciando v0.6"),
    console.log("¿Querés saber cómo está hecha esta página? Estudiá todo lo que quieras, pariente. Sin frameworks");
let sectionels = Array.from(document.getElementsByTagName("section"));
sectionels.forEach(e => secciones.push(e.id)), createBandas();
let ubicacion = location.hash.substr(1),
    saneada = returnSection(ubicacion);
if (ubicacion != saneada)
    console.log(`Cambiando ${ubicacion} por ${saneada}`),
        goToRoute(saneada);
else if (saneada.indexOf("bandas/") > -1) {
    let e = saneada.split("/")[1];
    document.getElementById(saneada) || crearPerfil(e)
}

function returnSection(e) {
    let n = secciones.filter(n => n == e);
    return e = n.length > 0 ? e : "inicio"
}


function goToRoute(e) {
    e = returnSection(e), location.replace(`#${e}`)
}

async function crearPerfil(e) {
    const n = document.getElementById("tplInnerBanda").content.cloneNode(!0),
        a = n.querySelector("section"),
        t = n.querySelector("h3"), i = n.querySelector(".article-principal"),
        o = n.querySelector(".article-video"),
        r = n.querySelector(".article-social");

    a.id = `bandas/${e}`,
        a.style.backgroundImage = `url(../img2020/bandas/${e}/foto.png)`,
        t.innerHTML = data.bandas[e].name,
        t.style.content = `url(../img2020/bandas/${e}/logo.png)`,
        i.querySelector("h2").innerHTML = data.bandas[e].name;
    const d = await fetch(`../data/${e}/profile.json`).then(e => e.json());
    null != d.social && d.social.forEach(e => {
        const n = document.createElement("a");
        n.href = e, n.target = "_blank", e.indexOf("facebook") > -1 ? (n.innerHTML = '<i class="icon-facebook"></i>Facebook', n.alt = "Facebook") : e.indexOf("instagram") > -1 ? (n.innerHTML = '<i class="icon-instagram"></i>Instagram', n.alt = "Instagram") : e.indexOf("bandcamp") > -1 ? (n.innerHTML = '<i class="icon-bandcamp"></i>Bandcamp', n.alt = "Bandcamp") : e.indexOf("soundclou") > -1 ? (n.innerHTML = '<i class="icon-soundcloud"></i>Soundcloud', n.alt = "Soundcloud") : e.indexOf("youtube") > -1 ? (n.innerHTML = '<i class="icon-youtube"></i>YouTube', n.alt = "YouTube") : e.indexOf("spoti") > -1 ? (n.innerHTML = '<i class="icon-spotify"></i>Spotify', n.alt = "Spotify") : (n.innerHTML = '<i class="icon-home"></i>Sitio oficial', n.alt = "Sitio oficial"), r.appendChild(n)
    }), d.description.split("\n").forEach(e => { const n = document.createElement("p"); n.innerHTML = e, i.appendChild(n) }); let c = document.createElement("p"), s = new Date(data.bandas[e].event); c.innerHTML = `${data.bandas[e].name} estará tocando en el Carnival Fest Paysandú el día\n    <a href="#programa" alt="Ver actividades"><time datetime="${data.bandas[e].event}">${s.toLocaleString("es-UY", { weekday: "long", day: "numeric" })} a las ${s.toLocaleString("es-UY", { hour: "numeric", minute: "numeric" })}</time></a>\n    ¡No te lo pierdas!`, i.appendChild(c), null != d.video && -1 == d.video.indexOf("facebook") ? o.innerHTML = `<iframe\n        width="560"\n        height="315"\n        src="https://www.youtube-nocookie.com/embed/${d.video}?rel=0"\n        frameborder="0"\n        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\n        allowfullscreen></iframe>` : o.classList.add("profile-no-video"), document.body.appendChild(n); let l = location.hash; location.hash = "#inicio", location.hash = l
} async function createBandas() {
    const e = document.querySelector("#bandas article"), n = document.getElementById("tplBanda"),
        a = [{ id: "aguas", event: "2020-02-07T19:00:00-03:00", name: "Aguas Turbias" },
        { id: "ak47", event: "2020-02-07T20:00:00-03:00", name: "Ak47" },
        { id: "alpha", event: "2020-02-07T20:00:00-03:00", name: "Alpha" },
        { id: "apneuma", event: "2020-02-07T23:00:00-03:00", name: "Apneuma" },
        { id: "barathuja", event: "2020-02-07T23:00:00-03:00", name: "Barathuja" },
        { id: "cerebral", event: "2020-02-07T22:00:00-03:00", name: "Cerebral" },
        { id: "certera", event: "2020-02-07T22:00:00-03:00", name: "Certera" },
        { id: "climatic", event: "2020-02-07T22:00:00-03:00", name: "Climatic Terra" },
        { id: "disector", event: "2020-02-07T23:00:00-03:00", name: "Disector" },
        { id: "drrocka", event: "2020-02-07T23:00:00-03:00", name: "Dr Rocka" },
        { id: "mutante", event: "2020-02-07T23:00:00-03:00", name: "El Poderoso Mutante" },
        { id: "escarnio", event: "2020-02-07T22:00:00-03:00", name: "Escarnio" },
        { id: "feta", event: "2020-02-07T23:00:00-03:00", name: "Feta" },
        { id: "fuego", event: "2020-02-07T23:00:00-03:00", name: "Fuego" },
        { id: "genoma", event: "2020-02-07T23:00:00-03:00", name: "Genoma" },
        { id: "herrumbre", event: "2020-02-07T23:00:00-03:00", name: "Herrumbre" },
        { id: "hueso", event: "2020-02-07T23:00:00-03:00", name: "Hueso" },
        { id: "insano", event: "2020-02-09T00:00:00-03:00", name: "Insano" },
        { id: "insectas", event: "2020-02-09T00:00:00-03:00", name: "Insectas" },
        { id: "leviathan", event: "2020-02-09T00:00:00-03:00", name: "Leviathan" },
        { id: "licaon", event: "2020-02-09T00:00:00-03:00", name: "Licaón" },
        { id: "losna", event: "2020-02-09T00:00:00-03:00", name: "Losna" },
        { id: "lyra", event: "2020-02-07T23:00:00-03:00", name: "Lyra" },
        { id: "pecho", event: "2020-02-09T00:00:00-03:00", name: "Pecho E Fierro" },
        { id: "razaplaga", event: "2020-02-09T00:00:00-03:00", name: "Razaplaga" },
        { id: "retro", event: "2020-02-09T00:00:00-03:00", name: "Retro Satan" },
        { id: "ritual", event: "2020-02-09T00:00:00-03:00", name: "Ritual de Nacimiento" },

        { id: "ruta", event: "2020-02-09T14:00:00-03:00", name: "Ruta 504" },
        { id: "sangria", event: "2020-02-09T14:00:00-03:00", name: "Sangria" },
        { id: "septerium", event: "2020-02-09T14:00:00-03:00", name: "Septerium" },
        { id: "sistema", event: "2020-02-09T14:00:00-03:00", name: "Sistema Diez" },
        { id: "solarcodex", event: "2020-02-09T14:00:00-03:00", name: "Solar Codex" },
        { id: "southern", event: "2020-02-09T14:00:00-03:00", name: "Southern Rising" },
        { id: "moors", event: "2020-02-09T14:00:00-03:00", name: "The Moors" },


        { id: "vademekhum", event: "2020-02-07T21:00:00-03:00", name: "Vademekhum" },
        { id: "vonzo", event: "2020-02-07T21:00:00-03:00", name: "Vonzo" }
        ]; a.map(e => (e.event = new Date(e.event), e.dia = 3, e.event < new Date("2020-02-09T03:00:00-03:00") && (e.dia = 2),
            e.event < new Date("2020-02-08T03:00:00-03:00") && (e.dia = 1), e)).sort((e, n) => e.event - n.event);
    data.bandas = a.reduce((e, n) => (e[n.id] = n, e), {}), a.forEach(a => { let t = n.content.cloneNode(!0), i = t.querySelector("img"); t.querySelector("a").href = `#bandas/${a.id}`, i.src = `../img2020/bandas/${a.id}/logo.png`, i.alt = a.name, e.appendChild(t), secciones.push(`bandas/${a.id}`) })
} function updateContador() { let e = new Date(datetimeinicio - Date.now()); contador.innerHTML = `faltan <span>${e.toLocaleString("es-UY", { minute: "numeric", second: "numeric" })}</span> minutos`, setTimeout(updateContador, 1e3) }

window.addEventListener("load", e => { }),
    window.addEventListener("popstate", e => {
        let n = location.hash.substr(1), a = returnSection(n);
        if (n != a) console.log(`Cambiando ${n} por ${a}`),
            goToRoute(a);

        else if (a.indexOf("bandas/") > -1) { let e = a.split("/")[1]; document.getElementById(a) || crearPerfil(e) }
        window.scroll({ top: 0, left: 0, behaviour: "smooth" })
    });

const anvorgesa = document.querySelector(".icon-menu"), menuel = document.querySelector("nav");
anvorgesa.addEventListener("click", e => { menuel.style.display = "flex", menuel.addEventListener("click", function e(n) { menuel.style.removeProperty("display"), menuel.removeEventListener("click", e) }) });