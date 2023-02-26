const form5 = document.querySelector('#Old');

const Old = document.querySelector('#ifOld');
const form1 = document.forms.select;
const reno = document.querySelector('#reno');
console.log(reno);

function Hi(){
    const Old = document.querySelector('#ifOld');

  const newHtml = `<form name="form5">
  <p>Выберите количество владельцев</p>
  <label><input type="radio" id="1owner" name="owners">
  1-2 владельца</label>
  <label><input type="radio" id="3orMoreOwners" name="owners" >
  3 и более</label>`
Old.insertAdjacentHTML('beforeend', newHtml);
}

function getBlank(){
const Old = document.querySelector('#ifOld');
Old.remove();
}

function ifreno() {
    let renoHtml = `<form name="form2">
    <p>Выберите модель</p>
    <select name="select" >
      <option value="logan" >Logan</option>
      <option value="loganS">Logan Stepway
      </option>
      <option value="sandero">Sandero</option>
      <option value="duster">Duster</option>
    </select>
</form>`
reno.insertAdjacentHTML('beforeend', renoHtml);
    
}

    console.log(reno.checked);
