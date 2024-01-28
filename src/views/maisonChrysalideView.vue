<script>
</script>

<template>
    <section>
        <h1>Maison Chrysalide</h1>

        <h2>Qu'est ce que c'est</h2>
        <p>L'association Maison Chrysalide, portée par Josette Domingos et ses filles, s'engage dans la création d'une maison de vie inclusive pour les jeunes adultes autistes. L'association surmonte les obstacles de l'autonomie en offrant un environnement sécurisé et inclusif, favorisant une cohabitation harmonieuse entre personnes autistes et valides. <br><br>


        En 2020, Maison Chrysalide a réussi une levée de fonds de 15 000 euros, marquant le début du projet et la planification du dossier à Puteaux. En 2023, avec la refonte de son site internet et le début de la construction à Puteaux, l'association concrétise sa vision innovante mêlant écologie, domotique et inclusion sociale. Un pas concret vers l'autonomie des jeunes adultes autistes, ce projet marque une avancée significative dans le paysage associatif.</p>

        <h2>Qu'est ce que j'ai fait dans ce projet</h2>
        <p>Dans le cadre de ma deuxième année à l'<span>IIM Digital School</span>, j'ai pu participé à ma première BAP (Bourse au Projet), un événement au cours duquel des entreprises, associations et autres entités externes présentent des projets concrets. Les étudiants sont regroupés par équipes, composées de designers, de développeurs et de commerciaux, sous la direction de deux chefs de projet. En tant que chef de projet, j'ai collaboré avec mon équipe dans une compétition amicale avec un autre groupe. Mes responsabilités incluaient la rédaction du cahier des charges, le respect des délais, la résolution des problèmes et la présentation régulière de l'avancement du projet à notre cliente. En fin de projet, j'ai également dû présenter les résultats devant un jury et la cliente.</p>

        <h2>Qu'est ce que j'ai appris</h2>
        <p>Ce projet au sein de la Bourse au Projet m'a offert une expérience enrichissante. En tant que chef de projet, j'ai perfectionné mes compétences en gestion de projet, apprenant à élaborer un cahier des charges complet et à respecter des délais serrés, même en cas de difficultés. La nécessité constante de présenter et communiquer l'avancement du projet à notre cliente a renforcé mes aptitudes en communication. Enfin, la présentation finale devant le jury a été l'occasion d'affiner mes compétences en présentation et de faire face à des situations professionnelles réelles. Ce projet a été un véritable tremplin pour mon développement professionnel.</p>

        <h2>Optimisations pour un projet plus efficace</h2>
        <p>Si je devais refaire le projet, je renforcerais la communication interne de l'équipe et établirais des règles de code claires pour faciliter la collaboration des développeurs. De plus, la mise en place de dépôts GitHub réguliers permettrait à chaque membre de toujours disposer de la dernière version du projet, améliorant ainsi l'efficacité de la collaboration. Ces ajustements contribueraient à une gestion plus fluide du projet.
        </p>

        <h2>Galeries</h2>
        <p>Découvrez quelques vidéos extraites du site que notre équipe a créé. Actuellement, nous sommes dans l'attente pour savoir si notre projet a été sélectionné.</p>
        <figure>
            <video loop>
                <source src="../assets/Videos/Accueil_chrysalide.mp4" type="video/mp4">
                Votre navigateur ne prend pas en charge la balise vidéo.
            </video>
            <figcaption>Page d'accueil du site comprenant les information les plus importantes</figcaption>
        </figure>

        <div class="videos">
            <figure>
                <video class="video" loop>
                    <source src="../assets/Videos/salleImmersive_chrysalide.mp4" type="video/mp4">
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <figcaption>Page de réservation pour la salle immersive</figcaption>
            </figure>
            <figure>
                <video class="video" loop>
                    <source src="../assets/Videos/commeMoi_chrysalide.mp4" type="video/mp4">
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <figcaption>Page spéciale pour les personnes en situation d'handicap</figcaption>
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