document.addEventListener('DOMContentLoaded', function() {
  let isDay = localStorage.getItem('isDay') === 'true';
  if (isDay) {
    applyLightTheme();
  } else {
    applyDarkTheme();
  }
});

export function toggleDayNight() {
  let isDay = localStorage.getItem('isDay') === 'true';
  if (isDay) {
    applyDarkTheme();
    localStorage.setItem('isDay', false);
  } else {
    applyLightTheme();
    localStorage.setItem('isDay', true);
  }
}

function applyLightTheme() {
  document.body.style.background = 'var(--background-color-lightTheme)';
  applyLightThemePStyle();
  applyLightThemeFooterStyle();
  applyLightThemeExperienceStyle();
  applyLightThemeContactStyle();
  applyLightThemeProjectStyle();
}

function applyDarkTheme() {
  document.body.style.background = 'var(--background-color-darkTheme)';
  applyDarkThemePStyle();
  applyDarkThemeFooterStyle();
  applyDarkThemeExperienceStyle();
  applyDarkThemeContactStyle();
  applyDarkThemeProjectStyle();
}

function applyLightThemePStyle() {
  const pElements = document.querySelectorAll('.principal p');
  const themeElements = document.querySelectorAll('.theme p');
  const h1ThemeElements = document.querySelectorAll('h1');
  const h2ThemeElements = document.querySelectorAll('.theme h2');
  for (let i = 0; i < pElements.length; i++) {
    pElements[i].style.color = 'var(--text-color-lightTheme)';
  }
  for (let i = 0; i < themeElements.length; i++) {
    themeElements[i].style.color = 'var(--text-color-lightTheme)';
  }
  for (let i = 0; i < h1ThemeElements.length; i++) {
    h1ThemeElements[i].style.color = 'var( --text-color-orangeLightTheme)';
  }
  for (let i = 0; i < h2ThemeElements.length; i++) {
    h2ThemeElements[i].style.color = 'var( --text-color-orangeLightTheme)';
  }
}

function applyDarkThemePStyle() {
  const pElements = document.querySelectorAll('.principal p');
  const themeElements = document.querySelectorAll('.theme p');
  const h1ThemeElements = document.querySelectorAll('h1');
  const h2ThemeElements = document.querySelectorAll('.theme h2');
  for (let i = 0; i < pElements.length; i++) {
    pElements[i].style.color = 'var(--text-color-darkTheme)';
  }
  for (let i = 0; i < themeElements.length; i++) {
    themeElements[i].style.color = 'var(--text-color-darkTheme)';
  }
  for (let i = 0; i < h1ThemeElements.length; i++) {
    h1ThemeElements[i].style.color = 'var(--text-color-orange)';
  }
  for (let i = 0; i < h2ThemeElements.length; i++) {
    h2ThemeElements[i].style.color = 'var(--text-color-orange)';
  }
}

function applyLightThemeExperienceStyle() {
  const Elements = document.querySelectorAll('.date');
  const h2Elements = document.querySelectorAll('.experience h3');
  for (let i = 0; i < Elements.length; i++) {
    Elements[i].style.color = 'var(--text-color-lightTheme)';
  }
  for (let i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.color = 'var( --text-color-orangeLightTheme)';
  }
}

function applyDarkThemeExperienceStyle() {
  const Elements = document.querySelectorAll('.date');
  const h2Elements = document.querySelectorAll('.experience h3');
  for (let i = 0; i < Elements.length; i++) {
    Elements[i].style.color = 'var(--text-color-darkTheme)';
  }
  for (let i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.color = 'var(--text-color-orange)';
  }
}

function applyLightThemeProjectStyle() {
  const projectElements = document.querySelectorAll('.project');
  for (let i = 0; i < projectElements.length; i++) {
    projectElements[i].style.border = '5px solid var(--color-black)';
    projectElements[i].style.background = 'var(--background-color-cardProjetDark)';
  }
}

function applyDarkThemeProjectStyle() {
  const projectElements = document.querySelectorAll('.project');
  for (let i = 0; i < projectElements.length; i++) {
    projectElements[i].style.border = '5px solid var(--color-white)';
    projectElements[i].style.background = 'var(--background-color-cardProjet)';
  }
}

