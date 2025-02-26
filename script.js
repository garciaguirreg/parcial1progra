function agregarLibro() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const genero = document.getElementById("genero").value;
    const isbn = document.getElementById("isbn").value;

  
    const libro = {
      titulo: titulo,
      autor: autor,
      genero: genero,
      isbn: isbn,
    };

    function editar() {	const titulo = document.getElementById("titulo").value;
        const autor = document.getElementById("autor").value;
        const genero = document.getElementById("genero").value;
        const isbn = document.getElementById("isbn").value;
    
      
        const libro = {
          titulo: titulo,
          autor: autor,
          genero: genero,
          isbn: isbn,
        };

    };

  
    mostrarLibro(libro);
    limpiarFormulario();
  }
  
  function mostrarLibro(libro) {
    const listaLibros = document.getElementById("listaLibros");
    const nuevoLibro = document.createElement("li");
    nuevoLibro.textContent = `Título: ${libro.titulo}, Autor: ${libro.autor}, Género: ${libro.genero}, ISBN: ${libro.isbn}`;
    listaLibros.appendChild(nuevoLibro);
  }
  
  function limpiarFormulario() {
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("isbn").value = "";
  }