<script>
import { RouterView } from 'vue-router'

export default {
  name: 'App',
  methods: {
    created() {
      this.$router.push('/loading');
    },
    github() {
      window.open("https://github.com/AntoineSP01", "_blank");
    },
    discord() {
      window.open("https://discord.com/users/_toto2001", "_blank");
    },
    linkedin() {
      window.open("https://www.linkedin.com/in/antoineschmerberperraud/", "_blank");
    },
  },
};
</script>


<template>
  
  <header>
    <nav>
      <img class="logo" src="../src/assets/Icons/logo_black.svg" alt="Logo du site">
      <p>Portfolio</p>
      <ul>
        <li>
          <a href="https://github.com/AntoineSP01" target="_blank" rel="noopener noreferrer"><img src="../src/assets/Icons/github.svg" alt="Logo de Github"></a></li>
        <li><a href="https://discord.com/channels/@me/_toto2001" target="_blank" rel="noopener noreferrer"><img src="../src/assets/Icons/discord.svg" alt="Logo de Discord"></a></li>
        <li><a href="https://www.linkedin.com/in/antoineschmerberperraud/" target="_blank" rel="noopener noreferrer"><img src="../src/assets/Icons/linkedin.svg" alt="Logo de Linkedin"></a></li>
      </ul>
    </nav>
  </header>

  <RouterView />

  <section class="contacts">
    <h2 class="title">Contacts</h2>
    <div class="contacts_content">
      <img src="../src/assets/Icons/logo_black.svg" alt="">
      <p class="txt">N'hésitez pas à me contacter !</p>
      <p class="email"><span>schmerberperraud@gmail.com</span></p>
      <p class="tel"><span>06 18 54 16 80</span></p>
      <p class="txt">Ou remplissez ce formulaire, je suis à votre disposition pour plus d’information</p>

      <form action="">
        <div>
          <input class="prenom" type="text" placeholder="Prénom">
          <input class="nom" type="text" placeholder="Nom">
        </div>

        <input class="mail" type="text" placeholder="Votre mail">
        <textarea class="message" required="" cols="50" rows="10" name="textarea" placeholder=" Votre message"></textarea>

        <div class="submit">
          <input class="envoyer" type="submit" value="Envoyer">
        </div>
        
      </form>
    </div>
  </section>

  <section class="footer">
    <p>© 2024 Developped by Antoine Schmerber-Perraud and designed by Arthur Meynieux-Naudin.</p>
    <div>
      <span @click="github">Github</span>
      <span @click="discord">Discord</span>
      <span @click="linkedin">Linkedin</span>
    </div>
  </section>

</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 30px;
  height: 10vh;
  background-color: var(--background-color-text-darkTheme);

  .logo {
    width: 10%;
    cursor: pointer;

    @media screen and (max-width: 668px){
      width: 20%;
    }

    @media screen and (max-width: 500px){
      width: 30%;
    }
  }

  ul {
    display: flex;
    gap: 20px;

    @media screen and (max-width: 668px){
      display: none;
    }
  }

  li {
    display: flex;
    justify-content: center;
  }

  p {
    font-size: var(--font-size-nav);
    color: var(--text-color-orange);

    @media screen and (max-width: 450px){
      font-size: var(--font-size-navMedium);
    }

    @media screen and (max-width: 350px){
      font-size: var(--font-size-navSmall);
    }
  }
}



.contacts {
  background-image: linear-gradient(90deg, var(--couleur-debut), var(--couleur-fin));
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
    font-size: var(--font-size-subTitle);
    background-color: var(--background-color-text-darkTheme);

    @media screen and (max-width: 1000px){
        font-size: var(--font-size-subTitleMedium);
    }

    @media screen and (max-width: 700px){
        font-size: var(--font-size-subTitleSmall);
    }

    @media screen and (max-width: 500px){
        font-size: var(--font-size-subTitleVerySmall);
    }
  }

  .contacts_content {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: var(--color-black);
    width: 100%;

    img {
      width: 15%;
      margin-block: 70px 50px;

      @media screen and (max-width: 1150px){
          width: 20%;
      }

      @media screen and (max-width: 800px){
          width: 25%;
      }

      @media screen and (max-width: 500px){
            width: 30%;
      }
    }

    .email {
      font-size: var(--font-size-subTitleSmall);
      margin-block: 40px;
      background-color: var(--background-color-text-darkTheme);
      padding-inline: 20px;
      border-radius: 10px;

      @media screen and (max-width: 750px){
        font-size: var(--font-size-subTitleLittleSmall);
      }

      @media screen and (max-width: 500px){
        font-size: var(--font-size-subTitleVerySmall);
      }

      @media screen and (max-width: 400px){
        font-size: var(--font-size-text-small);
      }
      
      span {
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        background-image: linear-gradient(to right, var(--couleur-debut), var(--couleur-fin));
        display: inline-block;
      }
    }

    .tel {
      font-size: var(--font-size-subTitleSmall);
      margin-bottom: 60px;
      background-color: var(--background-color-text-darkTheme);
      padding-inline: 20px;
      border-radius: 10px;

      @media screen and (max-width: 750px){
        font-size: var(--font-size-subTitleLittleSmall);
      }

      @media screen and (max-width: 500px){
        font-size: var(--font-size-subTitleVerySmall);
      }

      @media screen and (max-width: 400px){
        font-size: var(--font-size-text-small);
      }


      span {
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        background-image: linear-gradient(to right, var(--couleur-debut), var(--couleur-fin));
        display: inline-block;
      }
    }

    .txt {
      font-size: var(--font-size-text-medium);
      text-align: center;

      @media screen and (max-width: 850px){
            width: 90%;
            font-size: var(--font-size-text-small);
        }

        @media screen and (max-width: 666px){
            font-size: var(--font-size-text-littleSmall);
        }
    }
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 50px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 60%;
      gap: 30px;
      margin-bottom: 30px;
    }

    input, textarea {
      width: 60%;
      padding: 10px 0;
      font-size: var(--font-size-text-small);
      color: var(--color-black);
      border: none;
      border-bottom: 3px solid var(--color-black);
      outline: none;
      background: transparent;
    }

    textarea {
      border: 3px solid var(--color-black);
      margin-top: 40px;
    }

    .submit {
      margin-top: 70px;
      background-color: var(--background-color-text-darkTheme);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
      padding-block: 10px;

      @media screen and (max-width: 875px){
        width: 30%;
      }

      @media screen and (max-width: 400px){
        width: 40%;
      }
    }

    .envoyer {
      text-align: center;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      background-image: linear-gradient(to right, var(--couleur-debut), var(--couleur-fin));
      display: inline-block;
      border: none;
      font-size: var(--font-size-text);
      cursor: pointer;

      @media screen and (max-width: 875px){
        font-size: var(--font-size-text-small);
      }
    }

  }
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25vh;
  background-color: var(--background-color-text-darkTheme);
  gap: 20%;

  @media screen and (max-width: 868px){
    height: 45vh;
    flex-direction: column;
    gap: 40px;
  }

  p {
    font-size: var(--font-size-text-small);
    color: var(--text-color-orange);
    width: 40%;
    text-align: center;

    @media screen and (max-width: 868px){
    width: 80%;
  }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  span {
    font-size: var(--font-size-text-small);
    color: var(--text-color-orange);
    margin-inline: 20px;
    cursor: pointer; 
    text-decoration: underline;
  }
}

</style>