function applyLightThemeContactStyle() {
  const pElements = document.querySelectorAll('.contacts p');
  const emailElements = document.querySelectorAll('.email');
  const telElements = document.querySelectorAll('.tel');
  const submitElements = document.querySelectorAll('.submit');
  const projectElements = document.querySelectorAll('textarea');
  const prenomElements = document.querySelectorAll('.prenom');
  const nomElements = document.querySelectorAll('.nom');
  const mailElements = document.querySelectorAll('.mail');

  for (let i = 0; i < emailElements.length; i++) {
    emailElements[i].style.background = 'var(--background-color-lightTheme)';
  }
  for (let i = 0; i < telElements.length; i++) {
    telElements[i].style.background = 'var(--background-color-lightTheme)';
  }

  for (let i = 0; i < submitElements.length; i++) {
    submitElements[i].style.background = 'var(--background-color-lightTheme)';
  }
  for (let i = 0; i < pElements.length; i++) {
    pElements[i].style.color = 'var(--text-color-darkTheme)';
  }
  for (let i = 0; i < prenomElements.length; i++) {
    prenomElements[i].style.borderBottom = '2px solid var(--color-white)';
    prenomElements[i].style.color = 'var(--text-color-darkTheme)';
  }
  for (let i = 0; i < projectElements.length; i++) {
    projectElements[i].style.border = '2px solid var(--color-white)';
    projectElements[i].style.color = 'var(--text-color-darkTheme)';
  }
  for (let i = 0; i < nomElements.length; i++) {
    nomElements[i].style.borderBottom = '2px solid var(--color-white)';
    nomElements[i].style.color = 'var(--text-color-darkTheme)';
  }
  for (let i = 0; i < mailElements.length; i++) {
    mailElements[i].style.borderBottom = '2px solid var(--color-white)';
    mailElements[i].style.color = 'var(--text-color-darkTheme)';
  }
}

function applyDarkThemeContactStyle() {
  const pElements = document.querySelectorAll('.contacts p');
  const emailElements = document.querySelectorAll('.email');
  const telElements = document.querySelectorAll('.tel');
  const submitElements = document.querySelectorAll('.submit');
  const projectElements = document.querySelectorAll('textarea');
  const prenomElements = document.querySelectorAll('.prenom');
  const nomElements = document.querySelectorAll('.nom');
  const mailElements = document.querySelectorAll('.mail');

  for (let i = 0; i < emailElements.length; i++) {
    emailElements[i].style.background = 'var(--background-color-darkTheme)';
  }
  for (let i = 0; i < telElements.length; i++) {
    telElements[i].style.background = 'var(--background-color-darkTheme)';
  }
  for (let i = 0; i < submitElements.length; i++) {
    submitElements[i].style.background = 'var(--background-color-darkTheme)';
  }
  for (let i = 0; i < pElements.length; i++) {
    pElements[i].style.color = 'var(--text-color-lightTheme)';
  }
  for (let i = 0; i < prenomElements.length; i++) {
    prenomElements[i].style.borderBottom = '2px solid var(--color-black)';
    prenomElements[i].style.color = 'var(--text-color-lightTheme)';
  }
  for (let i = 0; i < projectElements.length; i++) {
    projectElements[i].style.border = '2px solid var(--color-black)';
    projectElements[i].style.color = 'var(--text-color-lightTheme)';
  }
  for (let i = 0; i < nomElements.length; i++) {
    nomElements[i].style.borderBottom = '2px solid var(--color-black)';
    nomElements[i].style.color = 'var(--text-color-lightTheme)';
  }
  for (let i = 0; i < mailElements.length; i++) {
    mailElements[i].style.borderBottom = '2px solid var(--color-black)';
    mailElements[i].style.color = 'var(--text-color-lightTheme)';
  }
}

function applyLightThemeFooterStyle() {
  const footerElements = document.querySelectorAll('.footer');
  const h5Elements = document.querySelectorAll('h5');
  const spanElements = document.querySelectorAll('span');
  for (let i = 0; i < footerElements.length; i++) {
    footerElements[i].style.background = 'var(--background-color-lightTheme)';
  }
  for (let i = 0; i < h5Elements.length; i++) {
    h5Elements[i].style.color = 'var(--text-color-orangeLightTheme)';
  }
  for (let i = 0; i < spanElements.length; i++) {
    spanElements[i].style.color = 'var(--text-color-orangeLightTheme)';
  }
}

function applyDarkThemeFooterStyle() {
  const footerElements = document.querySelectorAll('.footer');
  const h5Elements = document.querySelectorAll('h5');
  const spanElements = document.querySelectorAll('span');
  for (let i = 0; i < footerElements.length; i++) {
    footerElements[i].style.background = 'var(--background-color-text-darkTheme)';
  }
  for (let i = 0; i < h5Elements.length; i++) {
    h5Elements[i].style.color = 'var(--text-color-orange)';
  }
  for (let i = 0; i < spanElements.length; i++) {
    spanElements[i].style.color = 'var(--text-color-orange)';
  }
}