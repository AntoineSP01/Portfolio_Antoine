<script>
export default {
    name: 'lyfeView'
}
</script>

<template>
    <section>
        <h1>Lyfe</h1>

        <h2>Qu'est ce que c'est</h2>
        <p>Lyfe est un site de microblogging, similaire à X ou Mastodon, que j'ai développé au cours de ma première année. Ce projet était déterminant, car il conditionnait notre passage en deuxième année. Il constitue mon unique projet d'envergure intégrant du PHP et une base de données, marquant ainsi une étape significative dans mon parcours académique.</p>

        <h2>Qu'est ce que j'ai fait dans ce projet</h2>
        <p>Dans le cadre du projet Lyfe, j'ai joué un rôle clé en mettant en place une base de données robuste. Mon implication s'est concentrée sur la création et la gestion efficace de la structure de la base de données. De plus, j'ai développé des requêtes PHP sophistiquées pour effectuer des recherches d'informations, assurant ainsi un fonctionnement optimal du site de microblogging. Mon travail a été essentiel pour garantir la fluidité des interactions et la récupération précise des données sur la plateforme.</p>

        <h2>Qu'est ce que j'ai appris</h2>
        <p>Au cours de la réalisation du projet Lyfe, j'ai acquis des compétences importantes liées à la gestion de bases de données et à la manipulation de données avec PHP. La mise en place de la base de données m'a permis de comprendre les nuances de la conception de systèmes de stockage d'informations pour garantir une performance optimale. Les requêtes PHP que j'ai développées ont renforcé ma compréhension des interactions serveur-client, facilitant la recherche et l'affichage efficaces des données. Ce projet m'a ainsi offert une expérience enrichissante dans le domaine du développement web avec des technologies telles que PHP et les bases de données.</p>

        <h2>Optimisations pour un projet plus efficace</h2>
        <p>Pour optimiser davantage le site Lyfe, je pourrais envisager plusieurs améliorations. Tout d'abord, je pourrais mettre en œuvre des techniques de mise en cache pour réduire les temps de chargement des pages et améliorer la réactivité globale du site. L'utilisation de la mise en cache permettrait de stocker temporairement certaines données ou éléments de page, réduisant ainsi la nécessité de les recharger à chaque visite. <br><br>

        Par ailleurs, je pourrais également optimiser les requêtes SQL en veillant à ce qu'elles soient bien indexées et à utiliser des clauses WHERE efficaces. Cela contribuerait à accélérer le traitement des données dans la base de données. De plus, la compression des ressources statiques, telles que les images, les fichiers CSS et JavaScript, permettrait de réduire la taille des fichiers téléchargés par les visiteurs, améliorant ainsi la vitesse de chargement des pages.<br><br>

        Enfin, je pourrais envisager d'implémenter des techniques de lazy loading pour les images, ce qui signifie que les images ne seraient chargées que lorsqu'elles deviennent visibles à l'écran, réduisant ainsi la charge initiale de la page. Ces optimisations combinées contribueraient à offrir une expérience utilisateur plus fluide et réactive sur le site Lyfe.
        </p>

        <h2>Galeries</h2>
        <p>Découvrez Lyfe à travers ces captures d'écran, bien que le mode sombre ne soit pas présent dans ces images.</p>
        <!--<figure>
            <img src="../assets/Images/lyfe_feed.png" alt="">
            <figcaption>Page d'accueil du site Philips Hue</figcaption>
        </figure>
        <figure>
            <img src="../assets/Images/lyfe_profil.png" alt="">
            <figcaption>Page d'explication des ampoules connectées du site</figcaption>
        </figure>
        <figure>
            <img src="../assets/Images/lyfe_tweet.png" alt="">
            <figcaption>Page qui regroupe tous les articles disponibles sur le site</figcaption>
        </figure>-->


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