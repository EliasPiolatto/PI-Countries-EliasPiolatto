import React from 'react';
import { SET_ERROR } from './constantes';




export default function setError(payload) {

    return {
        type: SET_ERROR,
        payload
    }
};
