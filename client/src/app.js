/*
* File: app.js
* Author: Szabó József
* Copyright: 2026, Szabó József
* Group: Szoft-I/N
* Date: 2026-05-14
* Github: https://github.com/CWGSkyStone
* Licenc: MIT
*/

import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import getTours from './tourService.js'

const doc = {
    tourBody: document.querySelector('#tourBody')
}
const tourList = await getTours()

// var rows = ""

tourList.forEach(tour => {
    var row = `
        <tr>
            <td>${tour.id}</td>
            <td>${tour.title}</td>
            <td>${tour.location}</td>
            <td>${tour.difficulty}</td>
            <td>${tour.price} SOL</td>
        </tr>
    `
        // rows += row
        doc.tourBody.innerHTML += row
});

// doc.tourBody.innerHTML = rows
