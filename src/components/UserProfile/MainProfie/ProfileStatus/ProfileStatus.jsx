import React from "react";
import style from '../../UserProfile.module.scss';


class ProfileStatus extends React.Component {
   state = {
      editMode: false,
      status: this.props.status
   }

   toggleEditMode = () => {
      if (!this.state.editMode) {
         this.setState({ editMode: true })
      } else this.setState({ editMode: false })
      this.props.updateProfileStatus(this.state.status)
   }

   onStatusChange = (e) => {
      this.setState({
         status: e.target.value
      })
   }

   render() {
      return (
         <>
            {!this.state.editMode
               ? <span onClick={this.toggleEditMode} className={`${style.info__status}`}> {this.props.status || '------'} </span>
               : <div className={`${style.info__status}`}>
                  <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.toggleEditMode} type="text" value={this.state.status} />
               </div>}
         </>
      )
   }
}

export default ProfileStatus;