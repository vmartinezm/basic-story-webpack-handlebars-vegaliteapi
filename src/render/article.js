import template from './article.handlebars'

document.addEventListener('DOMContentLoaded', () => {

  const div = document.createElement('div');

  fetch('http://projects.xocas.com.s3.amazonaws.com/documents/midv_grupo3.json')
  .then((res) => res.json())
  .then((json) => {
    let html = template(json);
    div.innerHTML = html;
    document.body.appendChild(div);

    const event = new Event('articleRendered');
    document.dispatchEvent(event);
  });
      
});