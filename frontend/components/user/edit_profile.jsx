import React from 'react';

class EditProfileForm extends React.Component{
    constructor(props){
        super(props);
        const { users, currentUserId } = this.props;
        const user = users[currentUserId];
        this.state = {
            email: user.email,
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            bio: user.bio
        }
        this.submitForm = this.submitForm.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { username, first_name, last_name, bio } = this.state;
        let user = { username, first_name, last_name, bio };
        this.props.updateDetails(user);
        this.props.closeEditForm(e);
    }

    render(){
        const { username, first_name, last_name, bio } = this.state;
        return (
            <div className="modal-background" onClick={this.props.closeEditForm}>
                <div className="modal-child-round-box" onClick={e => e.stopPropagation()}>
                    <div className="edit-details">
                        <h1>Edit Profile</h1>
                        <div className="pin-edit-form-box">
                            <div className="edit-pin-board">
                                <div className="content">
                                    <div>
                                        <p>Username</p>
                                        <input type="text" value={username} onChange={this.update("username")} />
                                    </div>
                                    <div>
                                        <p>First Name</p>
                                        <input type="text" value={first_name} onChange={this.update("first_name")} />
                                    </div>
                                    <div>
                                        <p>Last Name</p>
                                        <input type="text" value={last_name} onChange={this.update("last_name")} />
                                    </div>
                                    <div>
                                        <p>Bio</p>
                                        <textarea rows="3" value={bio} onChange={this.update("bio")} />
                                    </div>
                                </div>
                                <div className="image">
                                    <img className="profile-pic" src="https://peridot-seed.s3-us-west-1.amazonaws.com/profile_blank.jpg"></img>
                                </div>
                            </div>
                            <div className="bottom-options">
                                <div className="save-or-cancel">
                                    <button className="cancel-edit" onClick={this.props.closeEditForm}>Cancel</button>
                                    <button className="save-edit" onClick={this.handleSubmit}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProfileForm;