import React from 'react'
import PropTypes from 'prop-types'

class TransparentTextInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  onChange(event) {
    this.setState({ value: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()
    this.input.blur()
  }

  onBlur() {
    this.props.onSave(this.state.value)
  }

  render() {
    return (
      <form className="TransparentTextInput" onSubmit={this.onSubmit.bind(this)}>
        <input
          ref={element => { this.input = element }}
          onBlur={this.onBlur.bind(this)}
          onChange={this.onChange.bind(this)}
          value={this.state.value} />
      </form>
    )
  }
}

TransparentTextInput.propTypes = {
  value: PropTypes.string,
  onSave: PropTypes.func.isRequired
}

export default TransparentTextInput
