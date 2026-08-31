const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `<div class="color">
    <table>
    <tr>
       <th>key</th>
       <th>keycode</th>
       <th>Code<th>
    </tr>
    f
       <td>${e.key === " " ? "Space" : e.key}</td>
        <td>${e.keyCode}</td>
       <td>${e.code}</td>   
    </tr>
    </table>
    </div>`;
})