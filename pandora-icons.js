(() => {
  "use strict";

  const assets = "./File_Bank/ASSETS/SVG/";
  const slots = {
    home: ["Home", "nature-symbols/home"],
    subjects: ["Subjects", "study-tools/folder"],
    reviewers: ["Reviewers", "study-tools/book"],
    practice: ["Practice Links", "study-tools/link"],
    quiz: ["Quiz", "study-tools/quiz"],
    favorites: ["Favorites", "general/heart"],
    tasks: ["Tasks", "study-tools/checklist"],
    settings: ["Settings", "nature-symbols/gear"],
    pdf: ["PDF", "resources/pdf"],
    form: ["Forms", "resources/form"]
  };

  function iconGroupPath(group) {
    const themed = { "Hangyodon Pixel": "hangyodon/pixel", "Hangyodon Stickers 01": "hangyodon/stickers-01", "Hangyodon Stickers 02": "hangyodon/stickers-02" };
    return themed[group] || group.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");
  }

  const groups = {
    "Hangyodon Pixel": ["home","subjects","reviewers","practice-links","quiz","favorites","tasks","settings","pdf","forms"],
    "Hangyodon Stickers 01": ["chef-hangyodon","clover-day","detective","headphone-hangyodon","pajama-buddy","party-hat","peek-a-boo","pool-float","rose-bouquet","study-with-sayuri","thinking-at-the-desk","thumbs-up"],
    "Hangyodon Stickers 02": ["bedtime-story","birthday-balloons","bow-tie","bubble-mail","bunny-plush","candy-heart","cozy-scarf","document-delivery","flashcard-drill","goofy-grin","happy-tears","ice-cream-cone","library-stack","midnight-nap","ninja-hood","paint-swatches","planner-stamp","rainy-doorstep","sayuri-hat","survey-check"],
    Campus: ["backpack","calculator","globe","graduation","laptop","microscope","pencil","ruler"],
    General: ["bookmark","diamond","heart","leaf","moon","sparkle","star","sun"],
    "Nature & Symbols": ["compass","flower","gear","home","key","mountain","paw","umbrella"],
    Resources: ["archive","cloud","download","form","headphones","image","pdf","play"],
    "Study Life": ["alarm","battery","coffee","desk-lamp","flag","lightbulb","pin","trophy"],
    "Study Tools": ["book","calendar","checklist","folder","link","notes","quiz","timer"],
    Subjects: ["lab","math","networking","physics","security","systems","terminal","web"]
  };
  const builtins = new Set(Object.entries(groups).flatMap(([group, names]) =>
    names.map(name => iconGroupPath(group) + "/" + name)
  ));
  const normalize = value => Object.fromEntries(Object.keys(slots).flatMap(key => {
    const icon = value?.[key];
    return typeof icon === "string" && (builtins.has(icon) ||
      (icon.length <= 100000 && /^data:image\/png;base64,[A-Za-z0-9+/]+={0,2}$/.test(icon)))
      ? [[key, icon]] : [];
  }));
  const url = (key, icons) => {
    const value = icons[key] || slots[key][1];
    return builtins.has(value) ? assets + value + ".svg" : value;
  };

  function apply(icons) {
    const safe = normalize(icons);
    for (const key of Object.keys(slots)) {
      const property = "--pandora-icon-" + key;
      const value = 'url("' + url(key, safe) + '")';
      if (document.body.style.getPropertyValue(property) !== value) {
        document.body.style.setProperty(property, value);
      }
    }
  }

  function icon(key) {
    if (!Object.hasOwn(slots, key)) return "";
    return `<span class="p-icon" aria-hidden="true" style="--p-icon:var(--pandora-icon-${key}, url('${url(key, {})}'))"></span>`;
  }

  function editor(icons, opened, themeDefaults) {
    const safe = normalize(icons);
    const choices = Object.entries(groups).filter(([group]) => iconGroupPath(group).startsWith("hangyodon/") === Boolean(themeDefaults)).map(([group, names]) => {
      const category = iconGroupPath(group);
      return `<section><h5>${group}</h5><div class="p-icon-grid">${names.map(name => {
        const id = category + "/" + name;
        return `<button type="button" data-icon-choice="${id}">${previewUrl(url("quiz", { quiz: id }))}<span>${name.replace(/-/g, " ")}</span></button>`;
      }).join("")}</div></section>`;
    }).join("");
    return `<details class="p-icon-editor" data-icon-editor ${opened ? "open" : ""}>
      <summary>5. Customize Icons</summary>
      <p>Choose a built-in icon for each slot. Changes preview across the current page.</p>
      <div class="p-icon-slots">${Object.entries(slots).map(([key, [label]]) => `
        <div class="p-icon-slot">
          ${previewUrl(url(key, safe))}<strong>${label}</strong>
          <button type="button" data-icon-open="${key}">Choose</button>
          
          <button type="button" data-icon-reset="${key}" ${safe[key] && safe[key] !== themeDefaults?.[key] ? "" : "disabled"}>Reset</button>
        </div>`).join("")}</div>
      <dialog class="p-icon-dialog" aria-labelledby="p-icon-stash-title" data-icon-dialog>
        <div class="p-icon-dialog-head"><h4 id="p-icon-stash-title">Icon Stash</h4><button type="button" data-icon-close>Close</button></div>
        <input type="search" placeholder="Search icons…" aria-label="Search icons" data-icon-search>
        <div data-icon-choices>${choices}</div>
      </dialog>
    </details>`;
  }

  function previewUrl(source) {
    return `<img class="p-icon-preview" src="${source}" alt="" width="24" height="24">`;
  }

  window.PandoraIcons = { normalize, apply, icon, editor };
})();
