import React, { useState, useEffect } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Grid } from '@giphy/react-components'
import { getValue } from '@testing-library/user-event/dist/utils';

function ShowGift() {
    const [getGif, setGif] = useState([]);
    const [text, setText] = useState([]);
    const gf = new GiphyFetch('0bJRxbqEHSUPY7AMaS6EHFDgSDsItRh4');
    const info = async () => {
        const res = await gf.gifs(text, text, { limit: 10 })
        setGif(res.data);
    }

    const ingresar = (e) => {
        if (text.length === 0) {
            setGif([])
        } else {
            setGif([])
            info();
        }
        setText("")
    }

    const manageText = (e) => {
        setText(e.target.value);
    }



    return (
        <div>
            <input type="text" value={text} onChange={manageText} placeholder="Ingresa categoria de Gif" />
            <button onClick={ingresar}>Buscar</button>
            {(getGif.length === 0) ?
                <h1>Ingresa una categoria de Gifs</h1> :
                getGif.map((gif) => {
                    return (
                        <div>
                            <img src={gif.images.downsized.url} alt="Gif" />
                        </div>
                    )
                })
            }




        </div>
    )
}

export default ShowGift