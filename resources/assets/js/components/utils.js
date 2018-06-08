import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const API = 'https://den-playbooks.app/api/';
const INDEX_QUERY = 'entries'

export const sendRequest = (method, id, item, description) => {

  // Decide endpoint.
  let QUERY = '';
  switch (method) {
    case ('GET'): QUERY = 'entries'; break;
    case ('POST'): QUERY = 'entries'; break;
    case ('PUT'): QUERY = 'entries/'; break;
    case ('DELETE'): QUERY = 'entries/'; break;
  };

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  // Send request.
  fetch(API + QUERY + id, {
    method: method,
    headers: headers,
    body: JSON.stringify({
      title: item,
      description: description
    })
  }).then(response => console.log(response))
}