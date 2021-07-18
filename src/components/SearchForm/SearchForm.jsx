import React, { Component } from 'react';
import { CustomSearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput  } from './SearchForm.styled';

export default class SearchForm extends Component {
    state = {
        value: '',
    }

    handleInputValue = e => {
        this.setState({ value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit :>> ', 'submit');
        // submit
        this.resetInput();    }

    resetInput = () => {
        this.setState({ value: '' });
    }

    render() {
        return (
            <CustomSearchForm onSubmit={this.handleSubmit}>
                <SearchFormButton type="submit">
                    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>
                <SearchFormInput
                    type="text"
                    value = {this.state.value}
                    placeholder = "Search images and photos"
                    autocomplete="off"
                    onChange={this.handleInputValue}
                />
            </CustomSearchForm>
        )
    }
    
};

