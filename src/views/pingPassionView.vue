<script>
export default {
    name: 'pingPassionView'
}
</script>

<template>
    <section class="theme">
        <h1>Ping Passion</h1>

        <h2>Qu'est ce que c'est</h2>
        <p>Le projet "Ping Passion" représente une initiative centrée autour du tennis de table, offrant une plateforme dédiée à l'achat d'équipements tels que des raquettes, des shorts, des balles, et bien plus encore. Conçu dans le cadre de mon cours sur WordPress, ce projet a été l'occasion de mettre en pratique mes compétences nouvellement acquises dans le domaine du développement web.

        L'objectif était de rendre l'expérience utilisateur plus intuitive tout en mettant en valeur la diversité des produits liés au ping-pong. Ce projet a également permis d'explorer les fonctionnalités avancées de WordPress pour créer un site dynamique et attractif dédié à la passion du ping-pong.</p>

        <h2>Qu'est ce que j'ai fait dans ce projet</h2>
        <p>Mon rôle a été axé sur l'utilisation de WordPress pour la refonte complète du site dédié au tennis de table. J'ai exploité les fonctionnalités et les outils de WordPress pour créer une interface web plus moderne, conviviale et responsive. Cette approche a impliqué la mise en place de nouvelles fonctionnalités, l'amélioration du design, ainsi que l'optimisation de la structure du site afin d'offrir une expérience utilisateur enrichissante pour les passionnés de ping-pong.</p>

        <h2>Qu'est ce que j'ai appris</h2>
        <p>J'ai acquis une compréhension approfondie de la gestion de contenu via cette plateforme populaire. J'ai appris à manipuler efficacement les fonctionnalités de WordPress pour créer, éditer et organiser du contenu de manière optimale. La personnalisation des thèmes et des plugins m'a également permis d'explorer les possibilités d'adaptation du site en fonction des besoins spécifiques du projet. Cette expérience a renforcé mes compétences dans la création de sites web dynamiques, en mettant en lumière l'importance de l'efficacité et de la flexibilité offertes par les CMS comme WordPress.</p>

        <h2>Optimisations pour un projet plus efficace</h2>
        <p>Une piste d'amélioration pour ce projet consisterait à approfondir mes connaissances en matière de personnalisation avancée de thèmes WordPress. Cela inclut la maîtrise de la création de modèles personnalisés, et l'optimisation du site pour une navigation fluide. En investissant davantage dans la compréhension des meilleures pratiques de développement WordPress, je pourrais rendre le site encore plus attractif et fonctionnel. Cela me permettrait également d'élargir mes compétences en matière de développement web, en particulier dans le domaine des CMS.
        </p>

        <h2>Galeries</h2>
        <p>Explorez quelques captures d'écran du site Philips Hue, soigneusement élaboré par mes soins.</p>
        <!--<figure>
            <img src="../assets/Images/pingPassion_Accueil.png" alt="">
            <figcaption>Page d'accueil du site Ping Passion</figcaption>
        </figure>
        <figure>
            <img src="../assets/Images/pingPassion_revetement.png" alt="">
            <figcaption>Page d'explication d'un type de revêtement disponible sur site</figcaption>
        </figure>
        <figure>
            <img src="../assets/Images/pingPassion_bois.png" alt="">
            <figcaption>Page qui regroupe tous les type de bois disponibles sur le site</figcaption>
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