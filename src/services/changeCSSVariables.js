export const changeCSSVariables = (theme) => {
    const root = document.querySelector(':root')
    root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`)
    root.style.setProperty('--theme-default-bgimage', `var(--theme-${theme}-bgimage)`)
}
/* 
  --theme-light-header: #dfe2df;
  --theme-dark-header: #ca6c6f;
  --theme-neitral-header: #cccc46;

  --theme-default-header: var(--theme-neitral-header);
*/