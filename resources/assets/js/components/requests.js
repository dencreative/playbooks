import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const URL = 'website.com'

export function postItem(item) {

	console.log('posting data')	
  // Default options are marked with *
  return fetch(URL, {
    body: JSON.stringify(item), 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', 
    mode: 'cors', 
    redirect: 'follow', 
    referrer: 'no-referrer', 
  })
  .then(response => response.json()) // parses response to JSON
}