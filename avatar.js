$('#ctr-nome').on('input', (e) => {
  $('#avatar-nome').text($('#ctr-nome').val());
});

$('#ctr-cor').on('change', (e) =>{
  $('#avatar-corpo').css('background-color', $('#ctr-cor').val());
  $('#avatar-cabeca').css('background-color', $('#ctr-cor').val());
});

$('#ctr-cabelo').on('change', (e) =>{
  $('#avatar-cabelo').attr('src', $('#ctr-cabelo').val());
});

$('input[type="checkbox"]').on('change', (e) => {
  $('#' + e.currentTarget.value).toggleClass('visivel');
});

$('#ctr-baixar').on('click', (e) => {
    // no clique de um botão "Baixar imagem"...
  // 'avatarEl' deve conter o elemento #avatar-preview
  let avatarEl = document.querySelector('#avatar-preview');
  html2canvas(avatarEl, { useCORS: true }).then(function (canvas) {
      // a  foi gerada nesse objeto "canvas" e vamos pedir a ele
      // uma URL que a representa, codificada em uma String no modelo base64¹
      //
      // ¹base64: é uma forma de representar os pixels da imagem (ou qualquer
      // informação, na verdade) usando uma string com 64 tipos de caracteres
      // (todas as letras, maiúsculas e minúsculas, os algarismos de 0 a 9
      // e os símbolos '/' e '+'). Para mais informações, veja a página
      // da Wikipedia sobre base64 (https://pt.wikipedia.org/wiki/Base64)
      let imagemCodificadaEmURL = canvas.toDataURL();

      // cria um <a href="xxx" download="avatar.png"></a> dinamicamente
      // e o configura para que ele aponte (href) para uma URL que codifica
      // a imagem gerada pela biblioteca html2canvas
      let linkEl = document.createElement('a');
      linkEl.download = 'avatar.png';
      linkEl.href = imagemCodificadaEmURL;

      // coloca esse link no body da página
      document.body.appendChild(linkEl);

      // simula um clique no link
      linkEl.click();
    }
  );
  // fim da callback de clique do botão
});
