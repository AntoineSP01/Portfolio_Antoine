<script>
export default {
    name: 'philipsHueView'
}
</script>

<template>
    <section class="theme">
        <h1>Philips Hue</h1>

        <h2>Qu'est ce que c'est</h2>
        <p>Au cours de ma première année à l'<span>IIM Digital School</span>, j'ai eu l'opportunité de m'immerger dans le monde du développement web à travers mon premier projet, le projet Philips Hue. Cette expérience m'a permis de prendre en main les fondamentaux de l'HTML et du CSS.</p>

        <h2>Qu'est ce que j'ai fait dans ce projet</h2>
        <p>Pour le projet Philips Hue de ma première année à l'IIM Digital School, j'ai pris en charge la conception et la mise en œuvre de plusieurs pages en utilisant HTML et CSS. Mon travail consistait à créer des pages dédiées aux produits Philips Hue que j'apprécie particulièrement. À travers ces pages, j'ai appliqué mes compétences en HTML pour structurer le contenu et en CSS pour donner une présentation esthétique, mettant en avant les fonctionnalités et les caractéristiques des produits Philips Hue que je trouvais particulièrement intéressants.</p>

        <h2>Qu'est ce que j'ai appris</h2>
        <p>Au cours du projet Philips Hue, ma première expérience à l'IIM Digital School, j'ai acquis une solide compréhension de la structuration des pages web en utilisant HTML et du stylage avec CSS. J'ai appris à intégrer des éléments interactifs et informatifs, en mettant en pratique mes connaissances nouvellement acquises pour présenter de manière efficace les produits Philips Hue. Ce projet a renforcé ma maîtrise des technologies front-end et a été une étape cruciale dans mon apprentissage du développement web.</p>

        <h2>Optimisations pour un projet plus efficace</h2>
        <p>Pour optimiser davantage le projet, j'envisagerais l'utilisation d'un préprocesseur CSS tel que Sass ou encore Scss. Ces outils améliorent la lisibilité du code en introduisant des fonctionnalités telles que les variables, les mixins et les fonctions. Les variables permettent de définir des valeurs réutilisables, simplifiant ainsi la maintenance et la mise à jour du style. Les mixins facilitent la création de styles récurrents, tandis que les fonctions ajoutent une modularité accrue.

        De plus, l'utilisation d'un préprocesseur peut grandement faciliter la mise en œuvre du responsive design. Je pourrais définir des breakpoints de manière plus claire et utiliser des mixins pour gérer les styles spécifiques à chaque point de rupture, rendant ainsi le site plus adaptable à différentes tailles d'écrans. En incorporant ces pratiques, je rendrais le code plus lisible, maintenable et efficace, contribuant ainsi à une meilleure expérience de développement et à une gestion plus aisée du responsive design.
        </p>

        <h2>Galeries</h2>
        <p>Explorez quelques captures d'écran du site Philips Hue, soigneusement élaboré par mes soins.</p>
        <figure>
            <img src="../assets/Images/philipsHue_Accueil.png" alt="">
            <figcaption>Page d'accueil du site Philips Hue</figcaption>
        </figure>
        <figure>
            <img src="../assets/Images/philipsHue_Ampoules.png" alt="">
            <figcaption>Page d'explication des ampoules connectées du site</figcaption>
        </figure>
        <figure>
            <img src="../assets/Images/philipsHue_Articles.png" alt="">
            <figcaption>Page qui regroupe tous les articles disponibles sur le site</figcaption>
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

        @media screen and (max-width: 1100px){
            width: 70%;
        }
        
        @media screen and (max-width: 666px){
            width: 100%;
        }
    }

</style>