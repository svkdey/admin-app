import React, { Component } from 'react'
import { getApplcations } from '../actions/applications'
import { connect } from 'react-redux';

import FetchList from './FetchList';
class ApplicationList extends Component {
    constructor() {
        super();
        this.state = {
            applicationList: [],
            loading: true
        };
    }
    componentDidMount() {
        this.props.dispatch(getApplcations());
        this.setState({ loading: false });

    }

    render() {

        const {
            applications
        } = this.props.application;

        if (this.props.loading === true) {
            return "loading ...";
        }
        else return (
            <div>
                {<FetchList data={applications} />}
            </div>

        )
    }
}

const mapStateToProps = (state) => {

    return {
        application: state.application
    }
}

export default connect(mapStateToProps,)(ApplicationList);