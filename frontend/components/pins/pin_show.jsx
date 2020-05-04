import React from 'react';
import EditPinForm from './pin_edit_form';
import { withRouter } from 'react-router-dom';
import PinIndex from './pin_index';
import { selectSuggestedPins } from '../../reducers/selectors';

class PinShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            edit: false
        }
        this.openEditForm = this.openEditForm.bind(this);
        this.closeEditForm = this.closeEditForm.bind(this);
        this.goBack = this.goBack.bind(this);
        this.getSuggested = this.getSuggested.bind(this);
    }

    goBack(e){
        e.stopPropagation();
        this.props.history.goBack();
    }

    componentDidMount(){
        const { fetchPins, fetchBoards, currentUserId} = this.props;
        fetchPins();
        fetchBoards(currentUserId);
    }

    openEditForm(e){
        e.preventDefault();
        this.setState({edit: true});
    }

    closeEditForm(){
        this.setState({ edit: false });
    }

    getSuggested(){
        const {pins, currentUserId, chosenPinId} = this.props;
        let suggested = selectSuggestedPins(pins, currentUserId);
        delete suggested[chosenPinId+1];
        return suggested;
    }

    renderEditForm(){
        if (this.state.edit){
            const {pins, boards, chosenPinId, errors, currentUserId, updatePin, deletePin, saveToBoard} = this.props;
            return (
                <EditPinForm 
                    pin={pins[chosenPinId]}
                    boards={boards}
                    errors={errors}
                    currentUserId={currentUserId}
                    updatePin={updatePin}
                    deletePin={deletePin}
                    saveToBoard={saveToBoard}
                    closeEditForm={this.closeEditForm}
                />)
        }
    }

    // boardNames() {
    //     const { boards } = this.props;
    //     return (
    //         <select>
    //             <option value="">--Select board--</option>
    //             {boards.map((board, idx) => {
    //                 return (
    //                     <option key={idx} value={board.name}>{board.name}</option>
    //                 )
    //             })}
    //         </select>
    //     )
    // }

    render() {
        window.scrollTo(0,0);
        const { pins, chosenPinId, fetchPins} = this.props;
        if (pins.length === 0) return null;
        return (
            <div className="pin-show-page">
                {this.renderEditForm()}
                <div className="back-button" onClick={this.goBack}>
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className="pin-show-box">
                    <div className="pin-image">
                        
                    </div>
                    <div className="pin-content">
                        <div className="pin-options">
                            <div className="pin-buttons">
                                <div className="edit-pin" onClick={this.openEditForm}>
                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                            </div>
                            <div className="save-to-board">
                                {/* {this.boardNames()} */}
                            </div>
                        </div>
                        <h1>{pins[chosenPinId].title}</h1>
                        <h3>{pins[chosenPinId].description}</h3>
                        <p>{pins[chosenPinId].link}</p>
                    </div>
                </div>
                <div className="related-pins">
                    <PinIndex pins={this.getSuggested()} getInfo={fetchPins}/>
                </div>
            </div>
        )
    }
}

export default withRouter(PinShow);