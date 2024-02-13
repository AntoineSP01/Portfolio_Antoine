<script>
    export default {
    name: 'home',
    methods: {
        goToMaisonChrysalide() {
            this.$router.push('/maison-chrysalide');
        },
        goToPhilipsHue() {
            this.$router.push('/philips-hue');
        },
        goToOberfighter() {
            this.$router.push('/oberfighter');
        },
        goToPingPassion() {
            this.$router.push('/ping-passion');
        },
        goToEcomercePokemon() {
            this.$router.push('/ecommerce-pokemon');
        },
        goToPortfolioArthur() {
            this.$router.push('/portfolio-arthur');
        },
        goToMonPortfolio() {
            this.$router.push('/mon-portfolio');
        },
        goToLyfe() {
            this.$router.push('/lyfe');
        },
    },
    };
</script>

<template>

<section class="principal">
    <div class="principal-container">
      <div class="principal-container-content">
        <h1 class="principal-container-title">Bonjour !</h1>
        <p class="principal-container-text">Je m'appelle Antoine <span>Schmerber-Perraud</span>, je suis étudiant et j’aimerais me spécialiser dans la conception de sites web, en visant à créer des interfaces simples et attrayantes.</p>
      </div>
    </div>
  </section>

  <section class="description">
    <p class="description-text">Je m'appelle Antoine <span>Schmerber-Perraud</span>, je suis étudiant et j’aimerais me spécialiser dans la conception de sites web, en visant à créer des interfaces simples et attrayantes.</p>
  </section>

  <section class="experience">
    <h2 class="title">Expériences</h2>
    <div class="timeline">
      <div class="timeline-dot timeline-dot-top"></div>
      <div class="container left">
        <div class="date">18/01/2024 - 04/04/2024</div>
        <div class="content">
          <h2>Expert en développement web</h2>
          <p>
            En tant qu'expert en développement web pour la deuxième BAP, j'ai mené avec succès la conception et la mise en œuvre des solutions techniques. Cette expérience m'a permis d'améliorer mes compétences en programmation, en analyse et en résolution de problèmes, renforçant ainsi ma passion pour ce domaine.
          </p>
        </div>
      </div>
      <div class="container right">
        <div class="date">12/10/2023 - 22/12/2023</div>
        <div class="content">
          <img class="books" src="../../src/assets/Icons/books.svg" alt="">
          <h2>Chef de projet</h2>
          <p>
            En tant que chef de projet pour l'événement BAP (voir projet Maison Chrysalide), j'ai dirigé avec succès la planification et la coordination des équipes. Cette expérience m'a permis d'affiner mes compétences en gestion de projet, de leadership et de communication, renforçant ma passion pour ce domaine.
          </p>
        </div>
      </div>
      <div class="container left">
        <div class="date">12/10/2023 - 22/12/2023
          <img class="persoOrdi" src="../../src/assets/Icons/persoOrdi.svg" alt="">
        </div>
        <div class="content">
          <img class="cactus" src="../../src/assets/Icons/cactus.svg" alt="">
          <h2>Bah je sais pas</h2>
          <p>
            En tant que chef de projet pour l'événement BAP (voir projet Maison Chrysalide), j'ai dirigé avec succès la planification et la coordination des équipes. Cette expérience m'a permis d'affiner mes compétences en gestion de projet, de leadership et de communication, renforçant ma passion pour ce domaine.
          </p>
        </div>
      </div>
      <div class="timeline-dot timeline-dot-bottom"></div>
    </div>
  </section>

  <section class=" experience-responsive">
    <div class="experience-reponsive-content">
      <h2 class="experience-reponsive-title">Expert en développement web</h2>
      <p class="experience-reponsive-text">En tant qu'expert en développement web pour la deuxième BAP, j'ai mené avec succès la conception et la mise en œuvre des solutions techniques. Cette expérience m'a permis d'améliorer mes compétences en programmation, en analyse et en résolution de problèmes, renforçant ainsi ma passion pour ce domaine.
        <br>
        <span>18/01/2024 - 04/04/2024</span>
      </p>
    </div>

    <div class="experience-reponsive-content">
      <h2 class="experience-reponsive-title">Chef de projet</h2>
      <p class="experience-reponsive-text">En tant que chef de projet pour l'événement BAP (voir projet Maison Chrysalide), j'ai dirigé avec succès la planification et la coordination des équipes. Cette expérience m'a permis d'affiner mes compétences en gestion de projet, de leadership et de communication, renforçant ma passion pour ce domaine.
        <br>
        <span>12/10/2023 - 22/12/2023</span>
      </p>
    </div>

    <div class="experience-reponsive-content">
      <h2 class="experience-reponsive-title">Bah je sais pas</h2>
      <p class="experience-reponsive-text">En tant que chef de projet pour l'événement BAP (voir projet Maison Chrysalide), j'ai dirigé avec succès la planification et la coordination des équipes. Cette expérience m'a permis d'affiner mes compétences en gestion de projet, de leadership et de communication, renforçant ma passion pour ce domaine.
        <br>
        <span>12/10/2023 - 22/12/2023</span>
      </p>
    </div>
  </section>



  <section class="projets">
    <h2 class="title">Projets</h2>

    <div class="flex-container">
      <div class="project project1">
        <img src="../../src/assets/Images/hue.png" alt="">
        <div class="content">
          <h2>Philips Hue</h2>
          <ul>
            <li class="html">HTML</li>
            <li class="css">CSS</li>
          </ul>
          <button @click="goToPhilipsHue">En savoir plus</button>
        </div>
      </div>

      <div class="project project2">
        <img src="../../src/assets/Images/maisonChrysalide.png" alt="">
        <div class="content">
          <h2>Maison Chrysalide</h2>
          <ul>
            <li class="wordpress">Wordpress</li>
          </ul>
          <button @click="goToMaisonChrysalide">En savoir plus</button>
        </div>
      </div>
      <div class="project project3">
        <img src="../../src/assets/Images/lyfe.png" alt="">
        <div class="content">
          <h2>Lyfe</h2>
          <ul>
            <li class="html">HTML</li>
            <li class="css">CSS</li>
            <li class="js">JS</li>
            <li class="php">PHP</li>
          </ul>
          <button @click="goToLyfe">En savoir plus</button>
        </div>
      </div>
      <div class="project project4">
        <img src="../../src/assets/Images/portfolio_arthur.svg" alt="">
        <div class="content">
          <h2>Portfolio Arthur</h2>
          <ul>
            <li class="html">HTML</li>
            <li class="css">CSS</li>
            <li class="js">JS</li>
          </ul>
          <button @click="goToPortfolioArthur">En savoir plus</button>
        </div>
      </div>
      <div class="project project5">
        <img src="../../src/assets/Images/oberfighter.png" alt="">
        <div class="content">
          <h2>Oberfighter</h2>
          <ul>
            <li class="html">HTML</li>
            <li class="css">CSS</li>
          </ul>
          <button @click="goToOberfighter">En savoir plus</button>
        </div>
      </div>
      <div class="project project6">
        <img src="../../src/assets/Images/pingPassion.png" alt="">
        <div class="content">
          <h2>PingPassion</h2>
          <ul>
            <li class="wordpress">Wordpress</li>
          </ul>
          <button @click="goToPingPassion">En savoir plus</button>
        </div>
      </div>
      <div class="project project7">
        <img src="../../src/assets/Icons/logo_black.svg" alt="">
        <div class="content">
          <h2>Mon portfolio</h2>
          <ul>
            <li class="html">HTML</li>
            <li class="css">CSS</li>
            <li class="js">JS</li>
            <li class="vuejs">VueJs</li>
          </ul>
          <button @click="goToMonPortfolio">En savoir plus</button>
        </div>
      </div>
      <div class="project project8">
        <img src="../../src/assets/Images/eCommercePokemon.png" alt="">
        <div class="content">
          <h2>E-commerce Pokémon</h2>
          <ul>
            <li class="html">HTML</li>
            <li class="css">CSS</li>
            <li class="js">JS</li>
          </ul>
          <button @click="goToEcomercePokemon">En savoir plus</button>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.principal {
  position: relative;

  .principal-container {
    position: absolute;
    top: -10vh;
    left: 0;
    background-image: url("../assets/Images/backgroundAccueil.svg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 110vh;
    z-index: -1;

    @media screen and (max-width: 1427px){
      background-size:contain;
    }

    @media screen and (max-width: 846px){
      top: 0;
    }
  }

  .principal-container-content {
    width: 55%;

    @media screen and (max-width: 600px){
      width: 65%;
    }

    @media screen and (max-width: 360px){
      width: 100%;
    }
  }
  .principal-container-title {
    font-size: var(--font-size-mainTitle);
    color: var(--text-color-orange);
    margin-top: 30vh;
    margin-left: 80px;
    text-transform: uppercase;

    @media screen and (max-width: 1300px){
      font-size: var(--font-size-mainTitleMedium);
      margin-top: 20vh;
    }

    @media screen and (max-width: 1000px){
      font-size: var(--font-size-mainTitleSmall);
    }

    @media screen and (max-width: 846px){
      margin-top: 10vh;
    }

    @media screen and (max-width: 730px){
      font-size: var(--font-size-mainTitleLittleSmall);
      margin-top: 0;
      margin-left: 30px;
    }

    @media screen and (max-width: 600px){
      margin-top: 10vh;
      font-size: var(--font-size-mainTitleVerySmall);
    }

    @media screen and (max-width: 360px){
      font-size: var(--font-size-mainTitleLittleVerySmall);
      margin-top: 10px;
      margin-left: 0;
      text-align: center;
      background-color: rgba(0 , 0, 0, 0.5);
      border-radius: 10px;

    }
  }

  .principal-container-text {
    font-size: var(--font-size-text);
    color: var(--text-color-darkTheme);
    margin-top: 30px;
    margin-left: 80px; 

    @media screen and (max-width: 1300px){
      font-size: var(--font-size-text-medium);
    }

    @media screen and (max-width: 1000px){
      font-size: var(--font-size-text-small);
    }

    @media screen and (max-width: 730px){
      font-size: var(--font-size-text-littleSmall);
      margin-left: 30px;
      background-color: rgba(0 , 0, 0, 0.5);
      border-radius: 10px;
      text-align: center;
    }

    @media screen and (max-width: 600px){
      display: none;
      
    }
  }
  span {
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(to right, var(--couleur-debut), var(--couleur-fin));
    display: inline-block;
    text-transform: uppercase;
  }

}

.description {
  display: none;

  @media screen and (max-width: 600px){
    display: block;
    margin-top: 65%;
    padding-inline: 20px;
    text-align: center;
    background-color: var(--background-color-text-darkTheme);
    border-radius: 10px;
  }

  .description-text {
    font-size: var(--font-size-text-medium);

    @media screen and (max-width: 450px){
      font-size: var(--font-size-text-small);
    }

    @media screen and (max-width: 360px){
      font-size: var(--font-size-text-littleSmall);
    }
  }
}

.experience {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100vh;
  margin-bottom: 10vh;

  @media screen and (max-width: 1575px){
    margin-top: 55%;
  }

  @media screen and (max-width: 1350px){
    margin-top: 50%;
  }

  @media screen and (max-width: 847px){
    margin-top: 60%;
    margin-bottom: 4vh;
  }

  @media screen and (max-width: 600px){
    margin-top: 10%;
    
  }
  
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
    font-size: var(--font-size-subTitle);
    background-color: var(--background-color-text-darkTheme);
    margin-bottom: 100px;

    @media screen and (max-width: 1100px){
        font-size: var(--font-size-subTitleMedium);
    }

    @media screen and (max-width: 1000px){
        margin-bottom: 0;
    }

    @media screen and (max-width: 850px){
        font-size: var(--font-size-subTitleSmall);
        height: 10vh;
    }

    @media screen and (max-width: 666px){
        font-size: var(--font-size-subTitleVerySmall);
    }
  }

  .timeline {
    position: relative;
    width: 100%;
    padding: 15px 0;

    @media screen and (max-width: 1000px){
      display: none;
    }
  }

  .timeline::after {
    content: '';
    position: absolute;
    width: 7px;
    background-image: linear-gradient(90deg, var(--couleur-debut), var(--couleur-fin));
    top: 0;
    bottom: -150px;
    left: 50%;
    margin-left: -4px;

  }

  .timeline-dot {
    position: absolute;
    width: 30px;
    height: 30px;
    background-image: linear-gradient(90deg, var(--couleur-debut), var(--couleur-fin));
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  .timeline-dot-top {
    top: 0;
  }

  .timeline-dot-bottom {
    bottom: -150px;
  }

  .container {
    padding: 15px 30px;
    position: relative;
    width: 50%;
  }

  .container.left {
    left: 0;
  }

  .container.right {
    left: 50%;
  }

  .container::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    top: calc(50% - 40px);
    right: -40px;
    background: #ffffff;
    border: 2px solid var(--color-black);
    border-radius: 50px;
    z-index: 1;
  }

  .container.right::after {
    left: -40px;
  }

  .container .date {
    position: absolute;
    display: inline-block;
    top: 46%;
    text-align: center;
    font-size: var(--font-size-text-medium);
    font-weight: bold;
    color: var(--text-color-darkTheme);
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 1;

    @media screen and (max-width: 1250px){
        font-size: var(--font-size-text-small);
        top: 47%;
    }
  }

  .container.left .date {
    right: -400px;

    @media screen and (max-width: 1250px){
        right: -350px;
    }
  }

  .container.right .date {
    left: -400px;

    @media screen and (max-width: 1250px){
        left: -350px;
    }
  }

  .container .content {
    padding: 30px;
    background: var(--color-white);
    position: relative;
    border-radius: 10px;
    width: 70%;
    margin-block: 30px;
  }

  .container.right .content {
    margin-left: 150px;
  }

  .container.left .content {
    margin-left: 17%;
  }

  .container .content h2 {
    margin: 0 0 20px 0;
    font-size: var(--font-size-subTitleSmall);
    font-weight: normal;
    color: var(--text-color-orange);

    @media screen and (max-width: 1250px){
        font-size: var(--font-size-text-subTitleLittleSmall);
    }

    @media screen and (max-width: 666px){
        font-size: var(--font-size-text-subTitleVerySmall);
    }
  }

  .container .content p {
    margin: 0;
    font-size: var(--font-size-text-small);
    color: #000000;

    @media screen and (max-width: 1250px){
        font-size: var(--font-size-text-littleSmall);
    }

    @media screen and (max-width: 666px){
        font-size: var(--font-size-text-verySmall);
    }
  }

  .books {
    position: absolute;
    top: -50px;
    right: 20px;
    width: 25%;
  }

  .cactus {
    position: absolute;
    top: -50%;
    left: 20px;
    width: 25%;

    @media screen and (max-width: 1612px){
        top: -42%;
    }

    @media screen and (max-width: 1472px){
        top: -35%;
    }

    @media screen and (max-width: 1350px){
        top: -30%;
    }

    @media screen and (max-width: 1250px){
        
    }

    @media screen and (max-width: 1150px){
        top: -25%;
    }

    @media screen and (max-width: 1050px){
        top: -20%;
    }
  }

  .persoOrdi {
    position: absolute;
    bottom: -500px;
    left: 200px;
    width: 125%;

    @media screen and (max-width: 1316px){
      left: 100px;
    }
  }

}

