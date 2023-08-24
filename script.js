// Base de dados Nossa
const miniRedeSocial = {
    usuarios : [ 
        {
            username: `omario`,
        }
    ],
    posts: [
        {
            id: 1,
            owner: `omario`,
            content: 'Crie Posts'
        }
    ],
  criaPost(dados, htmlOnly = false){
    if(!htmlOnly){
    // Cria Posts na memória (Array/Objeto)
    miniRedeSocial.posts.push({
            id: miniRedeSocial.posts.length + 1,
            owner: dados.owner,
            content: dados.content
           
        });
    }
     // Cria post no HTML
        const $listaDePosts = document.querySelector(".listaDePosts");
        $listaDePosts.insertAdjacentHTML('afterbegin', `<li>${dados.content}</li>`);
    }
};




// [CODIGO de Front End: Web]
document.addEventListener('DOMContentLoaded', function() {
    const $meuForm = document.querySelector('form');

//CRUD : [READ]
miniRedeSocial.posts.forEach(( {owner, content}) => {
    miniRedeSocial.criaPost({owner: owner, content: content}, true)
})

//CRUD : CREATE
    $meuForm.addEventListener('submit', function criaPostController(infosDoEvento) {
      infosDoEvento.preventDefault();
      console.log("Novo Post enviado!")
      const $campoCriaPost = document.querySelector('input[name="anotacoes"]');

      miniRedeSocial.criaPost({ owner: `omario`, content: $campoCriaPost.value})
      console.log(miniRedeSocial.posts);
      // Limpa o campo de anotações após adicionar o post
      $campoCriaPost.value = '';
      
    });
  });