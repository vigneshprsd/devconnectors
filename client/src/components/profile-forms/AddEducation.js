import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { connect} from 'react-redux'
import { addEducation} from '../../actions/profile'
import { withRouter } from 'react-router-dom'

const AddEducation = ({addEducation,history}) => {

    const[formData,setFormData] = useState({
        school:'',
        degree:'',
        fieldofstudy:'',
        from: '',
        to:'',
        current:false,
        description:''
    });

    const [toDateDisabled,toggleDisabled] =useState(false);

    const {school,degree,fieldofstudy,from,to,current,description} = formData;

    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});

    return (
        <Fragment>
            <h1 className="large text-primary">
         Add An Education
      </h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any School
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e=>{ 
          e.preventDefault();
          addEducation(formData,history);
      }}>
        <div className="form-group">
          <input value={school} onChange={e=>onChange(e)} type="text" placeholder="* school" name="school" required />
        </div>
        <div className="form-group">
          <input value={degree} onChange={e=>onChange(e)} type="text" placeholder="* degree" name="degree" required />
        </div>
        <div className="form-group">
          <input value={fieldofstudy} onChange={e=>onChange(e)} type="text" placeholder="fieldofstudy" name="fieldofstudy" />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input value={from} onChange={e=>onChange(e)} type="date" name="from" />
        </div>
         <div className="form-group">
          <p><input value={current} checked={current} onChange={e=>{setFormData({...formData,current:!current}); toggleDisabled(!toDateDisabled)}} 
          type="checkbox" name="current" value="" /> {' '}Current education</p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" value={to} onChange={e=>onChange(e)} disabled={toDateDisabled?'disabled': ''} />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            value={description}
            placeholder="program Description"
            onChange={e=>onChange(e)}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
        </Fragment>
    )
}

AddEducation.propTypes = {
    addEducation:PropTypes.func.isRequired,
}

export default connect(null,{addEducation})(withRouter(AddEducation))
