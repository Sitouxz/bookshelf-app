const modal=document.getElementById("addModal"),modalDelete=document.getElementById("deleteModal"),btn=document.getElementById("addButton"),span=document.getElementsByClassName("close")[0],submit=document.getElementById("formSubmit");let deleteId;form=document.getElementById("addBookForm");let books=[];function addBook(){let a=document.getElementById("formTitle").value,b=document.getElementById("formAuthor").value,c=document.getElementById("formYear").value,d=document.getElementById("isComplete").checked;books.unshift({id:+new Date,title:a,author:b,year:c,isComplete:d}),modal.style.display="none",saveData()}function deleteModal(a){let b=document.getElementById("deleteModal");deleteId=a,b.style.display="block",window.onclick=function(a){a.target==b&&(b.style.display="none")}}function closeModal(){modalDelete.style.display="none"}function deleteBook(){books=books.filter(a=>a.id!=deleteId),saveData(),closeModal()}function saveData(){let a=JSON.stringify(books);localStorage.setItem("books",a),renderData()}function loadData(){let a=localStorage.getItem("books");a&&(books=JSON.parse(a),renderData())}function moveBook(b){let a=books.find(a=>a.id==b);a.isComplete=!a.isComplete,saveData()}function searchBook(){let d=document.getElementById("searchInput").value,b=document.getElementById("readContainer"),c=document.getElementById("unreadContainer");for(let a of(b.innerHTML="",c.innerHTML="",books))a.title.toLowerCase().includes(d.toLowerCase())&&(a.isComplete?b.innerHTML+=`
        <div class="book">
                <div class="bookInfo">
                  <h2>${a.title} <span>${a.year}</span></h2>
                  <p>Author: ${a.author}</p>
                </div>
                <div class="bookMenu">
                  <button class="btnRead" onclick="moveBook(${a.id})">
                    <i class="fa-solid fa-circle-xmark"></i>
                  </button>
                  <button class="btnRead" onclick="editBook(${a.id})">
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button class="btnDelete" id="deleteButton" onclick="deleteModal(${a.id})">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
        `:c.innerHTML+=`
        <div class="book">
                <div class="bookInfo">
                  <h2>${a.title} <span>${a.year}</span></h2>
                  <p>Author: ${a.author}</p>
                </div>
                <div class="bookMenu">
                  <button class="btnRead" onclick="moveBook(${a.id})">
                    <i class="fa-solid fa-circle-check"></i>
                  </button>
                  <button class="btnRead" onclick="editBook(${a.id})">
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button class="btnDelete" id="deleteButton" onclick="deleteModal(${a.id})">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
        `)}function editBook(f){let a=books.find(a=>a.id==f),b=document.getElementById("formTitle"),c=document.getElementById("formAuthor"),d=document.getElementById("formYear"),e=document.getElementById("isComplete");b.value=a.title,c.value=a.author,d.value=a.year,e.checked=a.isComplete,modal.style.display="block",submit.onclick=function(){a.title=b.value,a.author=c.value,a.year=d.value,a.isComplete=e.checked,modal.style.display="none",saveData()}}function renderData(){let b=document.getElementById("readContainer"),c=document.getElementById("unreadContainer");for(let a of(b.innerHTML="",c.innerHTML="",books))a.isComplete?b.innerHTML+=`
      <div class="book">
              <div class="bookInfo">
                <h2>${a.title} <span>${a.year}</span></h2>
                <p>Author: ${a.author}</p>
              </div>
              <div class="bookMenu">
                <button class="btnRead" onclick="moveBook(${a.id})">
                  <i class="fa-solid fa-circle-xmark"></i>
                </button>
                <button class="btnRead" onclick="editBook(${a.id})">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btnDelete" id="deleteButton" onclick="deleteModal(${a.id})">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
      `:c.innerHTML+=`
      <div class="book">
              <div class="bookInfo">
                <h2>${a.title} <span>${a.year}</span></h2>
                <p>Author: ${a.author}</p>
              </div>
              <div class="bookMenu">
                <button class="btnRead" onclick="moveBook(${a.id})">
                  <i class="fa-solid fa-circle-check"></i>
                </button>
                <button class="btnRead" onclick="editBook(${a.id})">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btnDelete" id="deleteButton" onclick="deleteModal(${a.id})">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
      `}function handleForm(a){a.preventDefault()}loadData(),btn.onclick=function(){modal.style.display="block"},span.onclick=function(){modal.style.display="none"},window.onclick=function(a){a.target==modal&&(modal.style.display="none")},(search=document.getElementById("searchInput")).addEventListener("keyup",a=>{a.preventDefault(),searchBook()}),form.addEventListener("submit",handleForm)