<script>
export default {
    name: 'ecommercePokemonView'
}
</script>

<template>
    <section class="theme">
        <h1>E-Commerce Pokémon</h1>

        <h2>Qu'est ce que c'est</h2>
        <p>Dans le cadre du cours de Javascript Interaction Utilisateur, j'ai développé un projet fascinant intitulé "E-commerce Pokemon". Cette plateforme en ligne offre aux utilisateurs la possibilité de capturer et collectionner des Pokémon virtuels, chacun ayant un prix déterminé de manière aléatoire. Les fonctionnalités incluent la visualisation des détails d'un Pokémon, la gestion du panier, et la présentation de Pokémon aléatoires sur la page d'accueil. Un projet interactif où la magie des Pokémon rencontre la puissance du JavaScript.</p>

        <h2>Qu'est ce que j'ai fait dans ce projet</h2>
        <p>Dans le cadre du projet "E-commerce Pokemon", j'ai travaillé en solo pour concevoir et développer l'intégralité de la plateforme. Mon rôle englobait la mise en place de fonctionnalités clés, telles que la capture et la collection de Pokémon virtuels, avec des prix déterminés de manière aléatoire. J'ai également pris en charge la création de mécanismes permettant aux utilisateurs de visualiser les détails des Pokémon, de gérer leur panier d'achats, et d'explorer des Pokémon aléatoires sur la page d'accueil. </p>

        <h2>Qu'est ce que j'ai appris</h2>
        <p>La réalisation du projet "E-commerce Pokemon" m'a permis d'approfondir mes connaissances en programmation JavaScript et d'acquérir une meilleure compréhension de l'interaction utilisateur. J'ai développé des compétences spécifiques dans la manipulation du DOM (Document Object Model) pour créer une interface utilisateur dynamique et réactive. La gestion des événements, la manipulation des données aléatoires pour les prix des Pokémon, et la mise en œuvre de fonctionnalités complexes telles que la gestion du panier ont enrichi mon savoir-faire en matière de développement web. Ce projet a constitué une excellente occasion d'appliquer concrètement mes connaissances acquises en cours et de les mettre en pratique dans un contexte de création d'une plateforme e-commerce ludique.</p>

        <h2>Optimisations pour un projet plus efficace</h2>
        <p>Pour optimiser davantage le projet "E-commerce Pokemon", je pourrais envisager d'implémenter des fonctionnalités additionnelles pour améliorer l'expérience utilisateur. Par exemple, je pourrais intégrer un système de recherche et de filtres permettant aux utilisateurs de trouver plus facilement les Pokémon qu'ils recherchent. De plus, l'ajout d'une fonction de tri par catégorie ou par type de Pokémon pourrait rendre la plateforme plus conviviale.

        Par ailleurs, je pourrais explorer des techniques d'optimisation des performances pour garantir une réactivité accrue du site, notamment en réduisant la charge des requêtes réseau et en optimisant le chargement des ressources. L'ajout de fonctionnalités sociales, comme la possibilité de partager ses Pokémon préférés sur les réseaux sociaux, pourrait également renforcer l'engagement des utilisateurs.

        Enfin, je pourrais envisager d'implémenter un système de gestion de compte utilisateur, permettant aux utilisateurs de créer un profil, de sauvegarder leurs Pokémon préférés et de suivre l'évolution de leur collection au fil du temps. Ces ajouts pourraient enrichir l'expérience globale sur la plateforme.
        </p>

        <h2>Galeries</h2>
        <p>Découvrez en détail deux vidéos exclusives présentant l'intégralité du site que j'ai personnellement conçu. Plongez dans une exploration approfondie pour mieux appréhender les fonctionnalités et le design de la plateforme. </p>

        <!--<div class="videos">
            <figure>
                <video class="video" loop>
                    <source src="../assets/Videos/ecommercePokemon_Accueil.mp4" type="video/mp4">
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <figcaption>Page d'accueil avec Pokémons légendaires aléatoires et pokémons de bases</figcaption>
            </figure>
            <figure>
                <video class="video" loop>
                    <source src="../assets/Videos/ecommercePokemon_exemple.mp4" type="video/mp4">
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <figcaption>Vidéo qui montre la mise au panier d'un pokemon et la page dédié à un pokémon</figcaption>
            </figure>
        </div>-->


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

    video {
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
