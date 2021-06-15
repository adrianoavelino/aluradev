(function(){

  const $language = document.querySelector('[data-js=project__language]');
  const $code = document.querySelector('[data-js=editor__code]');
  const $EditorBackground = document.querySelector('[data-js=editor]');
  const $buttonPreview = document.querySelector('.button-preview');
  const $color = document.querySelector('[data-js=project__color]');
  const $error = document.querySelector('.error');
  const $formProject = document.querySelector('[data-js=form-project]');
  const $projectName = document.querySelector('[data-js=project__name]');
  const $projectDescription = document.querySelector('[data-js=project__description]');
  let lastLanguage = 'javascript';

  $language.addEventListener('change', function() {
    updateEditorLanguage();
  });

  function updateEditorLanguage() {
    $code.classList.remove(lastLanguage);
    if (lastLanguage == 'html') $code.classList.remove('xml');
    const language = $language.value;
    $code.classList.add(language);
    lastLanguage = $language.value;
  }

  $buttonPreview.addEventListener('click', function() {
    hljs.highlightBlock($code);
  });

  $color.addEventListener('input', function() {
    $EditorBackground.style.backgroundColor = $color.value;
  });

  $formProject.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!isValidProject()) {
      $error.style.opacity = 1;
      return;
    }

    const project = {
      id: localStorage.length + 1,
      name: $projectName.value,
      description: $projectDescription.value,
      language: $language.value,
      color: $color.value,
      code: $code.innerText
    }
    localStorage.setItem(project.id, JSON.stringify(project));
    resetForm(this);
  });

  function isValidProject() {
    return $code.innerText.length > 0;
  }

  function resetForm(form) {
    form.reset();
    $code.innerText = '';
    $error.style.opacity = 0;
  }

})();
