<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  
  <header>
    <nav>
      <img src="../src/assets/Icons/logo_black.svg" alt="Logo du site">
      <p>Portfolio</p>
      <ul>
        <li><img src="../src/assets/Icons/github.svg" alt="Logo de Github"></li>
        <li><img src="../src/assets/Icons/discord.svg" alt="Logo de Discord"></li>
        <li><img src="../src/assets/Icons/linkedin.svg" alt="Logo de Linkedin"></li>
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
    <p>© 2024 Developped by Antoine Schmerber-Perraud and designed by Arthur Meynieux-Naudin. Thanks to him. </p>
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

  ul {
    display: flex;
    gap: 20px;
  }

  li {
    display: flex;
    justify-content: center;
  }

  p {
    font-size: var(--font-size-nav);
    color: var(--text-color-orange);
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
    }

    .email {
      font-size: var(--font-size-subTitleSmall);
      margin-block: 40px;
      background-color: var(--background-color-text-darkTheme);
      padding-inline: 20px;
      border-radius: 10px;
      
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
    }

  }
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: var(--background-color-text-darkTheme);

  p {
    font-size: var(--font-size-text-small);
    color: var(--text-color-orange);
  }
}

</style>
