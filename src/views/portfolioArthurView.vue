<script>
</script>

<template>
    <section>
        <h1>Portfolio Arthur Meynieux Naudin</h1>

        <h2>Qu'est ce que c'est</h2>
        <p>Le portfolio d'Arthur représente une collaboration exceptionnelle entre moi-même, un développeur passionné de l'IIM Digital School, et un talentueux designer, mon ami Arthur. Dans le cadre de cet échange de services, j'ai pris en charge le développement de nos portfolios respectifs, tandis qu'Arthur mettait son expertise en design au service de mon portfolio. <br><br>

        L'objectif de ce projet était de transcender les conceptions conventionnelles de portfolios en offrant une présentation esthétique de mes compétences en développement web. Chaque section met en avant des projets significatifs que j'ai développés, accompagnés de descriptions détaillées, de captures d'écran captivantes et de liens vers les dépôts GitHub correspondants. <br><br>

        Cette collaboration unique permet à Arthur de se démarquer avec un design original, évitant les conceptions standardisées, tandis que je bénéficie d'un portfolio élégant et attrayant. Un partenariat gagnant-gagnant qui témoigne de notre collaboration fructueuse au sein de l'IIM Digital School.</p>

        <h2>Qu'est ce que j'ai fait dans ce projet</h2>
        <p>Dans le cadre du projet du portfolio d'Arthur, j'ai assumé le rôle du développeur. Mon travail consistait à concrétiser la vision d'Arthur en donnant vie à son design à travers une interface web fonctionnelle. J'ai pris en charge la mise en place de chaque élément interactif, assurant une expérience utilisateur fluide et mettant en valeur les projets significatifs que nous avons choisis de présenter. Mon rôle de développeur a été essentiel pour transformer les idées créatives d'Arthur en un portfolio en ligne élégant et fonctionnel.</p>

        <h2>Qu'est ce que j'ai appris</h2>
        <p>Au cours du projet du portfolio d'Arthur, j'ai acquis une précieuse leçon sur l'importance de respecter les souhaits et les délais d'un "client". La collaboration avec Arthur, en tant que designer, m'a permis de comprendre l'importance de la communication efficace pour concrétiser ses idées tout en respectant ses préférences esthétiques. Cette expérience a renforcé ma capacité à travailler en équipe et à adapter mes compétences de développement pour répondre aux attentes spécifiques d'un partenaire créatif.</p>

        <h2>Optimisations pour un projet plus efficace</h2>
        <p>Pour optimiser davantage le projet, j'envisagerais d'explorer des solutions d'amélioration de la performance, telles que l'optimisation du chargement des ressources, la réduction du poids des images, et l'utilisation de techniques avancées de gestion de cache. Ces ajustements contribueraient à rendre le portfolio plus réactif, offrant ainsi une expérience utilisateur fluide et rapide. Cependant ce projet est toujours en cours de développement.
        </p>

        <h2>Galeries</h2>
        <p>Découvrez des vidéos captivantes illustrant les différentes facettes de mon portfolio actuel en développement web. Ces extraits visuels offrent un aperçu dynamique des fonctionnalités et des projets qui composent mon travail en cours.</p>
        <figure>
            <video loop>
                <source src="../assets/Videos/porfolioArthur_ux_ui.mp4" type="video/mp4">
                Votre navigateur ne prend pas en charge la balise vidéo.
            </video>
            <figcaption>Page d'accueil du portfolio comprenant les informations les plus importante</figcaption>
        </figure>

        <div class="videos">
            <figure>
                <video class="video" loop>
                    <source src="../assets/Videos/porfolioArthur_ux_ui.mp4" type="video/mp4">
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <figcaption>Page dédié au mockup Ui/Ux du portfolio </figcaption>
            </figure>
            <figure>
                <video class="video" loop>
                    <source src="../assets/Videos/porfolioArthur_ux_ui.mp4" type="video/mp4">
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <figcaption>Page dédié aux illustrations</figcaption>
            </figure>
        </div>


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