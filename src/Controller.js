import axios from 'axios'
import React from 'react'
import config from './config'


export function getQuestions () {
  axios.get(config.backendURL)
}