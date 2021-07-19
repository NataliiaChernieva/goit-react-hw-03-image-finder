import React, { Component } from 'react';
import { CustomSearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput  } from './SearchForm.styled';

export default class SearchForm extends Component {
    state = {
        value: '',
    }

    handleInputValue = e => {
        this.setState({ value: e.target.value.toLowerCase()})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        if (this.state.value.trim() === '') {
            alert ('Введите название картинки.'); //toast.error
            return;
        }
        this.props.onSubmit(this.state.value);
        this.resetInput();
    }

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

// export function SearchForm({onSearch}) {
//     return (
//         <CustomSearchForm onSubmit={e => {
//             e.preventDefault();
//             onSearch(e.target.elements.searchImage.value)
//             }}>
//                 <SearchFormButton type="submit">
//                     <SearchFormButtonLabel>Search</SearchFormButtonLabel>
//                 </SearchFormButton>
//                 <SearchFormInput
//                 type="text"
//                 name="searchImage"
//                 placeholder = "Search images and photos"
//                 autocomplete="off"
                    
//                 />
//             </CustomSearchForm>
//         )
// }