/*
* File: tourService.js
* Author: Szabó József
* Copyright: 2026, Szabó József
* Group: Szoft-I/N
* Date: 2026-05-14
* Github: https://github.com/CWGSkyStone
* Licenc: MIT
*/

const URL = 'http://localhost:8000/api/tours'

async function getTours(){
    const response = await fetch(URL)
    const result = await response.json()
    if(result.success) return result.data
    else throw new Error(result.message)
}

function testExport(){
    console.log('Több export defaultal?')
}

export{getTours, testExport}