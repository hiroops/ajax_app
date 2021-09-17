const buildHTML = (XHR) => {
 const item = XHR.response.post;
  // console.log(item);
 const html =`
    <div class="post">
      <div class="post-date">
        投稿日時:${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
  // console.log(html);
};

function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    // console.log(form);
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      // console.log(formData);
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      // console.log(list)
      const formText = document.getElementById("content");
      // console.log(formText);
      
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value ="";
    };
  });
};

window.addEventListener('load', post);