.experience-responsive {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1000px){
      display: flex;
    }

    div {
      margin-bottom: 50px;
      width: 80%;
      background-color: rgba(0 , 0, 0, 0.5);
      padding: 20px;
      border-radius: 20px;

      @media screen and (max-width: 666px){
        width: 90%;
      }

      @media screen and (max-width: 500px){
        width: 95%;
      }
    }

    h2 {
      font-size: var(--font-size-nav);
      color: var(--text-color-orange);
      margin-bottom: 20px;
      text-align: center;

      @media screen and (max-width: 850px){
        font-size: var(--font-size-navMedium);
      }

      @media screen and (max-width: 666px){
        font-size: var(--font-size-navSmall);
      }

      @media screen and (max-width: 500px){
        font-size: var(--font-size-navLittleSmall);
      }
    }

    p {
      text-align: justify;
      font-size: var(--font-size-text-small);

      @media screen and (max-width: 600px){
          font-size: var(--font-size-text-littleSmall);
      }

      @media screen and (max-width: 400px){
          text-align: center;
          font-size: var(--font-size-text-verySmall);
      }
    }

    span {
      margin-top: 10px;
      text-align: right;
      display: block;
    }
}

.projets {
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
    font-size: var(--font-size-subTitle);
    background-color: var(--background-color-text-darkTheme);
    margin-block: 175px 100px;

    @media screen and (max-width: 1100px){
        font-size: var(--font-size-subTitleMedium);
    }

    @media screen and (max-width: 1000px){
        margin-block: 20px 50px;
    }

    @media screen and (max-width: 850px){
        font-size: var(--font-size-subTitleSmall);
        height: 10vh;
    }

    @media screen and (max-width: 666px){
        font-size: var(--font-size-subTitleVerySmall);
    }
  }

  .flex-container {
    display: flex; 
    justify-content: center;
    flex-wrap: wrap; 
    gap: 40px;
    padding-inline: 150px;

    @media screen and (max-width: 1550px){
      padding-inline: 50px;
    }

    @media screen and (max-width: 1350px){
      padding-inline: 10px;
      gap: 20px;
    }

    @media screen and (max-width: 772px){
      flex-direction: column;
      align-items: center;
    }

    @media screen and (max-width: 466px){
      gap: 0px;
    }
    
  }

  .project {
    background-color: var(--background-color-cardProjet);
    border: 3px solid var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    width: calc(33.33% - 40px); 
    margin-bottom: 40px;
    overflow: hidden; 
   
  }

  button {
    background: transparent;
    border: 2px solid var(--text-color-orange);
    border-radius: 10px;
    padding: 10px 20px;
    color: var(--text-color-orange);
    font-size: var(--font-size-text-small);
    margin-block: 20px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  button:hover {
    background: var(--text-color-orange);
    color: var(--color-white);
    border: var(--color-white) 2px solid;
  }

  .html,
  .css,
  .js,
  .wordpress,
  .php,
  .vuejs {
    border: 3px solid var(--color-black);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 80px;
    border-radius: 40px;
    margin-top: 10px;

    @media screen and (max-width: 858px){
      height: 40px;
      width: 70px;
    }
  }

  .wordpress {
    width: 130px;

    @media screen and (max-width: 858px){
      width: 100px;
    }
  }

  .html:hover {
    background-color: #df6d3a;
    border: 3px solid #ffffff;
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }

  .css:hover {
    background-color: #3963e8;
    border: 3px solid #ffffff;
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }

  .js:hover {
    background-color: #ffdf2c;
    border: 3px solid #ffffff;
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }

  .wordpress:hover {
    background-color: #3b7397;
    border: 3px solid #ffffff;
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }

  .php:hover {
    background-color: #777aae;
    border: 3px solid #ffffff;
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }

  .vuejs:hover {
    background-color: #47ba87;
    border: 3px solid #ffffff;
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }

  .project1 img {
    width: 100%;
    margin-block: 0px;
  }

  .project2 img {
    width: 95%;
    margin-block: 58px;
  }

  .project3 img {
    width: 100%;
    object-fit: cover;
    margin-block: 0px;
  }

  .project4 img {
    width: 100%;
    object-fit: cover;
    margin-block: 0px;
  }

  .project5 img {
    width: 90%;
    margin-block: 0px;
  }

  .project6 img {
    width: 100%;
    margin-block: 0px;
  }

  .project7 img {
    width: 78%;
    margin-block: 79px;
  } 

  .project8 img {
    width: 140%;
    margin-block: 0px;
  }


  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    
    color: var(--text-color-darkTheme);
    width: 100%;
    background-color: var(--background-color-text-darkTheme);
    border-radius: 0 0 10px 10px;
    border-top: 3px solid var(--color-white);
  }

  .content h2 {
    font-size: var(--font-size-text-medium);
    margin-block: 20px;
    font-weight: var(--font-weight-light);
  }

  .content ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    font-size: var(--font-size-text-small);

    @media screen and (max-width: 858px){
      font-size: var(--font-size-text-verySmall);
    }

    @media screen and (max-width: 466px){
      gap: 2px;
    }
  }

  .project1,
  .project2,
  .project3,
  .project6,
  .project7,
  .project8 {
    width: calc(33.33% - 40px);

    @media screen and (max-width: 1350px){
      width: calc(50% - 40px);
    }

    @media screen and (max-width: 772px){
      width: 75%;
    }

    @media screen and (max-width: 466px){
      width: 100%;
    }
  }

  .project4,
  .project5 {
    width: calc(50% - 40px);

    @media screen and (max-width: 772px){
      width: 75%;
    }

    @media screen and (max-width: 466px){
      width: 100%;
    }
  }
}

</style>