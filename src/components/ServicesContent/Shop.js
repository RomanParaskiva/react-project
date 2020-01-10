import React from 'react';

function Shop() {
    return(
        <form >

            <select >
                <option value=''></option>
                <option value="1000">Грейпфрут</option>
                <option value="2000">Лайм</option>
                <option value="3000">Кокос</option>
                <option value="5000">Манго</option>
            </select>
            <input type="submit" value="Отправить"/>
        </form>
    )
}

export default Shop;