'use client'
import React, {useEffect, useState} from 'react'
const Axios = require('axios');
import styles from './Bible.module.css'
require('dotenv').config('.env');

export default function Bible() {

    const [verse, setVerse] = useState("");
    const [book, setBook] = useState("");
    const [chapter, setChapter] = useState("");
    const [verseFrom, setVerseFrom] = useState("");
    const [verseTo, setVerseTo] = useState("");

    const options = {
        method: 'GET',
        url: 'https://ajith-holy-bible.p.rapidapi.com/GetVerses',
        params: {
          Book: book,
          chapter: chapter,
          VerseFrom: verseFrom,
          VerseTo: verseTo
        },
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_BIBLEAPIKEY,
          'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
        }
      };

      const handleSubmit = (event) => {
        event.preventDefault();

        Axios.request(options).then((response)=>{setVerse(response.data.Output)});
      }
    
    
  return (
    <main className={styles.main}>

        <form method="GET">
        <label>Book</label>
        <input type="text" name="bookName" onChange={(e)=> setBook(e.target.value)}/>

        <label>Chapter</label>
        <input type="text" name="chapterId" onChange={(e)=> setChapter(e.target.value)}/>

        <label>Verse Start</label>
        <input type="text" name="verseStart" onChange={(e)=> setVerseFrom(e.target.value)}/>

        <label>Verse End</label>
        <input type="text" name="verseEnd" onChange={(e)=> setVerseTo(e.target.value)}/>

        

        <button type="submit" onClick={handleSubmit} >Find</button>
      </form>

      {verse}
      

    </main>
  )
}
