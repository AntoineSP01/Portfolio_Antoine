<script>
export default {
    name: 'oberfighterView'
}
</script>

<template>
    <section class="theme">
        <h1>Oberfighter</h1>

        <h2>Qu'est ce que c'est</h2>
        <p>Oberfighter est un jeu de société créé dans le cadre de l'EPIC Digital Day lors de ma première année à l'<span>IIM Digital School</span>. En mars 2023, notre équipe a présenté le jeu devant un jury de l'école. Pour accompagner cette présentation, nous avons développé un site web dédié au jeu. Ce projet a été une occasion unique de mettre en pratique nos compétences en conception de jeu et en développement web, en fournissant une expérience immersive pour présenter notre création.</p>

        <h2>Qu'est ce que j'ai fait dans ce projet</h2>
        <p>Au sein de l'équipe Oberfighter, mon principal domaine d'intervention a été le développement du site web dédié au jeu. Collaborant étroitement avec les autres membres de l'équipe, j'ai pris en charge la conception et la mise en œuvre de l'aspect technique du site. Pendant que le design était confié à un autre membre, mon implication s'est concentrée sur la création d'une plateforme web fonctionnelle et attrayante pour présenter notre jeu de société lors de l'EPIC Digital Day en mars 2023.</p>

        <h2>Qu'est ce que j'ai appris</h2>
        <p>La réalisation du site web pour le projet Oberfighter a été une expérience formatrice. En travaillant sur ce projet, j'ai approfondi mes compétences en développement web, notamment en renforçant ma maîtrise des langages tels que HTML, CSS, et JavaScript. La collaboration au sein de l'équipe m'a permis de comprendre l'importance de la communication et de la coordination pour garantir le succès d'un projet. De plus, j'ai acquis une meilleure compréhension des exigences spécifiques liées à la création d'un site web pour un jeu de société, en tenant compte des aspects ludiques et interactifs pour offrir une expérience utilisateur optimale.</p>

        <h2>Optimisations pour un projet plus efficace</h2>
        <p>Pour renforcer l'efficacité du projet Oberfighter, une intégration judicieuse des préprocesseurs CSS, comme Sass ou Scss, s'impose. Ces outils offrent une approche plus organisée et modulaire du style, grâce à des fonctionnalités telles que les variables, les mixins et les fonctions. Les variables facilitent la gestion des valeurs récurrentes, tandis que les mixins et les fonctions permettent d'encapsuler des styles réutilisables, optimisant ainsi la lisibilité du code.
        </p>

        <h2>Galeries</h2>
        <p>Explorez en profondeur une vidéo exclusive dévoilant l'intégralité du site que j'ai personnellement conçu.</p>
        <figure>
            <video loop>
                <source src="../assets/Videos/oberfighter.mp4" type="video/mp4">
                Votre navigateur ne prend pas en charge la balise vidéo.
            </video>
            <figcaption>Single page du site de présentation du jeu Oberfighter fait pour l'occasion de l'Epic Digital Day</figcaption>
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

    video {
        width: 50%;

        @media screen and (max-width: 1100px){
            width: 70%;
        }
        
        @media screen and (max-width: 666px){
            width: 100%;
        }
    }
</style>