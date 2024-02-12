<script>
export default {
    name: 'monPortfolioView'
}
</script>

<template>
    <section>
        <h1>Mon portfolio</h1>

        <h2>Pourquoi est-il dans mon portfolio</h2>
        <p>Mon portfolio a été soigneusement intégré à la section des projets de mon portfolio pour une raison bien précise. Initialement, j'avais envisagé une approche classique en utilisant HTML, SCSS et JavaScript. Cependant, après avoir découvert Vue.js, j'ai décidé d'adopter ce framework. Le choix de Vue.js s'est révélé avantageux en raison de son impact significatif sur l'expérience utilisateur, éliminant tout temps de chargement lors de la navigation entre les différentes pages. <br> <br>

        Il est important de noter que ce projet a été réalisé en collaboration avec Arthur, un talentueux designer de l'IIM Digital School, qui a pris en charge la conception visuelle du portfolio. Cette coopération a permis d'associer mes compétences en développement à un design élégant, aboutissant à un portfolio aussi fonctionnel que esthétiquement plaisant.</p>

        <h2>Qu'est ce que j'ai appris</h2>
        <p>Cette expérience m'a permis de développer mes compétences en architecture de site web, en prenant des décisions éclairées sur le choix des technologies pour garantir une performance optimale. En somme, ce projet a été une opportunité d'appliquer mes connaissances tout en apprenant de nouvelles techniques pour créer un portfolio dynamique et efficace.</p>

        <h2>Optimisations pour un projet plus efficace</h2>
        <p>Afin d'optimiser mon portfolio, je pourrais envisager plusieurs mesures pour améliorer son efficacité. En priorité, je pourrais considérer la réduction de la taille des images utilisées, visant ainsi à accélérer le temps de chargement des pages. Une autre approche consisterait à diviser le code en modules distincts, permettant de ne charger que les éléments nécessaires à chaque page, contribuant ainsi à une meilleure réactivité initiale.
        </p>

        <h2>Galeries</h2>
        <p>Explorez des extraits vidéo dynamiques présentant divers aspects de mon portfolio actuel en développement web. Ces séquences visuelles offrent un aperçu captivant des fonctionnalités et des projets qui constituent mon travail en cours.</p>

        <div class="videos">
            <figure>
                <video class="video" loop>
                    <source src="../assets/Videos/monPortfolio_darkTheme.mp4" type="video/mp4">
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <figcaption>Page dédié au mockup Ui/Ux du portfolio </figcaption>
            </figure>
            <figure>
                <video class="video" loop>
                    <source src="../assets/Videos/monPortfolio_darkTheme.mp4" type="video/mp4">
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <figcaption>Page dédié aux illustrations</figcaption>
            </figure>
        </div>

        <figure>
            <img src="../assets/Images/monPortfolio_exemple.png" alt="">
            <figcaption>Page d'accueil du site Philips Hue</figcaption>
        </figure>

    </section>
</template>

<style scoped>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: justify;
        width: 100%;
        padding-block: 50px;
    }

    h1 {
        color: var(--text-color-orange);
        font-size: var(--font-size-subTitle);
        font-weight: bold;
        margin-block: 30px;
        text-align: center;

        @media screen and (max-width: 1100px){
            font-size: var(--font-size-subTitleMedium);
        }

        @media screen and (max-width: 850px){
            font-size: var(--font-size-subTitleSmall);
        }

        @media screen and (max-width: 666px){
            font-size: var(--font-size-subTitleVerySmall);
        }
    }

    h2 {
        color: var(--text-color-orange);
        font-size: var(--font-size-text);
        font-weight: bold;
        text-align: center;

        @media screen and (max-width: 850px){
            font-size: var(--font-size-text-small)
        }

        @media screen and (max-width: 666px){
            font-size: var(--font-size-text-littleSmall);
        }
    }

    p {
        font-size: var(--font-size-text-small);
        margin-block: 30px 60px;
        text-align: justify;
        width: 60%;

        @media screen and (max-width: 1250px){
            width: 70%;
        }

        @media screen and (max-width: 1000px){
            width: 80%;
        }

        @media screen and (max-width: 850px){
            width: 90%;
            font-size: var(--font-size-text-littleSmall);
        }

        @media screen and (max-width: 666px){
            font-size: var(--font-size-text-verySmall);
        }
    }

    span {
        color: #ed7000;
        text-transform: uppercase;
    }
    figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: var(--font-size-text-verySmall);
        font-style: italic;
        margin-inline: 30px;
    }

    figcaption {
        margin-bottom: 60px;
    }

    img {
        width: 50%;
        border: var(--color-white) 2px solid;

        @media screen and (max-width: 1100px){
            width: 70%;
        }
        
        @media screen and (max-width: 666px){
            width: 100%;
        }
    }

    video {
        border: var(--color-white) 2px solid;
        width: 50%;

        @media screen and (max-width: 1100px){
            width: 70%;
        }
        
        @media screen and (max-width: 666px){
            width: 100%;
        }
    }

    .video {
        width: 100%;

        @media screen and (max-width: 1400px){
            width: 50%;
        }

        @media screen and (max-width: 1100px){
            width: 70%;
        }

        @media screen and (max-width: 666px){
            width: 100%;
        }
    }

    .videos {
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        font-size: var(--font-size-text-verySmall);
        font-style: italic;

        @media screen and (max-width: 1400px){
            flex-direction: column;
        }
    }
</style>