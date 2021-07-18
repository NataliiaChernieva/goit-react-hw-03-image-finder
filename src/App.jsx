import React, { Component } from 'react';
import { CustomApp } from './App.styled';
import Searchbar from './components/Searchbar/Searchbar';
 
export default class App extends Component {

    render() {
        return (
        <CustomApp>
            <Searchbar/>
        </CustomApp>)
    }
}

